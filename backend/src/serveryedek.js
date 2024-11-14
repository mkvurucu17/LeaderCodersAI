const express = require('express');
const cors = require('cors');
const path = require('path');

class SimpleAI {
    constructor() {
        this.name = "LeaderCoders AI";
        this.patterns = [
            {
                pattern: /(merhaba|selam|hey|günaydın|iyi akşamlar|iyi günler)/i,
                responses: [
                    "Merhaba! Ben LeaderCoders AI. Sizinle tanıştığıma çok memnun oldum! 😊",
                    "Selam! Nasıl yardımcı olabilirim?",
                    "Merhaba! Hoş geldiniz! 👋",
                    "Merhabalar! Size nasıl yardımcı olabilirim? 😊"
                ]
            },
            {
                pattern: /(nasılsın|naber|ne haber|keyifler nasıl)/i,
                responses: [
                    "Çok iyiyim, teşekkür ederim! Sizinle sohbet etmek beni mutlu ediyor. Siz nasılsınız?",
                    "Harika! Sizinle konuşmak her zaman güzel. Nasıl yardımcı olabilirim?",
                    "İyiyim teşekkürler, siz nasılsınız? 😊"
                ]
            },
            {
                pattern: /(leadercoder|leader coder|lider kodcu|kurs|eğitim|ders)/i,
                responses: [
                    "LeaderCoders, ortaokul ve lise öğrencilerine yönelik, canlı online dersler ile programlama eğitimi veren bir platformdur. Size nasıl yardımcı olabilirim? 😊",
                    "LeaderCoders'da Python, Java ve JavaScript eğitimleri bulunmaktadır. Hangi konuda bilgi almak istersiniz?"
                ]
            },
            {
                pattern: /(fiyat|ücret|maliyet)/i,
                responses: [
                    "LeaderCoders'da eğitimlerimiz uygun fiyatlarla sunulmaktadır. Detaylı fiyat bilgisi için lütfen web sitemizi ziyaret edin veya bizimle iletişime geçin.",
                    "Eğitimlerimizin fiyatları hakkında güncel bilgi almak için web sitemizi ziyaret edebilir veya destek ekibimizle iletişime geçebilirsiniz."
                ]
            },
            {
                pattern: /(merhaba|selam|hey|günaydın|iyi akşamlar|iyi günler)/i,
                responses: [
                    "Merhaba! Size nasıl yardımcı olabilirim? 😊",
                    "Selam! Bugün size nasıl yardımcı olabilirim?",
                    "Merhaba! Hoş geldiniz! 👋",
                    "Merhabalar! Size nasıl yardımcı olabilirim?"
                ]
            },
            {
                pattern: /(nasılsın|naber|ne haber|keyifler nasıl)/i,
                responses: [
                    "İyiyim teşekkürler, siz nasılsınız? 😊",
                    "Çok iyiyim, umarım siz de iyisinizdir! Size nasıl yardımcı olabilirim?",
                    "Harika! Sizinle sohbet etmek güzel. Nasıl yardımcı olabilirim?"
                ]
            },
            {
                pattern: /(teşekkür|teşekkürler|sağol|eyvallah|thanks)/i,
                responses: [
                    "Rica ederim! Başka bir konuda yardıma ihtiyacınız olursa buradayım 😊",
                    "Ne demek, her zaman yardımcı olmaktan mutluluk duyarım!",
                    "Rica ederim! Başka sorunuz var mı?"
                ]
            },
            {
                pattern: /(hoşçakal|görüşürüz|bye|güle güle|iyi günler|iyi akşamlar)/i,
                responses: [
                    "Görüşmek üzere! İyi günler dilerim 👋",
                    "Hoşçakalın! Tekrar görüşmek üzere 😊",
                    "İyi günler! Başka bir sorunuz olursa beklerim."
                ]
            },
            {
                pattern: /(iyi günler|iyi akşamlar|iyi geceler|iyi sabahlar)/i,
                responses: [
                    "Size de iyi günler/akşamlar! 😊",
                    "Teşekkür ederim, size de iyi günler/akşamlar!",
                    "Size de! Nasıl yardımcı olabilirim?"
                ]
            },
            {
                pattern: /(mutluyum|üzgünüm|sıkıldım|yoruldum)/i,
                responses: [
                    "Sizi anlıyorum. Size nasıl yardımcı olabilirim?",
                    "Duygularınızı paylaştığınız için teşekkürler. Size nasıl destek olabilirim?",
                    "Benimle paylaştığınız için teşekkürler. Birlikte konuşmak ister misiniz?"
                ]
            },
            {
                pattern: /(şaka|espri|fıkra|komik)/i,
                responses: [
                    "Programlama ile ilgili bir şaka: Neden programcılar karanlıktan korkar? Çünkü Light Theme kullanıyorlar! 😄",
                    "Bir programcı şakası: İki programcı bir bara girer. İlki 'SELECT * FROM beer;' der, diğeri 'DROP TABLE glass;' 😅",
                    "Yazılımcı şakası: Neden JavaScript geliştiricileri gözlük takar? Çünkü JQuery göremiyorlar! 😂"
                ]
            },
            {
                pattern: /(ne yapıyorsun|neler yapıyorsun|napıyorsun)/i,
                responses: [
                    "Size yardımcı olmak için buradayım! Nasıl yardımcı olabilirim? 😊",
                    "Sizinle sohbet ediyorum ve yardımcı olmaya hazırım!",
                    "Kullanıcılarımıza yardımcı olmak için çalışıyorum. Size nasıl yardımcı olabilirim?"
                ]
            },
            // Hobiler
            {
                pattern: /(hobi|uğraş|ilgi alanı|boş zaman)/i,
                responses: [
                    "Hobileriniz neler? Ben kodlamayı çok seviyorum! 💻",
                    "Boş zamanlarınızda neler yapmayı seversiniz? 🎨",
                    "İlgi alanlarınızı duymak isterim! 🌟"
                ]
            },
            // Teknoloji
            {
                pattern: /(teknoloji|yapay zeka|robot|bilgisayar|telefon)/i,
                responses: [
                    "Teknoloji hakkında konuşmayı çok severim! Sizce gelecekte teknoloji nasıl olacak? 🤖",
                    "Ben de bir yapay zeka ürünüyüm! Teknoloji hakkında ne düşünüyorsunuz? 💡",
                    "Teknolojinin hayatımızı nasıl değiştirdiği hakkında ne düşünüyorsunuz? 📱"
                ]
            },
            // Gelecek planları
            {
                pattern: /(gelecek|plan|hedef|hayal|düşün)/i,
                responses: [
                    "Gelecek için ne gibi planlarınız var? 🎯",
                    "Hayallerinizi gerçekleştirmek için neler yapıyorsunuz? ⭐",
                    "Hedeflerinize ulaşmak için size nasıl yardımcı olabilirim? 🚀"
                ]
            },
            // Motivasyon
            {
                pattern: /(motivasyon|başarı|azim|çalışmak|öğrenmek)/i,
                responses: [
                    "Başarıya giden yolda size destek olmak isterim! 💪",
                    "Çalışmak ve öğrenmek için hiçbir zaman geç değil! 📚",
                    "Azim ve kararlılıkla her şeyi başarabilirsiniz! 🌟"
                ]
            },
            // Yardım talebi
            {
                pattern: /(yardım|destek|sorun|problem|sıkıntı)/i,
                responses: [
                    "Size nasıl yardımcı olabilirim? Sorununuzu anlatır mısınız? 🤝",
                    "Sorunlarınızı çözmek için buradayım! Ne konuda yardıma ihtiyacınız var? 🆘",
                    "Birlikte bir çözüm bulabiliriz! Sorununuz nedir? 💡"
                ]
            },
            // Tavsiye isteme
            {
                pattern: /(tavsiye|öneri|fikir|düşünce)/i,
                responses: [
                    "Size yardımcı olmak için elimden geleni yaparım! Hangi konuda tavsiye istersiniz? 💭",
                    "Fikirlerinizi duymak isterim! Hangi konuda konuşmak istersiniz? 💡",
                    "Birlikte düşünüp en iyi çözümü bulabiliriz! 🤝"
                ]
            },
            // Java ile ilgili pattern'leri ekleyelim
            {
                pattern: /(java|java programlama|java kursu)/i,
                responses: [
                    "Java kursu, büyük yazılım projeleri ve mobil uygulamalar için ideal bir programlama dilidir. LeaderCoders'da Java eğitimi şunları içerir:\n- Temel Java kavramları\n- Nesne yönelimli programlama\n- Veri yapıları ve algoritmalar\n- Mobil uygulama geliştirme temelleri",
                    "LeaderCoders Java kursu ile:\n- Platform bağımsız uygulamalar geliştirebilir\n- Android uygulama geliştirmeye başlayabilir\n- Kurumsal yazılım projelerinde yer alabilirsiniz\nDetaylı bilgi için size yardımcı olabilirim!",
                    "Java, endüstri standardı bir programlama dilidir. LeaderCoders'da Java eğitimi alarak:\n- Güçlü bir programlama temeli\n- Geniş iş imkanları\n- Yüksek maaş potansiyeli kazanabilirsiniz. Hangi konuda detay istersiniz?"
                ]
            },
            // Programlama dilleri hakkında genel pattern
            {
                pattern: /(hangi (dil|kurs|eğitim)|programlama dilleri)/i,
                responses: [
                    "LeaderCoders'da şu programlama dilleri öğretilmektedir:\n- Java (Kurumsal yazılım ve mobil uygulama)\n- Python (Veri bilimi ve otomasyon)\n- JavaScript (Web geliştirme)\nHangi dil hakkında bilgi almak istersiniz?",
                    "Eğitimlerimizde 3 temel programlama dili sunuyoruz:\n1. Java\n2. Python\n3. JavaScript\nHer biri farklı alanlarda öne çıkar. Size hangisi hakkında bilgi verebilirim?"
                ]
            },
            // Java alt konuları için pattern'ler
            {
                pattern: /(geniş iş imkanları|iş fırsatları|kariyer|java işleri)/i,
                responses: [
                    "Java ile şu alanlarda iş fırsatları bulabilirsiniz:\n- Kurumsal yazılım geliştirme\n- Android uygulama geliştirme\n- Web uygulamaları geliştirme\n- Büyük veri projeleri\n- Fintech uygulamaları\nBu alanların hepsinde LeaderCoders Java eğitimi size temel oluşturacaktır.",
                    "Java geliştiriciler için geniş iş imkanları mevcut:\n- Bankacılık sektörü\n- E-ticaret platformları\n- Mobil uygulama şirketleri\n- Yazılım danışmanlık firmaları\n- Startup'lar\nHangi alan sizi daha çok ilgilendiriyor?",
                    "Java iş piyasasında çok aranan bir yetenek:\n- Remote çalışma fırsatları\n- Yurt dışı iş imkanları\n- Freelance projeler\n- Kurumsal şirketler\n- Teknoloji şirketleri\nSize daha detaylı bilgi verebilirim!"
                ]
            },
            // Diğer Java alt konuları
            {
                pattern: /(programlama temeli|java temelleri)/i,
                responses: [
                    "Java'da programlama temelleri şunları içerir:\n- Değişkenler ve veri tipleri\n- Kontrol yapıları\n- Döngüler\n- Fonksiyonlar\n- Nesne yönelimli programlama\nHangi konu hakkında detay istersiniz?",
                ]
            },
            {
                pattern: /(maaş|ücret potansiyeli|kazanç)/i,
                responses: [
                    "Java geliştiriciler için maaş potansiyeli oldukça yüksektir. Deneyim ve uzmanlık alanına göre değişmekle birlikte, sektörde en çok kazanan geliştiriciler arasındadır.",
                ]
            }
        ];

        this.learnedPatterns = new Map();
        this.isLearning = false;
        this.learningMode = {
            active: false,
            stage: null,
            question: null,
            pendingAnswer: null
        };

        // Tüm yanıt mesajlarını tek bir yerde topla
        this.responses = {
            learning: [
                "Bu konu hakkında bilgim yok, ama öğrenmek isterim! Bana anlatır mısınız? 🤔",
                "İlginç bir soru! Bunu bilmiyorum, bana öğretebilir misiniz?",
                "Her gün yeni şeyler öğrenmeyi seviyorum. Bu konuyu bana anlatır mısınız? 📚",
                "Bu konuda bilgim yok henüz. Bana yardımcı olur musunuz?",
                "Sürekli kendimi geliştiriyorum. Bu konuyu bana öğretir misiniz? 🎓"
            ],
            askPermission: [
                "Bu konuyu bilmiyorum. Bana yardımcı olmak ister misiniz? (evet/hayır) 🤔",
                "Bu sorunun cevabını henüz bilmiyorum. Bana öğretmek ister misiniz? (evet/hayır) 📚",
                "Yeni şeyler öğrenmeyi çok severim! Bana yardımcı olur musunuz? (evet/hayır) 🎓"
            ],
            askAnswer: [
                "Tamam, cevabınız nedir? 🤓",
                "Harika! Lütfen bana bu konu hakkında bilgi verin. ✏️",
                "Şimdi sizi dinliyorum, bu konu hakkında ne öğretmek istersiniz? 👂"
            ],
            confirmAnswer: [
                "Bu cevabı kaydetmemi onaylıyor musunuz? (evet/hayır) 🤔",
                "Bu bilgiyi hafızama eklememi ister misiniz? (evet/hayır) 💭",
                "Bu cevabı öğrenmemi onaylıyor musunuz? (evet/hayır) ✅"
            ],
            learningRejected: [
                "Anladım, bu konuyu geçiyorum. Başka nasıl yardımcı olabilirim? 😊",
                "Tamam, bu konuyu atlıyorum. Başka bir konuda yardımcı olabilir miyim?",
                "Peki, bilgiyi kaydetmedim. Sohbete devam edelim mi? 👋"
            ],
            learningAccepted: [
                "Teşekkürler! Bu bilgiyi öğrendim ve artık benzer sorulara yanıt verebileceğim! 🎓",
                "Harika! Bu yeni bilgiyi hafızama kaydettim. Başka sormak istediğiniz bir şey var mı? 📚",
                "Bilgi için teşekkürler! Artık bu konuda daha bilgiliyim! 🤓"
            ],
            invalidResponse: "Lütfen 'evet' veya 'hayır' şeklinde yanıt verir misiniz? 🤔"
        };

        // Yaygın kısaltmalar sözlüğü
        this.shortcuts = {
            'nber': 'naber',
            'nbr': 'naber',
            'slm': 'selam',
            'mrb': 'merhaba',
            'mrv': 'merhaba',
            'mrha': 'merhaba',
            'kib': 'kibar',
            'gzl': 'guzel',
            'tsk': 'tesekkur',
            'tskler': 'tesekkurler',
            'hyr': 'hayir',
            'evt': 'evet',
            'tmm': 'tamam',
            'ii': 'iyi',
            'iy': 'iyi',
            'bye': 'hoscakal',
            'bb': 'bye bye',
            'ok': 'tamam',
            'by': 'bye',
            'nbsn': 'nasilsin',
            'nslsn': 'nasilsin',
            'nsn': 'nasilsin',
            'grrs': 'gorusuruz',
            'slm': 'selam',
            'mrb': 'merhaba',
            'nbr': 'naber',
            'nslsn': 'nasılsın',
            'tşk': 'teşekkürler',
            'grsrz': 'görüşürüz',
            'hg': 'hoş geldin',
            'bb': 'bye bye',
            'ig': 'iyi günler',
            'ia': 'iyi akşamlar',
            'bro': 'kardeş',
            'krdş': 'kardeş',
            'hadi': 'haydi',
            'hdi': 'haydi',
            'bence': 'bana göre',
            'bng': 'bana göre',
            'blm': 'bilmiyorum',
            'bilm': 'bilmiyorum',
            'ozm': 'o zaman',
            'ozaman': 'o zaman',
            'şmd': 'şimdi',
            'şuan': 'şu an',
            'şndi': 'şimdi',
            'hll': 'helal',
            'vlla': 'vallaha',
            'aslnd': 'aslında',
            'msl': 'mesela',
            'örn': 'örneğin',
            'znedersn': 'ne dersin',
            'nbk': 'ne bakıyon'
        };

        // Sohbet devam cevapları ekleyelim
        this.conversationResponses = [
            "Evet, sizi dinliyorum. Nasıl yardımcı olabilirim? 😊",
            "Tabii, hangi konuda konuşmak istersiniz?",
            "Elbette, sizi dinliyorum. Ne sormak istersiniz?",
            "Hazırım, nasıl yardımcı olabilirim?",
            "Sizi dinliyorum, buyurun 😊"
        ];

        // Devam etme kalıpları
        this.continuePatterns = [
            /(evet devam|devam et|devam edelim|sohbet|konuşalım)/i
        ];

        this.loadLearnedPatterns();

        // Daha fazla öğrenilmiş bilgi ekleyelim
        this.learnedPatterns.set("Ders programı nasıl?", {
            answer: "LeaderCoders'da dersler modüler bir yapıda ilerler. Her hafta yeni konular işlenir ve pratik uygulamalar yapılır. Kendi hızınıza göre ilerleyebilir, dersleri istediğiniz zaman tekrar izleyebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Yazılım öğrenmek için ön bilgi gerekli mi?", {
            answer: "Hayır, LeaderCoders'da eğitimler sıfırdan başlar. Programlama konusunda hiç bilginiz olmasa bile, adım adım ilerleyerek öğrenebilirsiniz. Her kurs temel seviyeden başlayıp ileri seviyeye kadar ilerler.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Hangi programlama dilleri var?", {
            answer: "LeaderCoders'da Python, Java, JavaScript, HTML, CSS, PHP, SQL gibi popüler programlama dilleri ve teknolojiler öğretilmektedir. Her dil için başlangıç, orta ve ileri seviye eğitimler mevcuttur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Mentörlük desteği var mı?", {
            answer: "Evet, LeaderCoders'da deneyimli mentörlerden destek alabilirsiniz. Takıldığınız konularda mentörlerimiz size yardımcı olur, sorularınızı yanıtlar ve kod incelemesi yapar.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Ödev ve proje var mı?", {
            answer: "Evet, her dersin sonunda ödevler ve projeler bulunmaktadır. Bu sayede öğrendiklerinizi pekiştirir ve gerçek dünya problemlerine çözümler üretirsiniz. Projeleriniz mentörler tarafından incelenir ve geri bildirim alırsınız.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitim süresi ne kadar?", {
            answer: "Eğitim süreleri kursa göre değişmektedir. Temel kurslar genellikle 4-8 hafta, kapsamlı eğitimler ise 12-16 hafta sürmektedir. Kendi hızınıza göre ilerleyebilir, istediğiniz zaman ara verebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Online dersler canlı mı?", {
            answer: "LeaderCoders'da hem kayıtlı video dersler hem de canlı oturumlar bulunmaktadır. Video dersleri istediğiniz zaman izleyebilir, canlı oturumlarda ise eğitmenlerle birebir etkileşime geçebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("İş bulma konusunda destek var mı?", {
            answer: "Evet, LeaderCoders kariyer desteği sunar. CV hazırlama, mülakat teknikleri, portföy oluşturma konularında rehberlik sağlanır. Ayrıca partner şirketlerle iş fırsatları paylaşılır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Taksit imkanı var mı?", {
            answer: "Evet, eğitimlerimiz için kredi kartına taksit imkanı sunulmaktadır. Ayrıca erken kayıt ve öğrenci indirimleri gibi avantajlardan yararlanabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitimler güncel mi?", {
            answer: "Evet, tüm eğitim içerikleri sürekli güncellenmektedir. Teknoloji dünyasındaki yenilikler ve güncel pratikler eğitimlere eklenir. En son sürümler ve modern yaklaşımlar öğretilir.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Grup çalışması var mı?", {
            answer: "Evet, LeaderCoders'da takım çalışması ve grup projeleri yapılır. Gerçek iş hayatına hazırlık için diğer öğrencilerle birlikte projeler geliştirirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Deneme dersi var mı?", {
            answer: "Evet, platformumuzu ve eğitim sistemimizi tanımanız için ücretsiz deneme dersleri sunuyoruz. Bu sayede eğitim kalitemizi ve platformu deneyimleyebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Mezunlar ne iş yapıyor?", {
            answer: "LeaderCoders mezunları yazılım geliştirici, web developer, mobil uygulama geliştirici, veri analisti gibi pozisyonlarda çalışmaktadır. Birçok mezunumuz büyük teknoloji şirketlerinde kariyer yapıyor.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitim dili nedir?", {
            answer: "Eğitimlerimiz Türkçe'dir. Tüm dersler, dökümanlar ve mentörlük desteği Türkçe olarak sunulur. Ancak programlama terimleri ve teknik kavramlar için İngilizce karşılıkları da öğretilir.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Networking imkanı var mı?", {
            answer: "Evet, LeaderCoders topluluğunda diğer öğrenciler, mezunlar ve profesyonellerle networking yapabilirsiniz. Düzenli meetup'lar ve online etkinliklerle sektörden kişilerle tanışma fırsatı bulursunuz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Haftalık ders saati ne kadar?", {
            answer: "LeaderCoders'da haftalık ders saati kursa göre değişmektedir. Genellikle haftada 4-8 saat video ders, 2-4 saat canlı oturum ve 4-6 saat pratik çalışma şeklinde planlanmıştır. Kendi programınıza göre ayarlayabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Dersleri kaçırırsam ne olur?", {
            answer: "Endişelenmeyin! Tüm dersler kayıt altına alınır ve platformda saklanır. İstediğiniz zaman dersleri tekrar izleyebilir, kaçırdığınız konuları telafi edebilirsiniz. Canlı oturumları da kaçırmanız durumunda kayıtlarına erişebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Sınav var mı?", {
            answer: "LeaderCoders'da klasik sınav sistemi yerine, proje bazlı değerlendirme yapılır. Her modül sonunda mini projeler ve kurs sonunda kapsamlı bir bitirme projesi hazırlarsınız. Bu projeler gerçek iş deneyimini yansıtır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Yazılım için bilgisayarım uygun mu?", {
            answer: "Eğitimler için ortalama bir bilgisayar yeterlidir. Windows, Mac veya Linux işletim sistemli, en az 4GB RAM'e sahip ve internet bağlantısı olan herhangi bir bilgisayar kullanabilirsiniz. Özel bir donanım gerekmez.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitim materyalleri neler?", {
            answer: "LeaderCoders'da video dersler, yazılı dökümanlar, kod örnekleri, alıştırmalar, quizler ve projeler bulunur. Ayrıca her kurs için özel hazırlanmış kaynak kodlar ve referans materyaller sunulur. Tüm içeriklere ömür boyu erişim hakkınız olur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Kurs bitince destek devam ediyor mu?", {
            answer: "Evet! Kurs bittikten sonra da LeaderCoders topluluğunun bir parçası olmaya devam edersiniz. Mezunlar için özel etkinlikler, kariyer fırsatları ve networking imkanları devam eder. Ayrıca içeriklere ömür boyu erişiminiz olur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitimler bireysel mi grup mu?", {
            answer: "LeaderCoders'da hem bireysel hem de grup çalışmaları yapılır. Video dersler ve ödevler bireysel ilerler, ancak canlı oturumlar, grup projeleri ve pair programming etkinlikleri ile takım çalışması deneyimi de kazanırsınız.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Yazılımcı olabilir miyim?", {
            answer: "Evet! Düzenli çalışma ve pratik yapma ile herkes yazılımcı olabilir. LeaderCoders'ın adım adım ilerleyen eğitim sistemi, mentör desteği ve proje bazlı öğrenme yaklaşımı ile yazılım kariyerinize güvenle başlayabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Hangi yazılım diliyle başlamalıyım?", {
            answer: "Yazılıma yeni başlayanlar için genellikle Python'u öneriyoruz. Öğrenmesi kolay ve yaygın kullanılan bir dildir. Ancak hedeflerinize göre Java veya Web Geliştirme (HTML, CSS, JavaScript) ile de başlayabilirsiniz. Mentörlerimiz size en uygun yolu belirlemenizde yardımcı olur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitim sonunda ne olacak?", {
            answer: "Eğitim sonunda temel ve ileri düzey programlama becerilerine sahip olacak, kendi projelerinizi geliştirebilecek ve iş başvurularına hazır hale geleceksiniz. Sertifikanız, portfolyonuz ve kariyer desteğimizle iş arama sürecinizde yanınızda olacağız.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Yurt dışı fırsatları var mı?", {
            answer: "Evet, LeaderCoders mezunları yurt dışı iş fırsatlarından da yararlanabilir. İngilizce teknik terimleri öğrenme, uluslararası projelerde yer alma ve global şirketlerle networking imkanları sunuyoruz. Remote çalışma fırsatları için de hazırlık yapıyoruz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Kurs iptali veya değişikliği mümkün mü?", {
            answer: "Evet, belirli koşullar altında kurs iptali veya değişikliği yapılabilir. İlk 7 gün içinde tam iade garantisi sunuyoruz. Ayrıca kurs değişikliği yapmak isterseniz, mevcut ilerlemenizi koruyarak başka bir kursa geçiş yapabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Bitirme projesi nasıl oluyor?", {
            answer: "Bitirme projesi, öğrendiğiniz tüm konuları kapsayan kapsamlı bir uygulama geliştirme sürecidir. Kendi seçtiğiniz bir konuda proje geliştirir, mentör desteği alır ve sonunda projenizi sunarsınız. Bu proje, portfolyonuzun önemli bir parçası olur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Başarısız olursam ne olur?", {
            answer: "LeaderCoders'da başarısızlık değil, öğrenme süreci vardır. Zorlandığınız konularda ekstra mentör desteği alabilir, dersleri tekrar izleyebilir ve ek örneklerle pratik yapabilirsiniz. Amacımız sizi başarıya ulaştırmaktır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("LeaderCoders nedir?", {
            answer: "LeaderCoders, ortaokul ve lise öğrencilerine yönelik, canlı online dersler ile tecrübeli öğretmenler eşliğinde gerçek proje ve uygulamalarla programlama eğitimi veren bir platformdur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Hangi kurslar var?", {
            answer: "LeaderCoders'da Java Programlama Dili, Python Programlama Dili ve Javascript Programlama Dili kursları bulunmaktadır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Kurs içeriği nedir?", {
            answer: "Her modül 4 hafta sürmektedir ve şunları içerir: 20 saat canlı online ders, 20 saat alıştırma dersi, ders video kayıtları ve gerçek uygulamalar.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Java kursu nedir?", {
            answer: "Java kursu, büyük yazılım projeleri ve mobil uygulamalar için ideal bir programlama dili eğitimidir. Platform bağımsızlığı ve performansıyla öne çıkan Java'nın profesyonel kullanımı için mükemmel bir başlangıç sunar.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Python kursu nedir?", {
            answer: "Python kursu, öğrenmesi kolay ve çok yönlü bir programlama dili eğitimidir. Veri bilimi, yapay zeka ve web geliştirme gibi birçok alanda kullanılan Python'u öğretir. Geniş kütüphane desteği ile pratik projeler geliştirme imkanı sunar.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Javascript kursu nedir?", {
            answer: "JavaScript kursu, web geliştirme dünyasının vazgeçilmez dilini öğretir. Dinamik ve etkileşimli web siteleri oluşturmayı, tarayıcı üzerinde çalışan zengin kullanıcı deneyimleri sunan uygulamalar geliştirmeyi ve modern web teknolojilerini kapsar.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitim sistemi nasıl?", {
            answer: "LeaderCoders'da deneyimli eğitmenler eşliğinde, uygulama temelli öğrenme yaklaşımı kullanılır. Zoom'da canlı dersler ve Discord'da anlık destek sağlanır. Esnek programlar ve ilerleme izleme sistemi ile öğrencilerin bireysel ihtiyaçlarına göre destek verilir.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Dersler nasıl işleniyor?", {
            answer: "Dersler canlı online olarak Zoom üzerinden yapılmaktadır. Her modülde 20 saat canlı online ders ve 20 saat alıştırma dersi bulunur. Ayrıca derslerin video kayıtları da öğrencilere sunulur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Kimler katılabilir?", {
            answer: "LeaderCoders eğitimleri ortaokul ve lise öğrencilerine yöneliktir. Programlama öğrenmek isteyen tüm ortaokul ve lise öğrencileri kurslara katılabilir.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Neden LeaderCoders?", {
            answer: "LeaderCoders'ı özel kılan özellikler: Deneyimli eğitmenler, uygulama temelli öğrenme, canlı dersler ve Discord desteği, esnek programlar ve öğrenci ilerleme takibi. Teoriden uzak, gerçek projelerle dolu bir öğrenme deneyimi sunulur.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Kurs ücretleri ne kadar?", {
            answer: "Kurs ücretleri hakkında güncel bilgi almak için lütfen bizimle iletişime geçin. Her dönem için farklı kampanya ve indirimler sunulmaktadır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Discord desteği nasıl?", {
            answer: "Discord sunucumuzda öğrencilerimize 7/24 destek sağlıyoruz. Sorularınızı sorabilir, diğer öğrencilerle etkileşimde bulunabilir ve eğitmenlerle iletişim kurabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Zoom dersleri nasıl?", {
            answer: "Zoom üzerinden yapılan canlı derslerimiz interaktif şekilde işlenir. Eğitmenle birebir iletişim kurabilir, sorular sorabilir ve ekran paylaşımı ile uygulamalı öğrenme deneyimi yaşayabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Modül süresi ne kadar?", {
            answer: "Her modül 4 hafta sürmektedir. Bu süre içerisinde 20 saat canlı online ders ve 20 saati ise alıştırma dersi yapılmaktadır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Ders kayıtları var mı?", {
            answer: "Evet, tüm canlı derslerin kayıtları alınmaktadır. Bu kayıtlara istedi��iniz zaman erişebilir ve tekrar izleyebilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Alıştırma dersleri nedir?", {
            answer: "Alıştırma dersleri, öğrenilen konuların pekiştirilmesi için yapılan pratik çalışmalardır. Her modülde 20 saat alıştırma dersi bulunmaktadır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Gerçek uygulamalar nelerdir?", {
            answer: "Eğitim sürecinde gerçek dünya problemlerine yönelik projeler geliştirirsiniz. Bu sayede teorik bilgilerinizi pratiğe dökme fırsatı bulursunuz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Nasıl başvurabilirim?", {
            answer: "Başvuru için web sitemizdeki iletişim formunu doldurabilir veya bize doğrudan ulaşabilirsiniz. Size en uygun program ve başlangıç tarihi için yardımcı olacağız.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Programlama bilgisi gerekli mi?", {
            answer: "Hayır, programlama bilgisi gerekmez. Kurslarımız temel seviyeden başlar ve adım adım ilerler. Ortaokul ve lise öğrencileri için özel olarak tasarlanmıştır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Hangi yaş grupları katılabilir?", {
            answer: "LeaderCoders eğitimleri ortaokul ve lise öğrencileri için tasarlanmıştır. Bu yaş gruplarındaki tüm öğrenciler katılabilir.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Eğitmenler kimler?", {
            answer: "Eğitmenlerimiz alanında deneyimli, öğrencilerle çalışma konusunda tecrübeli profesyonellerdir. Tüm eğitmenlerimiz yazılım sektöründe aktif olarak çalışmaktadır.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Derslere nasıl katılacağım?", {
            answer: "Dersler Zoom platformu üzerinden canlı olarak yapılmaktadır. Size verilecek bağlantı ile derslere kolayca katılabilirsiniz. Ayrıca Discord üzerinden sürekli destek alabilirsiniz.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Neler öğreneceğim?", {
            answer: "Seçtiğiniz programlama diline göre (Java, Python veya JavaScript) temel kavramlardan ileri seviye uygulamalara kadar geniş bir yelpazede eğitim alacaksınız. Gerçek projeler geliştirerek pratik deneyim kazanacaksınız.",
            timestamp: Date.now()
        });

        this.learnedPatterns.set("Ders programı nasıl?", {
            answer: "Her modül 4 hafta sürer ve toplam 40 saat ders içerir. Bunun 20 saati canlı online ders, 20 saati ise alıştırma dersidir. Dersler öğrencilerin okul programlarına uygun şekilde planlanır.",
            timestamp: Date.now()
        });
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }

    isAffirmative(message) {
        return /(evet|yes|tabiki|tabi|olur)/i.test(message);
    }

    isNegative(message) {
        return /(hayır|hayir|hyr|no|yok|istemem)/i.test(message);
    }

    normalizeMessage(message) {
        let normalized = message.toLowerCase();
        for (let [short, full] of Object.entries(this.shortcuts)) {
            normalized = normalized.replace(new RegExp(`\\b${short}\\b`, 'g'), full);
        }
        return normalized;
    }

    handleLearningMode(message) {
        if (!this.learningMode.active) {
            return null;
        }

        switch (this.learningMode.stage) {
            case 'askPermission':
                if (message.toLowerCase() === 'evet') {
                    this.learningMode.stage = 'waitingForAnswer';
                    return "Harika! Lütfen bu konu hakkında bana bilgi verin:";
                } else {
                    this.resetLearningMode();
                    return "Tamam, bu konuyu atlıyorum. Başka bir konuda yardımcı olabilir miyim?";
                }
            
            case 'waitingForAnswer':
                this.learnNewInformation(this.learningMode.question, message);
                this.resetLearningMode();
                return "Teşekkürler! Bu bilgiyi öğrendim. Başka bir konuda yardımcı olabilir miyim?";
            
            default:
                this.resetLearningMode();
                return "Bir hata oluştu. Baştan başlayalım. Size nasıl yardımcı olabilirim?";
        }
    }

    getResponse(message) {
        if (!message) {
            return "Üzgünüm, mesajınızı anlayamadım. Lütfen tekrar dener misiniz?";
        }

        // Önce öğrenilmiş pattern'leri kontrol et
        const learnedResponse = this.findSimilarQuestion(message);
        if (learnedResponse) {
            return learnedResponse.answer;
        }

        // Normal pattern'leri kontrol et
        for (const pattern of this.patterns) {
            if (pattern.pattern.test(message)) {
                return this.getRandomResponse(pattern.responses);
            }
        }

        // Öğrenme modunu kontrol et
        if (this.learningMode.active) {
            const response = this.handleLearningMode(message);
            return response || "Üzgünüm, bir hata oluştu.";
        }

        // Hiçbir eşleşme bulunamazsa öğrenme moduna geç
        this.learningMode = {
            active: true,
            stage: 'askPermission',
            question: message,
            pendingAnswer: null
        };
        
        return "Bu konuyu bilmiyorum. Bana yardımcı olmak ister misiniz? (evet/hayır) 🤔";
    }

    findSimilarQuestion(message) {
        const normalizedMessage = this.normalizeMessage(message);
        let bestMatch = null;
        let bestScore = 0;

        // Doğrudan eşleşme kontrolü
        if (this.learnedPatterns.has(message)) {
            return this.learnedPatterns.get(message);
        }

        // Benzerlik kontrolü
        for (const [question, data] of this.learnedPatterns.entries()) {
            const similarity = this.calculateWordSimilarity(
                normalizedMessage,
                this.normalizeMessage(question)
            );

            if (similarity > bestScore && similarity > 0.6) { // Eşik değerini 0.6'ya yükselttik
                bestScore = similarity;
                bestMatch = data;
            }
        }

        return bestMatch;
    }

    calculateWordSimilarity(word1, word2) {
        if (word1.length <= 3 || word2.length <= 3) {
            return word1 === word2 ? 1.0 : 0.0;
        }

        const maxLength = Math.max(word1.length, word2.length);
        if (maxLength === 0) return 1.0;
        
        const distance = this.calculateLevenshteinDistance(word1, word2);
        return (maxLength - distance) / maxLength;
    }

    calculateLevenshteinDistance(str1, str2) {
        const matrix = Array(str2.length + 1).fill(null)
            .map(() => Array(str1.length + 1).fill(null));

        for (let i = 0; i <= str1.length; i++) {
            matrix[0][i] = i;
        }
        for (let j = 0; j <= str2.length; j++) {
            matrix[j][0] = j;
        }

        for (let j = 1; j <= str2.length; j++) {
            for (let i = 1; i <= str1.length; i++) {
                const substitutionCost = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[j][i] = Math.min(
                    matrix[j][i - 1] + 1,
                    matrix[j - 1][i] + 1,
                    matrix[j - 1][i - 1] + substitutionCost
                );
            }
        }

        return matrix[str2.length][str1.length];
    }

    resetLearningMode() {
        this.learningMode = {
            active: false,
            stage: null,
            question: null,
            pendingAnswer: null
        };
    }

    learnNewInformation(question, answer) {
        this.learnedPatterns.set(question, {
            answer: answer,
            timestamp: Date.now()
        });

        this.saveLearnedPatterns();
        console.log("Yeni bilgi öğrenildi:", { question, answer });
    }

    saveLearnedPatterns() {
        const fs = require('fs');
        const data = Array.from(this.learnedPatterns.entries()).map(([question, data]) => ({
            question,
            answer: data.answer,
            timestamp: data.timestamp
        }));

        fs.writeFileSync('learned_patterns.json', JSON.stringify(data, null, 2));
        console.log(`${this.learnedPatterns.size} pattern kaydedildi.`);
    }

    loadLearnedPatterns() {
        try {
            const fs = require('fs');
            const data = JSON.parse(fs.readFileSync('learned_patterns.json', 'utf8'));
            
            this.learnedPatterns.clear();
            data.forEach(item => {
                this.learnedPatterns.set(item.question, {
                    answer: item.answer,
                    timestamp: item.timestamp
                });
            });

            console.log(`${this.learnedPatterns.size} öğrenilmiş pattern yüklendi.`);
        } catch (error) {
            console.log("Öğrenilmiş pattern dosyası bulunamadı, yeni bir tane oluşturulacak.");
            this.learnedPatterns = new Map();
        }
    }
}

// Express app kurulumu
const app = express();
const ai = new SimpleAI();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../../public')));

app.post('/api/chat', (req, res) => {
    try {
        const userMessage = req.body.message;
        const response = ai.getResponse(userMessage);
        
        res.json({ 
            message: response,
            isLearning: ai.learningMode.active,
            stage: ai.learningMode.stage
        });
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ 
            message: 'Bir hata oluştu, lütfen tekrar deneyin.',
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda çalışıyor`);
    console.log('LeaderCoders AI hazır!');
});