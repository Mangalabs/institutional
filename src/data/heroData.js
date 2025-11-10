import {
  FaGlobe,
  FaMobileAlt,
  FaChartLine,
  FaBolt,
  FaBullseye,
} from 'react-icons/fa'

export const heroData = {
  title: {
    part1: 'Conectamos',
    highlighted: 'ideias',
    part2: 'a',
    typingText: 'soluções digitais',
  },
  subtitle:
    'Landing pages, sites e apps otimizados para conversão rápida, com foco em resultados e geração de leads qualificados.',
  buttons: [
    {
      text: 'Peça um orçamento',
      variant: 'primary',
      gradient: 'linear-gradient(135deg, #C4501B, #A0361B)',
    },
    {
      text: 'Veja nossos cases',
      variant: 'secondary',
      action: 'scrollToProjects',
    },
  ],
  services: [
    {
      icon: FaGlobe,
      title: 'Sites Modernos',
      description:
        'Landing pages e sites responsivos, otimizados para conversão e SEO.',
      delay: 0,
      iconBg: 'rgba(233, 151, 45, 0.1)',
    },
    {
      icon: FaChartLine,
      title: 'Consultoria Tech',
      description:
        'Estratégias digitais personalizadas para acelerar resultados.',
      delay: 0.4,
      iconBg: 'rgba(233, 151, 45, 0.1)',
    },
    {
      icon: FaBolt,
      title: 'Entrega Rápida',
      description: 'Projetos ágeis, do briefing à entrega em poucos dias.',
      delay: 0.6,
      iconBg: 'rgba(233, 151, 45, 0.1)',
    },
    {
      icon: FaBullseye,
      title: 'Foco em Conversão',
      description:
        'Cada landing page é planejada para gerar leads qualificados.',
      delay: 0.8,
      iconBg: 'rgba(233, 151, 45, 0.1)',
    },
  ],
  floatingElements: [
    {
      position: 'top-20 left-10',
      size: 'w-32 h-32',
      delay: 0,
    },
    {
      position: 'bottom-20 right-10',
      size: 'w-24 h-24',
      delay: 1,
    },
    {
      position: 'top-1/2 left-1/3',
      size: 'w-16 h-16',
      delay: 2,
    },
    {
      position: 'top-10 right-1/4',
      size: 'w-20 h-20',
      delay: 0.5,
    },
    {
      position: 'bottom-1/4 left-1/5',
      size: 'w-28 h-28',
      delay: 1.5,
    },
  ],
}
