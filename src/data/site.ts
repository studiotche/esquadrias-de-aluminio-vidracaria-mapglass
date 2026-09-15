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
  name: "MAP GLASS",
  legalName: "MAP GLASS - Esquadrias de Alumínio & Vidraçaria",
  segment: "Esquadrias de Alumínio & Vidraçaria Sob Medida",
  city: "Novo Hamburgo",
  state: "RS",
  address: "Rua Alícia Müler, 536 - Bairro São José",
  postalCode: "93534-110",
  locationDisplay: "Novo Hamburgo • Vale dos Sinos / RS",
  phoneDisplay: "(51) 99540-6595",
  phoneRaw: "5551995406595",
  secondaryPhoneDisplay: "(51) 98419-3272",
  secondaryPhoneRaw: "5551984193272",
  whatsappUrl: "https://wa.me/5551995406595?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MAP%20GLASS%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.",
  instagramUrl: "https://www.instagram.com/mapglass_vidracaria/",
  instagramHandle: "@mapglass_vidracaria",
  facebookUrl: "https://www.facebook.com/mapglassvidracaria/",
  googleMapsUrl: "https://www.google.com/maps/place/MAP+GLASS+-+Esquadrias+de+Alum%C3%ADnio+%26+Vidra%C3%A7aria/@-29.7040243,-51.1094997,17z",
  geo: {
    latitude: -29.7040243,
    longitude: -51.1094997,
  },
  seo: {
    title: "MAP GLASS | Esquadrias de Alumínio & Vidraçaria em Novo Hamburgo",
    description: "Soluções sob medida em Novo Hamburgo e Vale dos Sinos: esquadrias de alumínio, vidros temperados, box elegance, espelhos com LED, fachadas e sacadas. Solicite seu orçamento.",
    url: "https://studiotche.github.io/vidracaria-esquadria-mapglass",
    ogImage: "/assets/images/mapglass-hero.webp",
  },
  assets: {
    logo: "/assets/images/mapglass-logo-dark.png",
    logoWhite: "/assets/images/mapglass-logo-white.png",
    hero: "/assets/images/mapglass-hero.webp",
    about: "/assets/images/mapglass-sobre.webp",
    favicon: "/favicon.png",
  },
} as const;

export const trustItems: readonly TrustItem[] = [
  {
    icon: "ph ph-shield-check",
    title: "Qualidade que se vê",
    description: "Vidros e perfis de alumínio certificados e de alta resistência.",
  },
  {
    icon: "ph ph-ruler",
    title: "Precisão em cada detalhe",
    description: "Projetos 100% sob medida para residências e empresas.",
  },
  {
    icon: "ph ph-map-pin",
    title: "Novo Hamburgo e Vale dos Sinos",
    description: "Atendimento dedicado, pontualidade e instalação profissional.",
  },
] as const;

export const solutions: readonly SolutionItem[] = [
  {
    id: "esquadrias",
    title: "Esquadrias em alumínio",
    image: "/assets/images/mapglass-esquadrias.webp",
    imgClass: "img-esquadrias",
    link: "https://wa.me/5551995406595?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MAP%20GLASS%20e%20gostaria%20de%20saber%20mais%20sobre%20esquadrias%20em%20alum%C3%ADnio.",
    alt: "Portas e janelas em alumínio sob medida com acabamento preto premium",
  },
  {
    id: "fachadas",
    title: "Fachadas e sacadas",
    image: "/assets/images/mapglass-fachada.webp",
    imgClass: "img-fachadas",
    link: "https://wa.me/5551995406595?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MAP%20GLASS%20e%20gostaria%20de%20saber%20mais%20sobre%20fachadas%20e%20sacadas.",
    alt: "Envidraçamento de sacadas, guarda-corpos e fachadas em vidro",
  },
  {
    id: "vidros-box",
    title: "Box de vidro e espelhos",
    image: "/assets/images/mapglass-box.webp",
    imgClass: "img-box",
    link: "https://wa.me/5551995406595?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MAP%20GLASS%20e%20gostaria%20de%20saber%20mais%20sobre%20box%20de%20vidro%20e%20espelhos.",
    alt: "Box para banheiro elegance em vidro temperado com perfil preto",
  },
  {
    id: "portas-divisorias",
    title: "Portas e divisórias",
    image: "/assets/images/mapglass-portas.webp",
    imgClass: "img-portas",
    link: "https://wa.me/5551995406595?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20MAP%20GLASS%20e%20gostaria%20de%20saber%20mais%20sobre%20portas%20e%20divis%C3%B3rias.",
    alt: "Portas e divisórias em vidro e alumínio para integração de ambientes",
  },
] as const;

export const projects: readonly ProjectItem[] = [
  {
    id: "amplitude-esquadrias",
    title: "Amplitude e luz natural com esquadrias slim",
    image: "/assets/images/mapglass-esquadrias.webp",
    isLarge: true,
    alt: "Grandes vãos com portas de correr em alumínio preto e vidro",
  },
  {
    id: "espelho-led",
    title: "Espelhos sob medida com iluminação LED",
    image: "/assets/images/mapglass-espelhos.webp",
    isLarge: false,
    alt: "Espelho redondo orgânico com iluminação LED indireta",
  },
] as const;
