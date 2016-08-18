$(function() {

    var t = {

        WELCOME:{
          en:'Welcome To Iguana Development',
          rs:'Dobrodošli na Iguana Development'
        },
        WELCOME2:{
          en:'where your problem disappear',
          rs:'Gde vaši problemi nestaju'
        },
        SERVICE: {
            en: "SERVICE",
            rs: "USLUGE"
        },
        SERVICE2: {
            rs: "Usluge koje Vam mi nudimo, tacnije samo neke od njih.",
            en: "Some of the offers we offer, to be more precise just some of them."
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
        CONTACT_MORE:{
            en:'If you want to hire us or have some questions, feel free to ask.',
            rs:'Ukoliko zelite da nas unajmite ili imate neko pitanje, slobodno nas kontaktirajte.'
        },
        NAME:{
            en:'Name: *',
            rs:'Ime: *'
        },
        SEND_MESSAGE:{
            en: 'Send Message',
            rs: 'Posalji'
        },
        GETSTARTED: {
            en: 'Get Started',
            rs: 'Saznaj više'
        },
        EMAIL:{
            en: 'Email: *',
            rs: 'Email: *'
        },
        EMAIL2:{
                      en: 'Email',
                      rs: 'Email'
        },
        MESSAGE: {
            en:'Message: *',
            rs:'Poruka: *'
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
            en: 'Address',
            rs: 'Adresa'
        },
        PRICING: {
            en:'Pricing' ,
            rs:'Cenovnik'
        },

	    TELEPHONE: {
	        en:'Telephone',
	        rs:'Telefon'
	    },
	    PRICING_MORE:{
	        en:'here you can see packages that we offer and their prices.',
	        rs:'Ovde možete videti pakete koje nudimo i hjihove cene.'
	    },
	    SEE_MORE:{
	        en: 'web development packages',
	        rs: 'Web development paketi'
	    },

        SEE_MORE2:{
            en: 'Branding packages',
            rs: 'Brending paketi'
        },

        SEE_MORE3:{
            en: 'Mobile development packages',
            rs: 'Mobilni development paketi'
        },          

        NAZAD:{
            en: 'Back',
            rs: 'Nazad'
        }







        
    };
    var _t = $('body').translate({lang: "rs", t: t});


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        ev.preventDefault();
    });



});
