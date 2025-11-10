import { motion } from 'framer-motion'
import { type DnaItem } from '../../data/about.data'

interface DnaCardProps {
  value: DnaItem
  index: number
}

export function DnaCard({ value, index }: DnaCardProps) {
  const Icon = value.icon

  return (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ scale: 1.05, y: -10 }}
      className='relative group'
    >
      <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDCD00]/20 rounded-3xl p-8 h-full overflow-hidden transition-all'>
        <motion.div
          className='absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle, ${value.color}30 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />

        <div className='relative'>
          <motion.div
            className='w-16 h-16 rounded-2xl flex items-center justify-center mb-4'
            style={{
              background: `linear-gradient(135deg, ${value.color}30, ${value.color}10)`,
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <Icon size={32} style={{ color: value.color }} />
          </motion.div>

          <h3 className='text-white text-xl font-bold mb-3'>{value.title}</h3>
          <p className='text-white/70 text-sm leading-relaxed'>
            {value.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}