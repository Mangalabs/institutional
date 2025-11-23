import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface MentorshipCardProps {
  icon: LucideIcon
  title: string
  description: string
  variant: 'orange' | 'white'
  delay?: number
  index: number
}

export function MentorshipCard({
  icon: Icon,
  title,
  description,
  variant,
  delay = 0,
  index,
}: MentorshipCardProps) {
  const isOrange = variant === 'orange'

  const rotationClass =
    index % 2 === 0
      ? 'rotate-1 group-hover:rotate-2'
      : '-rotate-1 group-hover:-rotate-2'
  const initialX = index % 2 === 0 ? -30 : 30

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className='relative group'>
      <div
        className={`absolute inset-0 rounded-2xl transition-transform ${rotationClass} ${
          isOrange
            ? 'bg-gradient-to-br from-orange-400 to-orange-600'
            : 'bg-slate-200'
        }`}
      />
      <div
        className={`relative rounded-2xl p-8 lg:p-10 shadow-xl ${
          isOrange
            ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
            : 'bg-slate-50 border-2 border-slate-200 text-slate-900'
        }`}>
        <div
          className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${
            isOrange ? 'bg-white/20 backdrop-blur-sm' : 'bg-orange-100'
          }`}>
          <Icon
            size={32}
            className={isOrange ? 'text-white' : 'text-orange-600'}
          />
        </div>
        <h3 className='text-2xl font-bold mb-4'>{title}</h3>
        <p
          className={`text-lg leading-relaxed ${
            isOrange ? 'text-orange-50' : 'text-slate-600'
          }`}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}
