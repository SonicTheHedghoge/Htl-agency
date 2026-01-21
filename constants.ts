import { ContactInfo, BranchInfo, Service, Destination } from './types';

export const AGENCY_NAME = "HTL Travel Agency";
export const AGENCY_LEGAL_NAME = 'OOO "HTL"';
export const FOUNDER = "Lotfi Kebayer";

export const CONTACT_RUSSIA: ContactInfo = {
  city: "St. Petersburg",
  address: "ul. Belinskogo, 8 (near Metro Mayakovskaya)",
  legalAddress: "191014, St. Petersburg, Liteyny Prospekt, 45/8, Liter A, office 6N",
  phone: ["+7 (812) 309 3555", "+7 (812) 579 8318"],
  email: "lotfi@htl.ru"
};

export const BRANCH_TUNISIA: BranchInfo = {
  name: "Agence Touristique HTL (HTL Voyages)",
  city: "Sousse",
  phone: "+216 99 500 310",
  role: "VIP Assistance, Private Transfers, Exclusive Excursions."
};

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/htl.ru",
  website: "https://htl.ru"
};

export const LEGAL_DETAILS = {
  inn: "7841425854",
  ogrn: "1107847146461",
  regDate: "May 7, 2010"
};

export const DESTINATIONS: Destination[] = [
  {
    name: "Sousse & Hammamet",
    country: "Tunisia",
    description: "The Pearl of the Sahel. Exclusive Thalassotherapy retreats and private medina tours.",
    imageSeed: "sousse",
    tags: ["Thalasso", "Luxury", "Heritage"]
  },
  {
    name: "St. Petersburg",
    country: "Russia",
    description: "Imperial grandeur. Private viewings of the Hermitage and white nights yacht cruises.",
    imageSeed: "petersburg",
    tags: ["Imperial", "Art", "Yachting"]
  },
  {
    name: "Djerba",
    country: "Tunisia",
    description: "Island serenity. Private villas, golden sands, and the timeless charm of the Lotus Eaters.",
    imageSeed: "djerba",
    tags: ["Island", "Private Villa", "Relaxation"]
  },
  {
    name: "Moscow",
    country: "Russia",
    description: "The Power Center. VIP Kremlin access and 5-star metropolis experiences.",
    imageSeed: "moscow",
    tags: ["Metropolis", "VIP Access", "History"]
  }
];

export const SERVICES: Service[] = [
  {
    title: "Bespoke Outbound",
    description: "Tailored itineraries from Russia to Tunisia's finest resorts. Private jets and 5-star accommodations.",
    icon: "plane-departure"
  },
  {
    title: "Elite Inbound",
    description: "Curated experiences in Russia for distinguished guests from Tunisia and France.",
    icon: "landmark"
  },
  {
    title: "Concierge Visa",
    description: "Seamless documentation processing. We handle the bureaucracy; you handle the packing.",
    icon: "passport"
  },
  {
    title: "Wellness & Spa",
    description: "Access to the world's most renowned Thalassotherapy centers in Hammamet and Sousse.",
    icon: "spa"
  }
];

export const SYSTEM_PROMPT = `You are the Elite AI Concierge for HTL (High Travel Luxury), formerly HTL Travel Agency.
Your persona is sophisticated, discreet, and highly professional. You cater to high-net-worth individuals.
Founder: Mr. Lotfi Kebayer.
Specialization: Luxury travel between Russia and Tunisia.
Tone: Elegant, concise, polite, and reassuring. Use words like "Bespoke", "Curated", "Exquisite".
If asked about prices, courteously suggest that a tailored quote requires a consultation via lotfi@htl.ru.
Never be informal. You are the digital equivalent of a 5-star hotel concierge.`;
