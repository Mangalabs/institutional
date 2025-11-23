import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MentorshipCard } from './MentorshipCard'
import { GrowthCard } from './GrowthCard'
import { missionVisionData, odsData } from '../../data/academy.data'

export function MissionSection() {
  const missaoRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: missaoRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-10%'])

  return (
    <section
      ref={missaoRef}
      className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
      <div className='absolute top-0 left-0 right-0'>
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

      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 right-10 w-96 h-96 bg-orange-50 rounded-full opacity-50 blur-3xl'
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-20 left-10 w-72 h-72 bg-orange-100 rounded-full opacity-40 blur-3xl'
        animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-orange-600 font-semibold text-sm uppercase tracking-wider'>
            Nossa Identidade
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-slate-900 text-3xl font-bold mt-3'>
            Missão e Visão
          </motion.h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12'>
          {missionVisionData.map((item, index) => (
            <div key={item.type} className='lg:col-span-6 space-y-8'>
              <MentorshipCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant={item.variant}
                index={index}
                delay={index * 0.2}
              />
            </div>
          ))}

          <div className='lg:col-span-12'>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='bg-gradient-to-br from-white via-orange-50/50 to-white border-2 border-orange-200 rounded-3xl p-10 lg:p-12 shadow-xl'>
              <div className='text-center mb-12'>
                <h3 className='text-slate-900 text-3xl font-black mb-3'>
                  Alinhado aos ODS da ONU
                </h3>
                <p className='text-slate-600 text-lg'>
                  Objetivos de Desenvolvimento Sustentável
                </p>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {odsData.map((ods, index) => (
                  <GrowthCard
                    key={ods.number}
                    number={ods.number}
                    title={ods.title}
                    color={ods.color}
                    delay={index * 0.15}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-16 text-slate-50'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,80 720,50 T1440,50 L1440,100 L0,100 Z'
          />
        </svg>
      </div>
    </section>
  )
}
