import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MethodologyCardProps {
  step: string
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  isRightSide?: boolean
}

export function MethodologyCard({
  step,
  icon: Icon,
  title,
  description,
  delay = 0,
  isRightSide = false,
}: MethodologyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isRightSide ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className='relative bg-white border-l-4 border-orange-500 rounded-lg p-6 shadow-md hover:shadow-lg transition-all'>
      <div className='flex items-start gap-4'>
        <div className='flex-shrink-0'>
          <div className='w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center'>
            <Icon className='text-orange-600' size={24} />
          </div>
        </div>
        <div>
          <div className='text-orange-600 font-black text-sm mb-1'>{step}</div>
          <h3 className='text-slate-900 font-bold mb-2'>{title}</h3>
          <p className='text-slate-600 text-sm leading-relaxed'>
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
