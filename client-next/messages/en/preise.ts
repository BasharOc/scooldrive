export const PREISE_EN = {
  seo: {
    title: "Driving School Prices Lüneburg – License Costs at Scooldrive",
    description:
      "Transparent driving school prices in Lüneburg: all costs for car, motorcycle and trailer licenses at a glance.",
  },
  header: {
    title: "OUR",
    highlight: " PRICES",
    subtitle:
      "Transparent prices without hidden costs. Choose your license class and get a detailed cost overview.",
  },
  licenses: {
    pkw: "Car (Class B)",
    motorrad: "Motorcycle (Class A/A1/A2/AM)",
    anhanger: "Trailer (Class BE)",
    b96: "Trailer (Class B96)",
    b196: "Light Motorcycle (Class B196)",
  },
  prerequisite: "Class B license required",
  sections: {
    basePrices: "Base Prices",
    baseFee: "Base Fee",
    learningApp: "Learning App",
    practiceLesson: "Practice Lesson",
    specialDrives: "Special Drives",
    ruralRoad: "Rural Road",
    highway: "Highway",
    nightDrive: "Night Drive",
    theoryExam: "Theory Exam",
    practicalExam: "Practical Exam",
    schoolTotal: "Total (Driving School)",
    extraCosts: "Additional Authority & Exam Costs",
    extraCostsTotal: "Additional costs total:",
    totalCosts: "Total Costs",
  },
  calculations: {
    lessons: "lessons",
    total: "total",
  },
  extraCosts: [
    {
      key: "fuehrerscheinantrag",
      name: "License Application",
      fallbackPrice: 43.4,
    },
    { key: "sehtest", name: "Eye Test", fallbackPrice: 6.43 },
    {
      key: "ersteHilfeKurs",
      name: "First Aid Course",
      fallbackPrice: 45,
    },
    { key: "passbild", name: "Passport Photo", fallbackPrice: 10 },
  ],
  warning: {
    title: "Important Notes:",
    points: [
      {
        label: "Individual Costs",
        text: "The final price may vary depending on personal skills and additional lessons needed",
      },
      {
        label: "Flexible Payment",
        text: "You only pay per completed driving lesson - no advance payment of the total amount",
      },
      {
        label: "Transparency",
        text: "No hidden costs - you always keep control over your expenses",
      },
    ],
  },
  finalSection: {
    description: "All costs transparently broken down",
    cta: "Sign up now and get started!",
  },
} as const;
