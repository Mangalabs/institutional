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
      gradient: "from-orange-light to-orange-dar",
      tags: ["React", "Ecommerce", "Catálogo Digital"],
      image: "/src/assets/images/projects/mgtratorpecas.png",
      link: "https://mgtratorpecas.com.br"
    },
    {
      id: 2,
      title: "FitTracker App",
      description: "Aplicativo de fitness com tracking de exercícios e dieta",
      category: "app",
      icon: "🏃‍♂️",
      gradient: "from-green-dark to-green-deep",
      tags: ["Flutter", "Firebase"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: ""
    },
    {
      id: 3,
      title: "Sistema ERP",
      description: "Gestão completa para pequenas e médias empresas",
      category: "sistema",
      icon: "📊",
      gradient: "from-orange-dark to-orange-vibrant",
      tags: ["Vue.js", "Python"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      link: ""
    },
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