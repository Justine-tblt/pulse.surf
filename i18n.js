// ─────────────────────────────────────────────────────────────
//  Pulse Surf — i18n.js
//  Langues : en | fr | de | es
// ─────────────────────────────────────────────────────────────

const TRANSLATIONS = {

  /* ══════════════════════════════════════════════════════════
     ENGLISH  (référence — textes originaux du site)
  ══════════════════════════════════════════════════════════ */
  en: {
    /* — Navigation — */
    "nav.home":    "Home",
    "nav.about":   "About",
    "nav.courses": "Courses",
    "nav.contact": "Contact",
    "nav.book":    "Book a session",

    /* — Hero (index) — */
    "hero.title":  "CATCH THE <span>PERFECT WAVE</span>",

    /* — About — */
    "about.label":   "About Me",
    "about.title":   "Anza born,<br>surfing soul",
    "about.p1":      "My name is Yassine, I'm 22 years old and I was born in Anza. I grew up by the ocean and started surfing from a young age.",
    "about.p2":      "For me, surfing is more than a sport. It's a way to disconnect from everything, clear my mind, and truly connect with the ocean. Today, I want to share this feeling with others — that's why I created Pulse Surf.",
    "about.p3":      "Let's catch some waves together. 🏄‍♂️",
    "about.pill1":   "Local knowledge",
    "about.pill2":   "Certified instructor",
    "about.pill3":   "All levels welcome",

    /* — Courses section — */
    "courses.title": "Our surf packages",
    "courses.sub":   "Whether you're stepping on a board for the first time or chasing your next milestone — there's a session made for you.",

    /* — Course cards — */
    "card.private.badge":  "Tailor-made",
    "card.private.title":  "Private Lesson",
    "card.private.for":    "<span>For</span> Beginners wanting solid foundations or experienced surfers refining a specific technique.",
    "card.private.plus":   "<span>✦</span> A coach 100% focused on you — faster and safer progress.",
    "card.private.price":  "From 300 MAD",
    "card.private.eur":    "~28 €",
    "card.more":           "More details",

    "card.group.badge":    "Most fun",
    "card.group.title":    "Group Lesson",
    "card.group.for":      "<span>For</span> Those who love group energy and want to share their first waves with fellow enthusiasts.",
    "card.group.plus":     "<span>✦</span> Fun, motivating atmosphere — discover the joy of surfing together.",
    "card.group.price":    "From 200 MAD",
    "card.group.eur":      "~19 €",

    "card.guiding.title":  "Surf Guiding",
    "card.guiding.for":    "<span>For</span> Autonomous surfers who want to skip hours of searching for the right spot.",
    "card.guiding.plus":   "<span>✦</span> Right spot, right time — based on conditions and your level.",
    "card.guiding.price":  "500 MAD",
    "card.guiding.eur":    "~47 €",

    /* — How a lesson works — */
    "how.title":       "How a lesson works",
    "how.sub":         "From sand to standing — here's what your session looks like",
    "how.step1.title": "Check-In &amp; Gear Up",
    "how.step1.desc":  "Board, wetsuit, leash — all sized and fitted to you before you hit the water.",
    "how.step1.tag":   "Gear",
    "how.step2.title": "Beach Briefing",
    "how.step2.desc":  "Spot intro, ocean safety, reading the waves and technique focus tailored to your level.",
    "how.step2.tag":   "Safety",
    "how.step3.title": "Water Time",
    "how.step3.desc":  "Live coaching in the water, repetitions on the best waves, and a lot of smiles.",
    "how.step3.tag":   "Action",
    "how.step4.title": "Debrief",
    "how.step4.desc":  "What clicked, what to improve — one clear goal to carry into your next session.",
    "how.step4.tag":   "Progress",
    "how.bring.title": "What to bring",
    "how.bring.items": "Swimwear &nbsp;·&nbsp; Sunscreen &nbsp;·&nbsp; Water &nbsp;·&nbsp; Towel",

    /* — Reviews — */
    "reviews.title":  "Testimonials",
    "review1.name":   "Sarah L.",
    "review1.text":   "Honestly, the best surf days! I was a bit scared of the waves at first, but Yassine is so chill and patient that I felt safe right away. We went to a spot near Anza with almost no one else around. Caught so many waves. Thanks again!",
    "review2.name":   "Morgane M.",
    "review2.text":   "A true local who really shares his love for the ocean. The location is magical and the coaching is spot on. You won't regret booking with him.",
    "review3.name":   "Mehdi W.",
    "review3.text":   "Perfect experience for beginners! Very safe, fun and the spot in Taghazout is absolutely breathtaking.",
    "review4.name":   "Natalia R.",
    "review4.text":   "The absolute highlight of my trip! Such good energy in the water and the best vibes. I'll definitely be back for more sessions.",

    /* — Contact — */
    "contact.label":         "Get in touch",
    "contact.title":         "Let's catch<br>some waves",
    "contact.intro":         "Do you have a question about a session, want to check availability, or just say hello? Fill out the form and I'll get back to you within 24 hours.",
    "form.fname":            "First name",
    "form.lname":            "Last name",
    "form.email":            "Email",
    "form.session":          "Session type",
    "form.session.choose":   "Choose a session…",
    "form.session.private":  "Private Lesson",
    "form.session.group":    "Group Lesson",
    "form.session.guiding":  "Surf Guiding",
    "form.session.other":    "Other / Question",
    "form.message":          "Message",
    "form.message.ph":       "Tell me about your level, your dates, any questions…",
    "form.submit":           "Send message",
    "form.sending":          "Sending…",
    "form.success.title":    "Message sent!",
    "form.success.body":     "Thanks for contacting me! I received your message and will get back to you very soon. I'm looking forward to surfing with you.<br><br>See you in the water!<br><br>Yassine",
    "form.err.fname":        "Please enter your first name",
    "form.err.lname":        "Please enter your last name",
    "form.err.email":        "Please enter a valid email address",
    "form.err.session":      "Please select a session type",
    "form.err.message":      "Please write a short message",

    /* — Footer — */
    "footer.col1.title":   "Pulse Surf",
    "footer.legal":        "Legal notice",
    "footer.col2.title":   "This may interest you",
    "footer.packages":     "Packages &amp; Prices",
    "footer.how":          "How a lesson works",
    "footer.about":        "About me",
    "footer.col3.title":   "Contact",
    "footer.copyright":    "© 2026 Pulse Surf — All rights reserved",
    "footer.credit":       "Website by",

    /* — Legal modal — */
    "modal.title":         "Legal Notice",
    "modal.publisher":     "Site Publisher",
    "modal.hosting":       "Hosting",
    "modal.hosting.text":  "This site is hosted by <strong>GitHub Inc.</strong>, 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA.",
    "modal.ip":            "Intellectual Property",
    "modal.ip.text":       "All content on this site (texts, photos, logos) is protected by copyright law.",
    "modal.credits":       "Credits",
    "modal.credits.text":  "Site designed and developed by",

    /* — Sub-pages (private / group / guiding) — */
    "back":                        "Back",
    "subpage.alllevels":           "All levels welcome · Anza · Taghazout · Agadir · Tamraght",
    "subpage.chooseyourpack":      "Choose your",
    "subpage.pack":                "pack",

    "private.label":               "Private Lessons",
    "pack.single":                 "Single Session",
    "pack.starter":                "Starter Pack",
    "pack.intensive":              "Intensive Pack",
    "pack.popular":                "Most popular",
    "pack.1h.title":               "1H Surf Lesson",
    "pack.2h.title":               "2H Surf Lesson",
    "pack.3d.title":               "3 Days Pack",
    "pack.5d.title":               "5 Days Pack",
    "pack.instructor":             "Surf Instructor",
    "pack.board":                  "Surfboard &amp; Wetsuit included",
    "pack.briefing":               "Beach briefing &amp; safety intro",
    "pack.moretime":               "More water time, more waves",
    "pack.3x":                     "3 × 2h Surf Lessons",
    "pack.5x":                     "5 × 2h Surf Lessons",
    "pack.progressive":            "Progressive coaching across days",
    "pack.max":                    "Maximum progression guaranteed",
    "pack.book":                   "Book on WhatsApp",

    "group.label":                 "Group Lessons",

    "guiding.label":               "Surf Guiding",
    "guiding.title":               "The right wave,",
    "guiding.span":                "every time",
    "guiding.sub":                 "For intermediate &amp; advanced surfers who want the best waves without wasting time.",
    "guiding.what":                "What's included",
    "guiding.session.title":       "Surf Guiding Session",
    "guiding.inc1":                "Spot selection based on daily conditions",
    "guiding.inc2":                "Transport to the best surf spot",
    "guiding.inc3":                "Local surf knowledge",
    "guiding.inc4":                "Safety guidance",
    "guiding.perperson":           "per person",
    "guiding.duration.label":      "Duration",
    "guiding.duration.val":        "Half Day",
    "guiding.duration.desc":       "3 to 4 hours on the water, adapted to the conditions of the day.",
    "guiding.group.label":         "Group size",
    "guiding.group.val":           "Max 4 surfers",

    /* — Contact page — */
    "contact.page.title":          "Let's catch<br>some waves",
    
    "guiding.intro": "For intermediate &amp; advanced surfers who want the <strong>best waves without wasting time.</strong><br>Discover hidden spots and surf the right wave at the right time, based on swell, wind and your level.",
    "guiding.pill.halfday": "Half day — 3 to 4h",
    "guiding.pill.max4": "Max 4 surfers",
    "guiding.pill.level": "Intermediate &amp; advanced",

    "contact.page.intro":          "Have a question about a session, want to check availability, or just say hello? Fill in the form and I will get back to you within 24h.",
  },

  /* ══════════════════════════════════════════════════════════
     FRANÇAIS
  ══════════════════════════════════════════════════════════ */
  fr: {
    "nav.home":    "Accueil",
    "nav.about":   "À propos",
    "nav.courses": "Cours",
    "nav.contact": "Contact",
    "nav.book":    "Réserver une session",

    "hero.title":  "PRENEZ LA <span>VAGUE PARFAITE</span>",

    "about.label":   "À propos de moi",
    "about.title":   "Né à Anza,<br>Passionné par l'océan",
    "about.p1":      "Je m'appelle Yassine, j'ai 22 ans et je suis né à Anza. J'ai grandi au bord de l'océan et j'ai commencé le surf très jeune.",
    "about.p2":      "Pour moi, le surf c'est bien plus qu'un sport. C'est une façon de déconnecter complètement, de vider la tête et de me connecter vraiment à l'océan. Aujourd'hui, j'ai envie de partager cette sensation — c'est pourquoi j'ai créé Pulse Surf.",
    "about.p3":      "On se retrouve sur les vagues ! 🏄‍♂️",
    "about.pill1":   "Connaissances locales",
    "about.pill2":   "Instructeur certifié",
    "about.pill3":   "Tous niveaux bienvenus",

    "courses.title": "Nos formules surf",
    "courses.sub":   "Que tu poses les pieds sur une planche pour la première fois ou que tu travailles sur ta prochaine progression — il y a une session faite pour toi.",

    "card.private.badge":  "Sur mesure",
    "card.private.title":  "Cours particulier",
    "card.private.for":    "<span>Pour</span> Les débutants souhaitant des bases solides ou les surfeurs expérimentés qui affinent une technique précise.",
    "card.private.plus":   "<span>✦</span> Un coach 100 % concentré sur toi — une progression plus rapide et plus sûre.",
    "card.private.price":  "À partir de 300 MAD",
    "card.private.eur":    "~28 €",
    "card.more":           "Plus de détails",

    "card.group.badge":    "Le plus fun",
    "card.group.title":    "Cours collectif",
    "card.group.for":      "<span>Pour</span> Ceux qui aiment l'énergie de groupe et veulent partager leurs premières vagues avec d'autres passionnés.",
    "card.group.plus":     "<span>✦</span> Ambiance fun et motivante — découvre le plaisir du surf ensemble.",
    "card.group.price":    "À partir de 200 MAD",
    "card.group.eur":      "~19 €",

    "card.guiding.title":  "Surf Guiding",
    "card.guiding.for":    "<span>Pour</span> Les surfeurs autonomes qui veulent éviter des heures de recherche du bon spot.",
    "card.guiding.plus":   "<span>✦</span> Le bon spot, au bon moment — selon les conditions et ton niveau.",
    "card.guiding.price":  "500 MAD",
    "card.guiding.eur":    "~47 €",

    "how.title":       "Comment se déroule un cours",
    "how.sub":         "Du sable à la vague — voici à quoi ressemble ta session",
    "how.step1.title": "Accueil &amp; Équipement",
    "how.step1.desc":  "Planche, combinaison, leash — l'équipement est adapté à ton gabarit et à ton niveau, avant de mettre les pieds dans l'eau.",
    "how.step1.tag":   "Équipement",
    "how.step2.title": "Briefing sur la plage",
    "how.step2.desc":  "Présentation du spot, sécurité en mer, lecture des vagues et focus technique adapté à ton niveau.",
    "how.step2.tag":   "Sécurité",
    "how.step3.title": "À l'eau !",
    "how.step3.desc":  "Coaching en direct dans l'eau, répétitions sur les meilleures vagues, et beaucoup de sourires.",
    "how.step3.tag":   "Action",
    "how.step4.title": "Débriefing",
    "how.step4.desc":  "Ce qui a bien marché, ce qu'on améliore — un objectif clair à emporter pour ta prochaine session.",
    "how.step4.tag":   "Progression",
    "how.bring.title": "Ce qu'il faut apporter",
    "how.bring.items": "Maillot &nbsp;·&nbsp; Crème solaire &nbsp;·&nbsp; Eau &nbsp;·&nbsp; Serviette",

    "reviews.title":  "Témoignages",
    "review1.name":   "Sarah L.",
    "review1.text":   "Honnêtement, les meilleures journées surf ! J'avais un peu peur des vagues au début, mais Yassine est tellement calme et patient que je me suis sentie en sécurité tout de suite. On est allés sur un spot près d'Anza, presque désert. J'ai pris tellement de vagues. Merci encore !",
    "review2.name":   "Morgane M.",
    "review2.text":   "Un vrai local qui partage vraiment sa passion pour l'océan. Le cadre est magique et le coaching est parfait. Vous ne regretterez pas de réserver avec lui.",
    "review3.name":   "Mehdi W.",
    "review3.text":   "Une expérience parfaite pour les débutants ! Très sécurisé, fun, et le spot à Taghazout est absolument à couper le souffle.",
    "review4.name":   "Natalia R.",
    "review4.text":   "Le moment fort de mon voyage ! Une super énergie dans l'eau et une ambiance géniale. Je reviendrai forcément pour d'autres sessions.",

    "contact.label":         "Nous contacter",
    "contact.title":         "Allons prendre<br>des vagues",
    "contact.intro":         "Tu as une question sur une session, tu veux vérifier les disponibilités ou juste dire bonjour ? Remplis le formulaire et je te réponds sous 24h.",
    "form.fname":            "Prénom",
    "form.lname":            "Nom",
    "form.email":            "Email",
    "form.session":          "Type de session",
    "form.session.choose":   "Choisis une session…",
    "form.session.private":  "Cours particulier",
    "form.session.group":    "Cours collectif",
    "form.session.guiding":  "Surf Guiding",
    "form.session.other":    "Autre / Question",
    "form.message":          "Message",
    "form.message.ph":       "Parle-moi de ton niveau, tes dates, tes questions…",
    "form.submit":           "Envoyer le message",
    "form.sending":          "Envoi…",
    "form.success.title":    "Message envoyé !",
    "form.success.body":     "Merci pour ton message ! Je l'ai bien reçu et je te réponds très vite. J'ai hâte de surfer avec toi.<br><br>À bientôt dans l'eau !<br><br>Yassine",
    "form.err.fname":        "Merci d'entrer ton prénom",
    "form.err.lname":        "Merci d'entrer ton nom",
    "form.err.email":        "Merci d'entrer une adresse email valide",
    "form.err.session":      "Merci de choisir un type de session",
    "form.err.message":      "Merci d'écrire un court message",

    "footer.col1.title":   "Pulse Surf",
    "footer.legal":        "Mentions légales",
    "footer.col2.title":   "Ça pourrait t'intéresser",
    "footer.packages":     "Formules &amp; Tarifs",
    "footer.how":          "Comment se déroule un cours",
    "footer.about":        "À propos de moi",
    "footer.col3.title":   "Contact",
    "footer.copyright":    "© 2026 Pulse Surf — Tous droits réservés",
    "footer.credit":       "Site créé par",

    "modal.title":         "Mentions légales",
    "modal.publisher":     "Éditeur du site",
    "modal.hosting":       "Hébergement",
    "modal.hosting.text":  "Ce site est hébergé par <strong>GitHub Inc.</strong>, 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, États-Unis.",
    "modal.ip":            "Propriété intellectuelle",
    "modal.ip.text":       "Tout le contenu de ce site (textes, photos, logos) est protégé par le droit d'auteur.",
    "modal.credits":       "Crédits",
    "modal.credits.text":  "Site conçu et développé par",

    "back":                        "Retour",
    "subpage.alllevels":           "Tous niveaux bienvenus · Anza · Taghazout · Agadir · Tamraght",
    "subpage.chooseyourpack":      "Choisissez votre",
    "subpage.pack":                "formule",

    "private.label":               "Cours particuliers",
    "pack.single":                 "Session unique",
    "pack.starter":                "Pack découverte",
    "pack.intensive":              "Pack intensif",
    "pack.popular":                "Le plus populaire",
    "pack.1h.title":               "Cours surf 1H",
    "pack.2h.title":               "Cours surf 2H",
    "pack.3d.title":               "Pack 3 jours",
    "pack.5d.title":               "Pack 5 jours",
    "pack.instructor":             "Instructeur surf",
    "pack.board":                  "Planche &amp; Combinaison incluses",
    "pack.briefing":               "Briefing plage &amp; intro sécurité",
    "pack.moretime":               "Plus de temps à l'eau, plus de vagues",
    "pack.3x":                     "3 × 2h de cours de surf",
    "pack.5x":                     "5 × 2h de cours de surf",
    "pack.progressive":            "Coaching progressif sur plusieurs jours",
    "pack.max":                    "Progression maximale garantie",
    "pack.book":                   "Réserver sur WhatsApp",
    "card.group.star":              "Atmosphère fun et motivante : goûtez au plaisir du surf, ensemble !",

    "group.label":                 "Cours collectifs",

    "guiding.label":               "Surf Guiding",
    "guiding.title":               "La bonne vague,",
    "guiding.span":                "à chaque fois",
    "guiding.sub":                 "Pour les surfeurs intermédiaires &amp; avancés qui veulent les meilleures vagues sans perdre de temps.",
    "guiding.what":                "Ce qui est inclus",
    "guiding.session.title":       "Session Surf Guiding",
    "guiding.inc1":                "Choix du spot selon les conditions du jour",
    "guiding.inc2":                "Transport jusqu'au meilleur spot",
    "guiding.inc3":                "Connaissance locale du surf",
    "guiding.inc4":                "Encadrement sécurité",
    "guiding.perperson":           "par personne",
    "guiding.duration.label":      "Durée",
    "guiding.duration.val":        "Demi-journée",
    "guiding.duration.desc":       "3 à 4 heures à l'eau, adaptées aux conditions du jour.",
    "guiding.group.label":         "Taille du groupe",
    "guiding.group.val":           "4 surfeurs max",


    "guiding.group.taille":        "Groupes restreints uniquement : un accompagnement personnalisé et plus de vagues pour tous",
    "contact.text": "Une question sur une séance, un besoin de vérifier les disponibilités ou simplement envie de dire bonjour ? Remplissez le formulaire et je vous recontacterai sous 24 heures.",
    "contact.page.title":          "Allons prendre<br>des vagues",
    "form.success.text": "Merci de m'avoir contacté ! J'ai bien reçu votre message et je vous recontacterai très vite. J'ai hâte de surfer avec vous. <br> <br> À bientôt dans l'eau ! <br> <br>Yassine",
    
    "guiding.intro": "Pour les surfeurs intermédiaires &amp; avancés qui veulent les <strong>meilleures vagues sans perdre de temps.</strong><br>Découvrez des spots cachés et surfez la bonne vague au bon moment, selon la houle, le vent et ton niveau.",
    "guiding.pill.halfday": "Demi-journée — 3 à 4h",
    "guiding.pill.max4": "4 surfeurs max",
    "guiding.pill.level": "Intermédiaire &amp; avancé",

    "contact.page.intro":          "Tu as une question sur une session, tu veux vérifier les disponibilités ou juste dire bonjour ? Remplis le formulaire et je te réponds sous 24h.",
  },

  /* ══════════════════════════════════════════════════════════
     DEUTSCH
  ══════════════════════════════════════════════════════════ */
  de: {
    "nav.home":    "Startseite",
    "nav.about":   "Über mich",
    "nav.courses": "Kurse",
    "nav.contact": "Kontakt",
    "nav.book":    "Session buchen",

    "hero.title":  "REITE DIE <span>PERFEKTE WELLE</span>",

    "about.label":   "Über mich",
    "about.title":   "In Anza geboren,<br>Surfer-Seele",
    "about.p1":      "Ich heiße Yassine, bin 22 Jahre alt und wurde in Anza geboren. Ich bin am Meer aufgewachsen und habe schon früh mit dem Surfen angefangen.",
    "about.p2":      "Für mich ist Surfen mehr als ein Sport. Es ist eine Möglichkeit, abzuschalten, den Kopf freizumachen und wirklich mit dem Ozean verbunden zu sein. Heute möchte ich dieses Gefühl mit anderen teilen — deshalb habe ich Pulse Surf gegründet.",
    "about.p3":      "Lass uns gemeinsam Wellen reiten! 🏄‍♂️",
    "about.pill1":   "Lokales Wissen",
    "about.pill2":   "Zertifizierter Instructor",
    "about.pill3":   "Alle Niveaus willkommen",

    "courses.title": "Unsere Surf-Pakete",
    "courses.sub":   "Ob du zum ersten Mal auf einem Brett stehst oder an deinem nächsten Meilenstein arbeitest — es gibt eine Session für dich.",

    "card.private.badge":  "Maßgeschneidert",
    "card.private.title":  "Privatstunde",
    "card.private.for":    "<span>Für</span> Anfänger, die eine solide Basis aufbauen möchten, oder erfahrene Surfer, die eine bestimmte Technik verfeinern.",
    "card.private.plus":   "<span>✦</span> Ein Coach 100 % auf dich fokussiert — schnellere und sicherere Fortschritte.",
    "card.private.price":  "Ab 300 MAD",
    "card.private.eur":    "~28 €",
    "card.more":           "Mehr Details",
    "card.group.star":     "Eine spaßige und motivierende Atmosphäre – entdeckt gemeinsam die Freude am Surfen.",


    "card.group.badge":    "Am meisten Spaß",
    "card.group.title":    "Gruppenunterricht",
    "card.group.for":      "<span>Für</span> Alle, die die Gruppenenergie lieben und ihre ersten Wellen mit anderen Enthusiasten teilen möchten.",
    "card.group.plus":     "<span>✦</span> Spaßige, motivierende Atmosphäre — entdecke die Freude am Surfen gemeinsam.",
    "card.group.price":    "Ab 200 MAD",
    "card.group.eur":      "~19 €",

    "card.guiding.title":  "Surf Guiding",
    "card.guiding.for":    "<span>Für</span> Selbstständige Surfer, die stundenlange Suche nach dem richtigen Spot vermeiden wollen.",
    "card.guiding.plus":   "<span>✦</span> Richtiger Spot, richtiger Moment — basierend auf den Bedingungen und deinem Niveau.",
    "card.guiding.price":  "500 MAD",
    "card.guiding.eur":    "~47 €",

    "how.title":       "Wie eine Stunde abläuft",
    "how.sub":         "Vom Sand bis zum Stehen — so sieht deine Session aus",
    "how.step1.title": "Check-In &amp; Ausrüstung",
    "how.step1.desc":  "Brett, Neoprenanzug, Leash — alles auf dich zugeschnitten, bevor du ins Wasser gehst.",
    "how.step1.tag":   "Ausrüstung",
    "how.step2.title": "Strand-Briefing",
    "how.step2.desc":  "Spot-Einführung, Meeressicherheit, Wellenlesen und Technikfokus angepasst an dein Niveau.",
    "how.step2.tag":   "Sicherheit",
    "how.step3.title": "Zeit im Wasser",
    "how.step3.desc":  "Live-Coaching im Wasser, Wiederholungen auf den besten Wellen und viele Lächeln.",
    "how.step3.tag":   "Action",
    "how.step4.title": "Nachbesprechung",
    "how.step4.desc":  "Was gut geklappt hat, was wir verbessern — ein klares Ziel für deine nächste Session.",
    "how.step4.tag":   "Fortschritt",
    "how.bring.title": "Was du mitbringen solltest",
    "how.bring.items": "Badeanzug &nbsp;·&nbsp; Sonnencreme &nbsp;·&nbsp; Wasser &nbsp;·&nbsp; Handtuch",

    "reviews.title":  "Bewertungen",
    "review1.name":   "Sarah L.",
    "review1.text":   "Ehrlich gesagt die besten Surf-Tage! Am Anfang hatte ich etwas Angst vor den Wellen, aber Yassine ist so entspannt und geduldig, dass ich mich sofort sicher fühlte. Wir gingen zu einem Spot bei Anza, fast menschenleer. Ich habe so viele Wellen erwischt. Danke nochmal!",
    "review2.name":   "Morgane M.",
    "review2.text":   "Ein echter Einheimischer, der seine Leidenschaft für den Ozean wirklich teilt. Der Ort ist magisch und das Coaching trifft genau ins Schwarze. Du wirst es nicht bereuen, bei ihm zu buchen.",
    "review3.name":   "Mehdi W.",
    "review3.text":   "Perfekte Erfahrung für Anfänger! Sehr sicher, viel Spaß und der Spot in Taghazout ist einfach atemberaubend.",
    "review4.name":   "Natalia R.",
    "review4.text":   "Das absolute Highlight meiner Reise! Solche gute Energie im Wasser und die beste Atmosphäre. Ich komme definitiv für weitere Sessions zurück.",

    "contact.label":         "Kontakt aufnehmen",
    "contact.title":         "Lass uns Wellen<br>reiten",
    "contact.intro":         "Hast du eine Frage zu einer Session, möchtest die Verfügbarkeit prüfen oder einfach Hallo sagen? Füll das Formular aus und ich melde mich innerhalb von 24 Stunden.",
    "form.fname":            "Vorname",
    "form.lname":            "Nachname",
    "form.email":            "E-Mail",
    "form.session":          "Sessiontyp",
    "form.session.choose":   "Session wählen…",
    "form.session.private":  "Privatstunde",
    "form.session.group":    "Gruppenunterricht",
    "form.session.guiding":  "Surf Guiding",
    "form.session.other":    "Sonstiges / Frage",
    "form.message":          "Nachricht",
    "form.message.ph":       "Erzähl mir von deinem Niveau, deinen Daten, deinen Fragen…",
    "form.submit":           "Nachricht senden",
    "form.sending":          "Senden…",
    "form.success.title":    "Nachricht gesendet!",
    "form.success.body":     "Danke für deine Nachricht! Ich habe sie erhalten und melde mich sehr bald. Ich freue mich darauf, mit dir zu surfen.<br><br>Bis bald im Wasser!<br><br>Yassine",
    "form.err.fname":        "Bitte gib deinen Vornamen ein",
    "form.err.lname":        "Bitte gib deinen Nachnamen ein",
    "form.err.email":        "Bitte gib eine gültige E-Mail-Adresse ein",
    "form.err.session":      "Bitte wähle einen Sessiontyp",
    "form.err.message":      "Bitte schreib eine kurze Nachricht",

    "footer.col1.title":   "Pulse Surf",
    "footer.legal":        "Impressum",
    "footer.col2.title":   "Das könnte dich interessieren",
    "footer.packages":     "Pakete &amp; Preise",
    "footer.how":          "Wie eine Stunde abläuft",
    "footer.about":        "Über mich",
    "footer.col3.title":   "Kontakt",
    "footer.copyright":    "© 2026 Pulse Surf — Alle Rechte vorbehalten",
    "footer.credit":       "Website von",

    "modal.title":         "Impressum",
    "modal.publisher":     "Websitebetreiber",
    "modal.hosting":       "Hosting",
    "modal.hosting.text":  "Diese Website wird gehostet von <strong>GitHub Inc.</strong>, 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, USA.",
    "modal.ip":            "Geistiges Eigentum",
    "modal.ip.text":       "Alle Inhalte dieser Website (Texte, Fotos, Logos) sind urheberrechtlich geschützt.",
    "modal.credits":       "Credits",
    "modal.credits.text":  "Website gestaltet und entwickelt von",

    "back":                        "Zurück",
    "subpage.alllevels":           "Alle Niveaus willkommen · Anza · Taghazout · Agadir · Tamraght",
    "subpage.chooseyourpack":      "Wähle dein",
    "subpage.pack":                "Paket",

    "private.label":               "Privatstunden",
    "pack.single":                 "Einzelsession",
    "pack.starter":                "Einsteiger-Paket",
    "pack.intensive":              "Intensiv-Paket",
    "pack.popular":                "Am beliebtesten",
    "pack.1h.title":               "1H Surf-Stunde",
    "pack.2h.title":               "2H Surf-Stunde",
    "pack.3d.title":               "3-Tage-Paket",
    "pack.5d.title":               "5-Tage-Paket",
    "pack.instructor":             "Surf-Instructor",
    "pack.board":                  "Surfbrett &amp; Neoprenanzug inklusive",
    "pack.briefing":               "Strand-Briefing &amp; Sicherheitseinweisung",
    "pack.moretime":               "Mehr Zeit im Wasser, mehr Wellen",
    "pack.3x":                     "3 × 2h Surf-Stunden",
    "pack.5x":                     "5 × 2h Surf-Stunden",
    "pack.progressive":            "Progressives Coaching über mehrere Tage",
    "pack.max":                    "Maximaler Fortschritt garantiert",
    "pack.book":                   "Auf WhatsApp buchen",

    "group.label":                 "Gruppenunterricht",

    "guiding.label":               "Surf Guiding",
    "guiding.title":               "Die richtige Welle,",
    "guiding.span":                "jedes Mal",
    "guiding.sub":                 "Für mittlere &amp; fortgeschrittene Surfer, die die besten Wellen ohne Zeitverlust wollen.",
    "guiding.what":                "Was enthalten ist",
    "guiding.session.title":       "Surf Guiding Session",
    "guiding.inc1":                "Spot-Auswahl basierend auf den täglichen Bedingungen",
    "guiding.inc2":                "Transport zum besten Surf-Spot",
    "guiding.inc3":                "Lokales Surf-Wissen",
    "guiding.inc4":                "Sicherheitsbegleitung",
    "guiding.perperson":           "pro Person",
    "guiding.duration.label":      "Dauer",
    "guiding.duration.val":        "Halber Tag",
    "guiding.duration.desc":       "3 bis 4 Stunden im Wasser, angepasst an die Bedingungen des Tages.",
    "guiding.group.label":         "Gruppengröße",
    "guiding.group.val":           "Max. 4 Surfer",

    "contact.page.title":          "Lass uns Wellen<br>reiten",
    "guiding.group.taille":   "Nur kleine Gruppen: Persönliches Coaching und mehr Wellen für alle.",
    "contact.text":           "Hast du eine Frage zu einer Session, möchtest die Verfügbarkeit prüfen oder einfach nur Hallo sagen? Füll das Formular aus und ich melde mich innerhalb von 24 Stunden bei dir.",
    "contact.page.title":     "Lass uns Wellen<br>reiten gehen",
    "form.success.text":      "Vielen Dank für deine Nachricht! Ich habe sie erhalten und melde mich sehr bald bei dir. Ich freue mich schon darauf, mit dir zu surfen. <br> <br> Bis bald im Wasser! <br> <br>Yassine",
    
    "guiding.intro": "Für mittlere &amp; fortgeschrittene Surfer, die die <strong>besten Wellen ohne Zeitverlust</strong> wollen.<br>Entdecke versteckte Spots und surfe die richtige Welle zur richtigen Zeit — nach Swell, Wind und deinem Niveau.",
    "guiding.pill.halfday": "Halber Tag — 3 bis 4h",
    "guiding.pill.max4": "Max. 4 Surfer",
    "guiding.pill.level": "Mittel &amp; fortgeschritten",
    

    "contact.page.intro":          "Hast du eine Frage zu einer Session, möchtest die Verfügbarkeit prüfen oder einfach Hallo sagen? Füll das Formular aus und ich melde mich innerhalb von 24 Stunden.",

    
  },

  /* ══════════════════════════════════════════════════════════
     ESPAÑOL
  ══════════════════════════════════════════════════════════ */
  es: {
    "nav.home":    "Inicio",
    "nav.about":   "Sobre mí",
    "nav.courses": "Cursos",
    "nav.contact": "Contacto",
    "nav.book":    "Reservar sesión",

    "hero.title":  "ATRAPA LA <span>OLA PERFECTA</span>",

    "about.label":   "Sobre mí",
    "about.title":   "Nacido en Anza,<br>alma surfera",
    "about.p1":      "Me llamo Yassine, tengo 22 años y nací en Anza. Crecí junto al océano y empecé a surfear desde pequeño.",
    "about.p2":      "Para mí, el surf es mucho más que un deporte. Es una forma de desconectar de todo, despejar la mente y conectar de verdad con el océano. Hoy quiero compartir esta sensación con los demás — por eso creé Pulse Surf.",
    "about.p3":      "¡Vamos a coger olas juntos! 🏄‍♂️",
    "about.pill1":   "Conocimiento local",
    "about.pill2":   "Instructor certificado",
    "about.pill3":   "Todos los niveles bienvenidos",

    "courses.title": "Nuestros paquetes de surf",
    "courses.sub":   "Tanto si subes a una tabla por primera vez como si buscas superar tu próximo reto — hay una sesión hecha para ti.",

    "card.private.badge":  "A medida",
    "card.private.title":  "Clase particular",
    "card.private.for":    "<span>Para</span> Principiantes que quieren unas bases sólidas o surfistas experimentados que perfeccionan una técnica específica.",
    "card.private.plus":   "<span>✦</span> Un coach 100 % enfocado en ti — progreso más rápido y seguro.",
    "card.private.price":  "Desde 300 MAD",
    "card.private.eur":    "~28 €",
    "card.more":           "Más detalles",
    "card.group.star":     "Un ambiente divertido y motivador: descubran juntos el placer del surf.",


    "card.group.badge":    "La más divertida",
    "card.group.title":    "Clase en grupo",
    "card.group.for":      "<span>Para</span> Los que aman la energía de grupo y quieren compartir sus primeras olas con otros entusiastas.",
    "card.group.plus":     "<span>✦</span> Ambiente divertido y motivador — descubre el placer del surf en compañía.",
    "card.group.price":    "Desde 200 MAD",
    "card.group.eur":      "~19 €",

    "card.guiding.title":  "Surf Guiding",
    "card.guiding.for":    "<span>Para</span> Surfistas autónomos que quieren ahorrarse horas de búsqueda del spot perfecto.",
    "card.guiding.plus":   "<span>✦</span> El spot adecuado, en el momento adecuado — según las condiciones y tu nivel.",
    "card.guiding.price":  "500 MAD",
    "card.guiding.eur":    "~47 €",

    "how.title":       "Cómo funciona una clase",
    "how.sub":         "De la arena a la ola — así es tu sesión",
    "how.step1.title": "Check-In &amp; Equipo",
    "how.step1.desc":  "Tabla, traje, leash — todo ajustado a tu talla antes de entrar al agua.",
    "how.step1.tag":   "Equipo",
    "how.step2.title": "Briefing en la playa",
    "how.step2.desc":  "Presentación del spot, seguridad en el mar, lectura de olas y técnica adaptada a tu nivel.",
    "how.step2.tag":   "Seguridad",
    "how.step3.title": "Tiempo en el agua",
    "how.step3.desc":  "Coaching en directo en el agua, repeticiones en las mejores olas y muchas sonrisas.",
    "how.step3.tag":   "Acción",
    "how.step4.title": "Análisis final",
    "how.step4.desc":  "Qué funcionó, qué mejorar — un objetivo claro para llevar a tu próxima sesión.",
    "how.step4.tag":   "Progreso",
    "how.bring.title": "Qué traer",
    "how.bring.items": "Bañador &nbsp;·&nbsp; Protector solar &nbsp;·&nbsp; Agua &nbsp;·&nbsp; Toalla",

    "reviews.title":  "Testimonios",
    "review1.name":   "Sarah L.",
    "review1.text":   "¡Sinceramente, los mejores días de surf! Al principio tenía un poco de miedo a las olas, pero Yassine es tan tranquilo y paciente que me sentí segura enseguida. Fuimos a un spot cerca de Anza casi desierto. Cogí tantísimas olas. ¡Gracias de nuevo!",
    "review2.name":   "Morgane M.",
    "review2.text":   "Un auténtico local que comparte de verdad su amor por el océano. El lugar es mágico y el coaching es perfecto. No te arrepentirás de reservar con él.",
    "review3.name":   "Mehdi W.",
    "review3.text":   "¡Experiencia perfecta para principiantes! Muy seguro, divertido, y el spot en Taghazout es absolutamente impresionante.",
    "review4.name":   "Natalia R.",
    "review4.text":   "¡El punto culminante de mi viaje! Energía increíble en el agua y el mejor ambiente. Definitivamente volveré para más sesiones.",

    "contact.label":         "Contactar",
    "contact.title":         "Vamos a coger<br>olas juntos",
    "contact.intro":         "¿Tienes alguna pregunta sobre una sesión, quieres comprobar disponibilidad o simplemente saludar? Rellena el formulario y te responderé en 24 horas.",
    "form.fname":            "Nombre",
    "form.lname":            "Apellido",
    "form.email":            "Email",
    "form.session":          "Tipo de sesión",
    "form.session.choose":   "Elige una sesión…",
    "form.session.private":  "Clase particular",
    "form.session.group":    "Clase en grupo",
    "form.session.guiding":  "Surf Guiding",
    "form.session.other":    "Otro / Pregunta",
    "form.message":          "Mensaje",
    "form.message.ph":       "Cuéntame tu nivel, tus fechas, tus preguntas…",
    "form.submit":           "Enviar mensaje",
    "form.sending":          "Enviando…",
    "form.success.title":    "¡Mensaje enviado!",
    "form.success.body":     "¡Gracias por contactarme! Recibí tu mensaje y te responderé muy pronto. Tengo ganas de surfear contigo.<br><br>¡Hasta pronto en el agua!<br><br>Yassine",
    "form.err.fname":        "Por favor, introduce tu nombre",
    "form.err.lname":        "Por favor, introduce tu apellido",
    "form.err.email":        "Por favor, introduce un email válido",
    "form.err.session":      "Por favor, selecciona un tipo de sesión",
    "form.err.message":      "Por favor, escribe un mensaje breve",

    "footer.col1.title":   "Pulse Surf",
    "footer.legal":        "Aviso legal",
    "footer.col2.title":   "Puede que te interese",
    "footer.packages":     "Paquetes &amp; Precios",
    "footer.how":          "Cómo funciona una clase",
    "footer.about":        "Sobre mí",
    "footer.col3.title":   "Contacto",
    "footer.copyright":    "© 2026 Pulse Surf — Todos los derechos reservados",
    "footer.credit":       "Web creada por",

    "modal.title":         "Aviso legal",
    "modal.publisher":     "Editor del sitio",
    "modal.hosting":       "Alojamiento",
    "modal.hosting.text":  "Este sitio está alojado por <strong>GitHub Inc.</strong>, 88 Colin P. Kelly Jr. St, San Francisco, CA 94107, EE. UU.",
    "modal.ip":            "Propiedad intelectual",
    "modal.ip.text":       "Todo el contenido de este sitio (textos, fotos, logos) está protegido por la ley de derechos de autor.",
    "modal.credits":       "Créditos",
    "modal.credits.text":  "Sitio diseñado y desarrollado por",

    "back":                        "Volver",
    "subpage.alllevels":           "Todos los niveles bienvenidos · Anza · Taghazout · Agadir · Tamraght",
    "subpage.chooseyourpack":      "Elige tu",
    "subpage.pack":                "paquete",

    "private.label":               "Clases particulares",
    "pack.single":                 "Sesión única",
    "pack.starter":                "Pack iniciación",
    "pack.intensive":              "Pack intensivo",
    "pack.popular":                "El más popular",
    "pack.1h.title":               "Clase surf 1H",
    "pack.2h.title":               "Clase surf 2H",
    "pack.3d.title":               "Pack 3 días",
    "pack.5d.title":               "Pack 5 días",
    "pack.instructor":             "Instructor de surf",
    "pack.board":                  "Tabla &amp; Traje de neopreno incluidos",
    "pack.briefing":               "Briefing en playa &amp; intro de seguridad",
    "pack.moretime":               "Más tiempo en el agua, más olas",
    "pack.3x":                     "3 × 2h de clases de surf",
    "pack.5x":                     "5 × 2h de clases de surf",
    "pack.progressive":            "Coaching progresivo a lo largo de los días",
    "pack.max":                    "Progresión máxima garantizada",
    "pack.book":                   "Reservar en WhatsApp",

    "group.label":                 "Clases en grupo",

    "guiding.label":               "Surf Guiding",
    "guiding.title":               "La ola correcta,",
    "guiding.span":                "siempre",
    "guiding.sub":                 "Para surfistas intermedios &amp; avanzados que quieren las mejores olas sin perder tiempo.",
    "guiding.what":                "Qué incluye",
    "guiding.session.title":       "Sesión Surf Guiding",
    "guiding.inc1":                "Selección del spot según las condiciones del día",
    "guiding.inc2":                "Transporte al mejor spot de surf",
    "guiding.inc3":                "Conocimiento local del surf",
    "guiding.inc4":                "Guía de seguridad",
    "guiding.perperson":           "por persona",
    "guiding.duration.label":      "Duración",
    "guiding.duration.val":        "Media jornada",
    "guiding.duration.desc":       "3 a 4 horas en el agua, adaptadas a las condiciones del día.",
    "guiding.group.label":         "Tamaño del grupo",
    "guiding.group.val":           "Máx. 4 surfistas",

    "contact.page.title":          "Vamos a coger<br>olas juntos",
    "guiding.group.taille":   "Solo grupos reducidos: asesoramiento personalizado y más olas para todos.",
    "contact.text":           "¿Tienes alguna duda sobre una sesión, quieres consultar disponibilidad o simplemente saludar? Rellena el formulario y te responderé en menos de 24 horas.",
    "contact.page.title":     "Vamos a pillar<br>unas olas",
    "form.success.text":      "¡Gracias por contactar conmigo! He recibido tu mensaje y te responderé muy pronto. Tengo muchas ganas de surfear contigo. <br> <br> ¡Nos vemos en el agua! <br> <br>Yassine",
    
    "guiding.intro": "Para surfistas intermedios &amp; avanzados que quieren las <strong>mejores olas sin perder tiempo.</strong><br>Descubre spots escondidos y surfea la ola correcta en el momento adecuado, según el swell, el viento y tu nivel.",
    "guiding.pill.halfday": "Media jornada — 3 a 4h",
    "guiding.pill.max4": "Máx. 4 surfistas",
    "guiding.pill.level": "Intermedio &amp; avanzado",

    "contact.page.intro":          "¿Tienes alguna pregunta sobre una sesión, quieres comprobar disponibilidad o simplemente saludar? Rellena el formulario y te responderé en 24 horas.",
  },
};

// ─────────────────────────────────────────────────────────────
//  Moteur de traduction
// ─────────────────────────────────────────────────────────────

const SUPPORTED_LANGS = ['en', 'fr', 'de', 'es'];
const DEFAULT_LANG    = 'en';

function getLang() {
  return localStorage.getItem('pulse_lang') || DEFAULT_LANG;
}

function applyLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem('pulse_lang', lang);

  const t = TRANSLATIONS[lang];

  // — Textes classiques —
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // — Placeholders —
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // — Options <select> —
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.dataset.i18nOpt;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // — Attributs aria-label —
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.dataset.i18nAria;
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  // — Titre de page (meta) —
  const pageKey = document.documentElement.dataset.pageKey;
  if (pageKey && t[pageKey]) document.title = t[pageKey];

  // — Sélecteur actif —
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// ─────────────────────────────────────────────────────────────
//  Init au chargement de chaque page
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(getLang());

  // Listeners sur les boutons de langue
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
});
