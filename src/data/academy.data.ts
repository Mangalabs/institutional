import {
  Users,
  Code,
  BookOpen,
  Award,
  Heart,
  Target,
  Rocket,
} from 'lucide-react'

export const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwY29kaW5nfGVufDF8fHx8MTc2MzQ5NzU5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Aprendizado Prático',
    description: 'Estudantes em aulas práticas de programação',
  },
  {
    url: 'https://images.unsplash.com/photo-1652305500057-0fcb348b62aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYzMzk3NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Colaboração',
    description: 'Trabalho em equipe e networking',
  },
  {
    url: 'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc2MzQ5ODE5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Workshops',
    description: 'Sessões práticas e workshops intensivos',
  },
  {
    url: 'https://images.unsplash.com/photo-1512238972088-8acb84db0771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjBzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYzNDk4MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Mentoria',
    description: 'Acompanhamento individualizado',
  },
  {
    url: 'https://images.unsplash.com/photo-1648915880517-64a029f4194a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFkdWF0aW9uJTIwY2VyZW1vbnklMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjM0MzIxNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Formatura',
    description: 'Celebração das conquistas',
  },
  {
    url: 'https://images.unsplash.com/photo-1758691737584-a8f17fb34475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwc3VjY2VzcyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MzQ5MDkwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sucesso',
    description: 'Times comemorando entregas',
  },
]

export const heroStats = [
  { value: '7', label: 'Alunos' },
  { value: '100%', label: 'Gratuito' },
  { value: '12', label: 'Semanas' },
]

export const missionVisionData = [
  {
    type: 'mission',
    icon: Target,
    title: 'Missão',
    description:
      'Promover a formação de novos profissionais de tecnologia por meio da prática supervisionada em projetos reais, gerando empregabilidade, experiência e transformação social.',
    variant: 'orange' as const,
  },
  {
    type: 'vision',
    icon: Rocket,
    title: 'Visão',
    description:
      'Ser reconhecido como um dos principais programas de formação prática em tecnologia no Brasil, contribuindo para o desenvolvimento de talentos e a inserção profissional.',
    variant: 'white' as const,
  },
]

export const odsData = [
  {
    number: '4',
    title: 'Educação de Qualidade',
    color: 'from-red-500 to-red-600',
  },
  {
    number: '5',
    title: 'Igualdade de Gênero',
    color: 'from-orange-500 to-orange-600',
  },
  {
    number: '8',
    title: 'Trabalho Decente e Crescimento',
    color: 'from-orange-600 to-orange-700',
  },
]

export const methodologySteps = [
  {
    step: '01',
    icon: Users,
    title: 'Seleção e Mentoria',
    description:
      'Jovens desenvolvedores passam por um processo seletivo e recebem uma trilha personalizada de aprendizagem.',
  },
  {
    step: '02',
    icon: Code,
    title: 'Experiência Real',
    description:
      'Os participantes atuam em projetos reais de clientes, aplicando conhecimentos sob supervisão técnica.',
  },
  {
    step: '03',
    icon: BookOpen,
    title: 'Formação Contínua',
    description:
      'O programa combina aulas técnicas, revisões de código, soft skills e práticas ágeis.',
  },
  {
    step: '04',
    icon: Award,
    title: 'Certificação e Indicação',
    description:
      'Ao final, os participantes recebem certificação e podem ser indicados para vagas em tecnologia.',
  },
]

export const partnershipBenefits = [
  {
    icon: Users,
    title: 'Acesso a Talentos',
    description:
      'Prioridade para contratar profissionais capacitados com experiência prática comprovada',
  },
  {
    icon: Heart,
    title: 'Impacto Social',
    description:
      'Associe sua marca a um projeto de impacto social e inovação tecnológica mensurável',
  },
  {
    icon: Code,
    title: 'Projetos Acessíveis',
    description:
      'Desenvolva soluções de software com valores reduzidos e acompanhamento profissional',
  },
]

export const economicImpactPoints = [
  'Oferece serviços de qualidade e acessíveis a PMEs',
  'Gera oportunidades de trabalho qualificado',
  'Fortalece o ecossistema tecnológico regional',
]

export const locations = ['São Luís - MA', 'Curitiba - PR', 'Eusébio - CE']

export const heroData = {
  title: {
    main: 'Mangalab',
    highlight: 'Academy',
  },
  description: {
    text: 'Formação de desenvolvedores através de',
    highlight: 'experiências reais de mercado',
    suffix: ', com trilha prática supervisionada em projetos reais.',
  },
  buttons: {
    primary: { text: 'Conhecer o Programa', link: '#programa' },
    secondary: { text: 'Fale Conosco', link: '#contato' },
  },
  waveAnimation: {
    initial:
      'M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    frames: [
      'M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
      'M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,224C960,213,1056,171,1152,154.7C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
      'M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,138.7C960,117,1056,107,1152,122.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
    ],
  },
}
