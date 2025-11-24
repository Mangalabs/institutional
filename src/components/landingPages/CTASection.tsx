import { motion } from 'framer-motion'
import { Rocket, ArrowRight, BadgeCheck } from 'lucide-react'

export function CTASection() {
  return (
    <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#FDCD00] via-[#FFB800] to-[#FDCD00] overflow-hidden'>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-white rounded-full opacity-40'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className='relative max-w-4xl mx-auto text-center'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className='text-white mb-6 text-4xl font-black'>
            Pronto para decolar suas conversões?
          </h2>
          <p className='text-white/95 text-lg mb-10 mx-auto leading-relaxed'>
            Comece hoje e tenha sua landing page de alta performance no ar em
            apenas 7 dias.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(20, 56, 41, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className='bg-[#143829] text-[#FDCD00] px-12 py-5 rounded-full font-bold inline-flex items-center justify-center gap-3 shadow-2xl text-lg'>
            <Rocket size={24} />
            <span>Começar Meu Projeto Agora</span>
            <ArrowRight size={24} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className='mt-12 flex flex-wrap justify-center gap-8 text-white/90 text-sm font-semibold'>
            <div className='flex items-center gap-2'>
              <BadgeCheck size={20} />
              <span>Entrega em 7 dias</span>
            </div>
            <div className='flex items-center gap-2'>
              <BadgeCheck size={20} />
              <span>Design exclusivo</span>
            </div>
            <div className='flex items-center gap-2'>
              <BadgeCheck size={20} />
              <span>Alta conversão</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
