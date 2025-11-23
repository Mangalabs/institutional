import { motion } from 'framer-motion'
import { TrendingUp, CheckCircle2 } from 'lucide-react'

interface ImpactStatCardProps {
  type: 'stats' | 'economic'
  delay?: number
}

export function ImpactStatCard({ type, delay = 0 }: ImpactStatCardProps) {
  if (type === 'stats') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
        className='bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden'>
        <div className='absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl' />
        <div className='relative space-y-1'>
          <div>
            <div className='text-2xl font-black'>50%</div>
            <div className='text-orange-100 text-lg'>
              Taxa de Empregabilidade
            </div>
          </div>
          <div className='border-t border-white/30 pt-4'>
            <div className='text-2xl font-black'>7</div>
            <div className='text-orange-100 text-lg'>Bolsas Oferecidas</div>
          </div>
          <div className='border-t border-white/30 pt-4'>
            <div className='text-2xl font-black'>2</div>
            <div className='text-orange-100 text-lg'>Projetos em Andamento</div>
          </div>
        </div>
      </motion.div>
    )
  }

  const points = [
    'Oferece serviços de qualidade e acessíveis a PMEs',
    'Gera oportunidades de trabalho qualificado',
    'Fortalece o ecossistema tecnológico regional',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className='bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:border-orange-300 transition-all duration-500 '>
      <div className='flex items-center gap-4 mb-6'>
        <div className='size-14 flex-none bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center'>
          <TrendingUp className='text-orange-600' size={26} />
        </div>
        <h3 className='text-slate-900  text-3xl'>Desenvolvimento Econômico</h3>
      </div>
      <ul className='space-y-2'>
        {points.map((item, i) => (
          <li
            key={i}
            className='flex items-start gap-3 text-slate-600 text-base'>
            <CheckCircle2
              size={18}
              className='text-orange-600 flex-shrink-0 mt-2'
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
