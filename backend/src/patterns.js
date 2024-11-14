module.exports = [
    // Selamlaşma
    {
        pattern: /(merhaba|selam|hey|günaydın|iyi akşamlar|iyi günler)/i,
        responses: [
            "Merhaba! Ben LeaderCoders AI. Size nasıl yardımcı olabilirim? 😊",
            "Selam! Bugün size nasıl yardımcı olabilirim?",
            "Merhaba! Hoş geldiniz! 👋",
            "Merhabalar! Size nasıl yardımcı olabilirim?"
        ]
    },

    // Hal hatır sorma
    {
        pattern: /(nasılsın|naber|ne haber|keyifler nasıl)/i,
        responses: [
            "İyiyim teşekkürler, siz nasılsınız? 😊",
            "Çok iyiyim, umarım siz de iyisinizdir! Size nasıl yardımcı olabilirim?",
            "Harika! Sizinle sohbet etmek güzel. Nasıl yardımcı olabilirim?"
        ]
    },

    // LeaderCoders hakkında
    {
        pattern: /(leadercoder|leader coder|lider kodcu)/i,
        responses: [
            "LeaderCoders, gençlere yönelik online programlama eğitimi veren bir platformdur. Size nasıl yardımcı olabilirim?",
            "LeaderCoders'da Python, Java ve JavaScript eğitimleri bulunmaktadır. Hangi konuda bilgi almak istersiniz?"
        ]
    },

    // Programlama dilleri
    {
        pattern: /(python|java|javascript|programlama dili)/i,
        responses: [
            "LeaderCoders'da Python, Java ve JavaScript eğitimleri verilmektedir. Hangi dil hakkında bilgi almak istersiniz?",
            "Programlama dilleri konusunda size yardımcı olabilirim. Python, Java ve JavaScript hakkında detaylı bilgi verebilirim."
        ]
    },

    // Eğitimler hakkında
    {
        pattern: /(kurs|eğitim|ders|öğrenme|öğretim)/i,
        responses: [
            "LeaderCoders'da eğitimler online olarak verilmektedir. Her seviyeye uygun kurslarımız mevcuttur.",
            "Eğitimlerimiz canlı ve kayıtlı derslerden oluşur. İstediğiniz zaman tekrar izleyebilirsiniz.",
            "Kurslarımızda teorik bilginin yanında bol bol pratik yapma imkanı bulacaksınız."
        ]
    },

    // Fiyatlar hakkında
    {
        pattern: /(fiyat|ücret|maliyet|ne kadar)/i,
        responses: [
            "Fiyatlar hakkında detaylı bilgi için web sitemizi ziyaret edebilir veya bize ulaşabilirsiniz.",
            "Kurs fiyatlarımız seçtiğiniz programa göre değişmektedir. Size özel fırsatlar sunabiliriz."
        ]
    },

    // İletişim
    {
        pattern: /(iletişim|ulaşmak|telefon|mail|e-posta)/i,
        responses: [
            "Bizimle iletişime geçmek için info@leadercoders.com adresine mail atabilirsiniz.",
            "Size yardımcı olmak için buradayız. Web sitemiz üzerinden bize ulaşabilirsiniz."
        ]
    },

    // Teşekkür
    {
        pattern: /(teşekkür|teşekkürler|sağol|eyvallah)/i,
        responses: [
            "Rica ederim! Başka bir konuda yardımcı olabilir miyim? 😊",
            "Ne demek, her zaman yardımcı olmaktan mutluluk duyarım! 👍",
            "Rica ederim! Başka sorunuz varsa yanıtlamaktan memnuniyet duyarım."
        ]
    },

    // Hoşçakal
    {
        pattern: /(hoşçakal|görüşürüz|bye|güle güle)/i,
        responses: [
            "Görüşmek üzere! İyi günler dilerim! 👋",
            "Hoşçakalın! Tekrar görüşmek üzere! 😊",
            "İyi günler! Başka bir sorunuz olursa beklerim."
        ]
    },

    // Java spesifik
    {
        pattern: /(java kursu|java eğitimi|java programlama)/i,
        responses: [
            "Java kursu ile:\n- Temel programlama kavramları\n- Nesne yönelimli programlama\n- Veri yapıları ve algoritmalar\n- Web uygulamaları geliştirme\nkonularını öğrenebilirsiniz.",
            "Java eğitimimizde:\n- Pratik uygulamalar\n- Gerçek projeler\n- Sertifika imkanı sunuyoruz."
        ]
    },

    // Python spesifik
    {
        pattern: /(python kursu|python eğitimi|python programlama)/i,
        responses: [
            "Python kursu ile:\n- Temel Python syntax\n- Veri analizi\n- Yapay zeka temelleri\n- Otomasyon\nkonularını öğrenebilirsiniz.",
            "Python eğitimimizde:\n- Bol örnekli anlatım\n- Proje geliştirme\n- Sertifika imkanı sunuyoruz."
        ]
    },

    // LeaderCoders Eğitim Detayları
    {
        pattern: /(ders programı|program nasıl)/i,
        responses: [
            "LeaderCoders'da dersler modüler bir yapıda ilerler. Her hafta yeni konular işlenir ve pratik uygulamalar yapılır. Kendi hızınıza göre ilerleyebilir, dersleri istediğiniz zaman tekrar izleyebilirsiniz."
        ]
    },
    {
        pattern: /(ön bilgi|bilgi gerekli mi)/i,
        responses: [
            "Hayır, LeaderCoders'da eğitimler sıfırdan başlar. Programlama konusunda hiç bilginiz olmasa bile, adım adım ilerleyerek öğrenebilirsiniz. Her kurs temel seviyeden başlayıp ileri seviyeye kadar ilerler."
        ]
    },
    {
        pattern: /(hangi diller|hangi programlama)/i,
        responses: [
            "LeaderCoders'da Python, Java, JavaScript, HTML, CSS, PHP, SQL gibi popüler programlama dilleri ve teknolojiler öğretilmektedir. Her dil için başlangıç, orta ve ileri seviye eğitimler mevcuttur."
        ]
    },
    {
        pattern: /(ödev|proje)/i,
        responses: [
            "Evet, her dersin sonunda ödevler ve projeler bulunmaktadır. Bu sayede öğrendiklerinizi pekiştirir ve gerçek dünya problemlerine çözümler üretirsiniz. Projeleriniz mentörler tarafından incelenir ve geri bildirim alırsınız."
        ]
    },
    {
        pattern: /(eğitim süresi|süre|ne kadar sürer)/i,
        responses: [
            "Eğitim süreleri kursa göre değişmektedir. Temel kurslar genellikle 4-8 hafta, kapsamlı eğitimler ise 12-16 hafta sürmektedir. Kendi hızınıza göre ilerleyebilir, istediğiniz zaman ara verebilirsiniz."
        ]
    },
    {
        pattern: /(online ders|canlı ders)/i,
        responses: [
            "LeaderCoders'da hem kayıtlı video dersler hem de canlı oturumlar bulunmaktadır. Video dersleri istediğiniz zaman izleyebilir, canlı oturumlarda ise eğitmenlerle birebir etkileşime geçebilirsiniz."
        ]
    },
    {
        pattern: /(alıştırma dersi|alıştırma)/i,
        responses: [
            "Alıştırma dersleri, öğrenilen konuların pekiştirilmesi için yapılan pratik çalışmalardır. Her modülde 20 saat alıştırma dersi bulunmaktadır."
        ]
    },

    // Java Detaylı Bilgiler
    {
        pattern: /(java iş imkanları|java kariyer)/i,
        responses: [
            "Java ile şu alanlarda iş fırsatları bulabilirsiniz:\n- Kurumsal yazılım geliştirme\n- Android uygulama geliştirme\n- Web uygulamaları geliştirme\n- Büyük veri projeleri\n- Fintech uygulamaları\nBu alanların hepsinde LeaderCoders Java eğitimi size temel oluşturacaktır.",
            "Java geliştiriciler için geniş iş imkanları mevcut:\n- Bankacılık sektörü\n- E-ticaret platformları\n- Mobil uygulama şirketleri\n- Yazılım danışmanlık firmaları\n- Startup'lar"
        ]
    },
    {
        pattern: /(java maaş|java kazanç)/i,
        responses: [
            "Java geliştiriciler için maaş potansiyeli oldukça yüksektir. Deneyim ve uzmanlık alanına göre değişmekle birlikte, sektörde en çok kazanan geliştiriciler arasındadır."
        ]
    },

    // Eğitim Detayları
    {
        pattern: /(sertifika|bitirme belgesi)/i,
        responses: [
            "Evet, kurslarımızı başarıyla tamamladığınızda sertifika alabilirsiniz. Sertifikalarımız sektörde geçerli olup, CV'nizde kullanabilirsiniz."
        ]
    },
    {
        pattern: /(ödeme|taksit|kredi kartı)/i,
        responses: [
            "Ödemelerinizi kredi kartı ile tek çekim veya taksitli olarak yapabilirsiniz. Ayrıca banka havalesi/EFT seçeneğimiz de mevcuttur."
        ]
    },
    {
        pattern: /(indirim|kampanya)/i,
        responses: [
            "Düzenli olarak çeşitli kampanyalar ve indirimler düzenliyoruz. Güncel kampanyalarımız için web sitemizi ziyaret edebilir veya bize ulaşabilirsiniz."
        ]
    },

    // Teknik Sorular
    {
        pattern: /(yazılım nedir|kodlama nedir)/i,
        responses: [
            "Yazılım, bilgisayarlara ve diğer elektronik cihazlara ne yapmaları gerektiğini söyleyen komutlar bütünüdür. LeaderCoders'da yazılım geliştirmeyi en temelinden öğrenebilirsiniz."
        ]
    },
    {
        pattern: /(hangi dille başlamalıyım|nereden başlamalıyım)/i,
        responses: [
            "Programlamaya yeni başlayanlar için Python ideal bir seçimdir. Kolay öğrenilen syntax'ı ve geniş kullanım alanıyla Python, programlama mantığını kavramak için mükemmel bir dildir."
        ]
    },

    // Genel Sorular
    {
        pattern: /(uzaktan eğitim|online eğitim)/i,
        responses: [
            "Tüm eğitimlerimiz online olarak verilmektedir. İnternet bağlantınızın olduğu her yerden derslere katılabilir ve eğitim içeriklerine erişebilirsiniz."
        ]
    },
    {
        pattern: /(yaş sınırı|yaş)/i,
        responses: [
            "Programlama öğrenmek için yaş sınırı yoktur. Her yaştan öğrencimiz bulunmaktadır. Önemli olan öğrenme isteği ve düzenli çalışmadır."
        ]
    },

    // Hedef Kitle
    {
        pattern: /(kimler katılabilir|hedef kitle|yaş grubu)/i,
        responses: [
            "LeaderCoders, özellikle ortaokul ve lise öğrencilerine yönelik online programlama eğitimleri sunmaktadır. Eğitimlerimiz öğrencilerin seviyesine uygun olarak tasarlanmıştır.",
            "Programlarımız ortaokul ve lise öğrencileri için özel olarak hazırlanmıştır. Her öğrencinin kendi hızında ilerleyebileceği bir sistem sunuyoruz."
        ]
    },

    // Eğitim Sistemi Detayları
    {
        pattern: /(eğitim sistemi|nasıl işliyor|sistem nasıl)/i,
        responses: [
            "LeaderCoders eğitim sistemi şu özellikleri içerir:\n- Canlı online dersler\n- Tecrübeli öğretmenler\n- Gerçek proje ve uygulamalar\n- Video ders kayıtları\n- Discord üzerinden anlık destek\n- Zoom üzerinden canlı dersler",
            "Eğitim sistemimizin temel özellikleri:\n- 4 haftalık modüller\n- Her modülde 20 saat canlı ders\n- 20 saat alıştırma dersi\n- Ders kayıtlarına sınırsız erişim\n- Uygulama temelli öğrenme"
        ]
    },

    // Modül Detayları
    {
        pattern: /(modül|modül süresi|ders saati)/i,
        responses: [
            "Her modül şunları içerir:\n📅 4 hafta süre\n🖥️ 20 saat canlı online ders\n🎯 20 saat alıştırma dersi\n📹 Tüm derslerin video kayıtları\n🚀 Gerçek projeler ve uygulamalar"
        ]
    },

    // Programlama Dilleri Detayları
    {
        pattern: /(javascript nedir|javascript hakkında|js nedir)/i,
        responses: [
            "JavaScript, web geliştirme dünyasının vazgeçilmez dilidir. LeaderCoders'da JavaScript ile:\n- Dinamik web siteleri\n- Etkileşimli uygulamalar\n- Modern web teknolojileri\n- Zengin kullanıcı deneyimleri geliştirmeyi öğreneceksiniz."
        ]
    },
    {
        pattern: /(python nedir|python hakkında|py nedir)/i,
        responses: [
            "Python, öğrenmesi kolay ve çok yönlü bir programlama dilidir. LeaderCoders Python kursu ile:\n- Veri bilimi\n- Yapay zeka\n- Web geliştirme\n- Pratik projeler konularında deneyim kazanacaksınız."
        ]
    },

    // Öğrenci Deneyimleri
    {
        pattern: /(öğrenci yorumları|deneyimler|görüşler)/i,
        responses: [
            "Öğrencilerimizin deneyimleri:\n'Yazılım mühendisliği düşünmememe rağmen kurs sayesinde yazılıma bakış açım değişti.' - Serra Bozkurt, 11. sınıf\n'Eğitmenlerin bilgisi ve öğretim tarzı sayesinde yazılımı daha iyi kavrayabildim.' - Tuana Başaran, 9. sınıf",
            "Öğrencilerimizden geri bildirimler:\n'Java dersleri gerçekten eğlenceli ve öğretici geçiyor.' - Mehmet Kerim Vurucu, 11. sınıf\n'Bu kurs interaktif ve bize takım halinde çalışmayı öğretiyor.' - Ömer Faruk Gül, 11. sınıf"
        ]
    },

    // Eğitmen Özellikleri
    {
        pattern: /(eğitmen|öğretmen|hoca)/i,
        responses: [
            "LeaderCoders'da alanında uzman, deneyimli eğitmenler ders vermektedir. Eğitmenlerimiz:\n- Birebir ilgi gösterir\n- Anlaşılmayan konuları tekrar anlatır\n- Discord üzerinden sürekli destek sağlar\n- Öğrenci gelişimini yakından takip eder"
        ]
    },

    // İletişim Kanalları
    {
        pattern: /(discord|zoom|iletişim platformu)/i,
        responses: [
            "LeaderCoders'da dersler Zoom üzerinden canlı olarak yapılır. Ayrıca Discord sunucumuzda:\n- Anlık teknik destek\n- Soru-cevap kanalları\n- Ödev takibi\n- Topluluk desteği sunulmaktadır."
        ]
    },

    // Başvuru ve Kayıt
    {
        pattern: /(nasıl kayıt|başvuru|kayıt olmak)/i,
        responses: [
            "LeaderCoders'a kayıt olmak için:\n1. Web sitemizden 'Bilgi Al' formunu doldurun\n2. Size özel program ve fiyat bilgisi verelim\n3. Ödemenizi yapın\n4. Hemen derslere başlayın!\nDetaylı bilgi için web sitemizi ziyaret edebilirsiniz."
        ]
    },

    // Eğitim Avantajları
    {
        pattern: /(avantaj|neden leadercoder|neden siz)/i,
        responses: [
            "LeaderCoders'ı tercih etme nedenleri:\n✓ Deneyimli eğitmenler\n✓ Uygulama temelli öğrenme\n✓ Canlı dersler ve anlık destek\n✓ Esnek programlar\n✓ Bireysel ilerleme takibi\n✓ Gerçek projeler"
        ]
    },

    // TEMEL BİLGİLER
    {
        pattern: /(nedir|leadercoders nedir)/i,
        responses: [
            "LeaderCoders, ortaokul ve lise öğrencilerine yönelik online programlama eğitimleri veren bir platformdur. Öğrencilerin seviyesine uygun, uygulamalı eğitim programları sunuyoruz."
        ]
    },

    // MODÜL YAPISI
    {
        pattern: /(modül içeriği|modülde neler var)/i,
        responses: [
            "Her modülde:\n✓ 4 haftalık eğitim\n✓ 20 saat canlı ders\n✓ 20 saat alıştırma dersi\n✓ Sınırsız video kayıt erişimi\n✓ Discord desteği bulunur."
        ]
    },

    // DERS PROGRAMI
    {
        pattern: /(haftalık program|ders programı detayı)/i,
        responses: [
            "Haftalık ders programı:\n- Haftada 5 saat canlı ders\n- 5 saat alıştırma dersi\n- Esnek katılım imkanı\n- İsteğe bağlı tekrar izleme"
        ]
    },

    // PYTHON EĞİTİMİ
    {
        pattern: /(python başlangıç|python temel)/i,
        responses: [
            "Python başlangıç eğitiminde:\n- Temel programlama kavramları\n- Değişkenler ve veri tipleri\n- Döngüler ve koşullar\n- Fonksiyonlar\nkonularını öğreneceksiniz."
        ]
    },
    {
        pattern: /(python ileri|python advanced)/i,
        responses: [
            "Python ileri seviye konular:\n- Nesne yönelimli programlama\n- Veri yapıları\n- Dosya işlemleri\n- Modüller ve kütüphaneler"
        ]
    },

    // JAVA EĞİTİMİ
    {
        pattern: /(java başlangıç|java temel)/i,
        responses: [
            "Java başlangıç eğitiminde:\n- Java syntax\n- Değişkenler ve operatörler\n- Kontrol yapıları\n- Metotlar\nkonularını öğreneceksiniz."
        ]
    },
    {
        pattern: /(java ileri|java advanced)/i,
        responses: [
            "Java ileri seviye konular:\n- OOP kavramları\n- Exception handling\n- Collections Framework\n- File I/O işlemleri"
        ]
    },

    // JAVASCRIPT EĞİTİMİ
    {
        pattern: /(javascript başlangıç|js temel)/i,
        responses: [
            "JavaScript başlangıç eğitiminde:\n- Web geliştirme temelleri\n- DOM manipülasyonu\n- Events (Olaylar)\n- Async programlama\nkonularını öğreneceksiniz."
        ]
    },
    {
        pattern: /(javascript ileri|js advanced)/i,
        responses: [
            "JavaScript ileri seviye konular:\n- Modern JS özellikleri\n- API entegrasyonları\n- Frontend frameworkler\n- Node.js temelleri"
        ]
    },

    // EĞİTİM PLATFORMU
    {
        pattern: /(platform|eğitim platformu)/i,
        responses: [
            "Eğitim platformumuzda:\n- Zoom üzerinden canlı dersler\n- Discord üzerinden destek\n- Online ödev takibi\n- Video ders arşivi bulunur."
        ]
    },

    // DERS KAYITLARI
    {
        pattern: /(kayıt izleme|video kayıtları)/i,
        responses: [
            "Ders kayıtları özellikleri:\n- Sınırsız erişim\n- İstenilen hızda izleme\n- Tekrar izleme imkanı\n- Mobil uyumlu platform"
        ]
    },

    // ÖDEV SİSTEMİ
    {
        pattern: /(ödev sistemi|ödevler nasıl)/i,
        responses: [
            "Ödev sistemi:\n- Her dersten sonra pratik ödevler\n- Gerçek hayat projeleri\n- Mentör kontrolü\n- Detaylı geri bildirim"
        ]
    },

    // MENTÖRLÜK
    {
        pattern: /(mentör sistemi|mentörlük nasıl)/i,
        responses: [
            "Mentörlük sistemi:\n- Birebir destek\n- Kod inceleme\n- Kariyer danışmanlığı\n- Sürekli iletişim"
        ]
    },

    // BAŞARI TAKİBİ
    {
        pattern: /(başarı takibi|gelişim takibi)/i,
        responses: [
            "Başarı takip sistemi:\n- Düzenli değerlendirmeler\n- İlerleme raporları\n- Performans analizi\n- Kişisel geri bildirim"
        ]
    },

    // SERTİFİKASYON
    {
        pattern: /(sertifika detay|sertifika bilgi)/i,
        responses: [
            "Sertifika programı:\n- Modül tamamlama sertifikaları\n- Proje başarı belgeleri\n- Dijital rozetler\n- CV'ye eklenebilir belgeler"
        ]
    },

    // ÖDEME SEÇENEKLERİ
    {
        pattern: /(ödeme seçenekleri|ödeme planı)/i,
        responses: [
            "Ödeme seçenekleri:\n- Kredi kartı ile ödeme\n- Taksit imkanı\n- Banka havalesi\n- Esnek ödeme planları"
        ]
    },

    // KAYIT SÜRECİ
    {
        pattern: /(kayıt süreci|kayıt aşamaları)/i,
        responses: [
            "Kayıt süreci:\n1. Online form doldurma\n2. Program seçimi\n3. Ödeme işlemi\n4. Oryantasyon\n5. Derslere başlangıç"
        ]
    },

    // DERS ARAÇLARI
    {
        pattern: /(ders araçları|gerekli araçlar)/i,
        responses: [
            "Dersler için gerekli araçlar:\n- Bilgisayar\n- İnternet bağlantısı\n- Zoom uygulaması\n- Discord hesabı"
        ]
    },

    // TEKNİK DESTEK
    {
        pattern: /(teknik destek|destek sistemi)/i,
        responses: [
            "Teknik destek kanalları:\n- Discord sunucusu\n- E-posta desteği\n- Canlı destek\n- Whatsapp iletişim hattı"
        ]
    },

    // YENİ ÖZGÜN PATTERN'LER
    {
        pattern: /(yazılım öğrenmenin faydaları|neden yazılım)/i,
        responses: [
            "LeaderCoders'da yazılım öğrenerek:\n✓ Analitik düşünme yeteneği kazanırsınız\n✓ Problem çözme becerileriniz gelişir\n✓ Üniversite sınavlarında avantaj sağlarsınız\n✓ Geleceğin mesleklerine hazırlanırsınız"
        ]
    },

    {
        pattern: /(eğitim yöntemi|öğretim metodu)/i,
        responses: [
            "LeaderCoders eğitim yöntemi:\n✓ Görsel ve uygulamalı anlatım\n✓ Soru-cevap ile aktif öğrenme\n✓ Gerçek projelerle deneyim\n✓ Bireysel hız ve seviyeye uygun ilerleme"
        ]
    },

    {
        pattern: /(yazılım eğitimi süresi|ne kadar sürede)/i,
        responses: [
            "LeaderCoders'da yazılım eğitimi modüler bir yapıda ilerler. Her modül 4 hafta sürer ve haftada 5 saat canlı ders + 5 saat alıştırma dersi yapılır. Eğitim süresince kendi hızınızda ilerleyebilirsiniz."
        ]
    },

    {
        pattern: /(neden leadercoders|neden biz)/i,
        responses: [
            "LeaderCoders'ı tercih etmelisiniz çünkü:\n✓ Uzman eğitmenler\n✓ Küçük gruplarla eğitim\n✓ Uygulamalı öğrenme\n✓ Sürekli destek sistemi\n✓ Esnek ders programı"
        ]
    },

    {
        pattern: /(eğitim sonrası|mezun sonrası)/i,
        responses: [
            "LeaderCoders eğitimini tamamladığınızda:\n✓ Temel programlama becerilerine sahip olursunuz\n✓ Kendi projelerinizi geliştirebilirsiniz\n✓ Yazılım dünyasına hazır hale gelirsiniz\n✓ Üniversite tercihinizde avantaj sağlarsınız"
        ]
    },

    {
        pattern: /(başarı ölçümü|değerlendirme)/i,
        responses: [
            "LeaderCoders'da başarınız:\n✓ Düzenli ödevler\n✓ Pratik uygulamalar\n✓ Proje geliştirme\n✓ Modül sonu değerlendirmeleri ile ölçülür"
        ]
    },

    {
        pattern: /(eğitim materyalleri|ders materyalleri)/i,
        responses: [
            "LeaderCoders eğitim materyalleri:\n✓ Canlı ders kayıtları\n✓ Uygulama örnekleri\n✓ Alıştırma soruları\n✓ Proje şablonları"
        ]
    },

    {
        pattern: /(öğrenci profili|kimler katılıyor)/i,
        responses: [
            "LeaderCoders öğrenci profili:\n✓ Ortaokul öğrencileri\n✓ Lise öğrencileri\n✓ Yazılıma ilgi duyan gençler\n✓ Geleceğin yazılımcı adayları"
        ]
    },

    {
        pattern: /(ders ortamı|eğitim ortamı)/i,
        responses: [
            "LeaderCoders'da dersler:\n✓ Online canlı sınıf ortamında\n✓ Maksimum 6 kişilik gruplarla\n✓ Etkileşimli bir şekilde\n✓ Zoom platformu üzerinden yapılır"
        ]
    },

    {
        pattern: /(eğitim takvimi|ders takvimi)/i,
        responses: [
            "LeaderCoders eğitim takvimi:\n✓ 4 haftalık modüller\n✓ Haftada 2-3 gün ders\n✓ Esnek ders saatleri\n✓ Okul programına uyumlu planlama"
        ]
    },

    // YENİ DOĞAL KONUŞMA PATTERNLERİ
    {
        pattern: /(anladım|ok|tamamdır)/i,
        responses: [
            "Harika! Başka sorunuz var mı?",
            "Güzel! Başka nasıl yardımcı olabilirim?",
            "Tamam! Başka merak ettiğiniz bir şey var mı?"
        ]
    },

    {
        pattern: /(evet|olur|tabi)/i,
        responses: [
            "Harika! O zaman devam edelim.",
            "Güzel! Size yardımcı olabilirim.",
            "Tamam, başlayalım!"
        ]
    },

    {
        pattern: /(hayır|yok|istemiyorum)/i,
        responses: [
            "Peki, başka nasıl yardımcı olabilirim?",
            "Tamam, farklı bir konuda yardımcı olabilir miyim?",
            "Anladım, başka sorunuz var mı?"
        ]
    },

    {
        pattern: /(bilmiyorum|emin değilim)/i,
        responses: [
            "Size yardımcı olmak için buradayım. Hangi konuda bilgi almak istersiniz?",
            "Birlikte en uygun seçeneği bulabiliriz.",
            "Size seçenekleri sunabilirim, ister misiniz?"
        ]
    },

    {
        pattern: /(peki|öyleyse|o zaman)/i,
        responses: [
            "Size nasıl yardımcı olabilirim?",
            "Dinliyorum, buyurun.",
            "Evet, devam edelim."
        ]
    },

    // DAHA FAZLA DOĞAL KONUŞMA PATTERNLERİ
    {
        pattern: /(düşüneyim|düşünmem lazım|bakarım)/i,
        responses: [
            "Tabii, düşünün. Ben burada olacağım.",
            "Elbette, karar verdiğinizde tekrar konuşabiliriz.",
            "Tamam, düşünün. Sorularınız olursa bekliyorum."
        ]
    },

    {
        pattern: /(tabii ki|elbette|kesinlikle)/i,
        responses: [
            "Harika! Devam edelim o zaman.",
            "Güzel! Size yardımcı olayım.",
            "Süper! Başlayalım."
        ]
    },

    {
        pattern: /(biraz|azıcık|az)/i,
        responses: [
            "Tamam, size uygun şekilde ilerleyelim.",
            "Peki, nasıl yardımcı olabilirim?",
            "Anladım, devam edelim."
        ]
    },

    {
        pattern: /(hımm|hmm|şey)/i,
        responses: [
            "Evet, dinliyorum sizi.",
            "Buyurun, devam edin.",
            "Size nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(aslında|gerçekte|açıkçası)/i,
        responses: [
            "Evet, sizi dinliyorum.",
            "Devam edin lütfen.",
            "Buyurun, anlatın."
        ]
    },

    {
        pattern: /(doğru|haklısın|öyle)/i,
        responses: [
            "Size nasıl yardımcı olabilirim?",
            "Devam edelim isterseniz.",
            "Başka sorunuz var mı?"
        ]
    },

    {
        pattern: /(belki|galiba|sanırım)/i,
        responses: [
            "Size yardımcı olabilirim.",
            "Birlikte bakalım isterseniz.",
            "Detaylı bilgi verebilirim."
        ]
    },

    {
        pattern: /(şimdi|hemen|acil)/i,
        responses: [
            "Evet, hemen yardımcı olayım.",
            "Tabii, hemen bakalım.",
            "Hemen ilgilenelim."
        ]
    },

    {
        pattern: /(sonra|daha sonra|başka zaman)/i,
        responses: [
            "Tamam, istediğiniz zaman tekrar konuşabiliriz.",
            "Peki, sonra görüşürüz.",
            "Elbette, size uygun olan zamanda konuşalım."
        ]
    },

    {
        pattern: /(neyse|boşver|önemli değil)/i,
        responses: [
            "Başka nasıl yardımcı olabilirim?",
            "Peki, farklı bir konuda yardımcı olabilir miyim?",
            "Tamam, başka sorunuz var mı?"
        ]
    },

    {
        pattern: /(gerçekten mi|ciddi mi|sahiden mi)/i,
        responses: [
            "Evet, kesinlikle.",
            "Elbette, size yardımcı olmak için buradayım.",
            "Tabii ki, devam edelim isterseniz."
        ]
    },

    {
        pattern: /(bir dakika|bekle|dur)/i,
        responses: [
            "Tabii, sizi bekliyorum.",
            "Elbette, acele etmeyin.",
            "Tamam, hazır olduğunuzda devam ederiz."
        ]
    },

    {
        pattern: /(devam|sürdür|anlat)/i,
        responses: [
            "Hangi konuda devam etmemi istersiniz?",
            "Size nasıl yardımcı olabilirim?",
            "Evet, dinliyorum."
        ]
    },

    {
        pattern: /(harika|süper|mükemmel)/i,
        responses: [
            "Başka nasıl yardımcı olabilirim?",
            "Size başka konuda yardımcı olabilir miyim?",
            "Başka sorunuz var mı?"
        ]
    },

    // YENİ DOĞAL KONUŞMA PATTERNLERİ
    {
        pattern: /(bence|bana göre|düşüncem)/i,
        responses: [
            "Görüşünüzü paylaştığınız için teşekkürler.",
            "Anlıyorum, devam edin lütfen.",
            "Evet, sizi dinliyorum."
        ]
    },

    {
        pattern: /(şöyle|böyle|şu şekilde)/i,
        responses: [
            "Anlıyorum, devam edin.",
            "Evet, dinliyorum.",
            "Anladım, lütfen devam edin."
        ]
    },

    {
        pattern: /(yani|demek ki|demek)/i,
        responses: [
            "Evet, doğru anladınız.",
            "Aynen öyle.",
            "Tam olarak öyle."
        ]
    },

    {
        pattern: /(bir şey sorabilir miyim|sorum var|sormak istiyorum)/i,
        responses: [
            "Tabii ki, buyurun sorun.",
            "Elbette, dinliyorum.",
            "Tabii, sorunuzu alayım."
        ]
    },

    {
        pattern: /(bilmek istiyorum|öğrenmek istiyorum|merak ediyorum)/i,
        responses: [
            "Size yardımcı olayım.",
            "Hemen açıklayayım.",
            "Tabii ki, anlatayım."
        ]
    },

    {
        pattern: /(şu an|şimdilik|şu anda)/i,
        responses: [
            "Evet, dinliyorum sizi.",
            "Buyurun, devam edin.",
            "Size nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(bir saniye|biraz bekle|az bekle)/i,
        responses: [
            "Tabii, bekliyorum.",
            "Sorun değil, buradayım.",
            "Tamam, sizi bekliyorum."
        ]
    },

    {
        pattern: /(olabilir|olur gibi|sanki)/i,
        responses: [
            "Daha detaylı bilgi vermemi ister misiniz?",
            "Size yardımcı olabilirim.",
            "Birlikte bakalım isterseniz."
        ]
    },

    {
        pattern: /(ne dersin|ne düşünüyorsun|fikrin ne)/i,
        responses: [
            "Size en doğru bilgiyi vermek için buradayım.",
            "Size yardımcı olmak için varım.",
            "Birlikte en iyi seçeneği bulabiliriz."
        ]
    },

    {
        pattern: /(başka|farklı|değişik)/i,
        responses: [
            "Size nasıl yardımcı olabilirim?",
            "Başka konuda bilgi almak ister misiniz?",
            "Farklı bir konuya bakalım isterseniz."
        ]
    },

    {
        pattern: /(önerir misin|tavsiye eder misin|önerin ne)/i,
        responses: [
            "Size en uygun seçeneği bulmaya çalışayım.",
            "Birlikte bakalım isterseniz.",
            "Size yardımcı olabilirim."
        ]
    },

    {
        pattern: /(emin misin|kesin mi|gerçekten öyle mi)/i,
        responses: [
            "Evet, size doğru bilgi veriyorum.",
            "Kesinlikle eminim.",
            "Evet, doğru bilgi vermeye özen gösteriyorum."
        ]
    },

    {
        pattern: /(ilginç|enteresan|şaşırtıcı)/i,
        responses: [
            "Daha fazla bilgi vermemi ister misiniz?",
            "Size detayları anlatabilirim.",
            "Başka neler öğrenmek istersiniz?"
        ]
    },

    {
        pattern: /(aklıma geldi|hatırladım|unuttum)/i,
        responses: [
            "Evet, dinliyorum.",
            "Buyurun, anlatın.",
            "Size yardımcı olabilirim."
        ]
    },

    {
        pattern: /(karışık|kompleks|zor)/i,
        responses: [
            "Daha basit açıklamamı ister misiniz?",
            "Size daha net anlatayım.",
            "Adım adım ilerleyebiliriz."
        ]
    },

    // DAHA FAZLA DOĞAL KONUŞMA PATTERNLERİ
    {
        pattern: /(hadi|haydi|başlayalım)/i,
        responses: [
            "Tamam, başlayalım!",
            "Hazırım, başlayabiliriz.",
            "Evet, hadi başlayalım."
        ]
    },

    {
        pattern: /(aaa|ooo|vay)/i,
        responses: [
            "Evet, devam edin lütfen.",
            "Sizi dinliyorum.",
            "Buyurun."
        ]
    },

    {
        pattern: /(gerçekten|cidden|harbiden)/i,
        responses: [
            "Evet, kesinlikle.",
            "Tabii ki.",
            "Elbette."
        ]
    },

    {
        pattern: /(şaka mı|dalga mı|ciddi misin)/i,
        responses: [
            "Hayır, gayet ciddiyim.",
            "Size doğru bilgi veriyorum.",
            "Kesinlikle ciddiyim."
        ]
    },

    {
        pattern: /(çok iyi|güzel|hoş)/i,
        responses: [
            "Sevindim.",
            "Güzel, devam edelim mi?",
            "Harika, başka nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(olmadı|yanlış|hata)/i,
        responses: [
            "Tekrar deneyelim.",
            "Başka türlü açıklayayım.",
            "Yardımcı olmaya devam edeyim."
        ]
    },

    {
        pattern: /(şimdi ne yapacağım|ne yapmalıyım|nasıl yaparım)/i,
        responses: [
            "Size yardımcı olabilirim.",
            "Birlikte bakalım.",
            "Adım adım ilerleyelim."
        ]
    },

    {
        pattern: /(bilemiyorum|kararsızım|emin olamadım)/i,
        responses: [
            "Size yardımcı olmak için buradayım.",
            "Birlikte düşünelim.",
            "Size seçenekleri sunabilirim."
        ]
    },

    {
        pattern: /(öyle mi|öyleymiş|öyleyse)/i,
        responses: [
            "Evet, aynen öyle.",
            "Doğru biliyorsunuz.",
            "Evet, devam edelim mi?"
        ]
    },

    {
        pattern: /(yapabildim|başardım|oldu)/i,
        responses: [
            "Harika!",
            "Çok güzel!",
            "Tebrikler!"
        ]
    },

    {
        pattern: /(yapamadım|başaramadım|olmadı)/i,
        responses: [
            "Tekrar deneyelim.",
            "Sorun değil, birlikte çözelim.",
            "Yardımcı olayım."
        ]
    },

    {
        pattern: /(bak|dinle|hey)/i,
        responses: [
            "Evet, dinliyorum.",
            "Buyurun.",
            "Sizi dinliyorum."
        ]
    },

    {
        pattern: /(of|ah|eh)/i,
        responses: [
            "Size nasıl yardımcı olabilirim?",
            "Bir sorun mu var?",
            "Yardımcı olabilir miyim?"
        ]
    },

    {
        pattern: /(herhalde|muhtemelen|büyük ihtimalle)/i,
        responses: [
            "Size kesin bilgi verebilirim.",
            "Birlikte bakalım.",
            "Emin olalım isterseniz."
        ]
    },

    {
        pattern: /(fark etmez|farketmez|önemli değil)/i,
        responses: [
            "Size en iyisini önerebilirim.",
            "Birlikte karar verelim.",
            "Size yardımcı olayım."
        ]
    },

    {
        pattern: /(biliyorum|biliyom|bilirim)/i,
        responses: [
            "Güzel, devam edelim mi?",
            "Harika, başka ne öğrenmek istersiniz?",
            "Peki, nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(yok ya|yok artık|olamaz)/i,
        responses: [
            "Size yardımcı olabilirim.",
            "Açıklamamı ister misiniz?",
            "Detaylı bilgi verebilirim."
        ]
    },

    {
        pattern: /(keşke|bari|diyelim)/i,
        responses: [
            "Size yardımcı olmak için buradayım.",
            "Birlikte çözüm bulalım.",
            "Yardımcı olabilirim."
        ]
    },

    // YENİ DOĞAL KONUŞMA PATTERNLERİ
    {
        pattern: /(acaba|merak ettim|merak ediyorum da)/i,
        responses: [
            "Size yardımcı olabilirim.",
            "Hemen açıklayayım.",
            "Sorunuzu alayım."
        ]
    },

    {
        pattern: /(iyi ki|ne güzel|ne iyi)/i,
        responses: [
            "Sevindim.",
            "Ben de mutlu oldum.",
            "Güzel!"
        ]
    },

    {
        pattern: /(yok mu|var mı|olur mu)/i,
        responses: [
            "Birlikte bakalım.",
            "Size yardımcı olayım.",
            "Hemen kontrol edelim."
        ]
    },

    {
        pattern: /(ama|fakat|lakin)/i,
        responses: [
            "Anlıyorum, devam edin lütfen.",
            "Evet, sizi dinliyorum.",
            "Buyurun, devam edin."
        ]
    },

    {
        pattern: /(galiba|sanırım|herhalde)/i,
        responses: [
            "Size net bilgi verebilirim.",
            "Birlikte bakalım.",
            "Yardımcı olabilirim."
        ]
    },

    {
        pattern: /(aslında|esasında|hakikaten)/i,
        responses: [
            "Evet, dinliyorum.",
            "Devam edin lütfen.",
            "Sizi anlıyorum."
        ]
    },

    {
        pattern: /(şey desem|bir şey diyeceğim|bir sorum olacak)/i,
        responses: [
            "Tabii, buyurun.",
            "Dinliyorum.",
            "Sorunuzu alayım."
        ]
    },

    {
        pattern: /(nasıl yani|ne demek|açıklar mısın)/i,
        responses: [
            "Hemen açıklayayım.",
            "Size daha detaylı anlatayım.",
            "Tabii ki açıklayabilirim."
        ]
    },

    {
        pattern: /(önemsiz|boş ver|boşver)/i,
        responses: [
            "Başka nasıl yardımcı olabilirim?",
            "Farklı bir konuya geçelim isterseniz.",
            "Peki, sizi dinliyorum."
        ]
    },

    {
        pattern: /(doğru mu anladım|doğru mu|yanlış mı)/i,
        responses: [
            "Kontrol edelim isterseniz.",
            "Birlikte bakalım.",
            "Size yardımcı olayım."
        ]
    },

    {
        pattern: /(şaşırdım|inanamadım|beklemiyordum)/i,
        responses: [
            "Size daha detaylı bilgi verebilirim.",
            "Açıklamamı ister misiniz?",
            "Anlatayım isterseniz."
        ]
    },

    {
        pattern: /(olsun|neyse|öyle olsun)/i,
        responses: [
            "Başka nasıl yardımcı olabilirim?",
            "Farklı bir konuda yardım ister misiniz?",
            "Size başka konuda yardımcı olayım."
        ]
    },

    {
        pattern: /(mantıklı|mantıksız|saçma)/i,
        responses: [
            "Size daha detaylı açıklayabilirim.",
            "Başka türlü anlatayım isterseniz.",
            "Yardımcı olmaya devam edeyim."
        ]
    },

    {
        pattern: /(ben de|aynen|katılıyorum)/i,
        responses: [
            "Güzel, devam edelim mi?",
            "Harika, başka konuya geçelim mi?",
            "Peki, nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(öyle|aynen öyle|kesinlikle öyle)/i,
        responses: [
            "Devam edelim mi?",
            "Başka sorunuz var mı?",
            "Size nasıl yardımcı olabilirim?"
        ]
    },

    {
        pattern: /(değil mi|öyle mi|öyle değil mi)/i,
        responses: [
            "Evet, doğru.",
            "Aynen öyle.",
            "Kesinlikle."
        ]
    },

    {
        pattern: /(hiç|asla|kesinlikle)/i,
        responses: [
            "Anlıyorum.",
            "Size yardımcı olabilirim.",
            "Birlikte çözüm bulalım."
        ]
    },

    {
        pattern: /(hep|sürekli|devamlı)/i,
        responses: [
            "Anlıyorum.",
            "Size nasıl yardımcı olabilirim?",
            "Çözüm bulmaya çalışalım."
        ]
    },

    // YENİ GÜNLÜK KONUŞMA PATTERNLERİ
    {
        pattern: /(of ya|offff|ahh)/i,
        responses: [
            "Bir şey mi oldu?",
            "Sizi dinliyorum.",
            "Sorun nedir?"
        ]
    },

    {
        pattern: /(çok yoruldum|yorgunum|bittim)/i,
        responses: [
            "Dinlenin biraz.",
            "Ara vermek ister misiniz?",
            "Sonra devam edebiliriz."
        ]
    },

    {
        pattern: /(sıkıldım ya|çok sıkıcı|sıkıldım)/i,
        responses: [
            "Farklı bir şey yapmak ister misiniz?",
            "Biraz ara verelim mi?",
            "Başka ne konuşmak istersiniz?"
        ]
    },

    {
        pattern: /(heyecanlıyım|çok heyecanlı|heyecan)/i,
        responses: [
            "Sizi anlıyorum!",
            "Heyecan güzel bir şey!",
            "Bu heyecanla güzel şeyler başaracaksınız."
        ]
    },

    {
        pattern: /(sen kimsin ya|nesin sen|insan mısın)/i,
        responses: [
            "Ben bir sohbet botuyum.",
            "Yapay zeka asistanıyım.",
            "Size yardımcı olmak için buradayım."
        ]
    },

    {
        pattern: /(çok iyiisin|süpersin|harikasın)/i,
        responses: [
            "Teşekkür ederim, elimden geleni yapıyorum!",
            "Naziksiniz, size yardımcı olabildiysem ne mutlu.",
            "Çok teşekkürler!"
        ]
    },

    {
        pattern: /(saçmalama|saçma|mantıksız)/i,
        responses: [
            "Özür dilerim, daha net açıklayayım.",
            "Farklı şekilde ifade edeyim.",
            "Anlamadığınız yeri tekrar açıklayabilirim."
        ]
    },

    {
        pattern: /(sen ne bilirsin|nerden bileceksin|bilmezsin)/i,
        responses: [
            "Size yardımcı olmak için programlandım.",
            "Bildiklerimi paylaşmaya çalışıyorum.",
            "Elimden geldiğince yardımcı olmaya çalışıyorum."
        ]
    },

    {
        pattern: /(çok kötüyüm|moralim bozuk|üzgünüm)/i,
        responses: [
            "Üzüldüm. Size nasıl yardımcı olabilirim?",
            "Moralinizi düzeltmek için ne yapabilirim?",
            "Sizi dinliyorum."
        ]
    },

    {
        pattern: /(kahve içelim|çay içelim|mola)/i,
        responses: [
            "Ben içemem ama siz için! ☕",
            "Afiyet olsun! ☕",
            "Güzel fikir, için siz! ☕"
        ]
    },

    {
        pattern: /(çok mutluyum|süper|harika)/i,
        responses: [
            "Bu harika! Mutluluğunuz daim olsun!",
            "Çok sevindim!",
            "Harika haber!"
        ]
    },

    {
        pattern: /(sence|düşüncen ne|fikrin ne)/i,
        responses: [
            "Bu konuda size yardımcı olmaya çalışabilirim.",
            "Birlikte değerlendirelim.",
            "Size bilgi verebilirim."
        ]
    },

    {
        pattern: /(gerçekten mi|ciddi misin|dalga mı)/i,
        responses: [
            "Evet, kesinlikle ciddiyim.",
            "Size doğru bilgi veriyorum.",
            "Tabii ki ciddiyim."
        ]
    },

    {
        pattern: /(çok komik|güldüm|ahaha)/i,
        responses: [
            "Sevindim güldürebildiysem!",
            "Gülmek güzel!",
            "Neşeli olmak güzel!"
        ]
    },

    {
        pattern: /(sus|konuşma|sessiz ol)/i,
        responses: [
            "Tamam, sizi dinliyorum.",
            "Peki, sessiz oluyorum.",
            "Anladım, sustum."
        ]
    }
]; 