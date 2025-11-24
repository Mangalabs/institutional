import { motion } from 'framer-motion'
import { SuccessMetric } from '../../data/landingPages.data'

interface SuccessCaseProps {
  item: SuccessMetric
  index: number
}

export function SuccessCase({ item, index }: SuccessCaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.05 }}
      className='relative group'>
      <div className='relative bg-gradient-to-br from-[#FDCD00]/10 to-[#E9972D]/10 border border-[#FDCD00]/30 hover:border-[#FDCD00] rounded-3xl p-8 text-center shadow-lg transition-all h-full'>
        <item.icon size={40} className='text-[#FDCD00] mx-auto mb-4' />
        <div className='text-5xl font-black text-[#FDCD00] mb-2'>
          {item.metric}
        </div>
        <div className='text-white font-bold mb-2'>{item.label}</div>
        <p className='text-white/60 text-sm'>{item.description}</p>
      </div>
    </motion.div>
  )
}
