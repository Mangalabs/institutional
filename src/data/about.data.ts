import {
  type LucideIcon,
  Rocket,
  Globe,
  Star,
  Heart,
  Users,
  Shield,
  TrendingUp,
  Brain,
  Leaf,
  Sparkles,
  TreePine,
  MapPin,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
} from 'lucide-react'

export interface Metric {
  value: string
  label: string
  icon: LucideIcon
  color: string
}

export interface DnaItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface JourneyEvent {
  year: string
  title: string
  description: string
  icon: LucideIcon
  color: string
}

export interface GlobalFeature {
  icon: LucideIcon
  title: string
  description: string
  color: string
  gradient: string
}

export interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  imageBgGradient: string
  color: string
  socials: {
    linkedin: string
    mail: string
  }
}

export interface CallToAction {
  id: string
  emoji: string
  title: string
  description: string
  buttonText: string
  buttonIcon: LucideIcon | 'Sparkles'
  style: 'primary' | 'secondary'
}

export const metrics: Metric[] = [
{
  value: '150+',
  label: 'Projetos entregues para marcas globais',
  icon: Rocket,
  color: '#FDCD00',
},
{
  value: '500k+',
  label: 'Pessoas impactadas todos os dias',
  icon: Globe,
  color: '#E9972D',
},
{
  value: '98%',
  label: 'Índice de satisfação dos clientes',
  icon: Star,
  color: '#C4501B',
},
{
  value: '120+',
  label: 'Vidas transformadas pela Academy',
  icon: Heart,
  color: '#2B5B3F',
},

]

export const dna: DnaItem[] = [
  {
    icon: Users,
    title: 'Equipe Unida',
    description:
      'A força da MangaLab vem da colaboração: mentores experientes guiando novos talentos, transformando aprendizado em resultado real.',
    color: '#FDCD00',
  },
  {
    icon: Globe,
    title: 'Experiência Global',
    description:
      'Nossa equipe combina conhecimento nacional e internacional, garantindo soluções modernas e de alto impacto.',
    color: '#E9972D',
  },
  {
    icon: Shield,
    title: 'Qualidade Artesanal',
    description:
      'Preço acessível, qualidade inegociável. Cada entrega passa por rigoroso controle de qualidade.',
    color: '#C4501B',
  },
  {
    icon: Heart,
    title: 'Democratização Real',
    description:
      'Acreditamos que toda empresa merece soluções inteligentes. E todo desenvolvedor, a oportunidade de brilhar.',
    color: '#A0361B',
  },
  {
    icon: TrendingUp,
    title: 'Diversidade',
    description:
      'Valorizamos diferentes perspectivas, experiências e backgrounds. A inovação nasce da pluralidade.',
    color: '#2B5B3F',
  },
  {
    icon: Brain,
    title: 'Evolução Contínua',
    description:
      'Aprender, iterar e melhorar sempre. Cada projeto nos leva à próxima versão melhorada.',
    color: '#143829',
  },
]

export const journey: JourneyEvent[] = [
  {
    year: '2020',
    title: 'As Raízes',
    description:
      'Começamos com um sonho: democratizar o acesso à tecnologia e criar oportunidades reais no Norte do Brasil.',
    icon: Leaf,
    color: '#143829',
  },
  {
    year: '2021',
    title: 'Primeiros Frutos',
    description:
      'Lançamos a MangaAcademy e vimos as primeiras vidas sendo transformadas através da educação tech.',
    icon: Sparkles,
    color: '#2B5B3F',
  },
  {
    year: '2022',
    title: 'Expansão',
    description:
      'Projetos customizados ganham força. Começamos a atender clientes em todo o Brasil e exterior.',
    icon: TrendingUp,
    color: '#C4501B',
  },
  {
    year: '2023',
    title: 'Maturidade',
    description:
      'Consolidamos nosso ecossistema completo: educação, produtos digitais e landing pages de alta conversão.',
    icon: TreePine,
    color: '#E9972D',
  },
  {
    year: '2024',
    title: 'Impacto Global',
    description:
      'Mais de 500 mil usuários impactados. 150+ projetos entregues. Um ecossistema vivo e em crescimento.',
    icon: Globe,
    color: '#FDCD00',
  },
]

export const globalFeatures: GlobalFeature[] = [
  {
    icon: Globe,
    title: 'Padrões Globais',
    description:
      'Seguimos as melhores práticas internacionais de desenvolvimento, design e gestão de projetos.',
    color: '#14A2B6',
    gradient: 'from-[#14A2B6] to-[#0D7A8A]',
  },
  {
    icon: MapPin,
    title: 'Experiência Internacional',
    description:
      'Projetos entregues para clientes na América do Norte, Europa e Ásia com excelência.',
    color: '#831CED',
    gradient: 'from-[#831CED] to-[#6B14C4]',
  },
  {
    icon: Users,
    title: 'Time Multilíngue',
    description:
      'Comunicação fluente em português, inglês e espanhol para atender clientes globais.',
    color: '#E9972D',
    gradient: 'from-[#E9972D] to-[#C4501B]',
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: 'Gabriel Franco',
    role: 'Dev e Co-Fundador',
    description:
      'Visionário em tecnologia, lidera times e estratégias de inovação.',
    image: 'gabriel-franco.jpeg',
    imageBgGradient: 'from-[#E9972D]/20 to-[#C4501B]/20',
    color: '#E9972D',
    socials: { linkedin: '#', mail: '#' },
  },
  {
    name: 'Thicianny Marques',
    role: 'Dev & Co-Fundadora',
    description: 'Especializada em construir aplicações sofisticadas, elegantes e de alto impacto. ',
    image: 'thicianny-marques.jpeg',
    imageBgGradient: 'from-[#14A2B6]/20 to-[#0D7A8A]/20',
    color: '#14A2B6',
    socials: { linkedin: '#', mail: '#' },
  },
  {
    name: 'Diogo Felipe',
    role: 'CTO & Co-Fundador',
    description: 'Resiliênte em relação às adversidades do mercado.',
    image: 'diogo-felipe.jpg',
    imageBgGradient: 'from-[#A0361B]/20 to-[#A0300a]/20',
    color: '#A0361B',
    socials: { linkedin: '#', mail: '#' },
  },
]


export const finalCtaCards: CallToAction[] = [
  {
    id: 'empresas',
    emoji: '🎯',
    title: 'Para Empresas',
    description:
      'Quer tirar seu sonho do papel com tecnologia de ponta, rapidez e preço justo?',
    buttonText: 'Agende uma conversa',
    buttonIcon: ArrowRight,
    style: 'primary',
  },
  {
    id: 'talentos',
    emoji: '⚡',
    title: 'Para Talentos',
    description:
      'Se identificou com nossa cultura e quer um lugar para crescer de verdade?',
    buttonText: 'Ver vagas abertas',
    buttonIcon: 'Sparkles',
    style: 'secondary',
  },
]