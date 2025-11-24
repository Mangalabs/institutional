import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Rocket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className='relative h-screen flex items-center justify-center overflow-hidden'>
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-[#0cc279] via-[#0aad6c] to-[#2de98b]' />
        <div className='absolute inset-0 bg-gradient-to-b from-[#143829]/95 via-[#0a0a0a]/90 to-[#143829]/95' />

        <motion.div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #FDCD00 40px, #FDCD00 42px)`,
          }}
          animate={{ x: [0, 100] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className='absolute top-20 right-20 w-[300px] h-[300px] opacity-10'
          style={{
            background: 'linear-gradient(135deg, #FFB800 0%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />

        <motion.div
          className='absolute bottom-20 left-20 w-[200px] h-[200px] opacity-10'
          style={{
            background: 'linear-gradient(135deg, #FDCD00 0%, transparent 100%)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          }}
          animate={{
            borderRadius: [
              '30% 70% 70% 30% / 30% 30% 70% 70%',
              '70% 30% 30% 70% / 70% 70% 30% 30%',
              '30% 70% 70% 30% / 30% 30% 70% 70%',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />

        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#FDCD00] rounded-full'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-white mb-6 text-5xl sm:text-6xl md:text-7xl font-black tracking-tight'>
          Converta{' '}
          <span className='relative inline-block'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FDCD00] to-[#FFB800]'>
              rápido
            </span>
            <motion.div
              className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FDCD00] to-[#FFB800]'
              style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </span>
          {', '}
          cresça <span className='text-[#E9972D]'>mais</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='text-white/80 text-lg sm:text-xl mx-auto mb-10 leading-relaxed'>
          Páginas de alta performance em 7 dias. Design moderno, código
          otimizado e resultados mensuráveis para seu negócio decolar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 50px rgba(253, 205, 0, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
            className='relative bg-gradient-to-r from-[#FDCD00] to-[#FFB800] text-[#0a0a0a] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl overflow-hidden group'
            onClick={() => {
              const el = document.getElementById('pricing-plan')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}>
            <motion.div
              className='absolute inset-0 bg-white/20'
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <Rocket size={20} className='relative z-10' />
            <span className='relative z-10'>Ver Pacotes</span>
            <ArrowRight size={20} className='relative z-10' />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-[#FDCD00] text-white px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-colors'
            onClick={() => navigate('/projects')}>
            <BarChart3 size={20} />
            <span>Ver Projetos</span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='mt-16 grid grid-cols-3 gap-8 mx-auto'>
          {[
            { value: '7 dias', label: 'Entrega garantida' },
            { value: '+45%', label: 'Taxa de conversão' },
            { value: '100%', label: 'Responsivo' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -5 }}
              className='text-center'>
              <div className='text-3xl font-black text-[#FDCD00] mb-1'>
                {stat.value}
              </div>
              <div className='text-white/70 text-sm'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
