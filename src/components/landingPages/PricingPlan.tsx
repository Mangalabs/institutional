import { motion } from 'framer-motion'
import { Gift, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react'
import { Plan } from '../../data/landingPages.data'
import { useContactActions } from '../../hooks/useContactActions'

interface PricingPlanProps {
  plan: Plan
  index: number
  onSelect?: (name: string) => void
}

export function PricingPlan({ plan, index, onSelect }: PricingPlanProps) {
  const { openWhatsApp } = useContactActions()

  const handlePlanClick = () => {
    let message = ''

    switch (index) {
      case 0:
        message = `Olá! 👋 Tenho interesse em iniciar com o plano *${plan.name}*. Poderia me orientar sobre o processo de contratação?`
        break
      case 1:
        message = `Olá! Tudo bem? Vi que o plano *${plan.name}* é um dos mais indicados e gostaria de conhecer melhor os detalhes para avançarmos.`
        break
      case 2:
        message = `Olá! Estou avaliando soluções completas e o plano *${plan.name}* chamou minha atenção. Podemos conversar sobre as condições e próximos passos?`
        break
      default:
        message = `Olá! Gostaria de receber mais informações sobre o plano *${plan.name}*.`
    }

    openWhatsApp(message)

    if (onSelect) {
      onSelect(plan.name)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -8, scale: plan.highlight ? 1.04 : 1.02 }}
      className={`relative group ${plan.highlight ? 'lg:scale-105' : ''}`}>
      {plan.highlight && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FDCD00] to-[#FFB800] text-[#0a0a0a] px-3 py-1.5 rounded-full font-bold text-xs shadow-lg z-10'>
          Mais Popular
        </motion.div>
      )}

      <div
        className={`relative bg-white/5 backdrop-blur-md border-2 flex flex-col h-full ${
          plan.highlight ? 'border-[#FDCD00]' : 'border-[#FDCD00]/20'
        } hover:border-[#FDCD00] rounded-3xl p-6 shadow-xl transition-all`}>
        <motion.div
          className='w-10 h-10 rounded-xl flex items-center justify-center mb-3 mx-auto'
          style={{
            background: `linear-gradient(135deg, ${plan.color}40, ${plan.color}10)`,
          }}
          whileHover={{ scale: 1.08 }}>
          <plan.icon size={22} style={{ color: plan.color }} />
        </motion.div>

        <h3 className='text-white text-xl font-black mb-1 text-center'>
          {plan.name}
        </h3>

        <div className='text-center mb-2'>
          {plan.originalPrice && (
            <div className='text-white/40 line-through text-xs'>
              {plan.originalPrice}
            </div>
          )}
          <div className='text-3xl font-black text-[#FDCD00]'>{plan.price}</div>
        </div>

        <p className='text-white/70 text-sm text-center mb-3 leading-snug'>
          {plan.description}
        </p>

        {plan.bonus && (
          <div className='bg-gradient-to-r from-[#FDCD00]/20 to-[#E9972D]/20 border border-[#FDCD00]/30 rounded-xl p-1.5 mb-3 text-center'>
            <div className='flex items-center justify-center gap-1.5 text-[#FDCD00] text-xs font-bold'>
              <Gift size={14} />
              <span>{plan.bonus}</span>
            </div>
          </div>
        )}

        <ul className='space-y-1.5 mb-4'>
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className='flex items-start gap-2 text-white/80 text-sm leading-tight'>
              <CheckCircle2
                size={15}
                className='text-[#FDCD00] flex-shrink-0 mt-0.5'
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePlanClick}
          className={`w-full py-2.5 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all shadow-md ${
            plan.highlight
              ? 'bg-gradient-to-r from-[#FDCD00] to-[#FFB800] text-[#0a0a0a]'
              : 'bg-white/10 border border-[#FDCD00]/40 text-white hover:bg-white/20'
          }`}>
          <MessageCircle size={18} />
          <span className='text-sm'>Contratar {plan.name}</span>
        </motion.button>
      </div>
    </motion.div>
  )
}
