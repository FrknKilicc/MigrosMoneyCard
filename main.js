let mesaj = 
`
Migros'a Hoşgeldiniz

Money Kartınız Var mı ?
1-Evet  2-Hayır
`;

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 150
    },
    {
        urunIsmi: "Et",
        fiyat: 250
    }
];

let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc) {
    let isim = prompt("Adınızı Giriniz:");
    let soyisim = prompt("Soyadınızı Giriniz:");

    const musteri = new Musteri(isim, soyisim, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(`Müşteri Bilgileri: ${isim} ${soyisim}
İndirimli Tutar: ${odenecekTutar}`);
} else {
    const musteri = new Musteri(null, null, sonuc, urunler);
    odenecekTutar = musteri.hesapla();

    alert(`Müşteri Bilgileri:
Ödenecek Tutar: ${odenecekTutar}`);
}
