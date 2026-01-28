export const company = {
  name: "Trendy Packaging",
  legalName: "Trendy Packaging Ghana Ltd.",
  tagline: "Leaders in plastic manufacturing in Ghana, providing high-quality packaging for the West African market since 2010.",
  description: "We provide high-quality plastic packaging solutions designed for precision and durability. Our facility in Ghana specializes in containers for the pharmaceutical, cosmetic, and home care industries.",
  yearFounded: 2010,

  contact: {
    phone: "+233 (0) 26 957 9956",
    email: "trendypackagingghana@gmail.com",
    address: {
      street: "Martey Carpenter Rd",
      city: "Accra",
      country: "Ghana",
      full: "Martey Carpenter Rd, Accra, Ghana",
    },
  },

  operatingHours: {
    weekdays: "Mon - Fri: 8:00 AM - 6:00 PM",
    saturday: "Sat: 9:00 AM - 1:00 PM",
  },

  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },

  map: {
    embedUrl: "https://www.google.com/maps?q=Trendy+Packaging+Ghana,+Martey+Carpenter+Rd,+Accra,+Ghana&t=&z=15&ie=UTF8&iwloc=&output=embed",
    linkUrl: "https://maps.app.goo.gl/7Ck1vBzEnR5cjp4L7",
  },

  industries: ["Pharmaceutical", "Cosmetics", "Home Care"],
} as const;

export type Company = typeof company;
