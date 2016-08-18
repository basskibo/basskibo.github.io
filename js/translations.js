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
        },

        WEB_DEVELOPMENT_INFO:{
            en: 'Web site design and application of a unique look, adjusted and optimized for all kind of devices. In consultation with you, we come to the best possible implementation of your ideas.',
            rs: 'Izrada web stranica kao i aplikacija jedinstvenog izgleda, prilagođene i optimizovane svim uređajima. U dogovoru sa vama dolazimo do najbolje moguće implementacije vaših ideja.'
        },

        OPTIMIZACIJA:{
            en: 'Website Optimization',
            rs: 'Optimizacija sajta'
        },

        OPTIMIZACIJA_INFO:{
            en: 'A very important part of making Web site. We take care that page is adjusted for all search engines like Google Chrome, Safari, Mozilla Firefox, etc.',
            rs: 'Veoma bitan segment izrade svakog sajta. Mi posebno vodimo računa da stranice bude prilagodjene svim pretrazivacima poput Google Chrome, Safari, Mozilla Firefox itd.'
        },

        ANALITIKA:{
            en:'Web analytics',
            rs:'Web Analitika'
        },

        ANALITIKA_INFO:{
            en:'You can see how mutch visitors your website had for a day, a week, a month, from which locations are your visitors, how long they stayed on a page and which pages are most popular for your visitors as well as lots of other useful information.',
            rs:'Omogućavamo Vam uvid u broj poseta dnevno, nedeljno, mesečno, sa koje lokacije su Vaši posetioci najzastupljeniiji, koliko su se zadržali na stranici i koje su stranice najpopularnije Vašim posetiocima kao i mnoge druge korisne informacije.'
        },

         DVOJEZICNOST:{
            en:'Multi language website',
            rs:'Dvojezicna stranica'
        },

        DVOJEZICNOST_INFO:{
            en:'We offer you a Multi language website. It is important that you have Multi language website because of easier understanding with other countries',
            rs:'Nudimo vam i dvojezični prikaz web stranice, zbog lakšeg sporazumevanja sa potrošačima širom sveta.'
        },

        POVOLJNO:{
            en:'Affordable',
            rs:'Povoljno'
        },

        POVOLJNO_INFO:{
            en:'If You do not correspond to the prices listed, contact us and we willmake a package just for you at a price that fits Your budget.',
            rs:'Ukoliko Vam navedene cene ne odgovaraju, kontaktirajte nas i osmislićemo paket samo za vas po ceni koja odgovara Vašem budžetu.'
        },

        BREND_NASLOV:{
            en:'Brand and marketing',
            rs:'Brend i marketing'
        },

        DMREZE:{
            en: 'social media administration',
            rs: 'Reklamirajte se na društvenim mrežama'
        },

        DMREZE_INFO:{
            en: 'Currently social networks play the biggest role in modern marketing. We offer you a social media administration on the most popular social networks such as Facebook, Twitter, like Instagram and many others.',
            rs: 'U današnje vreme društvene mreže igraju najvecu ulogu u savremenom marketingu. Mi Vam nudimo otvaranje i održavanje stranica na najpopularnijim socijalnim mrežama poput Facebook-a, Twitter-a, Instagram-a kao i mnoge druge koje imaju milione aktivnih korisnika.'
        },

        BREND:{
            en:'Brand design',
            rs:'Brend dizajn'
        },

        BREND_INFO:{
            en:'We offr you a original logo design and redesign of the old one. Also we design business cards, leaflets, posters and other promotional material',
            rs:'Nudimo Vam i dizajn jedinstvenog logotipa ili redizajn postojeceg, pomoću kojeg će Vas lakše prepoznati na tržištu. Takođe dizajniramo i vizitkarte, flajere, plakate i ostali reklamni materijal.'
        },

         MOBILEDEV:{
            en:'Mobile Development',
            rs:'Mobile Development'
        },

        MOBILEDEV_INFO:{
            en:'We are developing mobile apps in frameworks like Ionic and phonegap.More you can find in our portfolio.',
            rs:'Takodje pravimo i mobilne aplikacije koje vam mogu olakšati poslovanje sa potrosačima.'
        },

        PODRSKA:{

            en:'Support',
            rs:'Podrška'
        },

        PODRSKA_INFO:{

            en:'If you have some questions or need our help,contact us and our support team will answer in no time.',
            rs:'Ukoliko imate neka pitanja ili vam je potrebna naša pomoć, kontaktirajte nas i naš tim će se odmah odazvati'
        }









        
    };
    var _t = $('body').translate({lang: "rs", t: t});


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        ev.preventDefault();
    });



});
