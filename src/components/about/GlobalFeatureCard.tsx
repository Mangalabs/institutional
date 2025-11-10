import { motion } from 'framer-motion'
import { type GlobalFeature } from '../../data/about.data'

interface GlobalFeatureCardProps {
  feature: GlobalFeature
  index: number
}

export function GlobalFeatureCard({ feature, index }: GlobalFeatureCardProps) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.1 }}
      whileHover={{
        y: -10,
        transition: { type: 'spring', stiffness: 300 },
      }}
      className='relative group'
    >
      <motion.div
        className='absolute -inset-1 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity'
        style={{
          backgroundColor: `${feature.color}30`,
        }}
      />

      <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 h-full'>
        <div
          className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl'
          style={{
            background: `linear-gradient(135deg, ${feature.gradient})`,
          }}
        >
          <Icon size={32} className='text-white' />
        </div>

        <h3 className='text-2xl font-black text-white mb-4'>{feature.title}</h3>
        <p className='text-white/70 leading-relaxed'>{feature.description}</p>
      </div>
    </motion.div>
  )
}