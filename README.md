# LeaderCoders AI Chatbot

LeaderCoders için geliştirilmiş, Node.js tabanlı akıllı sohbet botu. Bot, doğal dil işleme yetenekleri ile kullanıcı sorularını anlayıp yanıtlayabilir, genel sohbet edebilir ve LeaderCoders platformu hakkında bilgi verebilir.

## Özellikler

- 🤖 Doğal dil işleme ile akıllı yanıtlar
- 📚 LeaderCoders eğitimleri hakkında detaylı bilgi
- 💬 Genel sohbet yetenekleri
- 🎯 Türkçe dil desteği
- 🔄 Öğrenme yeteneği
- 📝 Otomatik pattern kaydetme ve yükleme
- ✨ Emoji destekli yanıtlar

## Gereksinimler

- Node.js (v14.0.0 veya üzeri)
- npm (v6.0.0 veya üzeri)

## Kurulum

1. Projeyi klonlayın:
git clone https://github.com/mkvurucu17/LeaderCodersAI.git
cd LeaderCodersAI

2. Gerekli paketleri yükleyin:
npm install express cors path

3. Çalıştırın:
node backend/src/server.js

## Kullanım

1. Server'ı başlatın:
node backend/src/server.js

2. Tarayıcıda açın:
http://localhost:3000

3. API endpoint'i:
POST /api/chat
Content-Type: application/json

{
    "message": "Kullanıcı mesajı"
}

## Özelleştirme

### Yeni Pattern Ekleme

```javascript
this.patterns.push({
    pattern: /(your|pattern|here)/i,
    responses: [
        "Yanıt 1",
        "Yanıt 2",
        "Yanıt 3"
    ]
});
```

### Kısaltma Ekleme

```javascript
Object.assign(this.shortcuts, {
    'kısaltma': 'tam kelime'
});
```

## Önemli Notlar

- Bot varsayılan olarak 3000 portunda çalışır
- `learned_patterns.json` dosyası otomatik oluşturulur
- Tüm yanıtlar Türkçe karakterleri destekler
- Emoji kullanımı desteklenir

## Hata Ayıklama

Eğer bot çalışmazsa:

1. Port kullanımını kontrol edin
2. Node.js versiyonunuzu kontrol edin
3. Konsol hatalarını inceleyin
4. `learned_patterns.json` dosyasının yazma izinlerini kontrol edin

## Örnek İstekler

```javascript
// Sohbet isteği
fetch('http://localhost:3000/api/chat', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        message: "Merhaba"
    })
})
.then(response => response.json())
.then(data => console.log(data));
```

## Güvenlik

- API'yi production ortamında kullanırken rate limiting ekleyin
- CORS ayarlarını production için güncelleyin
- Hassas bilgileri environment variable olarak saklayın

## Kod Açıklaması

### SimpleAI Sınıfı

```javascript
class SimpleAI {
    constructor() {
        this.name = "LeaderCoders AI";
        this.patterns = [...];        // Sohbet kalıpları
        this.shortcuts = {...};       // Kısaltmalar
        this.learnedPatterns = new Map(); // Öğrenilen kalıplar
        this.learningMode = {
            active: false,
            stage: null,
            question: null,
            pendingAnswer: null
        };
    }
}
```

### Önemli Metodlar

1. `getResponse(message)`: Kullanıcı mesajını işler ve yanıt üretir
2. `findBestMatch(message)`: En uygun yanıtı bulur
3. `calculateWordSimilarity(word1, word2)`: Kelime benzerliğini hesaplar
4. `loadLearnedPatterns()`: Kaydedilmiş kalıpları yükler
5. `saveLearnedPatterns()`: Yeni kalıpları kaydeder

### Pattern Yapısı

```javascript
{
    pattern: /(regex_pattern)/i,
    responses: [
        "Yanıt 1",
        "Yanıt 2",
        "Yanıt 3"
    ]
}
```

## Güvenlik Önlemleri

### Rate Limiting

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100 // IP başına istek limiti
});

app.use(limiter);
```

### CORS Ayarları

```javascript
const corsOptions = {
    origin: 'https://your-domain.com',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
```

### Environment Variables

```javascript
require('dotenv').config();
const PORT = process.env.PORT || 3000;
```

## Lisans

Bu proje MKV lisansı altında lisanslanmıştır.

## İletişim

- Website: [leadercoders.com](https://leadercoders.com)

