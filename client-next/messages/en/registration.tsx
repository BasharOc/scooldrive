import {
  FaCar,
  FaCarSide,
  FaClock,
  FaCog,
  FaMotorcycle,
  FaRocket,
  FaTrailer,
  FaTruck,
} from "react-icons/fa";
import type { RegistrationLocaleContent } from "@/components/Registration/types";

export const REGISTRATION_EN: RegistrationLocaleContent = {
  seo: {
    title: "Register for Your Driving License in Lüneburg | Scooldrive",
    description:
      "Register now for your driving license: quick and easy registration with Scooldrive driving school in Lüneburg. Complete the form and secure your lessons.",
  },
  capacitySeo: {
    title: "Maximum Capacity Reached | Scooldrive Lüneburg",
    description:
      "All spots are currently taken. Please try again later or return to the homepage.",
  },
  navigation: {
    back: "Back",
    title: "Registration",
    stepOf: "Step",
    von: "of",
  },
  buttons: {
    next: "Next",
    submit: "Register Now",
  },
  steps: {
    step1: {
      title: "Which driving license do you want to obtain?",
      options: [
        { key: "auto", label: "Car (Class B)", icon: FaCar },
        { key: "motorrad", label: "Motorcycle", icon: FaMotorcycle },
        {
          key: "auto-anhaenger",
          label: "Car with Trailer (BE)",
          icon: FaTruck,
        },
      ],
      error: "Please select a vehicle type",
    },
    step2: {
      title: "What is your name?",
      fields: {
        vorname: "First Name",
        nachname: "Last Name",
      },
      placeholders: {
        vorname: "Your first name",
        nachname: "Your last name",
      },
      error: {
        vorname: "First name is required",
        nachname: "Last name is required",
      },
    },
    step3: {
      title: "Do you already have a driving license?",
      options: {
        no: "No, this is my first driving license",
        yes: "Yes, I already have a driving license",
      },
      prerequisiteWarning: {
        title: "Class B license required",
        description:
          "A valid Class B driving license is required for license classes BE and B96.",
      },
      descriptions: {
        no: "I am a beginner driver",
        yes: "I want to get an additional class",
      },
      subTitle: "Which driving license do you already have?",
      subOptions: [
        { value: "B (Car)", desc: "Class B - Cars up to 3.5t", icon: FaCar },
        {
          value: "BE (Car with Trailer)",
          desc: "Class BE - Cars with Trailer",
          icon: FaTruck,
        },
        {
          value: "Motorcycle",
          desc: "Class A/A1/A2 - Motorcycle",
          icon: FaMotorcycle,
        },
      ],
    },
    step3_5: {
      title: "Which specific class do you want?",
      options: [
        {
          key: "be",
          label: "BE - Trailer",
          desc: "Classic trailer license",
          weight: "Up to 3,500kg total weight",
          icon: FaTrailer,
        },
        {
          key: "b96",
          label: "B96 - Light Trailer",
          desc: "Extended authorization for car",
          weight: "Up to 4,250kg total weight",
          icon: FaTrailer,
        },
        {
          key: "am",
          label: "AM - Moped/Scooter",
          desc: "Two-wheelers up to 50ccm",
          weight: "Max. 45 km/h",
          icon: FaMotorcycle,
        },
        {
          key: "a1",
          label: "A1 - Light Motorcycle",
          desc: "Motorcycles up to 125ccm",
          weight: "Max. 11 kW (15 HP)",
          icon: FaMotorcycle,
        },
        {
          key: "a2",
          label: "A2 - Medium Motorcycles",
          desc: "Motorcycles with limited power",
          weight: "Max. 35 kW (48 HP)",
          icon: FaMotorcycle,
        },
        {
          key: "a",
          label: "A - Heavy Motorcycles",
          desc: "Unlimited motorcycles",
          weight: "No power limitation",
          icon: FaMotorcycle,
        },
      ],
      error: "Please select a specific class",
    },
    step4: {
      title: "What do you want to learn?",
      options: [
        {
          key: "beide",
          label: "Automatic + Manual Transmission",
          desc: "(recommended)",
          icons: [FaCarSide, FaCog],
        },
        {
          key: "automatik",
          label: "Only Automatic Transmission",
          desc: "Restricted authorization",
          icons: [FaCarSide],
        },
      ],
      error: "Please select an option",
    },
    step5: {
      title: "Which exam do you want to take?",
      options: [
        {
          key: "automatik-pruefung",
          label: "Automatic Exam",
          desc: "(recommended)",
          icon: FaCarSide,
        },
        {
          key: "schalt-pruefung",
          label: "Manual Transmission Exam",
          desc: "Authorized for all transmissions",
          icon: FaCog,
        },
      ],
      error: "Please select an exam type",
    },
    step6: {
      title: "Which practical course do you want?",
      theoryInfo: {
        title: "Theory Course - Intensive",
        description:
          "The theory course takes place in a compact, intensive format and optimally prepares you for the theory exam.",
      },
      practiceTitle: "Choose your practical course type:",
      options: [
        {
          key: "flexibel",
          label: "Flexible Practical Course",
          desc: "Learn at your own pace",
          icon: FaClock,
        },
        {
          key: "praxis-intensiv",
          label: "Practical Intensive Course",
          desc: "Quickly through practical training",
          icon: FaRocket,
        },
      ],
      error: "Please select a course type",
    },
    step7: {
      title: "Your selection at a glance",
      summary: {
        fahrzeugTyp: "Vehicle Type",
        name: "Name",
        fuehrerschein: "Driving License",
        getriebe: "Transmission",
        pruefung: "Exam",
        kursart: "Course Type",
      },
    },
    step8: {
      title: "Complete your registration",
      fields: {
        vorname: "First Name",
        nachname: "Last Name",
        geburtsdatum: "Date of Birth",
        geburtsstadt: "Place of Birth",
        telefon: "Phone Number",
        email: "Email",
        adresse: "Address",
        datenschutz: "I accept the privacy policy",
      },
      placeholders: {
        geburtsstadt: "Your place of birth",
        telefon: "+49 123 456789",
        email: "your@email.com",
        adresse: "Street, House number, ZIP, City",
      },
      error: {
        vorname: "First name is required",
        nachname: "Last name is required",
        geburtsdatum: "Date of birth is required",
        geburtsstadt: "Place of birth is required",
        telefon: "Phone number is required",
        email: "Email is required",
        adresse: "Address is required",
        datenschutz: "You must accept the privacy policy",
      },
    },
    step9: {
      title: "Congratulations!",
      subtitle: "Your registration was successful!",
      whatsapp: {
        title: "We will contact you",
        message:
          "You will soon receive a WhatsApp message with all further information about your course.",
      },
      thankYou: "Thank you for your trust!",
      thankYouDetail:
        "We look forward to accompanying you on your journey to obtaining your driver's license.",
      button: "Back to homepage",
    },
    friendDiscount: {
      explanation:
        "Bring a friend and you both get a discount of {rabattmenge}€. You just need to provide the name of the friend who is also booking a course with us. (Your friend should also mention your name so we can assign the discount.)",
      toggleLabel: "Claim friend discount",
      friendNameLabel: "Friend's name",
      friendNamePlaceholder: "Enter your friend's name",
      submitButton: "Submit",
      skipButton: "Skip",
    },
    bonus: {
      save: "Save {rabattmenge}€!",
      validUntil: "Only valid until {zeitlimit}h",
    },
  },
  capacity: {
    title: "Maximum Capacity Reached",
    subtitle: "We're sorry!",
    message: "All spots are currently taken. Please try again at a later time.",
    button: "Back to Homepage",
  },
  submissionError: "Registration failed. Please try again.",
};
