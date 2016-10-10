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
            rs: "Usluge koje Vam mi nudimo, tačnije samo neke od njih.",
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
            rs:'Ukoliko želite da nas unajmite ili imate neko pitanje, slobodno nas kontaktirajte.'
        },
        NAME:{
            en:'Name: *',
            rs:'Ime: *'
        },
        SEND_MESSAGE:{
            en: 'Send Message',
            rs: 'Pošalji'
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

        MOBILE_DEV:{
            en:'Mobile development',
            rs:'Razvoj mobilnih aplikacija'
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
            rs:'Ovde možete videti više informacija o našem timu'
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
            en: 'CEO',
            rs: 'CEO'
        },

        ADRESS: {
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
	        en: 'See more',
	        rs: 'Saznaj više '
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
            rs: 'Veoma bitan segment izrade svakog sajta. Mi posebno vodimo računa da stranice bude prilagođene svim pretrazivačima poput Google Chrome, Safari, Mozilla Firefox itd.'
        },

        ANALITIKA:{
            en:'Web analytics',
            rs:'Web Analitika'
        },

        ANALITIKA_INFO:{
            en:'You can see how mutch visitors your website had for a day, a week, a month, from which locations are your visitors, how long they stayed on a page and which pages are most popular for your visitors as well as lots of other useful information.',
            rs:'Omogućavamo Vam uvid u broj poseta dnevno, nedeljno, mesečno, sa koje lokacije su Vaši posetioci najzastupljeniji, koliko su se zadržali na stranici i koje su stranice najpopularnije Vašim posetiocima kao i mnoge druge korisne informacije.'
        },

         DVOJEZICNOST:{
            en:'Multi language website',
            rs:'Dvojezična stranica'
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
            rs: 'U današnje vreme društvene mreže igraju najveću ulogu u savremenom marketingu. Mi Vam nudimo otvaranje i održavanje stranica na najpopularnijim socijalnim mrežama poput Facebook-a, Twitter-a, Instagram-a kao i mnoge druge koje imaju milione aktivnih korisnika.'
        },

        BREND:{
            en:'Brand design',
            rs:'Brend dizajn'
        },

        BREND_INFO:{
            en:'We offr you a original logo design and redesign of the old one. Also we design business cards, leaflets, posters and other promotional material',
            rs:'Nudimo Vam i dizajn jedinstvenog logotipa ili redizajn postojećeg, pomoću kojeg će Vas lakše prepoznati na tržištu. Takođe dizajniramo i vizitkarte, flajere, plakate i ostali reklamni materijal.'
        },

         MOBILEDEV:{
            en:'Android Development',
            rs:'Android Development'
        },

         MOBILEDEV2:{
            en:'IOS Development',
            rs:'IOS Development'
        },

        MOBILEDEV_INFO:{
            en:'If you want to exand your business on the fastest growing market, you need to have an application for that. We can make it for you.',
            rs:'Ukoliko želite da proširite Vaš biznis na tržište sa najvećim rastom, potrebna Vam je aplikacija za to. Mi Vam to i nudimo.'
        },

         MOBILEDEV_INFO2:{
            en:'First thought that associate everyone with the word Apple is perfect quality and spotless design. Together we can design and make application that suits your needs. ',
            rs:'Prve asocijacije na rec Apple su savršen kvalitet i besprekoran dizajn. Zajedno možemo osmisliti i napraviti aplikaciju po Vašoj meri.  '
        },

        PODRSKA:{

            en:'Support',
            rs:'Podrška'
        },

        PODRSKA_INFO:{

            en:'If you have some questions or need our help,contact us and our support team will answer in no time.',
            rs:'Ukoliko imate neka pitanja ili vam je potrebna naša pomoć, kontaktirajte nas i naš tim će se odmah odazvati'
        },

        FROM: { 
            en:'from',
            rs:'od'
        },

        BREND:{
            en: 'Branding',
            rs: 'Brending'

        },

        APPLICATION:{
            en: 'Application',
            rs: 'Aplikacija'
        },

        UNIDIZ: {
            en:'Unique design',
            rs: 'Unikatan dizajn'
        },
        RESSTR: {
            en:'Responsive pages',
            rs: 'Responzivne stranice'
        },
        SEOO: {
            en:'SEO optimization, Gallery...', 
            rs: 'SEO optimizacija, Galerija...'
        },
        KONF: {
            en:'Contact form',
            rs: 'Kontakt forma'
        },
        VISJ: {
            en:'Multi language website',
            rs: 'Višejezičnost'
        },
        PODIODR: {
            en:'Support and administration',
            rs: 'Podrška i održavanje'
        },
        OTDM:{
            en: 'Creating profile for social networks',
            rs: 'Otvaranje profila na društvenim mrežama'

        },
        ODRDM:{
            en: 'Social media administration',
            rs: 'Održavanje profila na društvenim mrežama'

        },
        DL:{
            en: 'Logo design',
            rs: 'Dizajn logotipa'

        },
        DFC:{
            en: 'A flyer and price lists design',
            rs: 'Dizajn flajera, cenovnika'

        },
        DVK:{
            en: 'Business card design',
            rs: 'Dizajn vizit kartica'

        },
        DORM:{
            en: 'Design of promotional material',
            rs: 'Dizajn ostalog reklamnog materijala'

        },

        WA: { 
            en:'Web application',
            rs:'Web aplikacija'
        },

        MA: { 
            en:'Mobile application',
            rs:'Mobilna aplikacija'
        },

        BP: { 
            en:'D atabase',
            rs:'Baza podataka'
        },

        CMSS: { 
            en:'CMS system',
            rs:'CMS sistem'
        },

        WPIB: { 
            en:'Web portal or Web blog ',
            rs:'Web portal ili blog'
        },

        WP: { 
            en:'Web store',
            rs:'Web prodavnica'
        },

        DOGOVOR: { 
            en:'Negotiable',
            rs:'Po dogovoru'
        },

        SSIIW: { 
            en:'Including everything from website',
            rs:'Sve što ima i website'
        },

        BPMQ: { 
            en:'Database (MySQL, PostgreSQL, MSQL, MongoDB',
            rs:'Baza podataka (MySQL, PostgreSQL, MSQL, MongoDB'
        },

        CMSSSS: { 
            en:'CMS system - manually creation and modification of materials ',
            rs:'CMS Sistem, odnosno samostalno uređivanje i postavljanje novog materijala'
        },

        INSDS: { 
            en:'Integration with other systems',
            rs:'Integracija sa drugim sistemima'
        },

        WFWPB: { 
            en:'Web forum, web store, blog',
            rs:'Web forum, web prodavnica, blog'
        },

        IZPVZ: { 
            en:'Custom software development',
            rs:'Izrada po Vašoj želji'
        },

        AOS: { 
            en:'Android operating system',
            rs:'Android operativni sistem'
        },

        IOSOS: { 
            en:'IOS operating system',
            rs:'IOS operativni sistem'
        },

        WEBMA:{ 
            en:'Web + Mobile application',
            rs:'Web + Mobilna aplikacija'
        },
        OVPRIMCGI:{ 
            en:'Design your business solution and we will implement it',
            rs:'Osmislite Vaše poslovno rešenje i mi ćemo ga implementirati'
        },
        SOVPMVBDIPMU:{ 
            en:'With this package your information may be accessible via mobile devices',
            rs:'Sa ovim paketom Vaši podaci mogu Vam biti dostupni i preko mobilnog uređaja'
        },

        ZATVORI:{ 
            en:'Close',
            rs:'Zatvori'
        },

        BASICP:{ 
            en:'Basic package',
            rs:'BASIC Paket'
        },
        OD50E:{ 
            en:'From 50€',
            rs:'Od 50€'
        },
        D10S:{ 
            en:'Up to 10 pages',
            rs:'Do 10 stranica'
        },
        UNID:{ 
            en:'Unique design',
            rs:'Unikatan dizajn'
        },
        RDPSU:{ 
            en:'Responsive design, makes your web page look good on all devices',
            rs:'Responsive dizajn, prilagodljiv svim uređjima'
        },
        OSO:{ 
            en:'Basic SEO Optimization',
            rs:'Osnovna SEO optimizacija'
        },
        KFF:{ 
            en:'Contact form',
            rs:'Kontakt forma'
        },
        BDPGD:{ 
            en:'First year free domain',
            rs:'Besplatan domen prvih godinu dana'
        },

        CUSTOMP:{ 
            en:'Custom package',
            rs:'Custom Paket'
        },
        OPOSBSZ:{ 
            en:'This package is determined by you, choose what you want, and after consultation we determine the price',
            rs:'Ovaj paket određujete sami, birate šta želite i nakon dogovora određujemo cenu u dogovoru sa vama'
        },
        FSPVZ:{ 
            en:'Website form of your choice',
            rs:'Forma sajta po vašoj želji'
        },

        NORMALP:{ 
            en:'Normal package',
            rs:'Normal paket'
        },

        OD150E:{ 
            en:'From 150€',
            rs:'Od 150€'
        },
        NBS:{ 
            en:'Unlimited number of pages',
            rs:'Neograničen broj stranica'
        },
        
        NSEOO:{ 
            en:'Advanced SEO optimization',
            rs:'Napredna SEO optimizacija'
        },
        GALER:{ 
            en:'Gallery',
            rs:'Galerija'
        },
        ANKET:{ 
            en:'Survey',
            rs:'Anketa'
        },
        PFNM:{ 
            en:'Showing company on the map',
            rs:'Prikaz kompanije na mapi'
        },
        PSDM:{ 
            en:'Connecting with social networks',
            rs:'Povezivanje sa društvenim mrežama'
        },
        REDISIGNP:{ 
            en:'Redesign',
            rs:'Redizajn paket'
        },
        OD10E:{ 
            en:'From 10€',
            rs:'Od 10€'
        },
        RKS:{ 
            en:'Redesign of the existing website',
            rs:'Redizajn kompletnog sajta'
        },
        ZFE:{ 
            en:'Replacement of flash elements',
            rs:'Zamena Flash elementa'
        },
        DNF:{ 
            en:'Adding new functionality',
            rs:'Dodavanje novih funkcionalnosti'
        },
        JIGSPS:{ 
            en:'One-time troubleshooting with the existing site',
            rs:'Jednokratno ispravljanje grešaka sa postojećeg sajta'
        },

        ODRZAVANJEP:{ 
            en:'Maintenance package',
            rs:'Održavanje paket'
        },
        MASNSUZOVP:{ 
            en:'A monthly update on the website, depending on your needs',
            rs:'Mesečno ažuriranje sadržaja na sajtu u zavisnosti od Vaših potreba'
        },
        MBP:{ 
            en:'Monthly backup',
            rs:'Mesečni bekap'
        },

        BASM:{ 
            en:'Branding and social networks',
            rs:'Brending i društvene mreže'
        },
        DRMRE:{ 
            en:'Social networks',
            rs:'Društvene mreže'
        },
        ODMPSFTI:{ 
            en:'Creating profiles for social networks like Facebook, Twitter, Instagram...',
            rs:'Otvaranje društvenih mreža: Facebook, Twitter, Instagram...'
        },
        SODM:{ 
            en:'Daily maintenance of profiles on social networks',
            rs:'Svakodnevno održavanje akaunta društvenih mreža'
        },
        OBNS:{ 
            en:'The publication of new content',
            rs:'Objavljivanje novog sadržaja'
        },
        KSPIFPC:{ 
            en:'Communicating with visitors and fans via chat',
            rs:'Komuniciranje sa posetiocima i fanovima putem chata'
        },

        DM:{ 
            en:'T-shirt design',
            rs:'Dizajn majci'
        },
        DIZAJN:{ 
            en:'Design',
            rs:'Dizajn'
        },
        OD20E:{ 
            en:'From 20€',
            rs:'Od 20€'
        },
        DCEN:{ 
            en:'Price list design',
            rs:'Dizajn cenovnika'
        },
        DFLAJ:{ 
            en:'Flyer design',
            rs:'Dizajn flajera'
        },
        DPIPO:{ 
            en:'Poster design',
            rs:'Dizajn plakata i postera'
        },

        WEBSITE:{
            en:'Website',
            rs:'Websajt'
        },
        INFO:{
            en:'How did you found us ?',
            rs:'Kako ste nas pronasli ?'
        },
        OPT:{
            en:'Directly',
            rs:'Direktno'
        },
        OPT1:{
            en:'Through friend',
            rs:'Preko prijatelja'
        },
        OPT2:{
            en:'Through social networks',
            rs:'Preko društvenih mreza'
        },
        OPT3:{
            en:'Through advertisment',
            rs:'Preko reklama'
        }











        
    };
    var _t = $('body').translate({lang: "en", t: t});


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);
        ev.preventDefault();
    });



});
