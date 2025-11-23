import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, CheckCircle2 } from 'lucide-react'
import { ImpactStatCard } from './ImpactStatCard'
import { TestimonialCard } from './TestimonialCard'

export function ImpactSection() {
  const impactoRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: impactoRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section
      ref={impactoRef}
      className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 overflow-hidden'>
      <div className='absolute top-0 left-0 right-0'>
        <svg
          className='w-full h-24 text-white'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,85 720,50 T1440,50 L1440,0 L0,0 Z'
          />
        </svg>
      </div>

      <motion.div
        style={{ y: y1 }}
        className='absolute top-32 right-20 w-[500px] h-[500px] bg-gradient-to-br from-orange-200 to-orange-100 rounded-full opacity-30 blur-3xl'
        animate={{ scale: [1, 1.4, 1], rotate: [0, 180, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-20'>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-orange-600 font-semibold text-sm uppercase tracking-wider'>
            Impacto
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-slate-900 font-bold mt-4 mb-6'>
            Impacto Social e Tecnológico
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-slate-600 text-xl mx-auto leading-relaxed'>
            Atuamos em duas frentes estratégicas para transformação social e
            desenvolvimento econômico
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 h-80'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group'>
            <img
              src='https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjM0OTk3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080'
              alt='Estudantes celebrando sucesso'
              className='w-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-10'>
              <div className='w-20 h-20 bg-orange-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl'>
                <GraduationCap className='text-white' size={40} />
              </div>
              <h3 className='text-white text-3xl font-black mb-4'>
                Formação Profissional
              </h3>
              <ul className='space-y-3'>
                {[
                  'Reduz a lacuna entre ensino e prática profissional',
                  'Oferece a primeira experiência real de mercado',
                  'Estimula o aprendizado contínuo e autodesenvolvimento',
                ].map((item, i) => (
                  <li
                    key={i}
                    className='flex items-center gap-3 text-white/95 text-base'>
                    <CheckCircle2
                      size={20}
                      className='text-orange-400 flex-shrink-0'
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <ImpactStatCard type='stats' delay={0.2} />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 h-80'>
          <ImpactStatCard type='economic' delay={0} />
          <TestimonialCard />
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-20 text-white'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,15 720,50 T1440,50 L1440,100 L0,100 Z'
          />
        </svg>
      </div>
    </section>
  )
}
