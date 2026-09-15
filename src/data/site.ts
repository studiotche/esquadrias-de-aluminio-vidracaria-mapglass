export interface SolutionItem {
  id: string;
  title: string;
  image: string;
  imgClass: string;
  link: string;
  alt: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  image: string;
  isLarge: boolean;
  alt: string;
}

export interface TrustItem {
  icon: string;
  title: string;
  description: string;
}

export const site = {
  name: "AlumiArt Ijuí",
  segment: "Esquadrias em Alumínio Sob Medida",
  city: "Ijuí",
  state: "RS",
  locationDisplay: "Ijuí • Rio Grande do Sul",
  phoneDisplay: "(55) 99198-1751",
  phoneRaw: "5555991981751",
  whatsappUrl: "https://wa.me/5555991981751?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AlumiArt%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  instagramUrl: "https://www.instagram.com/alumiartijui/",
  instagramHandle: "@alumiartijui",
  facebookUrl: "https://www.facebook.com/Alumiartijui/",
  yearsInMarket: 15,
  seo: {
    title: "AlumiArt Ijuí | Esquadrias em Alumínio Sob Medida",
    description: "Conheça as soluções da AlumiArt em Ijuí: esquadrias em alumínio, fachadas em vidro, vidros e box e portas internas. Solicite seu orçamento.",
    url: "https://studiotche.github.io/vidracaria-esquadria-mapglass",
    ogImage: "/assets/images/alumiart-hero.jpg",
  },
  assets: {
    logo: "/assets/images/logo.png",
    logoWhite: "/assets/images/logo-white.png",
    hero: "/assets/images/alumiart-hero.jpg",
    about: "/assets/images/alumiart-detalhe.jpg",
    favicon: "/favicon.png",
  },
} as const;

export const trustItems: readonly TrustItem[] = [
  {
    icon: "ph ph-shield-check",
    title: "15 anos de mercado",
    description: "Tradição e confiança em Ijuí e região.",
  },
  {
    icon: "ph ph-gear",
    title: "Soluções sob medida",
    description: "Do projeto à instalação.",
  },
  {
    icon: "ph ph-house",
    title: "Projetos residenciais e comerciais",
    description: "Qualidade, elegância e modernidade.",
  },
] as const;

export const solutions: readonly SolutionItem[] = [
  {
    id: "esquadrias",
    title: "Esquadrias em alumínio",
    image: "/assets/images/alumiart-hero.jpg",
    imgClass: "img-esquadrias",
    link: "https://wa.me/5555991981751?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AlumiArt%20e%20gostaria%20de%20saber%20mais%20sobre%20esquadrias%20em%20alum%C3%ADnio.",
    alt: "Esquadrias em alumínio sob medida com alta durabilidade",
  },
  {
    id: "fachadas",
    title: "Fachadas em vidro",
    image: "/assets/images/alumiart-fachada.jpg",
    imgClass: "img-fachadas",
    link: "https://wa.me/5555991981751?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AlumiArt%20e%20gostaria%20de%20saber%20mais%20sobre%20fachadas%20em%20vidro.",
    alt: "Fachadas em vidro estrutural com acabamento moderno",
  },
  {
    id: "vidros-box",
    title: "Vidros e box",
    image: "/assets/images/alumiart-box.jpg",
    imgClass: "img-box",
    link: "https://wa.me/5555991981751?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AlumiArt%20e%20gostaria%20de%20saber%20mais%20sobre%20vidros%20e%20box.",
    alt: "Vidros temperados e box para banheiro sob medida",
  },
  {
    id: "portas-internas",
    title: "Portas internas",
    image: "/assets/images/alumiart-porta-interna.jpg",
    imgClass: "img-portas",
    link: "https://wa.me/5555991981751?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20AlumiArt%20e%20gostaria%20de%20saber%20mais%20sobre%20portas%20internas.",
    alt: "Portas internas em alumínio e vidro de alto padrão",
  },
] as const;

export const projects: readonly ProjectItem[] = [
  {
    id: "amplitude-luz",
    title: "Amplitude e luz natural",
    image: "/assets/images/alumiart-fachada.jpg",
    isLarge: true,
    alt: "Fachada com amplitude e luz natural com perfis em alumínio",
  },
  {
    id: "acabamentos",
    title: "Acabamentos que fazem a diferença",
    image: "/assets/images/alumiart-varanda.jpg",
    isLarge: false,
    alt: "Varanda com acabamentos precisos que fazem a diferença",
  },
] as const;
