import { motion } from 'framer-motion'
import { Audience } from '../../data/landingPages.data'

interface AudienceCardProps {
  audience: Audience
  index: number
}

export function AudienceCard({ audience, index }: AudienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      className='group relative'>
      <div className='relative bg-white/5 backdrop-blur-sm border border-[#FDCD00]/20 hover:border-[#FDCD00] rounded-3xl p-8 shadow-lg transition-all overflow-hidden h-full'>
        <motion.div
          className='absolute top-0 right-0 w-32 h-32 opacity-10'
          style={{
            background: `linear-gradient(135deg, ${audience.color}, transparent)`,
            clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
          }}
        />

        <motion.div
          className='w-14 h-14 rounded-xl flex items-center justify-center mb-4'
          style={{
            background: `linear-gradient(135deg, ${audience.color}20, ${audience.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}>
          <audience.icon size={28} style={{ color: audience.color }} />
        </motion.div>

        <h3 className='text-white text-2xl font-bold mb-2'>{audience.title}</h3>
        <p className='text-[#FDCD00] font-semibold text-sm mb-3'>
          {audience.subtitle}
        </p>
        <p className='text-white/70 leading-relaxed'>{audience.description}</p>
      </div>
    </motion.div>
  )
}
