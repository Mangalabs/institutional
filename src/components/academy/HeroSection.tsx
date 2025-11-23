import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, ArrowRight, GraduationCap, Award } from 'lucide-react'
import { galleryImages, heroStats, heroData } from '../../data/academy.data'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const imageY1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imageY2 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const imageY3 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  return (
    <section
      ref={heroRef}
      className='relative min-h-screen pt-20 pb-32 overflow-hidden bg-gradient-to-br from-[#02120a] via-[#041f13] to-[#031a0f]'>
      <div className='absolute inset-0 overflow-hidden'>
        <motion.svg
          className='absolute bottom-0 left-0 w-full h-64 text-orange-600/10'
          style={{ y }}
          viewBox='0 0 1440 320'
          preserveAspectRatio='none'>
          <motion.path
            fill='currentColor'
            initial={{ d: heroData.waveAnimation.initial }}
            animate={{ d: heroData.waveAnimation.frames }}
            transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
          />
        </motion.svg>
        <div
          className='absolute inset-0 opacity-[0.03]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <motion.div
          className='absolute top-20 right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl'
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className='absolute bottom-40 left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl'
          animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className='relative max-w-7xl mx-auto px-4 sm:px-6 pt-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className='text-white text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight'>
              {heroData.title.main}{' '}
              <span className='block text-orange-500 mt-2'>
                {heroData.title.highlight}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-slate-300 text-xl mb-8 leading-relaxed'>
              {heroData.description.text}{' '}
              <strong className='text-white'>
                {heroData.description.highlight}
              </strong>
              {heroData.description.suffix}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='flex flex-col sm:flex-row gap-4 mb-12'>
              <a
                href={heroData.buttons.primary.link}
                className='inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40'>
                {heroData.buttons.primary.text} <ArrowRight size={20} />
              </a>
              <a
                href={heroData.buttons.secondary.link}
                className='inline-flex items-center justify-center gap-2 border-2 border-slate-500 hover:border-orange-500 text-slate-300 hover:text-orange-500 px-8 py-4 rounded-lg font-semibold transition-all backdrop-blur-sm bg-white/5'>
                {heroData.buttons.secondary.text}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='grid grid-cols-3 gap-4 pt-6 border-t border-slate-700'>
              {heroStats.map((stat, i) => (
                <div key={i} className='text-center lg:text-left'>
                  <div className='text-orange-500 text-3xl font-black mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-slate-400 text-sm'>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className='relative hidden lg:block'>
            <motion.div
              style={{ y: imageY1 }}
              className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src={galleryImages[0].url}
                alt='Estudantes aprendendo programação'
                className='w-full h-[400px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-center gap-2 text-white'>
                  <GraduationCap size={20} />
                  <span className='font-semibold'>Aprendizado Prático</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: imageY2 }}
              className='absolute -bottom-12 -left-8 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-slate-800'>
              <img
                src='https://images.unsplash.com/photo-1632910121591-29e2484c0259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwcHJvZ3JhbW1pbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjM0OTc1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Time colaborando'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
            </motion.div>

            <motion.div
              style={{ y: imageY3 }}
              className='absolute -top-8 -right-8 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-slate-800'>
              <img
                src='https://images.unsplash.com/photo-1758525864096-97c53df2547d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW50b3IlMjB0ZWFjaGluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNDk3NTk0fDA&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Mentoria em tecnologia'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute top-1/2 -right-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-2xl border border-orange-400/20'>
              <div className='text-white text-center'>
                <Award size={32} className='mx-auto mb-2' />
                <div className='text-2xl font-black'>50%</div>
                <div className='text-xs opacity-90'>Empregabilidade</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-24 text-white'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z'
          />
        </svg>
      </div>
    </section>
  )
}
