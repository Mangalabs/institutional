import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { TimelineItem } from '../../data/landingPages.data'

interface TimelineStepProps {
  step: TimelineItem
  index: number
  isLast: boolean
}

export function TimelineStep({ step, index, isLast }: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ y: -10 }}
      className='relative group'>
      <div className='relative bg-gradient-to-br from-[#FDCD00]/10 to-[#E9972D]/10 border border-[#E9972D]/20 hover:border-[#FDCD00] rounded-2xl p-6 text-center transition-all h-full flex flex-col'>
        <motion.div
          className='absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#FDCD00] to-[#FFB800] rounded-full flex items-center justify-center text-[#0a0a0a] font-black shadow-lg'
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6 }}>
          {step.step}
        </motion.div>

        <div className='pt-4 flex-1 flex flex-col items-center'>
          <step.icon size={32} className='text-[#FDCD00] mx-auto mb-3' />
          <h3 className='text-white text-xl font-bold mb-2'>{step.title}</h3>
          <p className='text-white/70 text-sm mb-3'>{step.description}</p>
          <p className='text-white/50 text-xs italic mt-auto'>{step.detail}</p>
        </div>
      </div>

      {!isLast && (
        <div className='hidden lg:block absolute top-1/2 -right-6 z-10'>
          <ArrowRight size={20} className='text-[#FDCD00]' />
        </div>
      )}
    </motion.div>
  )
}
