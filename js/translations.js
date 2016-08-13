$(function() {

    var t = {

        WELCOME:{
          en:'Welcome To Iguana Development',
          rs:'Dobrodošli na Iguana Development'
        },
        WELCOME2:{
          en:'We make wishes come true.',
          rs:'Mi ostvarujemo vaše želje'
        },
        SERVICE: {
            en: "SERVICE",
            rs: "USLUGE"
        },
        SERVICE2: {
            rs: "Usluge koje vam nudimo možete pogledati ispod",
            en: "We offer exceptional service with complimentary hugs"
        },
        PORTFOLIO:{
            en:'Portfolio',
            rs:'Portfolio'
        },
        TEAM:{
            en:'Team',
            rs:'Tim'
        },
        CONTACT:{
            en:'Contact Us',
            rs:'Kontaktirajte Nas'
        },
        NAME:{
            en:'Name *',
            rs:'Ime *'
        },
        GETSTARTED: {
            en: 'Get Started',
            rs: 'Saznaj više'
        },
        MESSAGE: {
            en:'Message *',
            rs:'Poruka *'
        },

        PORTFOLIOimg: {
            en:'Our prtfolio',
            rs:'Naš portfolio'
        },

        FEATUREDWORK: {
            en:'Featured work',
            rs:'Istaknuti radovi'
        },

        ALL: {
            en: 'All',
            rs: 'Sve'
        },

        WEBDEVELOPMENT:{
            en:'Web development',
            rs:'Web development'
        },

        LOGODESIGN: {
            en: 'Logo Design',
            rs: 'Logo dizajn'
        },

        PORTFOLIOopis: {
            en: 'Here you can see our work.',
            rs: 'Ovde možete videti naše dosadašnje radove.'
        },

        TEAMinfo: {
            en: 'Meet our team',
            rs: 'Upoznajte naš tim'
        },

        TEAMdetail: {
            en:'Here you can see more informations about our team.',
            rs:'Ovde mozete videti više informacija o našem timu'
        },

        DESIGNER: {
            en:'Designer/ Web Developer',
            rs:'Dizajner/ Web Developer'
        },

        COFOUNDER:{
            en:'Co-founder',
            rs:'Suosnivač'
        },

        CEOCOFOUNDER:{
            en: 'CEO/ Co-founder',
            rs: 'CEO/ Suosnivač'
        },

        ADDRESS: {
            en: 'Addres',
            rs: 'Adresa'
        },

        CONTACT: {
            en: 'Contact Us',
            rs: 'Kontaktirajte nas'
        },

        PRICING: {
            en:'Pricing',
            rs:'Cenovnik'
        }






        
    };
    var _t = $('body').translate({lang: "rs", t: t});


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        ev.preventDefault();
    });



});
