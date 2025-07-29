export const projectsData = {
  heading: {
    title: "Nossos",
    highlighted: "Projetos",
    subtitle: "Soluções que fazem a diferença"
  },
  filters: [
    { id: "all", label: "Todos" },
    { id: "site", label: "Sites" },
    { id: "app", label: "Apps" },
    { id: "sistema", label: "Sistemas" }
  ],
  projects: [
    {
      id: 1,
      title: "MG Tractor Peças",
      description: "Vitrine online de peças para tratores com catálogo digital completo",
      category: "site",
      icon: "🚜",
      gradient: "from-orange-light to-orange-dark",
      tags: ["React", "Ecommerce", "Catálogo Digital"],
      image: "https://institucional-data.s3.sa-east-1.amazonaws.com/projects/mgtratorpecas.webp",
      link: "https://mgtratorpecas.com.br"
    },
    {
      id: 2,
      title: "Cardápio digital Espuma do Mar",
      description: "Site de cardápio digital para restaurante",
      category: "site",
      icon: "🍽️",
      gradient: "from-orange-light to-orange-dark",
      tags: ["Canva", "CRM", "Cardápio Digital"],
      image: "https://institucional-data.s3.sa-east-1.amazonaws.com/projects/espumadomar.webp",
      link: "https://espumadomar.my.canva.site"
    },
    // {
    //   id: 3,
    //   title: "teste",
    //   description: "Site de cardápio digital para restaurante",
    //   category: "app",
    //   icon: "🏃‍♂️",
    //   gradient: "from-green-dark to-green-deep",
    //   tags: ["Canva", "CRM", "Cardápio Digital"],
    //   image: "",
    //   link: ""
    // },
    // {
    //   id: 4,
    //   title: "Sistema ERP",
    //   description: "Gestão completa para pequenas e médias empresas",
    //   category: "sistema",
    //   icon: "📊",
    //   gradient: "from-orange-dark to-orange-vibrant",
    //   tags: ["Vue.js", "Python"],
    //   image: "https://institucional-data.s3.sa-east-1.amazonaws.com/projects/mgtratorpecas.webp",
    //   link: ""
    // },
  ],
  buttonText: "Ver Projeto",
  colorSchemes: {
    orange: {
      bg: "bg-orange-light/20",
      text: "text-orange-dark"
    },
    green: {
      bg: "bg-green-dark/20",
      text: "text-green-deep"
    }
  }
};