import { motion } from 'framer-motion'
import { type GrowthOption } from '../../data/academy.data'

interface GrowthCardProps {
  option: GrowthOption
  index: number
}

export function GrowthCard({ option, index }: GrowthCardProps) {
  const Icon = option.icon

  return (
    <motion.div
      key={option.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.03 }}
      className='relative group'
    >
      <div className='relative bg-white/70 backdrop-blur-sm border border-[#B6461B]/10 hover:border-[#FDCD00] rounded-3xl p-8 h-full shadow-lg transition-all'>
        <motion.div
          className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at top, ${option.color}10 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'
          style={{
            background: `linear-gradient(135deg, ${option.color}20, ${option.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: option.color }} />
        </motion.div>

        <h3 className='text-[#143829] text-2xl font-bold mb-4 text-center'>
          {option.title}
        </h3>
        <p className='text-[#143829]/70 leading-relaxed text-center'>
          {option.description}
        </p>
      </div>
    </motion.div>
  )
}