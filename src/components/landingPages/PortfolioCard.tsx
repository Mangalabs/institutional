import { motion } from 'framer-motion'
import { TrendingUp } from 'lucide-react'
import type { Project } from '../../data/projects.data'

interface PortfolioCardProps {
  project: Project
  index: number
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: 1.02 }}
      className='group relative'>
      <div className='relative bg-[#243834]/80 backdrop-blur-md border border-[#E9972D]/20 hover:border-[#FDCD00]/50 rounded-3xl overflow-hidden shadow-2xl transition-all'>

        {/* Imagem de capa */}
        <div className='relative h-64 overflow-hidden'>
          <motion.img
            src={project.image}
            alt={project.title}
            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#143829]/80 via-transparent to-transparent' />

          <motion.div
            className='absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#143829] text-xs font-semibold shadow-md'>
            {project.category.toUpperCase()}
          </motion.div>

          <motion.div
            className='absolute top-4 right-4 bg-white/90 text-[#143829] px-4 py-2 rounded-full shadow-xl z-20'
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15 + 0.3,
              type: 'spring',
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1 }}>
            <div className='flex items-center gap-1 font-black text-lg'>
              <TrendingUp size={18} className='text-green-600' />
              {Object.values(project.metrics)[0]}
            </div>
          </motion.div>
        </div>

        <div className='relative p-8'>
          <h3 className='text-[#FDCD00] text-2xl font-bold mb-2'>
            {project.title}
          </h3>
          <p className='text-white/80 text-sm leading-relaxed mb-3'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs bg-[#E9972D]/20 text-[#FDCD00] px-2 py-1 rounded-full'>
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            whileHover={{ scale: 1.05 }}
            className='inline-block mt-6 text-sm font-semibold text-[#143829] bg-gradient-to-r from-[#E9972D] to-[#FDCD00] px-6 py-2 rounded-full shadow-md hover:shadow-lg transition'>
            Ver Projeto
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}
