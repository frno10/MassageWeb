// ===== MULTILINGUAL SYSTEM =====

const translations = {
    sk: {
        // Navigation
        'nav.home': 'Domov',
        'nav.about': 'O mne',
        'nav.services': 'Služby',
        'nav.gallery': 'Galéria',
        'nav.pricing': 'Cenník',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.title.line1': 'Relaxujte.',
        'hero.title.line2': 'Obnovte sa.',
        'hero.title.line3': 'Nájdite rovnováhu.',
        'hero.subtitle': 'Vítajte v útulnom priestore, kde sa môžete úplne relaxovať a nechať sa unášať pocitom pokoja. Každá masáž je prispôsobená vašim potrebám, aby ste odišli s pocitom obnovy a harmónie.',
        'hero.cta': 'Rezervovať masáž',
        
        // About Section
        'about.title': 'O mne',
        'about.paragraph1': 'Som certifikovaná masérka s vášňou pre prirodzenú liečbu a holistické prístupy k zdraviu. Moja filozofia je jednoduchá - každý človek si zaslúži čas na seba a priestor na obnovu.',
        'about.paragraph2': 'Špecializujem sa na relaxačné, terapeutické a športové masáže, ako aj na moderné techniky ako maderoterapia a bankovanie. Každú masáž prispôsobujem potrebám klienta.',
        'about.paragraph3': 'V mojom štúdiu vytváram atmosféru, kde sa môžete cítiť v bezpečí a pokoji. Verím, že masáž nie je len o uvoľnení svalov, ale aj o obnovení vnútornej harmónie.',
        'about.qualifications': 'Kvalifikácie',
        'about.cert1': 'Certifikovaná masérka',
        'about.cert2': 'Špecializácia na maderoterapiu',
        'about.cert3': 'Kurz bankovanej terapie',
        'about.cert4': 'Kontinuálne vzdelávanie',
        
        // Services Section
        'services.title': 'Naše služby',
        'services.subtitle': 'Každá masáž je jedinečný zážitok prispôsobený vašim potrebám',
        'services.classic.title': 'Klasické masáže',
        'services.classic.description': 'Relaxačné, terapeutické a športové masáže pre každú potrebu. Od uvoľnenia po regeneráciu svalov.',
        'services.classic.benefit1': 'Uvoľnenie napätia',
        'services.classic.benefit2': 'Zlepšenie krvného obehu',
        'services.classic.benefit3': 'Regenerácia svalov',
        'services.classic.benefit4': 'Celkové uvoľnenie',
        'services.madero.title': 'Maderoterapia',
        'services.madero.description': 'Drevená terapia využívajúca špeciálne nástroje na tvarovanie tela a hlboké uvoľnenie svalstva.',
        'services.madero.benefit1': 'Tvarovanie siluety',
        'services.madero.benefit2': 'Redukcia celulitídy',
        'services.madero.benefit3': 'Zlepšenie lymfatického systému',
        'services.madero.benefit4': 'Detoxifikácia tela',
        'services.cupping.title': 'Bankovanie (Cupping)',
        'services.cupping.description': 'Starobylá technika používajúca sklenené poháriky na zlepšenie cirkulácie a uvoľnenie napätia. Môže zanechávať dočasné stopy.',
        'services.cupping.benefit1': 'Zlepšenie krvného obehu',
        'services.cupping.benefit2': 'Úľava od bolesti',
        'services.cupping.benefit3': 'Detoxifikácia tkanív',
        'services.cupping.benefit4': 'Redukcia zápalu',
        
        // Gallery Section
        'gallery.title': 'Naše štúdio',
        'gallery.subtitle': 'Útulné prostredie pre váš odpočinok',
        
        // Pricing Section
        'pricing.title': 'Cenník a darčekové poukazy',
        'pricing.subtitle': 'Transparentné ceny pre všetky naše služby',
        'pricing.classic.title': 'Klasické masáže',
        'pricing.classic.relaxation': 'Relaxačná masáž',
        'pricing.classic.therapeutic': 'Terapeutická masáž',
        'pricing.classic.sports': 'Športová masáž',
        'pricing.special.title': 'Špeciálne terapie',
        'pricing.special.madero': 'Maderoterapia',
        'pricing.special.cupping': 'Bankovanie',
        'pricing.special.combo': 'Kombinovaná terapia',
        'pricing.gifts.title': 'Darčekové poukazy',
        'pricing.gifts.description': 'Darujte svojim blízkym chvíle relaxácie. Darčekové poukazy sú dostupné na všetky naše služby a majú platnosť 12 mesiacov.',
        'pricing.gifts.button': 'Objednať darčekový poukaz',
        
        // Testimonials Section
        'testimonials.title': 'Čo hovoria naši klienti',
        'testimonials.review1': 'Úžasná masáž! Cítim sa úplne znovuzrodený. Atmosféra v štúdiu je naozaj upokojujúca a prístup masérky je veľmi profesionálny.',
        'testimonials.author1': 'Mária K.',
        'testimonials.review2': 'Maderoterapia ma úplne nadchla! Po niekoľkých sedeniach vidím výrazné zlepšenie. Určite sa vrátim.',
        'testimonials.author2': 'Petra S.',
        'testimonials.review3': 'Bankovanie mi pomohlo s bolesťou chrbta. Síce to zanechalo stopy, ale úľava bola okamžitá. Odporúčam!',
        'testimonials.author3': 'Ján M.',
        
        // FAQ Section
        'faq.title': 'Často kladené otázky',
        'faq.q1': 'Bolí bankovanie?',
        'faq.a1': 'Bankovanie je spravidla nebolestivé, môže sa však prejaviť mierny pocit ťahu. Zanecháva dočasné červené alebo fialové stopy, ktoré zmiznú do 3-7 dní.',
        'faq.q2': 'Čo je maderoterapia?',
        'faq.a2': 'Maderoterapia je technika používajúca špeciálne drevené nástroje na masáž a tvarovanie tela. Pomáha redukovať celulitídu a zlepšuje tvar siluety.',
        'faq.q3': 'Ako dlho pretrvávają stopy po bankovaní?',
        'faq.a3': 'Stopy po bankovaní sú úplne normálne a bezpečné. Zvyčajne zmiznú do 3-7 dní, v závislosti od typu pokožky a intenzity terapie.',
        'faq.q4': 'Je potrebné sa nejako pripraviť na masáž?',
        'faq.a4': 'Špeciálna príprava nie je potrebná. Odporúčame prísť hydratovaný a nie na prázdny žalúdok. Pred masážou vás informujem o postupe.',
        'faq.q5': 'Ako často by som mal chodiť na masáže?',
        'faq.a5': 'Závisí od vašich potrieb. Pre relaxáciu postačí raz mesačne, pre terapeutické účely môže byť potrebné častejšie - každý týždeň alebo dva týždne.',
        'faq.q6': 'Môžem prísť na masáž počas tehotenstva?',
        'faq.a6': 'Tehotenské masáže poskytujeme po konzultácii s lekárom. Niektoré techniky ako bankovanie a maderoterapia nie sú vhodné počas tehotenstva.',
        
        // Contact Section
        'contact.title': 'Rezervácia a kontakt',
        'contact.subtitle': 'Rezervujte si termín alebo nás kontaktujte',
        'contact.booking.title': 'Online rezervácia',
        'contact.booking.placeholder': 'Rezervačný systém bude integrovaný tu<br>(napr. Termino.eu)',
        'contact.info.title': 'Kontaktné informácie',
        'contact.info.phone': 'Telefón:',
        'contact.info.whatsapp': 'WhatsApp:',
        'contact.info.email': 'Email:',
        'contact.info.address': 'Adresa:',
        'contact.info.hours': 'Otváracie hodiny:',
        'contact.info.schedule': 'Po-Pi: 9:00-19:00, So: 9:00-15:00',
        'contact.map.title': 'Kde nás nájdete',
        'contact.map.placeholder': 'Google Maps mapa bude integrovaná tu',
        'contact.reviews.title': 'Google recenzie',
        'contact.reviews.placeholder': 'Google Reviews widget bude integrovaný tu',
        
        // Footer
        'footer.tagline': 'Váš priestor pre relaxáciu a obnovu',
        'footer.navigation': 'Navigácia',
        'footer.services': 'Služby',
        'footer.contact': 'Kontakt',
        'footer.copyright': '© 2024 Masáže Košice. Všetky práva vyhradené.'
    },
    
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Me',
        'nav.services': 'Services',
        'nav.gallery': 'Gallery',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title.line1': 'Relax.',
        'hero.title.line2': 'Restore.',
        'hero.title.line3': 'Rebalance.',
        'hero.subtitle': 'Welcome to a cozy space where you can completely relax and be carried away by a sense of peace. Each massage is tailored to your needs so you leave feeling renewed and in harmony.',
        'hero.cta': 'Book Your Massage',
        
        // About Section
        'about.title': 'About Me',
        'about.paragraph1': 'I am a certified massage therapist with a passion for natural healing and holistic approaches to health. My philosophy is simple - everyone deserves time for themselves and space for renewal.',
        'about.paragraph2': 'I specialize in relaxation, therapeutic and sports massages, as well as modern techniques like maderotherapy and cupping. I tailor each massage to the client\'s needs.',
        'about.paragraph3': 'In my studio, I create an atmosphere where you can feel safe and at peace. I believe that massage is not just about releasing muscles, but also about restoring inner harmony.',
        'about.qualifications': 'Qualifications',
        'about.cert1': 'Certified Massage Therapist',
        'about.cert2': 'Maderotherapy Specialist',
        'about.cert3': 'Cupping Therapy Certification',
        'about.cert4': 'Continuing Education',
        
        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Each massage is a unique experience tailored to your needs',
        'services.classic.title': 'Classic Massages',
        'services.classic.description': 'Relaxation, therapeutic and sports massages for every need. From relaxation to muscle regeneration.',
        'services.classic.benefit1': 'Tension relief',
        'services.classic.benefit2': 'Improved circulation',
        'services.classic.benefit3': 'Muscle regeneration',
        'services.classic.benefit4': 'Complete relaxation',
        'services.madero.title': 'Maderotherapy',
        'services.madero.description': 'Wood therapy using special tools for body shaping and deep muscle relaxation.',
        'services.madero.benefit1': 'Body contouring',
        'services.madero.benefit2': 'Cellulite reduction',
        'services.madero.benefit3': 'Lymphatic system improvement',
        'services.madero.benefit4': 'Body detoxification',
        'services.cupping.title': 'Cupping Therapy',
        'services.cupping.description': 'Ancient technique using glass cups to improve circulation and release tension. May leave temporary marks.',
        'services.cupping.benefit1': 'Improved blood circulation',
        'services.cupping.benefit2': 'Pain relief',
        'services.cupping.benefit3': 'Tissue detoxification',
        'services.cupping.benefit4': 'Inflammation reduction',
        
        // Gallery Section
        'gallery.title': 'Our Studio',
        'gallery.subtitle': 'Cozy environment for your relaxation',
        
        // Pricing Section
        'pricing.title': 'Pricing & Gift Cards',
        'pricing.subtitle': 'Transparent pricing for all our services',
        'pricing.classic.title': 'Classic Massages',
        'pricing.classic.relaxation': 'Relaxation Massage',
        'pricing.classic.therapeutic': 'Therapeutic Massage',
        'pricing.classic.sports': 'Sports Massage',
        'pricing.special.title': 'Special Therapies',
        'pricing.special.madero': 'Maderotherapy',
        'pricing.special.cupping': 'Cupping',
        'pricing.special.combo': 'Combination Therapy',
        'pricing.gifts.title': 'Gift Cards',
        'pricing.gifts.description': 'Give your loved ones moments of relaxation. Gift cards are available for all our services and are valid for 12 months.',
        'pricing.gifts.button': 'Order Gift Card',
        
        // Testimonials Section
        'testimonials.title': 'What Our Clients Say',
        'testimonials.review1': 'Amazing massage! I feel completely reborn. The atmosphere in the studio is truly calming and the therapist\'s approach is very professional.',
        'testimonials.author1': 'Maria K.',
        'testimonials.review2': 'Maderotherapy completely enchanted me! After several sessions I can see significant improvement. I will definitely be back.',
        'testimonials.author2': 'Petra S.',
        'testimonials.review3': 'Cupping helped me with back pain. Although it left marks, the relief was immediate. I recommend it!',
        'testimonials.author3': 'John M.',
        
        // FAQ Section
        'faq.title': 'Frequently Asked Questions',
        'faq.q1': 'Does cupping hurt?',
        'faq.a1': 'Cupping is usually painless, but you may feel a slight pulling sensation. It leaves temporary red or purple marks that disappear within 3-7 days.',
        'faq.q2': 'What is maderotherapy?',
        'faq.a2': 'Maderotherapy is a technique using special wooden tools for massage and body shaping. It helps reduce cellulite and improve body silhouette.',
        'faq.q3': 'How long do cupping marks last?',
        'faq.a3': 'Cupping marks are completely normal and safe. They usually disappear within 3-7 days, depending on skin type and treatment intensity.',
        'faq.q4': 'Do I need to prepare for the massage?',
        'faq.a4': 'No special preparation is needed. We recommend coming hydrated and not on an empty stomach. I will inform you about the procedure before the massage.',
        'faq.q5': 'How often should I get massages?',
        'faq.a5': 'It depends on your needs. For relaxation, once a month is sufficient, for therapeutic purposes it may be needed more frequently - every week or two weeks.',
        'faq.q6': 'Can I get a massage during pregnancy?',
        'faq.a6': 'We provide pregnancy massages after consultation with a doctor. Some techniques like cupping and maderotherapy are not suitable during pregnancy.',
        
        // Contact Section
        'contact.title': 'Booking & Contact',
        'contact.subtitle': 'Book an appointment or contact us',
        'contact.booking.title': 'Online Booking',
        'contact.booking.placeholder': 'Booking system will be integrated here<br>(e.g., Termino.eu)',
        'contact.info.title': 'Contact Information',
        'contact.info.phone': 'Phone:',
        'contact.info.whatsapp': 'WhatsApp:',
        'contact.info.email': 'Email:',
        'contact.info.address': 'Address:',
        'contact.info.hours': 'Opening Hours:',
        'contact.info.schedule': 'Mon-Fri: 9:00-19:00, Sat: 9:00-15:00',
        'contact.map.title': 'Find Us',
        'contact.map.placeholder': 'Google Maps will be integrated here',
        'contact.reviews.title': 'Google Reviews',
        'contact.reviews.placeholder': 'Google Reviews widget will be integrated here',
        
        // Footer
        'footer.tagline': 'Your space for relaxation and renewal',
        'footer.navigation': 'Navigation',
        'footer.services': 'Services',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2024 Massage Studio Košice. All rights reserved.'
    },
    
    hu: {
        // Navigation
        'nav.home': 'Kezdőlap',
        'nav.about': 'Rólam',
        'nav.services': 'Szolgáltatások',
        'nav.gallery': 'Galéria',
        'nav.pricing': 'Árak',
        'nav.contact': 'Kapcsolat',
        
        // Hero Section
        'hero.title.line1': 'Pihenj.',
        'hero.title.line2': 'Újulj meg.',
        'hero.title.line3': 'Találd meg az egyensúlyt.',
        'hero.subtitle': 'Üdvözöljük egy hangulatos térben, ahol teljesen ellazulhat és elragadhatja a békesség érzése. Minden masszázst az Ön igényeihez igazítunk, hogy megújulva és harmóniában távozzon.',
        'hero.cta': 'Masszázs foglalása',
        
        // About Section
        'about.title': 'Rólam',
        'about.paragraph1': 'Okleveles masszőr vagyok, aki szenvedélyesen foglalkozik a természetes gyógyítással és az egészség holisztikus megközelítésével. A filozófiám egyszerű - mindenki megérdemli, hogy időt szenteljen magának és teret találjon a megújulásra.',
        'about.paragraph2': 'Relaxációs, terápiás és sport masszázsokra specializálódtam, valamint modern technikákra, mint a maderoterápia és köpölés. Minden masszázst a kliens igényeihez igazítok.',
        'about.paragraph3': 'Stúdiómban olyan légkört teremtek, ahol biztonságban és békében érezheti magát. Hiszem, hogy a masszázs nem csak az izmok ellazításáról szól, hanem a belső harmónia helyreállításáról is.',
        'about.qualifications': 'Képesítések',
        'about.cert1': 'Okleveles masszőr',
        'about.cert2': 'Maderoterápia szakértő',
        'about.cert3': 'Köpölő terápia tanúsítvány',
        'about.cert4': 'Folyamatos képzés',
        
        // Services Section
        'services.title': 'Szolgáltatásaink',
        'services.subtitle': 'Minden masszázs egyedülálló élmény, amely az Ön igényeihez igazodik',
        'services.classic.title': 'Klasszikus masszázsok',
        'services.classic.description': 'Relaxációs, terápiás és sport masszázsok minden igényre. A kikapcsolódástól az izmok regenerációjáig.',
        'services.classic.benefit1': 'Feszültség oldása',
        'services.classic.benefit2': 'Vérkeringés javítása',
        'services.classic.benefit3': 'Izmok regenerációja',
        'services.classic.benefit4': 'Teljes ellazulás',
        'services.madero.title': 'Maderoterápia',
        'services.madero.description': 'Faterápia speciális eszközök használatával a test formálására és mély izomellazulásra.',
        'services.madero.benefit1': 'Test formálása',
        'services.madero.benefit2': 'Cellulit csökkentése',
        'services.madero.benefit3': 'Nyirokrendszer javítása',
        'services.madero.benefit4': 'Test méregtelenítése',
        'services.cupping.title': 'Köpölyözés',
        'services.cupping.description': 'Ősi technika üvegkupakok használatával a vérkeringés javítására és a feszültség oldására. Átmeneti nyomokat hagyhat.',
        'services.cupping.benefit1': 'Vérkeringés javítása',
        'services.cupping.benefit2': 'Fájdalomcsillapítás',
        'services.cupping.benefit3': 'Szövet méregtelenítése',
        'services.cupping.benefit4': 'Gyulladás csökkentése',
        
        // Gallery Section
        'gallery.title': 'Stúdiónk',
        'gallery.subtitle': 'Hangulatos környezet az Ön pihenéséhez',
        
        // Pricing Section
        'pricing.title': 'Árak és ajándékutalványok',
        'pricing.subtitle': 'Átlátható árazás minden szolgáltatásunkhoz',
        'pricing.classic.title': 'Klasszikus masszázsok',
        'pricing.classic.relaxation': 'Relaxációs masszázs',
        'pricing.classic.therapeutic': 'Terápiás masszázs',
        'pricing.classic.sports': 'Sport masszázs',
        'pricing.special.title': 'Speciális terápiák',
        'pricing.special.madero': 'Maderoterápia',
        'pricing.special.cupping': 'Köpölyözés',
        'pricing.special.combo': 'Kombinált terápia',
        'pricing.gifts.title': 'Ajándékutalványok',
        'pricing.gifts.description': 'Ajándékozzon szeretteinek pihenés pillanatokat. Ajándékutalványok minden szolgáltatásunkra elérhetők és 12 hónapig érvényesek.',
        'pricing.gifts.button': 'Ajándékutalvány rendelése',
        
        // Testimonials Section
        'testimonials.title': 'Mit mondanak ügyfeleink',
        'testimonials.review1': 'Csodálatos masszázs! Teljesen újjászületettnek érzem magam. A stúdió légköre igazán megnyugtató és a masszőr hozzáállása nagyon professzionális.',
        'testimonials.author1': 'Mária K.',
        'testimonials.review2': 'A maderoterápia teljesen elbűvölt! Néhány ülés után jelentős javulást látok. Biztosan visszatérek.',
        'testimonials.author2': 'Petra S.',
        'testimonials.review3': 'A köpölyözés segített a hátfájdalamban. Bár nyomokat hagyott, a könnyebbülés azonnali volt. Ajánlom!',
        'testimonials.author3': 'János M.',
        
        // FAQ Section
        'faq.title': 'Gyakran ismételt kérdések',
        'faq.q1': 'Fáj a köpölyözés?',
        'faq.a1': 'A köpölyözés általában fájdalmatlan, de lehet, hogy enyhe húzó érzést tapasztal. Átmeneti vörös vagy lila nyomokat hagy, amelyek 3-7 napon belül eltűnnek.',
        'faq.q2': 'Mi a maderoterápia?',
        'faq.a2': 'A maderoterápia egy speciális fa eszközöket használó technika masszázsra és test formálására. Segít csökkenteni a cellulitot és javítani a test sziluettjét.',
        'faq.q3': 'Meddig tartanak a köpölyözés nyomai?',
        'faq.a3': 'A köpölyözés nyomai teljesen normálisak és biztonságosak. Általában 3-7 napon belül eltűnnek, a bőr típusától és a kezelés intenzitásától függően.',
        'faq.q4': 'Fel kell készülnöm a masszázsra?',
        'faq.a4': 'Nincs szükség különleges felkészülésre. Javasoljuk, hogy jöjjön hidratáltan és ne üres gyomorral. A masszázs előtt tájékoztatom az eljárásról.',
        'faq.q5': 'Milyen gyakran járjak masszázsra?',
        'faq.a5': 'Ez az Ön igényeitől függ. Relaxációhoz elegendő havonta egyszer, terápiás célokra gyakrabban lehet szükség - minden héten vagy két héten.',
        'faq.q6': 'Mehetek masszázsra terhesség alatt?',
        'faq.a6': 'Terhességi masszázsokat orvosi konzultáció után nyújtunk. Néhány technika, mint a köpölyözés és maderoterápia nem alkalmas terhesség alatt.',
        
        // Contact Section
        'contact.title': 'Foglalás és kapcsolat',
        'contact.subtitle': 'Foglaljon időpontot vagy lépjen velünk kapcsolatba',
        'contact.booking.title': 'Online foglalás',
        'contact.booking.placeholder': 'Foglalási rendszer lesz itt integrálva<br>(pl. Termino.eu)',
        'contact.info.title': 'Kapcsolati információk',
        'contact.info.phone': 'Telefon:',
        'contact.info.whatsapp': 'WhatsApp:',
        'contact.info.email': 'Email:',
        'contact.info.address': 'Cím:',
        'contact.info.hours': 'Nyitvatartás:',
        'contact.info.schedule': 'Hé-Pé: 9:00-19:00, Szó: 9:00-15:00',
        'contact.map.title': 'Találjon meg minket',
        'contact.map.placeholder': 'Google Maps lesz itt integrálva',
        'contact.reviews.title': 'Google értékelések',
        'contact.reviews.placeholder': 'Google Reviews widget lesz itt integrálva',
        
        // Footer
        'footer.tagline': 'Az Ön tere a pihenéshez és megújuláshoz',
        'footer.navigation': 'Navigáció',
        'footer.services': 'Szolgáltatások',
        'footer.contact': 'Kapcsolat',
        'footer.copyright': '© 2024 Masszázs Stúdió Kassa. Minden jog fenntartva.'
    }
};

// ===== LANGUAGE MANAGEMENT =====

let currentLanguage = 'sk';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update all elements with data-key attributes
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Update page title
    const titleMap = {
        sk: 'Masáže | Relaxácia a Obnova | Košice',
        en: 'Massage | Relaxation & Renewal | Košice',
        hu: 'Masszázs | Pihenés és Megújulás | Kassa'
    };
    document.title = titleMap[lang];
    
    // Update meta description
    const descriptionMap = {
        sk: 'Profesionálne masáže v Košiciach. Relaxačné, terapeutické, športové masáže, maderoterapia a bankovanie. Rezervujte si svoj termín.',
        en: 'Professional massages in Košice. Relaxation, therapeutic, sports massages, maderotherapy and cupping. Book your appointment.',
        hu: 'Professzionális masszázsok Kassán. Relaxációs, terápiás, sport masszázsok, maderoterápia és köpölyözés. Foglaljon időpontot.'
    };
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = descriptionMap[lang];
    }
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// ===== MOBILE NAVIGATION =====

function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ===== SMOOTH SCROLLING =====

function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====

function initializeActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavigation);
    updateActiveNavigation(); // Initial call
}

// ===== FAQ ACCORDION =====

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===== SCROLL ANIMATIONS =====

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elements to animate
    const animateElements = document.querySelectorAll('.service-item, .gallery-item, .testimonial-item, .pricing-category');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ===== NAVBAR SCROLL EFFECT =====

function initializeNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(254, 254, 254, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// ===== FORM HANDLING =====

function initializeFormHandling() {
    // Gift card button
    const giftCardButton = document.querySelector('.gift-cards-button');
    if (giftCardButton) {
        giftCardButton.addEventListener('click', () => {
            // Open WhatsApp or email for gift card inquiry
            const message = encodeURIComponent('Ahoj, zaujíma ma darčekový poukaz na masáže. Môžete mi poslať viac informácií?');
            window.open(`https://wa.me/421901234567?text=${message}`, '_blank');
        });
    }
    
    // Contact links
    document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href^="https://wa.me/"]').forEach(link => {
        link.addEventListener('click', (e) => {
            // Add analytics tracking here if needed
            console.log('Contact link clicked:', link.href);
        });
    });
}

// ===== GALLERY LIGHTBOX (Simple) =====

function initializeGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('.gallery-image');
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <img src="${img.src}" alt="${img.alt}">
                    <button class="lightbox-close">&times;</button>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close lightbox
            const closeBtn = lightbox.querySelector('.lightbox-close');
            [closeBtn, lightbox].forEach(element => {
                element.addEventListener('click', (e) => {
                    if (e.target === element) {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = '';
                    }
                });
            });
        });
    });
}

// ===== PERFORMANCE OPTIMIZATION =====

function initializePerformanceOptimizations() {
    // Lazy loading for images (if needed)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Preload critical images
    const criticalImages = [
        'https://placehold.co/1920x1080/d4c4a8/5d5d5d?text=Peaceful+Massage+Studio'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// ===== ACCESSIBILITY ENHANCEMENTS =====

function initializeAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.className = 'skip-link visually-hidden';
    skipLink.textContent = 'Skip to main content';
    skipLink.addEventListener('focus', () => {
        skipLink.classList.remove('visually-hidden');
    });
    skipLink.addEventListener('blur', () => {
        skipLink.classList.add('visually-hidden');
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Keyboard navigation for mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                document.getElementById('nav-toggle').classList.remove('active');
                document.body.style.overflow = '';
            }
            
            // Close any open lightboxes
            const lightbox = document.querySelector('.lightbox');
            if (lightbox) {
                document.body.removeChild(lightbox);
                document.body.style.overflow = '';
            }
        }
    });
    
    // Focus management
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', () => {
    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'sk';
    setLanguage(savedLanguage);
    
    // Initialize all modules
    initializeNavigation();
    initializeSmoothScrolling();
    initializeActiveNavigation();
    initializeFAQ();
    initializeScrollAnimations();
    initializeNavbarScroll();
    initializeFormHandling();
    initializeGallery();
    initializePerformanceOptimizations();
    initializeAccessibility();
    
    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    console.log('Massage Studio website initialized successfully!');
});

// ===== LIGHTBOX STYLES (Added dynamically) =====

const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }
    
    .lightbox img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -15px;
        right: -15px;
        width: 40px;
        height: 40px;
        background: var(--white);
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        transition: all 0.2s ease;
    }
    
    .lightbox-close:hover {
        transform: scale(1.1);
        background: var(--primary);
        color: var(--white);
    }
    
    .skip-link {
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: var(--white);
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        font-weight: 500;
        transition: top 0.2s ease;
        z-index: 1001;
    }
    
    .skip-link:focus {
        top: 6px;
    }
`;
document.head.appendChild(lightboxStyles);
