import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export const footerData = {
  brand: {
    name: "MangaLab",
    highlight: "Lab",
    description:
      "Transformando ideias em realidade digital com inovação e criatividade.",
  },
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Tecnologias", href: "#tech" },
    { label: "Projetos", href: "#projects" },
  ],
  services: [
    "Desenvolvimento Web",
    "Aplicativos Mobile",
    "E-commerce",
    "Consultoria Digital",
  ],
  contact: [
    { type: "email", value: "contato@mangalab.io" },
    { type: "phone", value: "(85) 981263142" },
    { type: "address", value: "Eusébio, CE" },
  ],
  socialLinks: [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mangalabtech" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/mangalabio" },
    { icon: Github, label: "Github", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contato@mangalab.com.br" },
  ],
  copyright: {
    text: "Todos os direitos reservados.",
    icon: "/icon-copyright.png",
    loveText: "Desenvolvido com pela equipe MangaLab",
  },
};
