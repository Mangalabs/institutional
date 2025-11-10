import { motion } from 'framer-motion'
import { type MethodologyItem } from '../../data/academy.data'

interface MethodologyCardProps {
  item: MethodologyItem
  index: number
}

export function MethodologyCard({ item, index }: MethodologyCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      key={item.title}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      className='group relative'
    >
      <div className='relative bg-white/70 backdrop-blur-sm border border-[#B6461B]/10 hover:border-[#B6461B]/30 rounded-3xl p-8 shadow-lg transition-all'>
        <motion.div
          className='w-16 h-16 rounded-2xl flex items-center justify-center mb-5'
          style={{
            background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: item.color }} />
        </motion.div>

        <h3 className='text-[#143829] text-2xl font-bold mb-3'>{item.title}</h3>
        <p className='text-[#143829]/70 leading-relaxed'>{item.description}</p>
      </div>
    </motion.div>
  )
}