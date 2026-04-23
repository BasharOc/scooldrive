export const NAVBAR_EN = {
  languageCode: "EN",
  branchLabel: "YOUR BRANCH",
  branchName: "Lüneburg",
  menuLabel: "MENU",
  logoAlt: "Scooldrive Driving School Lüneburg logo",
  trailerAlt: "Trailer license class BE – car with trailer in Lüneburg",
  homePath: "/",
  fuehrerscheinPath: "/fuehrerschein",
  anmeldenPath: "/anmelden",
  fuehrerschein: "GET DRIVER'S LICENSE",
  termine: "APPOINTMENTS & Info",
  anmelden: "SIGN UP NOW",
  fuehrerscheinBanner: {
    text: "Your individual driving license is waiting for you!",
    button: "Configure now",
  },
  fuehrerscheinItems: [
    {
      title: "CAR LICENSE",
      description: "Class B - Car license",
      path: "/auto-fuehrerschein",
    },
    {
      title: "CAR TRAILER",
      description: "Class BE - Car with trailer",
      path: "/auto-anhaenger",
    },
    {
      title: "MOTORCYCLE LICENSE",
      description: "Class A - Motorcycle license",
      path: "/motorrad-fuehrerschein",
    },
  ],
  termineItems: [
    {
      title: "Theory Course",
      description: "Dates for the theory course",
      path: "/theoriekurs",
    },
    {
      title: "Intensive Courses",
      description: "Get your license quickly",
      path: "/intensivkurse",
    },
    {
      title: "Prices",
      description: "All prices at a glance",
      path: "/preise",
    },
    {
      title: "Reduce Points",
      description: "How to reduce points",
      path: "/punkte-abbauen",
    },
    {
      title: "Blog",
      description: "Discover exciting news and tips",
      path: "/blogs",
    },
  ],
} as const;
