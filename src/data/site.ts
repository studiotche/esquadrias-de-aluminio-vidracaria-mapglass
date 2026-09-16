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

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  text: string;
  rating: number;
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
    whatsapp: "/assets/images/whatsapp.webp",
  },
  googleRating: {
    score: "5,0",
    reviews: 28,
  },
  mapsEmbedUrl: "https://maps.google.com/maps?q=MAP+GLASS+-+Esquadrias+de+Alum%C3%ADnio+%26+Vidra%C3%A7aria,+Rua+Al%C3%ADcia+M%C3%BCler,+536+-+S%C3%A3o+Jos%C3%A9,+Novo+Hamburgo+-+RS&t=&z=16&ie=UTF8&iwloc=&output=embed",
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

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: readonly FaqItem[] = [
  {
    question: "Quais regiões a MAP GLASS atende?",
    answer: "Atendemos Novo Hamburgo, São Leopoldo, Campo Bom, Estância Velha, Ivoti, Sapiranga, Dois Irmãos, Canoas, todo o Vale dos Sinos e a Região Metropolitana de Porto Alegre. Executamos projetos residenciais, comerciais, reformas e parcerias com escritórios de arquitetura e construtoras.",
  },
  {
    question: "Como solicito um orçamento e como funciona a visita técnica?",
    answer: "Basta clicar em qualquer botão de WhatsApp do site e enviar suas medidas prévias ou projeto arquitetônico. Após o envio da estimativa de investimento, agendamos uma visita técnica no local da obra para conferência com trena a laser, nível e prumo, garantindo instalação sem erros.",
  },
  {
    question: "Quais linhas e acabamentos de esquadrias de alumínio vocês fabricam?",
    answer: "Trabalhamos com fabricação própria sob medida nas linhas mais conceituadas do mercado (Suprema, Gold e Linhas Minimalistas Slim). Os acabamentos mais procurados são preto fosco microtexturizado, amadeirado, anodizado natural e branco, todos com tratamento anticorrosivo e perfeita vedação termoacústica.",
  },
  {
    question: "Qual a diferença entre vidro temperado e laminado e onde cada um é obrigatório?",
    answer: "O vidro temperado tem resistência mecânica até 5 vezes maior que o comum e estilhaça em pequenos fragmentos sem pontas cortantes — indicado para portas, divisórias e box. O vidro laminado é composto por duas lâminas unidas por película de PVB que retém os pedaços se houver quebra — sendo obrigatório por norma técnica ABNT (NBR 7199) em sacadas, guarda-corpos, coberturas e fachadas.",
  },
  {
    question: "Vocês fabricam box de banheiro até o teto (Linha Elegance)?",
    answer: "Sim! Somos especialistas em box sob medida até o teto e modelos da linha Elegance com roldanas aparentes em aço inox ou acabamento preto fosco. Esse modelo veda completamente o vapor d'água dentro da área do chuveiro, preservando o mobiliário do banheiro e trazendo estética de hotel de luxo.",
  },
  {
    question: "Qual o prazo médio de fabricação e instalação?",
    answer: "Trabalhamos com pontualidade rigorosa. O prazo padrão é de 15 a 25 dias úteis a partir da aprovação do projeto e conferência definitiva das medidas na obra. A montagem é realizada exclusivamente por nossa equipe técnica própria.",
  },
  {
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Oferecemos condições facilitadas: parcelamento em até 12x no cartão de crédito, faturamento facilitado via boleto bancário para empresas e construtoras (sujeito a análise), e desconto especial para pagamentos à vista via PIX.",
  },
] as const;

export const testimonials: readonly TestimonialItem[] = [
  {
    id: "1",
    name: "Cristiano Schuck",
    city: "Novo Hamburgo / RS",
    text: "Excelente atendimento e pontualidade na entrega. As esquadrias de alumínio ficaram perfeitas na nossa casa, acabamento impecável e equipe muito atenciosa durante a instalação.",
    rating: 5,
  },
  {
    id: "2",
    name: "Mariana Steffen",
    city: "São Leopoldo / RS",
    text: "Fizemos o fechamento da sacada e os boxes de vidro com a MAP GLASS. O resultado superou as expectativas, material de altíssima qualidade e acabamento limpo. Super recomendo!",
    rating: 5,
  },
  {
    id: "3",
    name: "Rodrigo Klein",
    city: "Estância Velha / RS",
    text: "Profissionais extremamente qualificados. Desde a medição técnica até a instalação das portas de correr, tudo foi cumprido no prazo combinado. Nota 10!",
    rating: 5,
  },
] as const;


