import { motion } from 'framer-motion'
import { type DnaItem } from '../../data/home.data'

interface DnaCardProps {
  value: DnaItem
  index: number
}

export function DnaCard({ value, index }: DnaCardProps) {
  const Icon = value.icon

  return (
    <motion.div
      key={value.title}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      whileHover={{ scale: 1.03, y: -5 }}
      className='relative group'
    >
      <div className='relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden'>
        <motion.div
          className='absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle, ${value.color}30 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
        />

        <div className='relative flex items-start gap-4'>
          <motion.div
            className='w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0'
            style={{
              background: `linear-gradient(135deg, ${value.color}30, ${value.color}10)`,
            }}
          >
            <Icon size={28} style={{ color: value.color }} />
          </motion.div>

          <div>
            <h3 className='text-white text-xl font-bold mb-2'>{value.title}</h3>
            <p className='text-white/70 text-sm leading-relaxed'>
              {value.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}