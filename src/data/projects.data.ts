import { Code2, Palette, Zap, Users, type LucideIcon } from 'lucide-react'

export interface ProjectMetrics {
  [key: string]: string
}

export interface Project {
  id: number
  name: string
  category: string
  description: string
  tech: string[]
  metrics: ProjectMetrics
  color: string
  image: string
}

export interface Capability {
  icon: LucideIcon
  title: string
  description: string
}

export const filters: string[] = [
  'Todos',
  'SaaS',
  'E-commerce',
  'Educação',
  'Saúde',
  'Fintech',
]

export const projects: Project[] = [
  {
    id: 1,
    name: 'HealthTech Platform',
    category: 'Saúde',
    description:
      'Plataforma completa de telemedicina com agendamento e prontuário digital',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    metrics: { users: '50k+', growth: '300%' },
    color: '#14A2B6',
    image: 'healthcare',
  },
  {
    id: 2,
    name: 'EduLearn',
    category: 'Educação',
    description: 'LMS completo com gamificação e analytics avançados',
    tech: ['Next.js', 'Firebase', 'TailwindCSS'],
    metrics: { students: '10k+', satisfaction: '4.8/5' },
    color: '#831CED',
    image: 'education',
  },
  {
    id: 3,
    name: 'ShopFlow',
    category: 'E-commerce',
    description:
      'E-commerce headless com checkout otimizado e dashboard vendedor',
    tech: ['React', 'Stripe', 'MongoDB'],
    metrics: { conversion: '+45%', sales: 'R$ 2M+' },
    color: '#E9972D',
    image: 'ecommerce',
  },
  {
    id: 4,
    name: 'FinanceHub',
    category: 'Fintech',
    description: 'Dashboard financeiro com IA para insights e automação',
    tech: ['Vue.js', 'Python', 'AWS'],
    metrics: { transactions: '1M+', uptime: '99.9%' },
    color: '#2B5B3F',
    image: 'finance',
  },
  {
    id: 5,
    name: 'TeamSync',
    category: 'SaaS',
    description: 'Ferramenta de colaboração assíncrona para times remotos',
    tech: ['React', 'WebRTC', 'Redis'],
    metrics: { teams: '500+', retention: '85%' },
    color: '#C4501B',
    image: 'saas',
  },
  {
    id: 6,
    name: 'FoodDelivery Pro',
    category: 'E-commerce',
    description: 'Sistema completo de delivery com tracking em tempo real',
    tech: ['React Native', 'Node.js', 'Socket.io'],
    metrics: { orders: '100k+', rating: '4.7/5' },
    color: '#A0361B',
    image: 'food',
  },
]

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
