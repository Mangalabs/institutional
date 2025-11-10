import { motion } from 'framer-motion'
import { type SuccessCase } from '../../data/landingPages.data'

interface SuccessCaseProps {
  caseItem: SuccessCase
  index: number
}

export function SuccessCase({ caseItem, index }: SuccessCaseProps) {
  const Icon = caseItem.icon

  return (
    <motion.div
      key={caseItem.label}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.05 }}
      className='relative group'
    >
      <div className='relative bg-gradient-to-br from-[#FDCD00]/20 to-[#E9972D]/20 border border-[#E9972D]/30 hover:border-[#FDCD00] rounded-3xl p-8 text-center shadow-lg transition-all'>
        <Icon size={40} className='text-[#E9972D] mx-auto mb-4' />
        <div className='text-5xl font-black text-[#E9972D] mb-2'>
          {caseItem.metric}
        </div>
        <div className='text-[#143829] font-bold mb-2'>{caseItem.label}</div>
        <p className='text-[#143829]/60 text-sm'>{caseItem.description}</p>
      </div>
    </motion.div>
  )
}