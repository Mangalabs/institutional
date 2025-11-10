import { motion } from 'framer-motion'
import { type MentorshipFeature } from '../../data/academy.data'

interface MentorshipCardProps {
  feature: MentorshipFeature
  index: number
}

export function MentorshipCard({ feature, index }: MentorshipCardProps) {
  const Icon = feature.icon

  return (
    <motion.div
      key={feature.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.03 }}
      className='group relative'
    >
      <div className='relative bg-white/80 backdrop-blur-sm border border-[#B6461B]/10 hover:border-[#FDCD00] rounded-3xl p-8 shadow-lg transition-all h-full'>
        <motion.div
          className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at top, ${feature.color}10 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'
          style={{
            background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: feature.color }} />
        </motion.div>

        <h3 className='text-[#143829] text-xl font-bold mb-3 text-center'>
          {feature.title}
        </h3>
        <p className='text-[#143829]/70 leading-relaxed text-center'>
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}