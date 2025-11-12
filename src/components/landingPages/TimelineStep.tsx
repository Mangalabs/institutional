import { motion } from 'framer-motion'
import { type TimelineStep } from '../../data/landingPages.data'
import { ArrowRight } from 'lucide-react'

interface TimelineStepProps {
  step: TimelineStep
  index: number
  isLast: boolean
}

export function TimelineStep({ step, index, isLast }: TimelineStepProps) {
  const Icon = step.icon

  return (
    <motion.div
      key={step.step}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ y: -10 }}
      className='relative group'
    >
      <div className='relative bg-gradient-to-br from-[#FDCD00]/10 to-[#E9972D]/10 border border-[#E9972D]/20 hover:border-[#FDCD00] rounded-2xl p-6 text-center transition-all h-full'>
        <motion.div
          className='absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-[#E9972D] to-[#FDCD00] rounded-full flex items-center justify-center text-white font-black shadow-lg'
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          {step.step}
        </motion.div>

        <div className='pt-2'>
          <Icon size={32} className='text-[#E9972D] mx-auto mb-3' />
          <h3 className='text-[#143829] text-md font-bold mb-2'>{step.title}</h3>
          <p className='text-[#143829]/70 text-sm mb-3'>{step.description}</p>
          <p className='text-[#143829]/50 text-xs italic'>{step.detail}</p>
        </div>
      </div>

      {!isLast && (
        <div className='hidden lg:block absolute top-1/2 -right-5 z-10'>
          <ArrowRight size={20} className='text-[#E9972D]' />
        </div>
      )}
    </motion.div>
  )
}