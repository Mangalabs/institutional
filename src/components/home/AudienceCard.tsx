import { motion } from 'framer-motion'
import { type PublicoItem } from '../../data/home.data'
import { ArrowRight } from 'lucide-react'

interface AudienceCardProps {
  publico: PublicoItem
  index: number
  onNavigate: (page: string) => void
}

export function AudienceCard({
  publico,
  index,
  onNavigate,
}: AudienceCardProps) {
  const Icon = publico.icon

  return (
    <motion.div
      key={publico.title}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ scale: 1.05, y: -10 }}
      onClick={() => onNavigate(publico.link)}
      className='group'
    >
      <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDCD00]/30 rounded-3xl p-6 text-center h-full transition-all'>
        <motion.div className='w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#FDCD00]/20 to-[#2B5B3F]/20'>
          <Icon size={32} className='text-[#FDCD00]' />
        </motion.div>

        <h3 className='text-white font-bold mb-2'>{publico.title}</h3>
        <p className='text-white/60 text-sm'>{publico.description}</p>

        <motion.button
          className='mt-4 inline-flex items-center gap-1 text-[#FDCD00] text-sm'
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span>Saiba mais</span>
          <ArrowRight size={16} />
        </motion.button>
      </div>
    </motion.div>
  )
}