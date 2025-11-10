import { motion } from 'framer-motion'
import { type PortfolioItem } from '../../data/landingPages.data'
import {
  BarChart3,
  TrendingUp,
  Lock,
  AlertCircle,
  Trophy,
  Rocket,
  Sparkles,
} from 'lucide-react'

interface PortfolioCardProps {
  project: PortfolioItem
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.02 }}
      className='group relative'
    >
      <div className='relative bg-white/70 backdrop-blur-sm border border-[#E9972D]/20 hover:border-[#FDCD00] rounded-3xl overflow-hidden shadow-xl transition-all'>
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
          style={{
            background: `radial-gradient(circle at top, ${project.color}10 0%, transparent 70%)`,
          }}
        />

        {project.startedFromZero && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
            className='absolute top-4 left-4 z-20 bg-gradient-to-r from-[#E9972D] to-[#FDCD00] px-3 py-1.5 rounded-full shadow-lg'
          >
            <div className='flex items-center gap-1.5 text-white text-xs font-bold'>
              <Rocket size={14} />
              <span>Começou do zero</span>
            </div>
          </motion.div>
        )}

        <div
          className='h-56 relative flex items-center justify-center overflow-hidden'
          style={{
            background: `linear-gradient(135deg, ${project.color}, ${project.color}dd)`,
          }}
        >
          <motion.div
            className='relative z-10 text-white/40 text-center p-6'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <BarChart3 size={56} className='mx-auto mb-3' />
            <p className='text-xs font-medium'>{project.name} Success Story</p>
          </motion.div>

          <motion.div
            className='absolute top-4 right-4 bg-white text-[#143829] px-4 py-2 rounded-full shadow-xl z-20'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15 + 0.3,
              type: 'spring',
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1 }}
          >
            <div className='flex items-center gap-1 font-black text-lg'>
              <TrendingUp size={18} className='text-green-600' />
              {project.metric}
            </div>
          </motion.div>

          <div className='absolute bottom-4 left-4 z-10'>
            <div className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full'>
              <span className='text-[#143829] text-xs font-bold'>
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className='relative p-8'>
          <div className='flex items-start justify-between mb-4'>
            <div>
              <h3 className='text-[#143829] text-2xl font-bold'>
                {project.name}
              </h3>
              <div className='flex items-center gap-2 mt-1'>
                <Lock size={14} className='text-red-500' />
                <p className='text-red-500 text-xs font-semibold'>
                  {project.before}
                </p>
              </div>
            </div>
            <Sparkles size={20} className='text-[#E9972D]' />
          </div>

          <div className='space-y-3'>
            <div className='bg-red-50 border-l-4 border-red-400 rounded-r-xl p-4'>
              <div className='flex items-center gap-2 mb-2'>
                <AlertCircle className='text-red-500' size={16} />
                <p className='text-red-600 text-xs font-bold uppercase tracking-wide'>
                  O Desafio
                </p>
              </div>
              <p className='text-[#143829]/80 text-sm leading-relaxed'>
                {project.problem}
              </p>
            </div>

            <div className='bg-gradient-to-r from-[#FDCD00]/10 to-[#E9972D]/10 border-l-4 border-[#E9972D] rounded-r-xl p-4'>
              <div className='flex items-center gap-2 mb-2'>
                <Trophy className='text-[#E9972D]' size={16} />
                <p className='text-[#E9972D] text-xs font-bold uppercase tracking-wide'>
                  A Transformação
                </p>
              </div>
              <p className='text-[#143829] text-sm font-medium leading-relaxed'>
                {project.result}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}