import { Code2, LucideIcon, Palette, Users, Zap } from 'lucide-react'

export interface ProjectMetrics {
  [key: string]: string
}

export interface Project {
  id: number
  title: string
  description: string
  category: 'site' | 'app' | 'sistema' | 'all'
  icon: string
  gradient: string
  tags: string[]
  metrics: ProjectMetrics
  image: string
  link: string

  // CAMPOS ADICIONADOS PARA O PortfolioCard
  before: string
  problem: string
  result: string
  metric: string
  startedFromZero: boolean
  color: string
}

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
}

export interface Filter {
  id: string
  label: string
}

export interface Heading {
  title: string
  highlighted: string
  subtitle: string
}

export interface ColorScheme {
  bg: string
  text: string
}

export interface ColorSchemes {
  orange: ColorScheme
  green: ColorScheme
}

export interface ProjectsData {
  heading: Heading
  filters: Filter[]
  projects: Project[]
  buttonText: string
  colorSchemes: ColorSchemes
}

function extractMetric(metrics: ProjectMetrics) {
  return Object.values(metrics)[0] ?? 'Resultados'
}

export const projectsData: ProjectsData = {
  heading: {
    title: 'Nossos',
    highlighted: 'Projetos',
    subtitle: 'Soluções que fazem a diferença',
  },
  filters: [
    { id: 'all', label: 'Todos' },
    { id: 'site', label: 'Sites' },
    { id: 'app', label: 'Apps' },
    { id: 'sistema', label: 'Sistemas' },
  ],
  projects: [
    // {
    //   id: 1,
    //   title: 'Vivo Empresas',
    //   description: 'Site e E-commerce da Vivo focado em empresas',
    //   category: 'sistema',
    //   icon: '📞',
    //   gradient: 'from-blue-500 to-blue-700',
    //   tags: ['Vue', 'E-commerce', 'Site'],
    //   metrics: { users: '120k+', uptime: '99.9%' },
    //   image: '/vivo.png',
    //   link: 'https://vivo.com.br/para-empresas/',

    //   before: 'Experiência desatualizada',
    //   problem:
    //     'A plataforma precisava atender alto volume e melhorar a conversão empresarial.',
    //   result: 'Aumento significativo de usuários e estabilidade reforçada.',
    //   metric: extractMetric({ users: '120k+' }),
    //   startedFromZero: false,
    //   color: '#3B82F6',
    // },
    {
      id: 2,
      title: 'Polícia Civil - PA',
      description: 'Portal institucional moderno da Polícia Civil do Pará',
      category: 'site',
      icon: '👮🏼‍♀️',
      gradient: 'from-slate-600 to-slate-800',
      tags: ['Vue', 'Governo', 'Site'],
      metrics: { visitors: '2M+', satisfaction: '97%' },
      image: '/pcpa.png',
      link: 'https://www.pc.pa.gov.br',

      before: 'Portal antigo e pouco acessível',
      problem:
        'População tinha dificuldade para acessar serviços e informações.',
      result: 'Portal moderno, rápido e com milhões de acessos.',
      metric: extractMetric({ visitors: '2M+' }),
      startedFromZero: true,
      color: '#475569',
    },
    {
      id: 3,
      title: 'Natura - Força de Vendas',
      description: 'Sistema de força de vendas da Natura',
      category: 'sistema',
      icon: '💅',
      gradient: 'from-pink-500 to-rose-600',
      tags: ['React', 'Sistema', 'Gestão'],
      metrics: { sellers: '8k+', growth: '+180%' },
      image: '/natura.png',
      link: 'https://www.natura.com.br/forca-de-vendas',

      before: 'Fluxo de vendas manual e pouco integrado',
      problem: 'Dificuldade de gestão para milhares de consultoras.',
      result: 'Plataforma escalável que ampliou o crescimento.',
      metric: extractMetric({ sellers: '8k+' }),
      startedFromZero: true,
      color: '#EC4899',
    },
    {
      id: 4,
      title: 'MG Tractor Peças',
      description: 'Catálogo digital e vitrine online para peças agrícolas',
      category: 'site',
      icon: '🚜',
      gradient: 'from-green-600 to-green-800',
      tags: ['React', 'E-commerce', 'Catálogo Digital'],
      metrics: { products: '2k+', reach: '40 cidades' },
      image: '/mgtractorpecas.png',
      link: 'https://mgtratorpecas.com.br',

      before: 'Catálogo físico e desorganizado',
      problem: 'Clientes não encontravam produtos com facilidade.',
      result: 'Catálogo digital completo e expansão regional.',
      metric: extractMetric({ products: '2k+' }),
      startedFromZero: true,
      color: '#059669',
    },
    {
      id: 5,
      title: 'Senior Koster',
      description: 'Site institucional de confeitaria artesanal',
      category: 'site',
      icon: '🧁',
      gradient: 'from-yellow-500 to-amber-700',
      tags: ['React', 'Landing Page', 'Confeitaria'],
      metrics: { clients: '800+', rating: '4.9/5' },
      image: '/seniorkoster.png',
      link: 'https://www.seniorkoster.com.br/',

      before: 'Baixa presença online',
      problem: 'Clientes tinham dificuldade de ver portfólio e encomendar.',
      result: 'Fortalecimento da marca e aumento de encomendas.',
      metric: extractMetric({ clients: '800+' }),
      startedFromZero: true,
      color: '#F59E0B',
    },
    {
      id: 6,
      title: 'SalonSync Web',
      description: 'Landing page do sistema de gestão para salões e barbearias',
      category: 'site',
      icon: '💵',
      gradient: 'from-teal-500 to-teal-700',
      tags: ['Landing page', 'Web', 'React'],
      metrics: { acess: '350+', sales: '$50k+' },
      image: '/salonsync-web.png',
      link: 'https://www.salonsync.com.br',

      before: 'Baixa conversão digital',
      problem: 'Sistema tinha pouca visibilidade e atraía poucos leads.',
      result: 'Mais acessos e aumento nas vendas.',
      metric: extractMetric({ acess: '350+' }),
      startedFromZero: true,
      color: '#14B8A6',
    },
    {
      id: 7,
      title: 'SalonSync',
      description: 'Sistema de gestão para salões e barbearias',
      category: 'sistema',
      icon: '💇🏾',
      gradient: 'from-violet-500 to-violet-700',
      tags: ['React', 'Sistema', 'Gerenciamento'],
      metrics: { salons: '400+', retention: '89%' },
      image: '/salonsync.png',
      link: 'https://salondash.mangalab.io',

      before: 'Gestão confusa por planilhas',
      problem: 'Salões precisavam centralizar agenda, caixa e clientes.',
      result: 'Organização total e alta retenção.',
      metric: extractMetric({ salons: '400+' }),
      startedFromZero: true,
      color: '#8B5CF6',
    },
    {
      id: 8,
      title: 'MyPlanConnection',
      description: 'App americano de planejamento e aposentadoria',
      category: 'app',
      icon: '💰',
      gradient: 'from-emerald-500 to-emerald-700',
      tags: ['React', 'Aplicativo', 'Aposentadoria'],
      metrics: { downloads: '50k+', rating: '4.6/5' },
      image: '/myplanconnection.png',
      link: '',

      before: 'Ferramentas antigas e pouco intuitivas',
      problem: 'Usuários buscavam planejar aposentadoria de forma prática.',
      result: 'App moderno com dezenas de milhares de downloads.',
      metric: extractMetric({ downloads: '50k+' }),
      startedFromZero: true,
      color: '#10B981',
    },
    {
      id: 9,
      title: "Jack Link's",
      description: 'Sistema de controle de revendas e logística',
      category: 'sistema',
      icon: '🍖',
      gradient: 'from-red-600 to-red-800',
      tags: ['Angular', 'Sistema', 'Revenda'],
      metrics: { resellers: '1.2k+', conversion: '+52%' },
      image: '/jacklinks.png',
      link: 'https://www.jacklinks.com.br/',

      before: 'Processos de revenda descentralizados',
      problem: 'Dificuldade em acompanhar distribuidores e logística.',
      result: 'Sistema robusto com aumento de conversão.',
      metric: extractMetric({ resellers: '1.2k+' }),
      startedFromZero: false,
      color: '#DC2626',
    },
    {
      id: 10,
      title: 'STS Recycling',
      description: 'Plataforma de gestão de reciclagem industrial',
      category: 'sistema',
      icon: '♻️',
      gradient: 'from-lime-500 to-green-700',
      tags: ['React', 'Sistema', 'Reciclagem'],
      metrics: { tons: '25k+', efficiency: '93%' },
      image: '/sts.png',
      link: 'https://www.stselectronicrecyclinginc.com/',

      before: 'Gestão pouco eficiente',
      problem: 'Indústrias precisavam acompanhar toneladas de resíduos.',
      result: 'Sistema inteligente e de alta eficiência.',
      metric: extractMetric({ tons: '25k+' }),
      startedFromZero: true,
      color: '#65A30D',
    },
    {
      id: 11,
      title: 'CareCru',
      description: 'Gestão inteligente de clínicas odontológicas',
      category: 'sistema',
      icon: '🦷',
      gradient: 'from-sky-500 to-sky-700',
      tags: ['React', 'Plataforma', 'Odontologia'],
      metrics: { clinics: '1.1k+', retention: '92%' },
      image: '/carecru.png',
      link: 'https://www.carecru.com/',

      before: 'Ferramentas pouco integradas',
      problem: 'Clínicas precisavam otimizar atendimento e agenda.',
      result: 'Melhoria real na produtividade das clínicas.',
      metric: extractMetric({ clinics: '1.1k+' }),
      startedFromZero: false,
      color: '#0EA5E9',
    },
    {
      id: 12,
      title: 'Pangea',
      description: 'Gestão de financiamento corporativo',
      category: 'sistema',
      icon: '💵',
      gradient: 'from-teal-500 to-teal-700',
      tags: ['Aplicação', 'Gestão', 'Financiamento'],
      metrics: { companies: '350+', funding: '$500M+' },
      image: '/pangea.png',
      link: 'https://www.pangea.us/',

      before: 'Processos financeiros complexos',
      problem: 'Empresas precisavam centralizar financiamentos e dados.',
      result: 'Plataforma moderna e eficiente.',
      metric: extractMetric({ companies: '350+' }),
      startedFromZero: false,
      color: '#0D9488',
    },
  ],
  buttonText: 'Ver Projeto',
  colorSchemes: {
    orange: {
      bg: 'bg-orange-light/20',
      text: 'text-orange-dark',
    },
    green: {
      bg: 'bg-green-dark/20',
      text: 'text-green-deep',
    },
  },
}

export const capabilities: Capability[] = [
  {
    icon: Code2,
    title: 'Desenvolvimento Full-Stack',
    description: 'Frontend moderno + Backend robusto + DevOps',
  },
  {
    icon: Palette,
    title: 'Design de Produto',
    description: 'UX Research + UI Design + Design System',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Otimização, SEO e Core Web Vitals',
  },
  {
    icon: Users,
    title: 'Escalabilidade',
    description: 'Arquitetura preparada para crescer',
  },
]
