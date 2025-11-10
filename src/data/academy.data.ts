import {
  type LucideIcon,
  Users,
  Briefcase,
  HeartHandshake,
  Heart,
  Globe,
  Award,
  Compass,
  Building2,
  Target,
  Code,
  GraduationCap,
} from 'lucide-react'

export interface ImpactStat {
  value: string
  label: string
  description: string
  icon: LucideIcon
  color: string
}

export interface MethodologyItem {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface Testimonial {
  name: string
  from: string
  role: string
  photo: string
  quote: string
  highlight: string
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
  color: string
}

export interface BrazilState {
  name: string
  students: number
  top: string
  left: string
}

export interface GrowthOption {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export interface MentorshipFeature {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

export const impactStats: ImpactStat[] = [
  {
    value: '20+',
    label: 'talentos preparados',
    description:
      'Jovens que concluíram a imersão e estão prontos para a primeira oportunidade.',
    icon: Users,
    color: '#B6461B',
  },
  {
    value: '5+',
    label: 'projetos reais no portfólio',
    description:
      'Soluções desenvolvidas que comprovam a capacidade técnica para o mercado.',
    icon: Briefcase,
    color: '#FDCD00',
  },
  {
    value: '10+',
    label: 'mentores conectados',
    description:
      'Profissionais sênior e empresas parceiras ativamente envolvidos na formação.',
    icon: HeartHandshake,
    color: '#E9972D',
  },
  {
    value: '12',
    label: 'semanas de imersão prática',
    description:
      'Foco total em criar portfólio e simular o dia a dia de uma empresa de tech.',
    icon: Heart,
    color: '#2B5B3F',
  },
]

export const methodology: MethodologyItem[] = [
  {
    icon: Heart,
    title: 'Projetos que importam',
    description:
      'Você aprende construindo soluções reais que impactam pessoas reais. Nada de teoria abstrata.',
    color: '#B6461B',
  },
  {
    icon: Users,
    title: 'Mentoria de verdade',
    description:
      'Profissionais que se importam guiam cada passo. Você nunca está sozinho nessa jornada.',
    color: '#FDCD00',
  },
  {
    icon: Briefcase,
    title: 'Empregabilidade com propósito',
    description:
      'Não formamos apenas programadores. Formamos profissionais prontos para mudar suas vidas.',
    color: '#E9972D',
  },
  {
    icon: Globe,
    title: 'Conexão com o mundo',
    description:
      'Do Norte do Brasil para qualquer lugar. Seus talentos não têm fronteiras.',
    color: '#B6461B',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Maria Silva',
    from: 'Belém, PA',
    role: 'Frontend Developer',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    quote:
      'Eu vim de uma família que nunca imaginou ter alguém trabalhando com tecnologia. Hoje sustento minha casa e ajudo meus irmãos a estudar. A MangaAcademy não mudou só minha carreira, mudou minha vida inteira.',
    highlight: 'De auxiliar de limpeza a desenvolvedora',
  },
  {
    name: 'João Santos',
    from: 'Manaus, AM',
    role: 'Fullstack Developer',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    quote:
      'Cresci na periferia sem acesso a nada. A MangaAcademy me deu algo que ninguém nunca me deu: uma chance real. Hoje trabalho remotamente e ajudo a criar oportunidades para outros jovens.',
    highlight: 'Do sonho impossível à realidade',
  },
  {
    name: 'Ana Costa',
    from: 'Santarém, PA',
    role: 'Backend Developer',
    photo:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    quote:
      'Eu não sabia nem o que era programação. Hoje escrevo código que impacta milhares de pessoas todos os dias. Aprendi que não importa de onde você vem, mas pra onde você quer ir.',
    highlight: 'De zero a desenvolvedora em 12 semanas',
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: '2020',
    title: 'O Começo',
    description:
      'Tudo começou em Belém, com um grupo de mentores querendo democratizar o acesso à tecnologia no Norte do Brasil.',
    color: '#B6461B',
  },
  {
    year: '2021',
    title: 'Primeira Turma',
    description:
      '12 alunos, 100% de empregabilidade. A prova de que o modelo funcionava e poderia mudar vidas.',
    color: '#FDCD00',
  },
  {
    year: '2022',
    title: 'Expansão Nacional',
    description:
      'Alunos de todo o Norte e Nordeste. O movimento começou a ganhar força e identidade nacional.',
    color: '#E9972D',
  },
  {
    year: '2023',
    title: 'Impacto Real',
    description:
      'Mais de 100 vidas transformadas. Famílias inteiras impactadas. O movimento se tornou uma realidade.',
    color: '#B6461B',
  },
  {
    year: '2024',
    title: 'Visão de Futuro',
    description:
      'Hoje somos referência em educação tech com impacto social. O objetivo? Transformar 1000 vidas até 2026.',
    color: '#FDCD00',
  },
]

export const brazilStates: BrazilState[] = [
  { name: 'Pará', students: 45, top: '42%', left: '45%' },
  { name: 'Amazonas', students: 28, top: '38%', left: '32%' },
  { name: 'Maranhão', students: 18, top: '35%', left: '52%' },
  { name: 'Ceará', students: 15, top: '30%', left: '58%' },
  { name: 'Bahia', students: 12, top: '48%', left: '60%' },
]

export const growthOptions: GrowthOption[] = [
  {
    icon: Award,
    title: 'Aperfeiçoamento Profissional',
    description:
      'Mentorias e trilhas avançadas para quem já está na área e quer subir de nível técnico e estratégico.',
    color: '#B6461B',
  },
  {
    icon: Compass,
    title: 'Migração de Carreira',
    description:
      'Para quem quer começar do zero, mudar de área e mergulhar de cabeça no mundo da tecnologia com propósito.',
    color: '#FDCD00',
  },
  {
    icon: Building2,
    title: 'Mentoria Corporativa',
    description:
      'Empresas que querem capacitar seus times com nossa metodologia prática, humana e inclusiva.',
    color: '#E9972D',
  },
]

export const mentorshipFeatures: MentorshipFeature[] = [
  {
    icon: Target,
    title: 'Diagnóstico e desenho personalizado',
    description: 'Entendemos as necessidades únicas do seu time',
    color: '#B6461B',
  },
  {
    icon: Code,
    title: 'Aulas e projetos reais da empresa',
    description:
      'Aprendizado aplicado direto nos desafios do negócio',
    color: '#FDCD00',
  },
  {
    icon: GraduationCap,
    title: 'Acompanhamento com mentores seniores',
    description: 'Expertise e humanidade em cada etapa do processo',
    color: '#E9972D',
  },
]