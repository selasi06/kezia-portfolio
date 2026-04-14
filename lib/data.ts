export type Project = {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const site = {
  name: "Kezia Eyram Gidiglo",
  role: "design student. visual direction.",
  heroWord: "NARRATIVE",
  intro: "making cool stuff on the internet.",
  note: "selected works. '24-'26.",
  about:
    "20. in school. taking pictures, making layouts, saving references, turning them into something real.",
  contact: "let's talk. or just say hi.",
};

export const navItems = [
  { label: "index", href: "#index" },
  { label: "work", href: "#work" },
  { label: "about", href: "#about" },
  { label: "contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "gallery-wall",
    title: "gallery wall",
    year: "2024",
    category: "study",
    description: "art room notes. color first. words later.",
    image: {
      src: "/images/kezia/IMG_0980.webp",
      alt: "abstract artwork on a gallery wall",
      width: 2160,
      height: 2880,
    },
  },
  {
    id: "mask-study",
    title: "mask study",
    year: "2024",
    category: "research",
    description: "a face. a wall. one clean frame.",
    image: {
      src: "/images/kezia/IMG_0983.webp",
      alt: "painted mask artwork on a teal wall",
      width: 1468,
      height: 3038,
    },
  },
  {
    id: "corridor",
    title: "long room",
    year: "2025",
    category: "space",
    description: "walking through concrete and quiet light.",
    image: {
      src: "/images/kezia/IMG_0985.webp",
      alt: "wide concrete gallery corridor with wall art",
      width: 4096,
      height: 1387,
    },
  },
  {
    id: "blue-wall",
    title: "blue wall",
    year: "2025",
    category: "image",
    description: "bright paint. hard wall. no extra noise.",
    image: {
      src: "/images/kezia/IMG_0986.webp",
      alt: "colorful portrait artwork on a concrete wall",
      width: 2160,
      height: 2880,
    },
  },
  {
    id: "mood-swings",
    title: "mood swings",
    year: "2025",
    category: "sound",
    description: "phone screen. blue light. late night taste.",
    image: {
      src: "/images/kezia/IMG_0997.webp",
      alt: "music player on a phone in blue light",
      width: 1242,
      height: 2208,
    },
  },
  {
    id: "campus-tree",
    title: "campus tree",
    year: "2025",
    category: "place",
    description: "between class and nowhere in particular.",
    image: {
      src: "/images/kezia/IMG_1020.webp",
      alt: "large tree outside a campus building",
      width: 3024,
      height: 3972,
    },
  },
  {
    id: "red-road",
    title: "red road",
    year: "2025",
    category: "place",
    description: "heat, dust, trees, and a clean line.",
    image: {
      src: "/images/kezia/IMG_1027.webp",
      alt: "red dirt road beside trees",
      width: 2872,
      height: 3830,
    },
  },
  {
    id: "school-gate",
    title: "school gate",
    year: "2026",
    category: "archive",
    description: "proof that the day happened.",
    image: {
      src: "/images/kezia/IMG_1088.webp",
      alt: "school gate and building sign",
      width: 1242,
      height: 2208,
    },
  },
];
