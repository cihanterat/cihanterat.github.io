//FONKSİYON 1. (Sayfayı Mavi Yapma)
function darkModeAktif() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
}

function darkModePasif() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
}

function darkModeToggle() {
    if (localStorage.getItem("darkMode") === "enabled") {
        darkModePasif();
    } else {
        darkModeAktif();
    }
}

// Sayfa yüklendiğinde dark mode durumunu kontrol et
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        darkModeAktif();
    }
});




//FONKSİYON 2. (Saat Fonksiyonu)
function saatGoster() {
    const tarih = new Date();
    let saat = tarih.getHours();
    let dakika = tarih.getMinutes();
    let saniye = tarih.getSeconds();

    // Saat, dakika ve saniye değerleri tek haneli ise başlarına 0 ekle
    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;

    const saatElementi = document.getElementById("saat");
    saatElementi.innerText = `${saat}:${dakika}:${saniye}`;

    setTimeout(saatGoster, 1000); // Her saniye saat güncellensin
}

    // Sayfa yüklendiğinde saat gösterimini başlat
document.addEventListener("DOMContentLoaded", function () {
    saatGoster();
});




//FONKSİYON 3. (En Aşağı Gelince Sayfayı Yukarı Kaydırma)
function sayfaBasinaGit() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Düzgün bir kaydırma efekti için "smooth" kullanın
    });
}




//FONKSİYON 4. (Sosyal Medya Yönlendirici)
function sosyalMedya(url) {
    window.open(url, "_blank");
}




//FONKSİYON 5. (Alert)
window.onload = function() {
    alert("DOĞRU ADRESTESİN KRAL!");
};




//FONKSİYON 6. (Form Kontrol Fonksiyonu)
function kontrolEt() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    var emailInput = document.getElementById('email');
    var birthdateInput = document.getElementById('birthdate');
    var cityInput = document.getElementById('city');

    // Kullanıcı adı kontrolü (en az 3 karakter olmalı)
    if (usernameInput.value.length < 3) {
        alert('Kullanıcı adı en az 3 karakter olmalıdır!');
        return true;
    }

    // Şifre kontrolü (en az 6 karakter olmalı)
    if (passwordInput.value.length < 6) {
        alert('Şifre en az 6 karakter olmalıdır!');
        return true;
    }

    // E-posta kontrolü
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Geçerli bir e-posta adresi giriniz!');
        return true;
    }

    // Doğum tarihi kontrolü (isteğe bağlı)
    // Burada daha kapsamlı bir doğrulama yapılabilir

    // Şehir kontrolü (en az bir şehir seçilmeli)
    if (cityInput.value === '') {
        alert('Lütfen bir şehir seçiniz!');
        return false;
    }

    // Formun gönderilmesine izin ver
    return true;
}




//FONKSİYON 7. (Form Temizleme Fonksiyonu)
function temizle() {
    // Formu temizleme işlemi
    document.getElementById('uyeForm').reset();
}




//FONKSİYON 8. (Galeri Fonksiyonu)
// Resimler listesi
const images = [
    'img/web.jpg',
    'img/siber.jpg',
    'img/yapayzeka.jpg',
    'img/mobil2.jpg',
    'img/oyun.jpg',
    'img/robotik.jpg',
];

let currentIndex = 0; // Başlangıç indeksi

// Resmi değiştirme fonksiyonu
function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length; // Son resimden sonra ilk resime dönme
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // İlk resimden önce son resime dönme
    }

    // Resmi güncelle
    document.querySelector('.gallery-image').src = images[currentIndex];
}

// Klavye tuşları dinleme
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
        changeImage('prev');
    } else if (event.key === 'ArrowRight') {
        changeImage('next');
    }
});




//FONKSİYON 9. (10Dk da Bi Sayfa Yenileme)
function reloadPage() {
    location.reload(); // Sayfayı yenile
}
setInterval(reloadPage, 600000); // 600000 milisaniye = 10 dakika




//FONKSİYON 10. BLUR OLAYI
document.addEventListener("DOMContentLoaded", function() {
    const resim = document.getElementById("bulanikResim");
    let blurMiktari = 20; // Başlangıçta blur miktarı
    const azalisMiktari = 2; // Blur miktarı azalışı, isteğinize göre değiştirilebilir

    function blurYap() {
        blurMiktari -= azalisMiktari;
        if (blurMiktari >= 0) {
            resim.style.filter = `blur(${blurMiktari}px)`;
            requestAnimationFrame(blurYap);
        }
    }

    function blurKaldir() {
        blurMiktari = 0;
        resim.style.filter = `blur(${blurMiktari}px)`;
    }

    const resimContainer = document.getElementById("resimContainer");
    resimContainer.addEventListener("mouseenter", blurKaldir);
    resimContainer.addEventListener("mouseleave", blurYap);

    blurYap(); // Blur efektini başlat
});




//FONKSİYON 11. KAYAN GÖRSEL
document.addEventListener("DOMContentLoaded", function() {
    const gorsel = document.getElementById("kayanGorsel");
    let xPos = 0;
    const hiz = 2; // Kaydırma hızı, isteğinize göre değiştirilebilir

    function kaydir() {
        xPos -= hiz;
        gorsel.style.transform = `translateX(${xPos}px)`;

        if (xPos <= -gorsel.width) {
            xPos = 0;
        }

        requestAnimationFrame(kaydir);
    }

    kaydir();
});




//FONKSİYON 12. DETAYLARA GELİNCE YAVAŞ YAVAŞ RENK DEĞİŞSİN
function renkDegistir(element) {
    let opaklik = 0; // Başlangıçta opaklık değeri
    const artisMiktari = 0.05; // Opaklık artış miktarı
    const aralik = setInterval(function() {
        if (opaklik >= 1) {
            clearInterval(aralik); // Animasyonu durdur
        } else {
            opaklik += artisMiktari;
            element.style.backgroundColor = `rgba(52, 152, 219, ${opaklik})`; // Renk değişimi
        }
    }, 50); // Her 50 milisaniyede bir güncelle
}




//FONKSİYON 13. (Detaylar Butonuna Tıklayınca Buton Şeklinin Değişmesi)
function sekilDegistir(element) {
    // Butona yeni stil özellikleri ekleyelim
    element.style.backgroundColor = '#e74c3c'; // Arka plan rengini değiştir
    element.style.color = '#ffffff'; // Metin rengini beyaza çevir
    element.style.padding = '8px 16px'; // Padding'i arttır
    element.style.borderRadius = '40px'; // Kenar yuvarlaklığını sıfırla
}




//FONKSİYON 14. (Formu Göndermeden Önce Bazı Inputların Büyük Harflerini Küçüğe Çeviren Fonksiyon)
    function toLowerCaseForm() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var city = document.getElementById('city');

    // Kullanıcı adı, e-posta ve şehir değerlerini küçük harfe çevir
    username.value = username.value.toLowerCase();
    email.value = email.value.toLowerCase();
    city.value = city.value.toLowerCase();
}




// Form gönderilmeden önce küçük harfe çevirme işlemini gerçekleştir
    document.getElementById('uyeForm').addEventListener('submit', function(event) {
    toLowerCaseForm();
    // Formun geri kalan işleyişini devam ettirmek için aşağıdaki satırı yorumdan çıkarabilirsiniz
    // event.preventDefault();  // Bu satır formun gönderilmesini durdurur, testleriniz sırasında işe yarayabilir
});




//FONKSİYON 15. (Rastgele Sayı Üretme :D)
function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function uret() {
    let uretilenSayi = rastgeleSayi(1, 101); // 1 ile 100 arasında rastgele bir sayı üretir
    document.getElementById("sonuc").innerText = "" + uretilenSayi;
}








/*----------------------------------------------------------------   JQUERRY  ----------------------------------------------------------------*/

//1-) ALAN ZOOMLAMA 
$(document).ready(function() {
    $(".col6").hover(function() {
        $(this).css("transform", "scale(1.1)"); // Mouse üzerine gelince büyütme
    }, function() {
        $(this).css("transform", "scale(1)"); // Mouse çekilince boyutu eski haline getirme
    });
});

//2-) YILDIZ EKLEME
$(document).ready(function(){
    $('.star').click(function(){
       
        $(this).prevAll().addBack().addClass('active');
       
        $(this).nextAll().removeClass('active');

        alert("5 yıldızı hakediyoruz :)");
    });
});

//3-) GİZLE GÖSTER
$(document).ready(function() {
    $("#gizleGosterBtn").click(function() {
        $("#gizlenenMetin").toggle(); // Belirtilen metni gizle/göster
    });
});


//4-) METİN DEĞİŞTİR
$(document).ready(function(){
    $("#degistirBtn").click(function(){
        $("#degisecekMetin").text("AKSİ HALDE ULAŞAMAZSINIZ!!");
    });
});


//5-) ARAMA FİLTRELEMESİ
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//6-) BAYRAK DEĞİŞİMİ
$(document).ready(function() {
    $(".gallery img").hover(function() {
        var src = $(this).attr("src"); // Üzerine gelinen bayrağın src değeri
        $(".main-photo").attr("src", src); // Ana bayrağın src değerini değiştir
    });
});

//7-) YAVAŞÇA YOK ETME
$('#yoketme').fadeOut(4000);

//8-) PARAGRAF OLUŞTURMA
$("#btn2").click(function(){
    $("ol").append("<li>Yeni Satır</li>");
});

//9-) FORM YUKARI AŞAĞI
document.getElementById("logoButton").addEventListener("click", function() {
    $("#hareket").css("color", "blue").slideUp(1000).slideDown(2000);
  });

//10-) MÜZİK SESLERİ
$(document).ready(function(){
    
    $(document).keydown(function(e){
        var note = $('.key[data-note="' + e.key.toUpperCase() + '"]');
        if(note.length > 0){
            playSound(note.data('note'));
            note.addClass('active');
        }
    });

    $(document).keyup(function(){
        $('.key').removeClass('active');
    });

  
    $('.key').click(function(){
        var note = $(this).data('note');
        playSound(note);
        $(this).addClass('active');
        setTimeout(function(){
            $('.key').removeClass('active');
        }, 300);
    });

    function playSound(note){
        var audio = $('audio[data-note="' + note + '"]')[0];
        audio.currentTime = 0;
        audio.play();
    }
});