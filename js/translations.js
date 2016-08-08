$(function() {

    var t = {

        WELCOME:{
          en:'Welcome To Iguana Development',
          rs:'Dobrodosli u Iguana Development'
        },
        WELCOME2:{
          en:'Where your dreams come true.',
          rs:'Gde se vasi snovi ostvaruju'
        },
        SERVICE: {
            en: "SERVICE",
            rs: "USLUGE"
        },
        SERVICE2: {
            rs: "Usluge koje vam nudimo mozete pogledati ispod",
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
        }
    };
    var _t = $('body').translate({lang: "rs", t: t});


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        ev.preventDefault();
    });



});
