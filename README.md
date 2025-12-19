# Cappu Gaming - E-Spor Web Sitesi

Modern ve responsive bir e-spor platformu web sitesi. En güncel maç sonuçları, takım bilgileri, turnuvalar ve e-spor haberleri için kapsamlı bir platform.

## 🎮 Özellikler

### Ana Bölümler

- **Hero Section**: Etkileyici ana sayfa bölümü ile karşılama
- **Canlı Maçlar**: Öne çıkan maçlar ve canlı skorlar
- **Takımlar**: Popüler e-spor takımları ve istatistikleri
- **Turnuvalar**: Aktif turnuvalar ve ödül havuzları
- **Haberler**: E-spor dünyasından son haberler
- **İletişim**: İletişim formu ve sosyal medya bağlantıları

### Teknik Özellikler

- ✅ Tamamen responsive tasarım (mobil, tablet, desktop)
- ✅ Modern ve şık UI/UX
- ✅ Smooth scroll animasyonları
- ✅ Interaktif hover efektleri
- ✅ Mobil uyumlu hamburger menü
- ✅ Form validasyonu
- ✅ Scroll to top butonu
- ✅ Parallax efektleri
- ✅ Intersection Observer API ile scroll animasyonları

## 📁 Dosya Yapısı

```
cappu-gaming/
│
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Bu dosya
```

## 🚀 Kullanım

### Yerel Olarak Çalıştırma

1. Tüm dosyaların aynı klasörde olduğundan emin olun
2. `index.html` dosyasını bir web tarayıcısında açın
3. Veya bir local server kullanın:

```bash
# Python 3 kullanarak
python -m http.server 8000

# Node.js (http-server) kullanarak
npx http-server
```

Tarayıcınızda `http://localhost:8000` adresine gidin.

## 🎨 Tasarım Özellikleri

### Renkler

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Dark Background**: `#0a0e27`
- **Card Background**: `#151932`

### Fontlar

- **Başlıklar**: Orbitron (Google Fonts)
- **Metin**: Inter (Google Fonts)

### Animasyonlar

- Fade-in efektleri
- Hover transform efektleri
- Pulse animasyonları (canlı maçlar için)
- Smooth scroll
- Counter animasyonları (istatistikler için)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 767px ve altı

## 🔧 Özelleştirme

### Renkleri Değiştirme

`styles.css` dosyasındaki `:root` değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... diğer renkler */
}
```

### İçerik Düzenleme

- Takım bilgileri: `index.html` içindeki `.team-card` elementlerini düzenleyin
- Maç bilgileri: `.match-card` elementlerini düzenleyin
- Turnuva bilgileri: `.tournament-card` elementlerini düzenleyin
- Haberler: `.news-card` elementlerini düzenleyin

### Resim Ekleme

Şu anda placeholder görseller kullanılıyor. Kendi görsellerinizi eklemek için:

1. Görselleri proje klasörüne ekleyin (örn: `images/` klasörü)
2. HTML'deki `src` attribute'larını güncelleyin:

```html
<img src="images/team-logo.png" alt="Team Logo">
```

## 🌐 Tarayıcı Desteği

- ✅ Chrome (son 2 sürüm)
- ✅ Firefox (son 2 sürüm)
- ✅ Safari (son 2 sürüm)
- ✅ Edge (son 2 sürüm)

## 📝 Notlar

- Bu proje frontend-only bir demo sitedir
- Form gönderimi şu anda console'a log yazar (gerçek backend entegrasyonu için bir API'ye bağlanmanız gerekir)
- Görseller placeholder olarak kullanılıyor, kendi görsellerinizi ekleyebilirsiniz

## 🚀 Gelecek Geliştirmeler

- [ ] Backend API entegrasyonu
- [ ] Kullanıcı kayıt/giriş sistemi
- [ ] Favori takım/maç takip sistemi
- [ ] Gerçek zamanlı maç skorları API'si
- [ ] Blog/yorum sistemi
- [ ] Admin paneli
- [ ] Çoklu dil desteği

## 📄 Lisans

Bu proje eğitim amaçlı oluşturulmuştur.

## 👨‍💻 İletişim

Sorularınız veya önerileriniz için iletişime geçebilirsiniz.

---

**Cappu Gaming** - E-Spor Dünyasının Merkezi 🎮

