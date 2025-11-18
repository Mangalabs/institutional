import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Mail, MessageCircle, Rocket, TreePine } from 'lucide-react'
import { useRef } from 'react'

import { useContactActions } from '../hooks/useContactActions'

import {
  ecosystem,
  impactNumbers,
  dna,
  publicosAtendidos,
  frentes,
} from '../data/home.data'

import { ImpactCard } from '../components/home/ImpactCard'
import { EcosystemCard } from '../components/home/EcosystemCard'
import { DnaCard } from '../components/home/DnaCard'
import { AudienceCard } from '../components/home/AudienceCard'

interface HomeProps {
  onNavigate: (page: string) => void
}

export function Home({ onNavigate }: HomeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  const { openWhatsApp, openEmail } = useContactActions()

  return (
    <div ref={containerRef} className='min-h-screen bg-[#0a1612]'>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden pt-20'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#143829] via-[#0f2619] to-[#0a1612]' />
          <motion.div
            className='absolute top-0 left-0 w-[800px] h-[800px] opacity-20'
            style={{
              background:
                'radial-gradient(ellipse at center, #2B5B3F 0%, transparent 70%)',
              filter: 'blur(100px)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            }}
            animate={{
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '60% 40% 30% 70% / 60% 30% 70% 40%',
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className='absolute bottom-0 right-0 w-[700px] h-[700px] opacity-15'
            style={{
              background:
                'radial-gradient(ellipse at center, #FDCD00 0%, transparent 70%)',
              filter: 'blur(120px)',
              borderRadius: '40% 60% 60% 40% / 40% 50% 60% 50%',
            }}
            animate={{
              borderRadius: [
                '40% 60% 60% 40% / 40% 50% 60% 50%',
                '60% 40% 30% 70% / 50% 50% 40% 60%',
                '40% 60% 60% 40% / 40% 50% 60% 50%',
              ],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-[#FDCD00] rounded-full opacity-40'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
          <svg
            className='absolute bottom-0 left-0 w-full h-64 opacity-10'
            preserveAspectRatio='none'
            viewBox='0 0 1200 120'>
            <motion.path
              d='M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z'
              fill='#2B5B3F'
              animate={{
                d: [
                  'M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z',
                  'M0,40 Q300,70 600,40 T1200,40 L1200,120 L0,120 Z',
                  'M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>

        <motion.div
          className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center'
          style={{ opacity: heroOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-white mb-6 px-4'>
            Tecnologia que conecta{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FDCD00] via-[#E9972D] to-[#2B5B3F]'>
                pessoas e negócios
              </span>
              <motion.div
                className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#FDCD00] to-[#2B5B3F] rounded-full'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-white/70 text-lg sm:text-xl mx-auto mb-10 px-4'>
            Da educação tech ao desenvolvimento de produtos digitais. Um
            ecossistema completo que conecta talentos, impulsiona negócios e
            democratiza a inovação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(253, 205, 0, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='group bg-gradient-to-r from-[#FDCD00] to-[#E9972D] text-[#143829] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl'>
              <TreePine size={20} />
              <span>Explorar Ecossistema</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}>
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                openWhatsApp(
                  'Olá! Gostaria de falar com o time da MangaLab para tirar algumas dúvidas antes de começar.'
                )
              }
              className='bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDCD00]/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2'>
              <MessageCircle size={20} />
              <span>Falar com time</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a1612] to-[#143829] overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <pattern
                id='organic-pattern'
                x='0'
                y='0'
                width='100'
                height='100'
                patternUnits='userSpaceOnUse'>
                <circle cx='25' cy='25' r='2' fill='#FDCD00' />
                <circle cx='75' cy='75' r='2' fill='#2B5B3F' />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#organic-pattern)' />
          </svg>
        </div>

        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              <span className='text-[#FDCD00]'>Impacto</span> em números
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
              Cada número representa vidas transformadas e negócios que
              cresceram
            </p>
          </motion.div>

          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            {impactNumbers.map((stat, index) => (
              <ImpactCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-[#143829] overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-32 opacity-20'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'>
          <path
            d='M0,50 Q200,20 400,50 T800,50 T1200,50 L1200,0 L0,0 Z'
            fill='#0a1612'
          />
        </svg>

        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              Três frentes, <span className='text-[#FDCD00]'>um propósito</span>
            </h2>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {ecosystem.map((item, index) => (
              <EcosystemCard
                key={item.id}
                item={item}
                index={index}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#143829] to-[#0f2619] overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <svg width='100%' height='100%'>
            {[...Array(20)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${Math.random() * 100}%`}
                y1='0'
                x2={`${Math.random() * 100}%`}
                y2='100%'
                stroke='#FDCD00'
                strokeWidth='1'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              O <span className='text-[#FDCD00]'>DNA</span> da MangaLab
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
              Valores que nos guiam e diferenciam
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {dna.map((value, index) => (
              <DnaCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-[#0f2619] overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              Para quem <span className='text-[#FDCD00]'>criamos</span>
            </h2>
            <p className='text-white/70 text-lg'>
              Conectando diferentes perfis ao ecossistema de inovação
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {publicosAtendidos.map((publico, index) => (
              <AudienceCard
                key={publico.title}
                publico={publico}
                index={index}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>

        <motion.div
          className='flex gap-6 py-8 mt-15'
          animate={{ x: [0, -1200] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}>
          {[...frentes, ...frentes, ...frentes, ...frentes].map(
            (frente, index) => (
              <div
                key={index}
                className='px-8 py-4 rounded-full border-2 whitespace-nowrap flex items-center gap-3 bg-white/5 backdrop-blur-sm'
                style={{ borderColor: frente.color }}>
                <frente.icon size={20} style={{ color: frente.color }} />
                <span className='text-white font-semibold'>{frente.name}</span>
              </div>
            )
          )}
        </motion.div>
      </section>

      <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#143829] via-[#2B5B3F] to-[#143829] overflow-hidden'>
        <motion.div
          className='absolute top-0 left-0 w-[600px] h-[600px] opacity-20'
          style={{
            background: 'radial-gradient(circle, #FDCD00 0%, transparent 70%)',
            filter: 'blur(100px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className='text-white mb-6'>Pronto para crescer conosco?</h2>
            <p className='text-white/70 text-lg mb-10 mx-auto'>
              Seja formando talentos, criando produtos ou impulsionando seu
              negócio, nós temos a solução perfeita para você.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(253, 205, 0, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openEmail(
                    'Quero começar agora!',
                    `Olá! Tenho interesse em iniciar meu projeto com a MangaLab. 
                      Poderiam me ajudar a dar os primeiros passos?`
                  )
                }
                className='bg-gradient-to-r from-[#FDCD00] to-[#E9972D] text-[#143829] px-10 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 shadow-2xl'>
                <Mail size={20} />
                <span>Começar agora</span>
                <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  openWhatsApp(
                    'Olá! Gostaria de conversar com um especialista da MangaLab para entender melhor como vocês podem me ajudar.'
                  )
                }
                className='bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#FDCD00]/30 text-white px-10 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2'>
                <MessageCircle size={20} />
                <span>Falar com especialistas</span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-sm'>
              <div className='flex items-center gap-2'>
                <CheckCircle size={16} className='text-[#FDCD00]' />
                <span>120+ vidas transformadas</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle size={16} className='text-[#FDCD00]' />
                <span>150+ projetos entregues</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle size={16} className='text-[#FDCD00]' />
                <span>98% satisfação</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
