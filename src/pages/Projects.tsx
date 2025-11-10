import { motion } from 'framer-motion'
import { Filter, ExternalLink } from 'lucide-react'

import { filters, capabilities } from '../data/projects.data'
import { useProjectFilter } from '../hooks/useProjectFilter'
import { CapabilityCard } from '../components/projects/CapabilityCard'
import { ProjectCard } from '../components/projects/ProjectCard'

export default function Projects() {
  const { activeFilter, setActiveFilter, filteredProjects } = useProjectFilter()

  return (
    <div className='min-h-screen pt-20'>
      <section className='relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#2B5B3F] to-[#1f4430] overflow-hidden'>
        <div className='absolute inset-0'>
          <div
            className='absolute inset-0 opacity-[0.03]'
            style={{
              backgroundImage: `
                linear-gradient(rgba(196, 80, 27, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(196, 80, 27, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
          <motion.div
            className='absolute inset-0 opacity-5'
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #C4501B 10px, #C4501B 11px)`,
            }}
            animate={{ x: [0, 100] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute top-20 right-20 w-64 h-64 opacity-10'
            style={{
              background:
                'linear-gradient(135deg, #C4501B 0%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute bottom-20 left-20 w-48 h-48 opacity-10'
            style={{
              background:
                'linear-gradient(135deg, #E9972D 0%, transparent 100%)',
              clipPath:
                'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className='relative z-10 max-w-6xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <h1 className='text-white mb-4 sm:mb-6 px-4'>
              Projetos que{' '}
              <span className='relative inline-block'>
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#C4501B] to-[#E9972D]'>
                  transformam
                </span>
                <motion.div
                  className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#C4501B] to-[#E9972D]'
                  style={{
                    clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h1>
            <p className='text-white/70 text-base sm:text-xl mx-auto px-4'>
              Do MVP à escala. Produtos digitais customizados com design
              excepcional e código de qualidade.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='py-16 sm:py-20 px-4 sm:px-6 bg-[#2B5B3F]'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
            {capabilities.map((cap, index) => (
              <CapabilityCard key={cap.title} capability={cap} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#2B5B3F] to-[#1f4430]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-8 sm:mb-12'>
            <div className='flex items-center justify-center gap-2 sm:gap-3 flex-wrap'>
              <Filter size={18} className='text-white/60 sm:w-5 sm:h-5' />
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base ${
                    activeFilter === filter
                      ? 'bg-[#C4501B] text-white'
                      : 'bg-white/5 text-white/60 hover:bg-white/10'
                  }`}>
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className='py-16 sm:py-24 px-4 sm:px-6 bg-[#2B5B3F]'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className='text-white mb-4 sm:mb-6 px-4'>
              Pronto para criar algo incrível?
            </h2>
            <p className='text-white/70 text-base sm:text-xl mb-6 sm:mb-8 px-4'>
              Vamos transformar sua ideia em um produto digital de sucesso.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#C4501B] hover:bg-[#E9972D] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full inline-flex items-center gap-2 transition-colors text-sm sm:text-base'>
              <span>Iniciar projeto</span>
              <ExternalLink size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
