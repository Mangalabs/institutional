import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BookOpen, Award, Users } from 'lucide-react'
import { MethodologyCard } from './MethodologyCard'
import { methodologySteps } from '../../data/academy.data'

export function ProgramSection() {
  const programaRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: programaRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <section
      ref={programaRef}
      id='programa'
      className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
      <div
        className='absolute inset-0 opacity-[0.02]'
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px',
          color: '#ea580c',
        }}
      />
      <motion.div
        style={{ y: y1 }}
        className='absolute top-20 left-10 w-80 h-80 bg-orange-50 rounded-full opacity-40 blur-3xl'
        animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ y: y2 }}
        className='absolute bottom-40 right-10 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl'
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      <div className='relative max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-orange-600 font-semibold text-sm uppercase tracking-wider'>
            Metodologia
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className='text-slate-900 font-bold mt-3 mb-4'>
            Como Funciona o Programa
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-slate-600 text-lg mx-auto'>
            Um processo estruturado que une capacitação técnica, prática
            profissional e impacto social
          </motion.p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ y: y1 }}
            className='relative'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1758270704384-9df36d94a29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ5NzgzOXww&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Educação universitária'
                className='w-full h-[400px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-center gap-2 text-white'>
                  <BookOpen size={20} />
                  <span className='font-semibold'>Metodologia Comprovada</span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -bottom-6 -right-6 bg-white border-4 border-white rounded-2xl p-6 shadow-xl'>
              <div className='text-center'>
                <div className='text-orange-600 text-3xl font-black mb-1'>
                  12
                </div>
                <div className='text-slate-600 text-sm font-semibold'>
                  Semanas
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div className='space-y-6'>
            {methodologySteps.slice(0, 2).map((item, index) => (
              <MethodologyCard
                key={item.step}
                {...item}
                delay={index * 0.15}
                isRightSide={false}
              />
            ))}
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6 lg:order-1'>
            {methodologySteps.slice(2, 4).map((item, index) => (
              <MethodologyCard
                key={item.step}
                {...item}
                delay={index * 0.15}
                isRightSide={true}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ y: y3 }}
            className='relative lg:order-2'>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl'>
              <img
                src='https://images.unsplash.com/photo-1759560270562-468e8ba866e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZXJ0aWZpY2F0ZSUyMGFjaGlldmVtZW50JTIwYXdhcmR8ZW58MXx8fHwxNzYzNDk3ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080'
                alt='Certificação e conquista'
                className='w-full h-[400px] object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent' />
              <div className='absolute bottom-6 left-6 right-6'>
                <div className='flex items-center gap-2 text-white'>
                  <Award size={20} />
                  <span className='font-semibold'>
                    Certificação Reconhecida
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className='absolute -top-6 -left-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-xl'>
              <div className='text-center'>
                <Users size={24} className='mx-auto mb-2' />
                <div className='text-sm font-semibold whitespace-nowrap'>
                  Mentoria 1:1
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
