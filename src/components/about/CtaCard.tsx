import { motion } from 'framer-motion'
import { type CallToAction } from '../../data/about.data'
import { ArrowRight, Sparkles } from 'lucide-react'

interface CtaCardProps {
  cta: CallToAction
  index: number
}

export function CtaCard({ cta, index }: CtaCardProps) {
  const isPrimary = cta.style === 'primary'
  const ButtonIcon = cta.buttonIcon === 'Sparkles' ? Sparkles : cta.buttonIcon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        transition: { type: 'spring', stiffness: 300 },
      }}
      className='relative group'
    >
      <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-10 sm:p-12 h-full flex flex-col'>
        <div className='text-6xl mb-6'>{cta.emoji}</div>
        <h3 className='text-3xl sm:text-4xl font-black text-white mb-4'>
          {cta.title}
        </h3>
        <p className='text-base sm:text-lg text-white/70 mb-8 flex-grow leading-relaxed'>
          {cta.description}
        </p>

        {isPrimary ? (
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(233, 151, 45, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className='w-full bg-gradient-to-r from-[#E9972D] to-[#C4501B] hover:from-[#C4501B] hover:to-[#E9972D] text-white py-5 px-8 rounded-full font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl group/btn'
          >
            <span>{cta.buttonText}</span>
            <ButtonIcon
              size={24}
              className='group-hover/btn:translate-x-1 transition-transform'
            />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white py-5 px-8 rounded-full font-black text-lg border-2 border-white/30 hover:border-white/60 transition-all flex items-center justify-center gap-3 group/btn'
          >
            <span>{cta.buttonText}</span>
            <ButtonIcon
              size={24}
              className='group-hover/btn:rotate-12 transition-transform'
            />
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}