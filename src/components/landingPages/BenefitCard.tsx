import { motion } from 'framer-motion'
import { Benefit } from '../../data/landingPages.data'

interface BenefitCardProps {
  benefit: Benefit
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.03 }}
      className='group relative'>
      <div className='relative bg-white/5 backdrop-blur-xl border border-[#FDCD00]/20 hover:border-[#FDCD00] rounded-2xl p-8 shadow-xl transition-all h-full'>
        <motion.div
          className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at top, ${benefit.color}15 0%, transparent 70%)`,
          }}
        />

        <motion.div
          className='relative w-14 h-14 rounded-xl flex items-center justify-center mb-4'
          style={{
            background: `linear-gradient(135deg, ${benefit.color}20, ${benefit.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}>
          <benefit.icon size={28} style={{ color: benefit.color }} />
        </motion.div>

        <h3 className='text-white text-xl font-bold mb-2'>{benefit.title}</h3>
        <p className='text-white/70 text-sm'>{benefit.description}</p>
      </div>
    </motion.div>
  )
}
