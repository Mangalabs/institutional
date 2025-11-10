import { motion } from 'framer-motion'
import { type ImpactNumber } from '../../data/home.data'

interface ImpactCardProps {
  stat: ImpactNumber
  index: number
}

export function ImpactCard({ stat, index }: ImpactCardProps) {
  const Icon = stat.icon

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className='relative group'
    >
      <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center overflow-hidden'>
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at center, ${stat.color}15 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center'
          style={{
            background: `linear-gradient(135deg, ${stat.color}30 0%, ${stat.color}10 100%)`,
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: stat.color }} />
        </motion.div>

        <motion.div
          className='text-4xl sm:text-5xl font-black mb-2'
          style={{ color: stat.color }}
        >
          {stat.value}
        </motion.div>
        <div className='text-white/60 text-sm'>{stat.label}</div>
      </div>
    </motion.div>
  )
}