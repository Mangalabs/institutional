import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  Mail,
  Zap,
} from 'lucide-react'
import { useState, useRef } from 'react'

import {
  impactStats,
  methodology,
  testimonials,
  growthOptions,
  mentorshipFeatures,
} from '../data/academy.data'

import { ImpactStatCard } from '../components/academy/ImpactStatCard'
import { MethodologyCard } from '../components/academy/MethodologyCard'
import { TestimonialCard } from '../components/academy/TestimonialCard'
import { GrowthCard } from '../components/academy/GrowthCard'
import { MentorshipCard } from '../components/academy/MentorshipCard'

export function Academy() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 4000)
    }
  }

  return (
    <div
      ref={containerRef}
      className='min-h-screen pt-20 bg-gradient-to-b from-[#1d3a31] to-[#143829]'
    >
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#FDCD00] via-[#FFE8A3] to-[#FFF8F0]' />
          <svg
            className='absolute bottom-0 left-0 w-full h-64 opacity-20'
            preserveAspectRatio='none'
            viewBox='0 0 1200 320'
          >
            <motion.path
              d='M0,160 Q300,100 600,160 T1200,160 L1200,320 L0,320 Z'
              fill='#B6461B'
              animate={{
                d: [
                  'M0,160 Q300,100 600,160 T1200,160 L1200,320 L0,320 Z',
                  'M0,140 Q300,180 600,140 T1200,140 L1200,320 L0,320 Z',
                  'M0,160 Q300,100 600,160 T1200,160 L1200,320 L0,320 Z',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
          <motion.div
            className='absolute top-20 right-20 w-[400px] h-[400px] opacity-10'
            style={{
              background:
                'radial-gradient(circle, #B6461B 0%, transparent 70%)',
              filter: 'blur(60px)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
            }}
            animate={{
              borderRadius: [
                '60% 40% 30% 70% / 60% 30% 70% 40%',
                '30% 60% 70% 40% / 50% 60% 30% 60%',
                '60% 40% 30% 70% / 60% 30% 70% 40%',
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-[#B6461B] rounded-full opacity-30'
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 30 - 15, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <motion.div
          className='relative z-10 mx-auto px-4 sm:px-6 text-center'
          style={{ opacity: heroOpacity }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-[#143829] mb-6'
          >
            Educar para transformar.{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#B6461B] to-[#FDCD00]'>
                Transformar para incluir.
              </span>
              <motion.div
                className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#B6461B] to-[#FDCD00] rounded-full'
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='text-[#143829]/80 text-lg sm:text-xl md:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed px-4'
          >
            A MangaAcademy é um{' '}
            <strong className='text-[#E9972D]'>movimento nacional</strong> que
            conecta jovens de todo o Brasil à tecnologia, à empregabilidade e a
            um propósito real:{' '}
            <strong className='text-[#143829]/80'>mudar vidas</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(182, 70, 27, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-[#B6461B] to-[#E9972D] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl'
            >
              <Rocket size={20} />
              <span>Quero Investir no Movimento</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 overflow-hidden bg-white'>
        <svg
          className='absolute top-0 left-0 w-full h-24 opacity-30'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
        >
          <path
            d='M0,50 Q200,20 400,50 T800,50 T1200,50 L1200,0 L0,0 Z'
            fill='#FFF8F0'
          />
        </svg>

        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-[#143829] mb-4'>
              Educação com <span className='text-[#B6461B]'>impacto real</span>
            </h2>
            <p className='text-[#143829]/70 text-lg mx-auto'>
              Números que representam vidas transformadas e futuros construídos
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {impactStats.map((stat, index) => (
              <ImpactStatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] overflow-hidden'>
        <motion.div
          className='absolute top-10 left-10 w-[300px] h-[300px] opacity-5'
          style={{
            background: 'radial-gradient(circle, #FDCD00 0%, transparent 70%)',
            filter: 'blur(50px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-[#143829] mb-4'>
              Nossa <span className='text-[#B6461B]'>metodologia</span>
            </h2>
            <p className='text-[#143829]/70 text-lg  mx-auto'>
              Aprendizado que vai além da teoria e prepara para a vida real
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {methodology.map((item, index) => (
              <MethodologyCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* <section className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-[#143829] mb-4'>
              Histórias de <span className='text-[#B6461B]'>transformação</span>
            </h2>
            <p className='text-[#143829]/70 text-lg  mx-auto'>
              Vidas reais, mudanças reais, impacto real
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section> */}

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-24 opacity-20'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
        >
          <path d='M0,50 Q300,20 600,50 T1200,50 L1200,0 L0,0 Z' fill='#FFF' />
        </svg>

        <motion.div
          className='absolute top-20 right-10 w-[350px] h-[350px] opacity-5'
          style={{
            background: 'radial-gradient(circle, #B6461B 0%, transparent 70%)',
            filter: 'blur(60px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
          animate={{
            borderRadius: [
              '60% 40% 30% 70% / 60% 30% 70% 40%',
              '40% 60% 70% 30% / 50% 60% 40% 50%',
              '60% 40% 30% 70% / 60% 30% 70% 40%',
            ],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-[#143829] mb-6 mx-auto leading-tight'>
              A transformação{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#B6461B] to-[#FDCD00]'>
                não para no primeiro emprego
              </span>
            </h2>

            <p className='text-[#143829]/70 text-lg sm:text-xl mx-auto leading-relaxed'>
              Se você já trabalha com tecnologia, quer mudar de área ou busca um
              novo propósito,{' '}
              <strong className='text-[#143829]'>
                a MangaAcademy é o lugar certo
              </strong>{' '}
              para continuar crescendo.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {growthOptions.map((option, index) => (
              <GrowthCard key={option.title} option={option} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='text-center mt-12'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(182, 70, 27, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-[#B6461B] to-[#E9972D] text-white px-12 py-4 rounded-full inline-flex items-center gap-3 font-bold shadow-2xl'
            >
              <Zap size={20} />
              <span>Quero Evoluir com a MangaAcademy</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-24 opacity-30'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
        >
          <path
            d='M0,50 Q200,20 400,50 T800,50 T1200,50 L1200,0 L0,0 Z'
            fill='#FFF8F0'
          />
        </svg>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-2 h-2 bg-[#E9972D] rounded-full opacity-20'
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className='relative max-w-6xl mx-auto pt-8'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-[#143829] mb-6 mx-auto leading-tight'>
              Mentorias que{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#B6461B] to-[#FDCD00]'>
                transformam times
              </span>
            </h2>

            <p className='text-[#143829]/70 text-lg sm:text-xl mx-auto mb-8 leading-relaxed'>
              Capacite seu time com a{' '}
              <strong className='text-[#B6461B]'>mesma metodologia</strong> que
              já transformou mais de 100 vidas.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='bg-gradient-to-r from-[#FDCD00]/10 to-[#E9972D]/10 backdrop-blur-sm border border-[#B6461B]/20 rounded-3xl p-6 mx-auto'
            >
              <p className='text-[#143829] text-lg italic'>
                "Acreditamos que{' '}
                <span className='text-[#B6461B] font-bold not-italic'>
                  times mais humanos
                </span>{' '}
                constroem{' '}
                <span className='text-[#B6461B] font-bold not-italic'>
                  tecnologias mais poderosas
                </span>
                ."
              </p>
            </motion.div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
            {mentorshipFeatures.map((feature, index) => (
              <MentorshipCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(233, 151, 45, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-[#E9972D] to-[#FDCD00] text-white px-12 py-4 rounded-full inline-flex items-center gap-3 font-bold shadow-2xl'
            >
              <Mail size={20} />
              <span>Falar com o Time de Mentoria</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#B6461B] to-[#E9972D] overflow-hidden'>
        <motion.div
          className='absolute top-0 left-0 w-[600px] h-[600px] opacity-10'
          style={{
            background: 'radial-gradient(circle, #FDCD00 0%, transparent 70%)',
            filter: 'blur(100px)',
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className='relative max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className='text-white mb-6'>
              Pronto para fazer parte desse movimento?
            </h2>
            <p className='text-white/90 text-lg mb-10  mx-auto leading-relaxed'>
              Investir na MangaAcademy é investir em pessoas, em transformação
              social e no futuro da tecnologia no Brasil.
            </p>

            <div className='justify-center mb-12'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(253, 205, 0, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className='bg-white text-[#B6461B] px-10 py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 shadow-2xl'
              >
                <Mail size={20} />
                <span>Falar com a equipe</span>
                <ArrowRight size={20} />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-wrap justify-center gap-6 text-white/80 text-sm'
            >
              <div className='flex items-center gap-2'>
                <CheckCircle2 size={16} />
                <span>100% empregabilidade</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 size={16} />
                <span>12 semanas de imersão</span>
              </div>
              <div className='flex items-center gap-2'>
                <CheckCircle2 size={16} />
                <span>Mentoria real</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}