import type { HomeContent } from "@/components/Homepage/types";

export const HOME_DE: HomeContent = {
  seo: {
    title: "Fahrschule Scooldrive Lüneburg – Jetzt Führerschein machen",
    description:
      "Jetzt den Führerschein in Lüneburg machen: moderne Ausbildung, persönliche Betreuung und faire Preise bei Scooldrive.",
  },
  hero: {
    badge: "WIR MACHEN DICH MOBIL",
    title1: "Dein Führerschein. Deine Freiheit.",
    title2: "Dein Lüneburg.",
    subtitle: "Mit uns sitzt du bald selbst am Steuer.",
    features: [
      "Flexible Fahrstunden – auch abends & am Wochenende",
      "Kleine Gruppen, persönliche Betreuung",
      "Hohe Erfolgsquote beim TÜV",
      "Deine Fahrlehrer kennen die Prüfstrecken in Lüneburg",
    ],
    cta: "JETZT ANMELDEN",
    socialProof: "★★★★★ 149 Bewertungen · Nr. 1 in der Lüneburger Altstadt",
    warning: "Achtung: Begrenzte Plätze verfügbar!",
  },
  sectionNav: {
    ariaLabel: "Abschnitte der Startseite",
    items: [
      { id: "fuhrerscheine", label: "Führerscheine" },
      { id: "reviews", label: "Bewertungen" },
      { id: "garantien", label: "Garantien" },
      { id: "standort", label: "Standort" },
      { id: "faq", label: "FAQ" },
    ],
  },
  licenseOptions: {
    header1: "Führerschein digital erleben",
    header2: "Lernen, wann und wo du willst",
    cta: "JETZT ANMELDEN",
    appTooltip: {
      title: "Lern-App inklusive",
      body: "Im Laufe des Führerscheins bekommst du Zugang zur Lern-App – ideal zur Vorbereitung auf die Theorieprüfung. Die App kostet einmalig 85 €.",
      priceNote: "Preise können sich ändern.",
      pricesLink: "Aktuelle Preise ansehen →",
    },
    options: [
      {
        id: "auto",
        title: "AUTOFÜHRERSCHEIN",
        subtitle: "— KLASSE B",
        description: "Vier Räder. Und unzählige Möglichkeiten.",
        path: "/auto-fuehrerschein",
        icon: "car",
      },
      {
        id: "auto-anhaenger",
        title: "AUTO MIT ANHÄNGER",
        subtitle: "— KLASSE BE",
        description: "Mehr Platz. Mehr Flexibilität. Mehr Freiheit.",
        path: "/auto-anhaenger",
        icon: "trailer",
      },
      {
        id: "motorrad",
        title: "MOTORRADFÜHRER-SCHEIN",
        subtitle: "— KLASSE A",
        description: "Freiheit und Fahrtwind. Auch im Fußraum.",
        path: "/motorrad-fuehrerschein",
        icon: "motorcycle",
      },
    ],
    more: "Mehr erfahren",
  },
  personalApproach: {
    header1: "Du bist nicht irgendwer",
    header2: "also bekommst du bei uns auch kein Standard",
    header2Highlight: "kein Standard",
    description:
      "Denn wie du Unabhängigkeit lebst, ist so individuell wie dein Alltag. Genau deshalb starten wir nicht einfach mit der ersten Fahrstunde, sondern mit dir.",
    features: [
      {
        title: "Flexible Termine",
        description: "Fahrstunden die sich deinem Leben anpassen",
      },
      {
        title: "Dein fester Fahrlehrer",
        description: "Von der ersten Stunde bis zur Prüfung an deiner Seite",
      },
      {
        title: "Hohe Erfolgsquote",
        description: "Gezieltes Training auf den Lüneburger Prüfstrecken",
      },
      {
        title: "Dein Tempo, dein Plan",
        description: "Kein Standardpaket – wir richten uns nach dir",
      },
    ],
    stepsHeading: "In 3 Schritten zu deinem Führerschein",
    steps: [
      {
        title: "Erstgespräch",
        description:
          "Wir lernen dich kennen – deine Zeiten, dein Tempo, deine Ziele. Kein Standardpaket, sondern ein Plan der zu dir passt.",
      },
      {
        title: "Fahrstunden",
        description:
          "Flexible Termine, ein fester Fahrlehrer der dich wirklich kennt. Du bestimmst das Tempo.",
      },
      {
        title: "Prüfung",
        description:
          "Wir bereiten dich gezielt auf die Lüneburger Prüfstrecken vor – damit du sicher und selbstbewusst in die Prüfung gehst.",
      },
    ],
  },
  reviews: {
    title: "DAS SAGEN DEINE VORGÄNGER.",
    reviews: [
      {
        id: 1,
        name: "LUCA LANDMAN",
        timeAgo: "VOR 1 MONAT",
        text: "Ich kann diese Fahrschule nur weiterempfehlen! Die Fahrlehrer sind professionell, authentisch und freundlich, was für eine entspannte Lernatmosphäre sorgt. Ich habe mich von Anfang an gut aufgehoben gefühlt und konnte immer problemlos Termine bekommen. Insgesamt eine tolle Erfahrung. Danke an das ganze Team!",
        rating: 5,
      },
      {
        id: 2,
        name: "SHERIN AL FAHD",
        timeAgo: "VOR 1 MONAT",
        text: "Absolut begeistert von meiner Erfahrung! Vom ersten Tag an habe ich mich super wohl und bestens aufgehoben gefühlt. Der Fahrlehrer war top – immer unterstützend, geduldig und darauf fokussiert, dass man die Prüfung besteht. Jede Fahrstunde war lustig und ich werde sie echt vermissen!",
        rating: 5,
      },
      {
        id: 3,
        name: "LOUIS PAETZEL",
        timeAgo: "VOR KURZEM",
        text: "Definitiv die beste Fahrschule in Lüneburg! Heute beim ersten Mal bestanden dank der perfekten Ausbildung von Renin. Ich kam von einer anderen Fahrschule und bereue nichts. Kann jedem empfehlen, hier den Führerschein zu machen. Immer Termine und nette Ausbildung!",
        rating: 5,
      },
      {
        id: 4,
        name: "KARAM",
        timeAgo: "VOR KURZEM",
        text: "Sehr gute Fahrschule, Fahrstunden wurden wöchentlich gegeben. Die Fahrlehrer sind nett und üben mit den Fahrschülern die Prüfungsstrecken. Bei den Prüfungsterminen dauert es überall länger, da der TÜV Personalmangel hat.",
        rating: 5,
      },
      {
        id: 5,
        name: "LINN LEMBKE",
        timeAgo: "VOR KURZEM",
        text: "Die Fahrschule ist wirklich sehr zu empfehlen! Die Theoriestunden sind interessant und die Fahrlehrer bemühen sich sehr, dass alle alles verstehen. Mein Fahrlehrer Renin war sehr geduldig und hat mir das Fahren kompetent beigebracht. Ich habe mich sicher und gut vorbereitet gefühlt.",
        rating: 5,
      },
      {
        id: 6,
        name: "ANTON SIEVERS",
        timeAgo: "VOR KURZEM",
        text: "Die beste Fahrschule in Lüneburg! Ich habe meinen Führerschein in etwa 3 Monaten gemacht. Renin hat den Theorieunterricht ansprechend gestaltet. Fahrstunden hatte ich bei Harun – sehr sympathisch und hat mir das Fahren schnell beigebracht. Die Fahrlehrer sind geduldig und die Kosten fair. Vielen Dank für die gute Zeit!",
        rating: 5,
      },
      {
        id: 7,
        name: "JENNY S",
        timeAgo: "VOR KURZEM",
        text: "Einfach mega! Ich war super zufrieden. Der Theorieunterricht war produktiv, alles wurde ausführlich erklärt. Die Fahrstunden waren angenehm, Termine flexibel und regelmäßig. Schwierige Aufgaben wurden wiederholt, bis ich sie konnte. Dank der guten Vorbereitung habe ich die Prüfung beim ersten Mal bestanden. Danke für die tolle Ausbildung!",
        rating: 5,
      },
      {
        id: 8,
        name: "MOHAMMED BOZO",
        timeAgo: "VOR KURZEM",
        text: "Ich war super zufrieden. Termine bekommt man schnell und regelmäßig. Für die Praxis habe ich nur 12 Tage gebraucht und die Prüfung gleich beim ersten Mal bestanden. Vielen Dank an alle drei Fahrlehrer für die gute Ausbildung!",
        rating: 5,
      },
      {
        id: 9,
        name: "SUSAN SUSI",
        timeAgo: "VOR KURZEM",
        text: "Sehr zufrieden, nur zu empfehlen! Nach dem Wechsel aus einer anderen Fahrschule merkt man, wie motiviert und nett das Team ist. Mein Fahrlehrer Renin ist sehr geduldig und erklärt alles detailliert, oft mit Zeichnungen. Termine wurden immer eingehalten, auch das Büro ist super sympathisch. Es hat immer Spaß gemacht!",
        rating: 5,
      },
      {
        id: 10,
        name: "LENNY AMARA",
        timeAgo: "VOR KURZEM",
        text: "Beste Fahrschule in ganz Lüneburg. Sehr fair und arbeitet intensiv mit den Fahrschülern. Ich habe in kürzester Zeit meinen Führerschein bestanden – nur durch euch!",
        rating: 5,
      },
    ],
  },
  trafficRules: {
    title: "UNSERE EIGENEN VERKEHRSREGELN.",
    subtitle: "Hierauf kannst du dich verlassen:",
    badgeText: ["Ausbildung", "mit Bester", "Qualität"],
    rules: [
      { id: 1, label: "PRÜFUNGS GARANTIE", icon: "trophy", accent: true },
      { id: 2, label: "WARM-UP GARANTIE", icon: "cone", accent: true },
      { id: 3, label: "WECHSEL GARANTIE", icon: "circle", accent: true },
      { id: 4, label: "45-MINUTEN GARANTIE", icon: "timer", accent: false },
      { id: 5, label: "DURCHBLICK GARANTIE", icon: "eye", accent: true },
      {
        id: 6,
        label: "KEINE-STUNDE-ZU-VIEL GARANTIE",
        icon: "bars",
        accent: true,
      },
      { id: 7, label: "KENNENLERN GARANTIE", icon: "smile", accent: false },
    ],
  },
  schoolLocation: {
    title: "BESUCHE UNS VOR ORT",
    subtitle:
      "Finde unsere Fahrschule in Lüneburg und starte deine Fahrausbildung bei uns. Wir freuen uns auf deinen Besuch!",
    infoTitle: "Deine Fahrschule in Lüneburg",
    addressTitle: "Unsere Adresse",
    contactLabels: {
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
    },
    cta: "Route planen",
    schoolInfo: {
      name: "Fahrschule Scool Drive GbR",
      street: "Haagestraße 3",
      city: "21335 Lüneburg",
      country: "Deutschland",
      phone: "041318983700",
      email: "info@scooldrive.com",
      hours: "Mo-Do: 13:30 - 16:00",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.3750341476016!2d10.409721346580714!3d53.24628886302604!2m3!1f0!2f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1dd8e8516531f%3A0x6c7614d57b654a2c!2sFahrschule%20Scool%20Drive%20GbR!5e1!3m2!1sde!2sde!4v1751474615088!5m2!1sde!2sde",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=Haagestra%C3%9Fe%203%2C%2021335%20L%C3%BCneburg%2C%20Deutschland",
    },
  },
  faq: {
    title: "DEINE FRAGE NICHT DABEI? SPRICH UNS AN.",
    items: [
      {
        question: "WARUM IST Scool Drive DIE BESTE FAHRSCHULE FÜR MICH?",
        answer:
          "Scool Drive bietet individuelle Betreuung mit modernen Lernmethoden. Unsere erfahrenen Fahrlehrer passen sich deinem Lerntempo an und garantieren eine stressfreie Ausbildung. Mit unserem innovativen Garantie-System und flexiblen Terminen bist du bei uns in den besten Händen.",
      },
      {
        question: "WIE VIEL KOSTET DER FÜHRERSCHEIN BEI Scool Drive?",
        answer:
          "Die Kosten für den Führerschein Klasse B (PKW) betragen ungefähr 1.678€, inklusive Theoriekurs, Pflichtstunden und Grundgebühr. Kontaktiere uns für ein individuelles Angebot und eine kostenlose Beratung.",
      },
      {
        question: "WIE LANGE DAUERT ES, DEN FÜHRERSCHEIN ZU MACHEN?",
        answer:
          "Bei regelmäßiger Teilnahme dauert die Führerscheinausbildung 2-4 Monate. Mit unserem Intensivkurs schaffst du es sogar in 6-8 Wochen. Die Dauer hängt von deiner Verfügbarkeit und deinem Lernfortschritt ab.",
      },
      {
        question: "WELCHE FÜHRERSCHEINKLASSEN BIETET Scool Drive AN?",
        answer:
          "Wir bieten alle gängigen Führerscheinklassen: B (PKW), BE (PKW mit Anhänger), A1/A2/A (Motorrad), AM (Roller). Zusätzlich bieten wir Auffrischungskurse und Fahrsicherheitstrainings an.",
      },
      {
        question: "KANN ICH AUCH AUTOMATIKGETRIEBE LERNEN?",
        answer:
          "Ja, wir bieten sowohl Schaltgetriebe als auch Automatikgetriebe an. Viele unserer Fahrschüler entscheiden sich heute für Automatik, da es einfacher zu erlernen ist. Beachte jedoch, dass bei einer Automatikprüfung die Fahrerlaubnis auf Automatikfahrzeuge beschränkt ist.",
      },
      {
        question:
          "WELCHE DOKUMENTE BENÖTIGE ICH FÜR DIE ANMELDUNG ZUM FÜHRERSCHEIN?",
        answer:
          "Du benötigst: Personalausweis oder Reisepass, biometrisches Passfoto, Sehtest (nicht älter als 2 Jahre), Erste-Hilfe-Kurs-Bescheinigung, bei Minderjährigen eine Einverständniserklärung der Erziehungsberechtigten. Wir helfen dir gerne bei der Beschaffung aller Dokumente.",
      },
      {
        question: "WIE MELDE ICH MICH ZUM FÜHRERSCHEIN AN?",
        answer:
          "Die Anmeldung ist ganz einfach: Besuche uns in der Fahrschule, ruf uns an oder nutze unser Online-Anmeldeformular. Wir beraten dich kostenlos, erstellen einen individuellen Ausbildungsplan und kümmern uns um alle Formalitäten mit der Führerscheinstelle.",
      },
      {
        question: "WIE LANGE IST DER FÜHRERSCHEIN GÜLTIG?",
        answer:
          "PKW-Führerscheine (Klasse B und BE) sind 15 Jahre gültig und müssen dann verlängert werden. Motorradführerscheine sind unbefristet gültig.",
      },
    ],
  },
};
