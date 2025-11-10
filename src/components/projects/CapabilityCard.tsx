import { motion } from 'framer-motion'
import { type Capability } from './../../data/projects.data'

interface CapabilityCardProps {
  capability: Capability
  index: number
}

export function CapabilityCard({ capability, index }: CapabilityCardProps) {
  const { icon: Icon, title, description } = capability

  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className='bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 text-center'
    >
      <motion.div
        transition={{ duration: 0.6 }}
        className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C4501B] to-[#A0361B] rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4'
      >
        <Icon size={24} className='text-white sm:w-7 sm:h-7' />
      </motion.div>
      <h3 className='text-white mb-2 text-base sm:text-lg'>{title}</h3>
      <p className='text-white/60 text-xs sm:text-sm'>{description}</p>
    </motion.div>
  )
}