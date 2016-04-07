// iller ve bağlı bilgileri arrayı oluşturuluyor 
var ilListesi = [
  {"adi": "Antalya",    "plaka": 07,  "ilce": ["Manavgat", "Kaş", "Side", "Kemer", "Alanya"]},
  {"adi": "Ankara",     "plaka": 06,  "ilce": ["Polatlı","Haymana", "Çankaya", "Gölbaşı"]},
  {"adi": "İstanbul",   "plaka": 34,  "ilce": ["Beşiktaş", "Esenler", "Mecidiyeköy", "Kadıköy"]},
  {"adi": "Kars",       "plaka": 36,  "ilce": ["Göle", "Aralık", "Posof", "Digor"]}
];

// iller selecti oluşturuluyor. Value olarak indexi atanıyor.
var selectIl = document.getElementById("ilsec");

  for(var i = 0; i < ilListesi.length; i++) {
  var opt = ilListesi[i].adi;
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = i;
  selectIl.appendChild(el);
};
    
// Seçilen ilin indexi value dan okunup bu indexdeki ilceler alınıp ilçeler selectine konuluyor. İl seçimi boş olursa boşaltıyor...
function IlSecildi() {

  var indexi = document.getElementById("ilsec").value;

  if (indexi == "BOS") {

    document.getElementById("ilcesec").options.length = 1;

  } else {

    document.getElementById("ilcesec").options.length = 1;

    var ilceler = ilListesi[indexi].ilce;
    var sel = document.getElementById('ilcesec');

      for(var i = 0; i < ilceler.length; i++) {
      var opt = document.createElement('option');
      opt.innerHTML = ilceler[i];
      opt.value = ilceler[i];
      sel.appendChild(opt);
      };
  };
};