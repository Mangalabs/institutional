import {
  type LucideIcon,
  Rocket,
  Code2,
  Users,
  Target,
  Zap,
  TrendingUp,
  Heart,
  Globe,
  Building2,
  GraduationCap,
  Palette,
  Compass,
  Code,
  Sparkles,
} from 'lucide-react'

export interface ImpactNumber {
  icon: LucideIcon
  value: string
  label: string
  color: string
}

export interface EcosystemItem {
  id: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  stats: { value: string; label: string }[]
  gradient: string
  accent: string
  cta: string
  features: string[]
}

export interface DnaItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface PublicoItem {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

export interface FrenteItem {
  name: string
  color: string
  icon: LucideIcon
}

export const ecosystem: EcosystemItem[] = [
  {
    id: 'investir',
    title: 'MangaAcademy',
    tagline: 'Movimento de Transformação Social',
    description:
      'Do primeiro código à liderança tech. Educação que transforma vidas, conecta talentos e democratiza oportunidades.',
    icon: Rocket,
    stats: [
      { value: '120+', label: 'Vidas transformadas' },
      { value: '80%', label: 'Novos empregos' },
      { value: 'R$ 4k', label: 'Salário médio inicial' },
    ],
    gradient: 'from-[#E9972D] to-[#C4501B]',
    accent: '#E9972D',
    cta: 'Conhecer o Movimento',
    features: [
      'Aprendizado prático',
      'Mentoria próxima',
      'Impacto social',
      'Migração de carreira',
    ],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    tagline: 'Converta Rápido, Cresça Mais',
    description:
      'Páginas de alta conversão em 7 dias. Design moderno, código limpo e resultados mensuráveis para seu negócio decolar.',
    icon: Zap,
    stats: [
      { value: '7 dias', label: 'Entrega garantida' },
      { value: '+45%', label: 'Taxa de conversão' },
      { value: '100%', label: 'Responsivo' },
    ],
    gradient: 'from-[#FDCD00] to-[#E9972D]',
    accent: '#FDCD00',
    cta: 'Ver Pacotes',
    features: [
      'Entrega em 7 dias',
      'Design sob medida',
      'SEO otimizado',
      'Alta conversão',
    ],
  },
  {
    id: 'projetos',
    title: 'Custom',
    tagline: 'Software Artesanal de Impacto',
    description:
      'Do MVP ao produto escalável. Desenvolvimento full-stack, design de produto e arquitetura preparada para crescer.',
    icon: Code2,
    stats: [
      { value: '150+', label: 'Projetos entregues' },
      { value: '500k+', label: 'Usuários impactados' },
      { value: '98%', label: 'Satisfação' },
    ],
    gradient: 'from-[#56A97A] to-[#2B5B3F]',
    accent: '#56A97A',
    cta: 'Ver Portfólio',
    features: [
      'Full-stack',
      'Design de produto',
      'Performance',
      'Escalabilidade',
    ],
  },
]

export const impactNumbers: ImpactNumber[] = [
  {
    icon: Users,
    value: '120+',
    label: 'Talentos formados',
    color: '#FDCD00',
  },
  {
    icon: Rocket,
    value: '150+',
    label: 'Projetos entregues',
    color: '#E9972D',
  },
  {
    icon: Globe,
    value: '500k+',
    label: 'Usuários impactados',
    color: '#C4501B',
  },
  {
    icon: Heart,
    value: '98%',
    label: 'Clientes satisfeitos',
    color: '#56A97A',
  },
]

export const dna: DnaItem[] = [
  {
    icon: Heart,
    title: 'Impacto Social',
    description:
      'Cada projeto, cada aluno formado, cada linha de código tem propósito e gera mudança real.',
    color: '#FDCD00',
  },
  {
    icon: Sparkles,
    title: 'Disrupção & Ousadia',
    description:
      'Transformamos o que parece impossível em novas oportunidades, sem medo de ir além.',
    color: '#E9972D',
  },
  {
    icon: Users,
    title: 'Democratização Tech',
    description:
      'Tecnologia não é para poucos. Tornamos inovação acessível para negócios e pessoas.',
    color: '#C4501B',
  },
  {
    icon: TrendingUp,
    title: 'Evolução Contínua',
    description:
      'Aprendizado é nosso combustível. Crescemos junto com cada desafio e cada projeto.',
    color: '#56A97A',
  },
]

export const publicosAtendidos: PublicoItem[] = [
  {
    icon: GraduationCap,
    title: 'Jovens Talentos',
    description: 'Primeira oportunidade em tech',
    link: 'investir',
  },
  {
    icon: Compass,
    title: 'Profissionais em Transição',
    description: 'Migração e evolução de carreira',
    link: 'investir',
  },
  {
    icon: Building2,
    title: 'Empresas & Startups',
    description: 'Produtos digitais sob medida para seu négocio',
    link: 'projetos',
  },
  {
    icon: Target,
    title: 'PMEs & Negócios',
    description: 'Landing pages de alta conversão',
    link: 'landing-pages',
  },
]

export const frentes: FrenteItem[] = [
  { name: 'Tech Education', color: '#FDCD00', icon: GraduationCap },
  { name: 'Product Design', color: '#E9972D', icon: Palette },
  { name: 'Web Development', color: '#C4501B', icon: Code2 },
  { name: 'Full-Stack', color: '#2B5B3F', icon: Code },
  { name: 'Growth & Conversão', color: '#143829', icon: TrendingUp },
]