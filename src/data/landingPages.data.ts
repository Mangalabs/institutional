import {
  Zap,
  Clock,
  Palette,
  Code,
  TrendingUp,
  Star,
  Shield,
  Target,
  Users,
  Briefcase,
  Rocket,
  BarChart3,
  CheckCircle2,
  DollarSign,
  Sparkles,
  Trophy,
  MessageSquare,
  BadgeCheck,
  LucideIcon,
} from 'lucide-react'

export interface Benefit {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface Audience {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  color: string
}

export interface TimelineItem {
  step: string
  title: string
  description: string
  icon: LucideIcon
  detail: string
}

export interface Plan {
  name: string
  price: string
  originalPrice?: string
  description: string
  features: string[]
  highlight: boolean
  icon: LucideIcon
  color: string
  bonus?: string
}

export interface SuccessMetric {
  metric: string
  label: string
  description: string
  icon: LucideIcon
}

export interface PortfolioItem {
  title: string
  category: string
  color: string
  before: string
  problem: string
  result: string
  metric: string
  startedFromZero: boolean
  image: string
}

export interface Testimonial {
  text: string
  author: string
  role: string
  avatar: string
  color: string
}

export const benefits: Benefit[] = [
  {
    icon: Clock,
    title: 'Entrega em 7 dias',
    description: 'Seu site no ar em uma semana',
    color: '#FDCD00',
  },
  {
    icon: Palette,
    title: 'Design moderno',
    description: 'Interface vibrante e conversiva',
    color: '#E9972D',
  },
  {
    icon: Code,
    title: 'Código limpo',
    description: 'React + Tailwind otimizado',
    color: '#FDCD00',
  },
  {
    icon: TrendingUp,
    title: 'Alta conversão',
    description: 'CTA estratégico e otimizado',
    color: '#E9972D',
  },
  {
    icon: Star,
    title: 'SEO-ready',
    description: 'Pronto para ranquear',
    color: '#FDCD00',
  },
  {
    icon: Shield,
    title: '100% Responsivo',
    description: 'Perfeito em qualquer dispositivo',
    color: '#E9972D',
  },
]

export const targetAudience: Audience[] = [
  {
    icon: Target,
    title: 'Negócios Locais',
    subtitle: 'Clínicas, Academias, Restaurantes, Advogados',
    description:
      'Transforme visitantes do Google e Instagram em clientes no WhatsApp.',
    color: '#E9972D',
  },
  {
    icon: Users,
    title: 'Profissionais Liberais',
    subtitle: 'Consultores, Terapeutas, Arquitetos',
    description:
      'Construa autoridade e tenha uma página profissional para apresentar seus serviços.',
    color: '#FDCD00',
  },
  {
    icon: TrendingUp,
    title: 'Infoprodutores e Lançamentos',
    subtitle: 'Criadores de Conteúdo e Cursos Online',
    description:
      'Páginas de captura (leads) e páginas de vendas (checkout) de alta performance.',
    color: '#E9972D',
  },
  {
    icon: Briefcase,
    title: 'Empresas B2B/SaaS',
    subtitle: 'Startups e Empresas de Tecnologia',
    description:
      'Páginas dedicadas para demonstrar novos recursos, serviços ou captar leads qualificados.',
    color: '#FDCD00',
  },
]

export const timeline: TimelineItem[] = [
  {
    step: '1',
    title: 'Briefing',
    description: 'Conversa inicial',
    icon: MessageSquare,
    detail: 'Conversamos sobre sua visão, objetivos e público-alvo',
  },
  {
    step: '2',
    title: 'Design',
    description: 'Prototipo',
    icon: Palette,
    detail: 'Você visualiza tudo antes de começarmos a programar',
  },
  {
    step: '3',
    title: 'Desenvolvimento',
    description: 'Código e deploy em 5 dias',
    icon: Code,
    detail: 'Desenvolvemos com as melhores tecnologias do mercado',
  },
  {
    step: '4',
    title: 'Lançamento',
    description: 'Site no ar + treinamento',
    icon: Rocket,
    detail: 'Ensinamos você a gerenciar e extrair o máximo da sua página',
  },
]

export const plans: Plan[] = [
  {
    name: 'Start',
    price: 'R$ 1.350',
    originalPrice: 'R$ 2.000',
    description: 'Para validar sua ideia com impacto e agilidade.',
    features: [
      'Landing Page 100% personalizada',
      'Design exclusivo focado na sua marca',
      '100% Responsivo',
      'Formulário de captura integrado ao seu email',
      'Botão flutuante para WhatsApp',
      'SEO básico (Meta Tags e Títulos)',
      'Entrega em até 7 dias',
    ],
    highlight: false,
    icon: Zap,
    color: '#FDCD00',
  },
  {
    name: 'Performance',
    price: 'R$ 2.500',
    originalPrice: 'R$ 4.000',
    description: 'Para quem busca máxima conversão e profissionalismo.',
    features: [
      'Tudo do plano Start +',
      'Design com animações e microinterações',
      'Configuração de Google Analytics e Meta Pixel',
      'SEO Otimizado para Google (On-Page)',
      'Integração com ferramentas de automação',
    ],
    bonus: '1 Ano de Hospedagem Rápida + Domínio',
    highlight: true,
    icon: Trophy,
    color: '#E9972D',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    description: 'A solução definitiva para projetos complexos e únicos.',
    features: [
      'Análise e arquitetura de projeto 100% sob medida',
      'Múltiplas páginas ou funil de vendas completo',
      'Design de alta fidelidade com prototipação',
      'Integrações complexas (APIs, Webhooks, CRMs)',
      'Consultoria de performance e otimização contínua',
      'Suporte e manutenção prioritária',
    ],
    highlight: false,
    icon: Sparkles,
    color: '#56A97A',
  },
]

export const successCases: SuccessMetric[] = [
  {
    metric: '+340%',
    label: 'Aumento em conversões',
    description: 'Cliente de consultoria empresarial',
    icon: TrendingUp,
  },
  {
    metric: 'R$ 180k',
    label: 'Gerados em vendas',
    description: 'Lançamento de infoproduto',
    icon: DollarSign,
  },
  {
    metric: '2.500+',
    label: 'Leads capturados',
    description: 'Campanha de academia local',
    icon: Users,
  },
]


export const testimonials: Testimonial[] = [
  {
    text: 'A MangaLab não apenas criou um site, criou uma máquina de vendas. Em 3 semanas recuperamos o investimento.',
    author: 'Carlos Mendes',
    role: 'CEO, TechStartup',
    avatar: 'C',
    color: '#831CED',
  },
  {
    text: 'Transparência total, comunicação impecável. Senti que realmente se importavam com o sucesso do meu negócio.',
    author: 'Ana Paula',
    role: 'Fundadora, FitPro',
    avatar: 'A',
    color: '#14A2B6',
  },
  {
    text: 'Preço honesto, entrega rápida e resultado acima do esperado. Recomendo de olhos fechados!',
    author: 'Roberto Lima',
    role: 'Proprietário, BelemEats',
    avatar: 'R',
    color: '#E9972D',
  },
]
