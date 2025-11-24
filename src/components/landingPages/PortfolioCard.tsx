import { motion } from 'framer-motion'
import {
  Rocket,
  TrendingUp,
  Lock,
  Sparkles,
  AlertCircle,
  Trophy,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'
import { PortfolioItem } from '../../data/landingPages.data'

interface PortfolioCardProps {
  project: PortfolioItem
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10 }}
      className='group relative h-full'>
      <div className='relative bg-gradient-to-br from-[#143829]/60 to-[#0a0a0a]/80 backdrop-blur-md border-2 border-[#FDCD00]/30 hover:border-[#FDCD00] rounded-3xl overflow-hidden shadow-2xl transition-all h-full flex flex-col'>
        <motion.div
          className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'
          style={{
            background: `radial-gradient(circle at 50% 0%, ${project.color}20 0%, transparent 60%)`,
          }}
        />

        <div className='relative h-64 overflow-hidden'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className='h-full'>
            <img
              src={project.image}
              alt={`${project.title} landing page`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#143829]/90 via-[#143829]/30 to-transparent' />
          </motion.div>

          <div className='absolute top-4 left-4 right-4 flex items-start justify-between z-10'>
            {project.startedFromZero && (
              <motion.div
                initial={{ scale: 0, x: -20 }}
                whileInView={{ scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
                className='bg-gradient-to-r from-[#FDCD00] to-[#FFB800] px-3 py-1.5 rounded-full shadow-xl backdrop-blur-sm'>
                <div className='flex items-center gap-1.5 text-[#0a0a0a] text-xs font-bold'>
                  <Rocket size={12} />
                  <span>Começou do zero</span>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ scale: 0, x: 20 }}
              whileInView={{ scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
              className='bg-[#FDCD00] text-[#0a0a0a] px-4 py-2 rounded-full shadow-xl backdrop-blur-sm'>
              <div className='flex items-center gap-1.5 font-black text-base'>
                <TrendingUp size={16} />
                {project.metric}
              </div>
            </motion.div>
          </div>

          <div className='absolute bottom-4 left-4 z-10'>
            <div className='bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg'>
              <span className='text-[#143829] text-xs font-black uppercase tracking-wide'>
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <div className='relative p-6 border-b border-[#FDCD00]/10'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='text-white text-2xl font-black mb-2'>
                {project.title}
              </h3>
              <div className='flex items-center gap-2'>
                <Lock size={14} className='text-white/50' />
                <span className='text-white/60 text-xs font-medium'>
                  Antes: {project.before}
                </span>
              </div>
            </div>
            <Sparkles size={24} className='text-[#FDCD00]' />
          </div>
        </div>

        <div className='relative p-6 flex-1 flex flex-col justify-between'>
          <div className='space-y-4 flex-1'>
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='relative'>
              <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E9972D] to-[#E9972D]/20 rounded-full' />
              <div className='pl-5'>
                <div className='flex items-center gap-2 mb-2'>
                  <AlertCircle className='text-[#E9972D]' size={16} />
                  <span className='text-[#E9972D] text-xs font-black uppercase tracking-wider'>
                    Desafio
                  </span>
                </div>
                <p className='text-white/80 text-sm leading-relaxed'>
                  {project.problem}
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='relative'>
              <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FDCD00] to-[#FDCD00]/20 rounded-full' />
              <div className='pl-5'>
                <div className='flex items-center gap-2 mb-2'>
                  <Trophy className='text-[#FDCD00]' size={16} />
                  <span className='text-[#FDCD00] text-xs font-black uppercase tracking-wider'>
                    Resultado
                  </span>
                </div>
                <p className='text-white text-sm font-semibold leading-relaxed'>
                  {project.result}
                </p>
              </div>
            </motion.div>
          </div>

          <div className='mt-6 pt-4 border-t border-[#FDCD00]/10'>
            <div className='flex items-center justify-center gap-3 text-white/40 text-xs'>
              <div className='flex items-center gap-1.5'>
                <BarChart3 size={14} />
                <span>Case Real</span>
              </div>
              <div className='w-1 h-1 bg-white/40 rounded-full' />
              <div className='flex items-center gap-1.5'>
                <CheckCircle2 size={14} />
                <span>Resultados Comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
