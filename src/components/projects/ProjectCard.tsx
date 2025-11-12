import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { type Project } from './../../data/projects.data'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={project.link}
      target='_blank'
      rel='noopener noreferrer'
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className='group relative cursor-pointer block'>
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        className='bg-white/5 border border-white/10 rounded-3xl overflow-hidden h-full'>
        <div className='h-40 sm:h-48 relative overflow-hidden'>
          <img
            src={project.image}
            alt={project.title}
            className='absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60' />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            className='absolute inset-0 bg-black/60 flex items-center justify-center'>
            <div className='text-white flex items-center gap-2 text-sm sm:text-base'>
              <span>Ver projeto</span>
              <ExternalLink size={18} className='sm:w-5 sm:h-5' />
            </div>
          </motion.div>
        </div>

        <div className='p-5 sm:p-6'>
          <div className='flex items-start justify-between mb-2 sm:mb-3'>
            <h3 className='text-white text-base sm:text-lg'>{project.title}</h3>
            <span className='text-xs px-2 sm:px-3 py-1 rounded-full bg-white/5 text-white/70'>
              {project.category}
            </span>
          </div>

          <p className='text-white/60 text-xs sm:text-sm mb-3 sm:mb-4'>
            {project.description}
          </p>

          <div className='flex flex-wrap gap-2'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs px-2 sm:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60'>
                {tag}
              </span>
            ))}
          </div>

          <div className='flex gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10 mt-4'>
            {Object.entries(project.metrics).map(([key, value]) => (
              <div key={key}>
                <div className='text-[#C4501B] text-md '>{value}</div>
                <div className='text-white/40 text-xs capitalize'>{key}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.a>
  )
}
