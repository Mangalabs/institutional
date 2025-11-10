import { motion } from 'framer-motion'
import { type ImpactStat } from '../../data/academy.data'
import { AnimatedCounter } from '../common/AnimatedCounter'

interface ImpactStatCardProps {
  stat: ImpactStat
  index: number
}

export function ImpactStatCard({ stat, index }: ImpactStatCardProps) {
  const Icon = stat.icon

  return (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ y: -10, scale: 1.03 }}
      className='group relative'
    >
      <div className='relative bg-white/80 backdrop-blur-md border border-[#B6461B]/10 hover:border-[#B6461B]/30 rounded-3xl p-8 text-center shadow-xl transition-all'>
        <motion.div
          className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at center, ${stat.color}10 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center'
          style={{
            background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}05)`,
          }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: stat.color }} />
        </motion.div>

        <div
          className='text-5xl sm:text-6xl font-black mb-2'
          style={{ color: stat.color }}
        >
          <AnimatedCounter value={stat.value} />
        </div>
        <div className='text-[#143829] font-semibold mb-3'>{stat.label}</div>
        <p className='text-[#143829]/60 text-sm leading-relaxed'>
          {stat.description}
        </p>
      </div>
    </motion.div>
  )
}