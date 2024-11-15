const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

class SimpleAI {
    constructor() {
        // Temel özellikler
        this.name = "LeaderCoders AI";
        this.version = "1.0.0";
        
        // Pattern'leri yükle
        this.initializePatterns();
        
        // Diğer özellikleri yükle
        this.initializeOtherFeatures();
    }

    // Pattern'leri yükleme metodu
    initializePatterns() {
        try {
            // Pattern'leri yükle
            const patternsPath = require.resolve('./patterns.js');
            delete require.cache[patternsPath]; // Cache'i temizle
            const loadedPatterns = require('./patterns.js');

            // Pattern kontrolü
            if (!loadedPatterns || !Array.isArray(loadedPatterns)) {
                console.error('Patterns yüklenemedi veya array değil');
                this.patterns = [];
                return;
            }

            // Pattern'leri doğrula
            this.patterns = loadedPatterns.filter(pattern => {
                return pattern 
                    && pattern.pattern instanceof RegExp 
                    && Array.isArray(pattern.responses) 
                    && pattern.responses.length > 0;
            });

            console.log(`${this.patterns.length} pattern başarıyla yüklendi`);

        } catch (error) {
            console.error('Pattern yükleme hatası:', error);
            this.patterns = [];
        }
    }

    // Diğer özellikleri yükleme metodu
    initializeOtherFeatures() {
        // Shortcuts'ları yükle
        try {
            this.shortcuts = require('./shortcuts.js') || {};
        } catch (error) {
            console.error('Shortcuts yükleme hatası:', error);
            this.shortcuts = {};
        }

        // Öğrenme modu ayarları
        this.learningMode = {
            active: false,
            stage: null,
            question: null,
            pendingAnswer: null
        };

        // Öğrenilmiş pattern'leri yükle
        this.learnedPatterns = new Map();
        try {
            const learnedData = require('./learned_patterns.json');
            if (Array.isArray(learnedData)) {
                this.learnedPatterns = new Map(learnedData.map(item => [
                    item.question,
                    { answer: item.answer, timestamp: item.timestamp }
                ]));
            }
        } catch (error) {
            console.log('Öğrenilmiş pattern bulunamadı');
        }

        this.SIMILARITY_THRESHOLD = 0.6;
    }

    getResponse(message) {
        try {
            if (!message?.trim()) {
                return "Bir mesaj yazın lütfen.";
            }

            console.log('Öğrenme modu durumu:', this.learningMode); // Debug log

            // Öğrenme modundaysa direkt handleLearningMode'a yönlendir
            if (this.learningMode.active) {
                console.log('Öğrenme modu aktif, mesaj:', message); // Debug log
                return this.handleLearningMode(message);
            }

            // Kısaltmaları kontrol et
            message = this.handleShortcuts(message);

            // Normal pattern'leri kontrol et
            const patternResponse = this.findPatternMatch(message);
            if (patternResponse) {
                return patternResponse;
            }

            // Öğrenilmiş pattern'leri kontrol et
            const learnedResponse = this.findSimilarQuestion(message);
            if (learnedResponse) {
                return learnedResponse.answer;
            }

            // Hiçbir cevap bulunamadıysa öğrenme modunu başlat
            console.log('Cevap bulunamadı, öğrenme modu başlatılıyor'); // Debug log
            return this.startLearningMode(message);

        } catch (error) {
            console.error('Yanıt üretme hatası:', error);
            return "Üzgünüm, bir hata oluştu.";
        }
    }

    // Pattern eşleşmesi kontrolü
    findPatternMatch(message) {
        if (!message || !this.patterns || !Array.isArray(this.patterns)) {
            return null;
        }

        const lowercaseMessage = message.toLowerCase();

        for (const pattern of this.patterns) {
            try {
                if (pattern && pattern.pattern && pattern.pattern.test(lowercaseMessage)) {
                    return this.getRandomResponse(pattern.responses);
                }
            } catch (error) {
                console.error('Pattern eşleşme hatası:', error);
                continue;
            }
        }

        return null;
    }

    // Rastgele yanıt seçimi
    getRandomResponse(responses) {
        if (!Array.isArray(responses) || responses.length === 0) {
            return null;
        }
        return responses[Math.floor(Math.random() * responses.length)];
    }

    // Kısaltmaları işle
    handleShortcuts(message) {
        return message.split(' ').map(word => 
            this.shortcuts[word.toLowerCase()] || word
        ).join(' ');
    }

    // Öğrenme modunu başlat
    startLearningMode(question) {
        console.log('Öğrenme modu başlatılıyor, soru:', question); // Debug log
        this.learningMode = {
            active: true,
            stage: 'askPermission',
            question: question,
            pendingAnswer: null
        };
        return "Bu soruyu bilmiyorum. Size yardımcı olmak için öğrenmek istiyorum. Bana öğretmek ister misiniz? (evet/hayır)";
    }

    // Öğrenme modunu işle
    handleLearningMode(message) {
        console.log('handleLearningMode çağrıldı:', {
            stage: this.learningMode.stage,
            message: message
        }); // Debug log

        const cleanMessage = message.trim().toLowerCase();

        if (this.learningMode.stage === 'askPermission') {
            if (cleanMessage === 'evet' || cleanMessage === 'e' || cleanMessage === 'yes' || cleanMessage === 'y') {
                this.learningMode.stage = 'waitingForAnswer';
                return "Harika! Lütfen bana doğru cevabı öğretir misiniz?";
            }
            
            if (cleanMessage === 'hayır' || cleanMessage === 'h' || cleanMessage === 'no' || cleanMessage === 'n') {
                this.resetLearningMode();
                return "Anladım, başka nasıl yardımcı olabilirim?";
            }

            return "Lütfen sadece 'evet' veya 'hayır' şeklinde cevap verin.";
        }

        if (this.learningMode.stage === 'waitingForAnswer') {
            if (!cleanMessage) {
                return "Lütfen geçerli bir cevap yazın.";
            }

            console.log('Yeni cevap öğreniliyor:', {
                soru: this.learningMode.question,
                cevap: message
            }); // Debug log

            this.learnNewPattern(this.learningMode.question, message);
            this.resetLearningMode();
            return "Teşekkür ederim! Bu cevabı öğrendim. Başka nasıl yardımcı olabilirim?";
        }

        this.resetLearningMode();
        return "Bir hata oluştu, lütfen tekrar deneyin.";
    }

    // Yeni pattern öğren
    learnNewPattern(question, answer) {
        console.log('Yeni pattern kaydediliyor:', { question, answer }); // Debug log
        
        this.learnedPatterns.set(question, {
            answer: answer,
            timestamp: Date.now()
        });
        
        try {
            this.saveLearnedPatterns();
            console.log('Pattern başarıyla kaydedildi');
        } catch (error) {
            console.error('Pattern kaydetme hatası:', error);
        }
    }

    // Öğrenilmiş pattern'leri kaydet
    saveLearnedPatterns() {
        const data = Array.from(this.learnedPatterns.entries()).map(([question, data]) => ({
            question,
            answer: data.answer,
            timestamp: data.timestamp
        }));

        require('fs').writeFileSync(
            './learned_patterns.json',
            JSON.stringify(data, null, 2)
        );
    }

    // Benzer soru bul
    findSimilarQuestion(message) {
        for (const [question, data] of this.learnedPatterns.entries()) {
            if (this.calculateSimilarity(message, question) > this.SIMILARITY_THRESHOLD) {
                return data;
            }
        }
        return null;
    }

    // Benzerlik hesapla
    calculateSimilarity(str1, str2) {
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        if (str1 === str2) return 1;
        return 1 - (this.levenshteinDistance(str1, str2) / Math.max(str1.length, str2.length));
    }

    // Levenshtein mesafesi
    levenshteinDistance(str1, str2) {
        const matrix = Array(str2.length + 1).fill(null)
            .map(() => Array(str1.length + 1).fill(null));

        for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
        for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;

        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1,
                    matrix[j - 1][i - 1] + indicator
                );
            }
        }

        return matrix[str2.length][str1.length];
    }

    // Öğrenme modunu sıfırla
    resetLearningMode() {
        this.learningMode = {
            active: false,
            stage: null,
            question: null,
            pendingAnswer: null
        };
    }
}

// Express uygulaması
const app = express();
const ai = new SimpleAI();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

// Chat endpoint'i
app.post('/api/chat', (req, res) => {
    try {
        const { message } = req.body;
        
        if (!message) {
            return res.status(400).json({ 
                message: "Mesaj boş olamaz" 
            });
        }

        const response = ai.getResponse(message);
        
        res.json({ 
            message: response,
            isLearning: ai.learningMode.active,
            stage: ai.learningMode.stage
        });

    } catch (error) {
        console.error('API hatası:', error);
        res.status(500).json({ 
            message: "Bir hata oluştu, lütfen tekrar deneyin."
        });
    }
});

// Server'ı başlat
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
    console.log('LeaderCoders AI hazır!');
});
