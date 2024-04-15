export interface Feature {
  name: string;
  isAvailable: boolean;
}

export interface Plan {
  title: string;
  description: string;
  price: number;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    title: "Grátis",
    price: 0,
    description: "Acesso gratuito para todos.",
    features: [
      {
        name: "Acesso a plataforma",
        isAvailable: true,
      },
      {
        name: "Curriculo automatizado",
        isAvailable: false,
      },
      {
        name: "Prioridade nas vagas",
        isAvailable: false,
      },
      {
        name: "Cursos profissionalisantes",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Plano Prata",
    price: 15,
    description: "Tenha ajuda da nossa IA para encontrar vagas.",
    features: [
      {
        name: "Acesso a plataforma",
        isAvailable: true,
      },
      {
        name: "Curriculo automatizado",
        isAvailable: true,
      },
      {
        name: "Prioridade nas vagas",
        isAvailable: false,
      },
      {
        name: "Cursos profissionalisantes",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Plano Ouro",
    price: 29.99,
    description: "Esteja um passo na frente, sempre.",
    features: [
      {
        name: "Acesso a plataforma",
        isAvailable: true,
      },
      {
        name: "Curriculo automatizado",
        isAvailable: true,
      },
      {
        name: "Prioridade nas vagas",
        isAvailable: true,
      },
      {
        name: "Cursos profissionalisantes",
        isAvailable: false,
      },
    ],
  },
  {
    title: "Plano Diamante",
    price: 50.0,
    description: "O melhor plano para você, com total acesso.",
    features: [
      {
        name: "Acesso a plataforma",
        isAvailable: true,
      },
      {
        name: "Curriculo automatizado",
        isAvailable: true,
      },
      {
        name: "Prioridade nas vagas",
        isAvailable: true,
      },
      {
        name: "Cursos profissionalisantes",
        isAvailable: true,
      },
    ],
  },
];
