import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { CheckCircle2, Building2 } from 'lucide-react'
import { partnershipBenefits } from '../../data/academy.data'

export function PartnershipsSection() {
  const parceriasRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: parceriasRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section
      ref={parceriasRef}
      className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden'>
      <div className='absolute top-0 left-0 right-0'>
        <svg
          className='w-full h-20 text-white'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q240,20 480,50 T960,50 T1440,50 L1440,0 L0,0 Z'
          />
        </svg>
      </div>

      <motion.div
        style={{ y: y2 }}
        className='absolute top-40 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full opacity-20 blur-3xl'
        animate={{ x: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ y: y1 }}
        className='absolute bottom-20 right-0 w-96 h-96 bg-orange-50 rounded-full opacity-30 blur-3xl'
        animate={{ x: [0, -30, 0], scale: [1, 1.3, 1] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            <span className='text-orange-600 font-semibold text-sm uppercase tracking-wider'>
              Parcerias
            </span>
            <h2 className='text-slate-900 font-bold mt-3 mb-6'>
              Para Empresas Parceiras
            </h2>
            <p className='text-slate-600 text-lg mb-8 leading-relaxed'>
              Apoie a formação de novos profissionais e contribua com a
              transformação da comunidade tech
            </p>

            <div className='space-y-4'>
              {[
                'Acesso prioritário a talentos formados',
                'Associe sua marca ao impacto social',
                'Projetos com valores acessíveis',
              ].map((benefit, i) => (
                <div key={i} className='flex items-center gap-3'>
                  <div className='w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0'>
                    <CheckCircle2 className='text-orange-600' size={18} />
                  </div>
                  <span className='text-slate-600'>{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ y: y2 }}
            className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2MzQ2Nzg0OHww&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Parceria empresarial'
                className='w-full h-[450px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4'>
                  <div className='flex items-center gap-3 text-white'>
                    <Building2 size={24} />
                    <div>
                      <div className='font-bold'>Parcerias Estratégicas</div>
                      <div className='text-sm text-white/80'>
                        Crescimento conjunto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {partnershipBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className='bg-white/80 backdrop-blur-sm border border-slate-200 rounded-xl p-6 hover:border-orange-300 hover:shadow-lg transition-all'>
              <div className='w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl flex items-center justify-center mb-4'>
                <benefit.icon className='text-orange-600' size={28} />
              </div>
              <h3 className='text-slate-900 font-bold text-lg mb-3'>
                {benefit.title}
              </h3>
              <p className='text-slate-600 text-sm leading-relaxed'>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-16 text-slate-50'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,20 720,50 T1440,50 L1440,0 L0,0 Z'
          />
        </svg>
      </div>
    </section>
  )
}
