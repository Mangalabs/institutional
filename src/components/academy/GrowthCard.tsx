import { motion } from 'framer-motion'

interface GrowthCardProps {
  number: string
  title: string
  color: string
  delay?: number
}

export function GrowthCard({
  number,
  title,
  color,
  delay = 0,
}: GrowthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className='flex items-center gap-5 bg-white border-2 border-orange-300 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:border-orange-400 transition-all duration-300'>
      <div
        className={`w-20 h-20 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center text-white font-black text-3xl flex-shrink-0`}>
        {number}
      </div>
      <div className='text-slate-800 font-bold text-lg'>{title}</div>
    </motion.div>
  )
}
