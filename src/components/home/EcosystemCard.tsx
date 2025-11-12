import { useState } from 'react'
import { motion } from 'framer-motion'
import { type EcosystemItem } from '../../data/home.data'
import { ArrowRight } from 'lucide-react'

interface EcosystemCardProps {
  item: EcosystemItem
  index: number
  onNavigate: (page: string) => void
}

export function EcosystemCard({ item, index, onNavigate }: EcosystemCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative'
    >
      <div className='relative bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 h-full overflow-hidden pointer-events-none'>
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at 50% 0%, ${item.accent}20 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-20 h-20 mb-6 rounded-3xl flex items-center justify-center'
          style={{
            background: `linear-gradient(135deg, ${item.accent}30, ${item.accent}10)`,
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon size={40} style={{ color: item.accent }} />
        </motion.div>

        <h3 className='text-white text-2xl font-bold mb-2'>{item.title}</h3>
        <p className='text-sm mb-4' style={{ color: item.accent }}>
          {item.tagline}
        </p>
        <p className='text-white/70 text-sm mb-6 leading-relaxed'>
          {item.description}
        </p>

        <div className='grid grid-cols-3 gap-3 mb-6'>
          {item.stats.map((stat) => (
            <div
              key={stat.label}
              className='text-center bg-white/5 rounded-2xl p-4'
            >
              <div
                className='font-bold text-lg'
                style={{ color: item.accent }}
              >
                {stat.value}
              </div>
              <div className='text-white/50 text-xs'>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-2 mb-6'>
          {item.features.map((feature) => (
            <span
              key={feature}
              className='bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-white/70'
            >
              {feature}
            </span>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate(item.id)}
          className='w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer'
          style={{
            background: `linear-gradient(135deg, ${item.accent}, ${item.accent}cc)`,
            color:
              item.id === 'investir' || item.id === 'landing-pages'
                ? '#143829'
                : '#fff',
            cursor: 'pointer'
          }}
        >
          <span>{item.cta}</span>
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.div>
  )
}