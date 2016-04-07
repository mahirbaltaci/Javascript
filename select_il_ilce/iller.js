// iller ve bağlı bilgileri arrayı oluşturuluyor. Valla hepsini yazamadım şimdilik. İnternette bulunur. :)
var ilListesi = [
  {"adi": "Adana",          "ilce": ["Aladağ", "Ceyhan", "Çukurova", "Feke", "İmamoğlu", "Karaisalı", "Karataş", "Kozan", "Pozantı", "Saimbeyli", "Sarıçam", "Seyhan", "Tufanbeyli", "Yumurtalık", "Yüreğir"]},
  {"adi": "Adıyaman",       "ilce": ["Besni", "Çelikhan", "Gerger", "Gölbaşı", "Kahta", "Samsat", "Sincik", "Tut"]},
  {"adi": "Afyonkarahisar", "ilce": ["Başmakçı", "Bayat", "Bolvadin", "Çay", "Çobanlar", "Dazkırı", "Dinar", "Emirdağ", "Evciler", "Hocalar", "İhsaniye", "İscehisar", "Kızılören", "Sandıklı", "Sİnanpaşa", "Sultandağı", "Şuhut"]},
  {"adi": "Antalya",        "ilce": ["Manavgat", "Kaş", "Side", "Kemer", "Alanya"]},
  {"adi": "Ankara",         "ilce": ["Polatlı","Haymana", "Çankaya", "Gölbaşı"]},
  {"adi": "İstanbul",       "ilce": ["Beşiktaş", "Esenler", "Mecidiyeköy", "Kadıköy"]},
  {"adi": "Kars",           "ilce": ["Göle", "Aralık", "Posof", "Digor"]}
];

// iller selecti oluşturuluyor. Value olarak index değeri atanıyor.
var selectIl = document.getElementById("ilsec");

  for(var i = 0; i < ilListesi.length; i++) {
  var opt = ilListesi[i].adi;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = i;
  selectIl.appendChild(el);
};
    
// Seçilen ilin alınan index değerindeki ilceler alınıp selecte ekleniyor.
function IlSecildi() {

  var indexi = document.getElementById("ilsec").value;

  if (indexi == "BOS") {
    
    // İlk eleman hariç boşaltılıyor
    document.getElementById("ilcesec").options.length = 1;

  } else {
    
    // İlk eleman hariç boşaltılıyor
    document.getElementById("ilcesec").options.length = 1;
    
    // ve yeni elemanlar ekleniyor
    var ilceler = ilListesi[indexi].ilce;
    var sel = document.getElementById('ilcesec');

      for(var i = 0; i < ilceler.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = ilceler[i];
      opt.value = i;
      sel.appendChild(opt);
      };
  };
};