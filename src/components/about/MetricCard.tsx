import { motion } from 'framer-motion'
import { type Metric } from '../../data/about.data'
import { AnimatedCounter } from '../common/AnimatedCounter'

interface MetricCardProps {
  metric: Metric
  index: number
}

export function MetricCard({ metric, index }: MetricCardProps) {
  const Icon = metric.icon

  return (
    <motion.div
      key={metric.label}
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
      <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDCD00]/30 rounded-3xl p-8 text-center overflow-hidden transition-all'>
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at center, ${metric.color}15 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center'
          style={{
            background: `linear-gradient(135deg, ${metric.color}30 0%, ${metric.color}10 100%)`,
          }}
          transition={{ duration: 0.8 }}
        >
          <Icon size={32} style={{ color: metric.color }} />
        </motion.div>

        <div
          className='text-5xl sm:text-6xl font-black mb-3'
          style={{ color: metric.color }}
        >
          <AnimatedCounter value={metric.value} />
        </div>
        <p className='text-white/70 text-sm leading-relaxed'>
          {metric.label}
        </p>
      </div>
    </motion.div>
  )
}