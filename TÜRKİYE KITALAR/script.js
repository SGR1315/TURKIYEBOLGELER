document.addEventListener("DOMContentLoaded", function() {
  
    var bolgeler = {
        "MARMARA-BÖLGESİ": ["İstanbul", "Bursa", "Balıkesir", "Çanakkale", "Kırklareli", "Edirne", "Tekirdağ", "Yalova", "Sakarya", "Bilecik"],
        "EGE-BÖLGESİ": ["İzmir", "Muğla", "Aydın", "Manisa", "Denizli", "Uşak", "Kütahya"],
        "AKDENİZ-BÖLGESİ": ["Antalya", "Mersin", "Adana", "Hatay", "İçel", "Osmaniye", "Kahramanmaraş", "Burdur", "Isparta"],
        "İÇANADOLU-BÖLGESİ": ["Ankara", "Konya", "Kayseri", "Eskişehir", "Aksaray", "Karaman", "Nevşehir", "Niğde", "Kırıkkale", "Kırşehir"],
        "KARADENİZ-BÖLGESİ": ["Trabzon", "Rize", "Artvin", "Giresun", "Ordu", "Gümüşhane", "Tokat", "Sinop", "Samsun", "Çorum", "Amasya", "Bolu", "Düzce", "Zonguldak", "Karabük", "Bartın"],
        "DOĞUANADOLU-BÖLGESİ": ["Erzurum", "Erzincan", "Ağrı", "Van", "Bitlis", "Muş", "Bingöl", "Hakkari", "Şırnak", "Ardahan", "Kars", "Iğdır", "Tunceli", "Elazığ", "Malatya"],
        "GÜNEYDOĞUANADOLU-BÖLGESİ": ["Gaziantep", "Şanlıurfa", "Diyarbakır", "Mardin", "Adıyaman", "Siirt", "Batman", "Şırnak", "Kilis"]
    };

    var areas = document.getElementsByTagName("area");
    for (var i = 0; i < areas.length; i++) {
        areas[i].addEventListener("click", function(event) {
            event.preventDefault();
            var bolgeAdi = this.getAttribute("title");
            var iller = bolgeler[bolgeAdi];
            var illerMetni = iller.join(", ");
            alert(bolgeAdi + " Bölgesi illeri: " + illerMetni);
        });
    }
});
