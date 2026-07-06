export interface Destino {
  id: number;
  nome: string;
  subtitulo: string;
  pais: string;
  imagem: string;
  resumo: string;
  descricao: string;
}

export const destinos: Destino[] = [
  {
    id: 1,
    nome: "Paris",
    subtitulo: "Cidade Luz",
    pais: "França",
    imagem: "/images/paris.jpg",
    resumo: "Capital francesa com arquitetura e cultura icônicas.",
    descricao:
      "Paris é conhecida como a Cidade Luz. Possui pontos turísticos como Torre Eiffel, Museu do Louvre e uma forte tradição cultural e gastronômica.",
  },
  {
    id: 2,
    nome: "Tóquio",
    subtitulo: "Tecnologia e Tradição",
    pais: "Japão",
    imagem: "/images/tokyo.jpg",
    resumo: "Uma das maiores metrópoles do mundo.",
    descricao:
      "Tóquio mistura tecnologia avançada com tradições milenares, templos históricos e uma cultura única.",
  },
  {
    id: 3,
    nome: "Rio de Janeiro",
    subtitulo: "Cidade Maravilhosa",
    pais: "Brasil",
    imagem: "/images/rio.jpg",
    resumo: "Praias, montanhas e cultura vibrante.",
    descricao:
      "O Rio de Janeiro é famoso pelo Cristo Redentor, Pão de Açúcar e praias mundialmente conhecidas.",
  },
  {
    id: 4,
    nome: "Maldivas",
    subtitulo: "Paraíso Tropical",
    pais: "Maldivas",
    imagem: "/images/maldives.jpg",
    resumo: "Águas cristalinas e resorts de luxo.",
    descricao:
      "As Maldivas oferecem praias paradisíacas, bangalôs sobre o mar e experiências de luxo.",
  },
  {
    id: 5,
    nome: "Nova York",
    subtitulo: "Cidade que Nunca Dorme",
    pais: "EUA",
    imagem: "/images/newyork.jpg",
    resumo: "Arranha-céus e vida urbana intensa.",
    descricao:
      "Nova York é famosa por Times Square, Central Park, Estátua da Liberdade e sua energia constante.",
  },
  {
    id: 6,
    nome: "Montenegro",
    subtitulo: "Joia do Adriático",
    pais: "Montenegro",
    imagem: "/images/montenegro.jpg",
    resumo: "Montanhas e litoral histórico.",
    descricao:
      "Montenegro possui paisagens montanhosas e cidades históricas como Kotor, patrimônio mundial da UNESCO.",
  },
];