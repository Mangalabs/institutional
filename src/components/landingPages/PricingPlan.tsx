import { motion } from 'framer-motion'
import { type PricingPlan } from '../../data/landingPages.data'
import { CheckCircle2, Gift, ArrowRight } from 'lucide-react'

interface PricingPlanProps {
  plan: PricingPlan
  index: number
  onSelectPlan: (name: string) => void
}

export function PricingPlan({ plan, index, onSelectPlan }: PricingPlanProps) {
  const Icon = plan.icon

  return (
    <motion.div
      key={plan.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: 'spring' }}
      whileHover={{ y: -10, scale: plan.highlight ? 1.05 : 1.03 }}
      className={`relative group ${plan.highlight ? 'lg:scale-105' : ''}`}
    >
      {plan.highlight && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E9972D] to-[#FDCD00] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg z-10'
        >
          Mais Popular
        </motion.div>
      )}

      <div
        className={`relative bg-white/80 backdrop-blur-md border-2 ${
          plan.highlight ? 'border-[#E9972D]' : 'border-[#E9972D]/20'
        } hover:border-[#FDCD00] rounded-3xl p-8 shadow-2xl transition-all h-full`}
      >
        <motion.div
          className='w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'
          style={{
            background: `linear-gradient(135deg, ${plan.color}20, ${plan.color}05)`,
          }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon size={32} style={{ color: plan.color }} />
        </motion.div>

        <h3 className='text-[#143829] text-2xl font-black mb-2 text-center'>
          {plan.name}
        </h3>

        <div className='text-center mb-4'>
          {plan.originalPrice && (
            <div className='text-[#143829]/40 line-through text-sm'>
              {plan.originalPrice}
            </div>
          )}
          <div className='text-4xl font-black text-[#E9972D]'>
            {plan.price}
          </div>
        </div>

        <p className='text-[#143829]/70 text-sm text-center mb-6'>
          {plan.description}
        </p>

        {plan.bonus && (
          <div className='bg-gradient-to-r from-[#FDCD00]/20 to-[#E9972D]/20 border border-[#FDCD00]/30 rounded-xl p-3 mb-6 text-center'>
            <div className='flex items-center justify-center gap-2 text-[#E9972D] text-sm font-bold'>
              <Gift size={16} />
              <span>{plan.bonus}</span>
            </div>
          </div>
        )}

        <ul className='space-y-3 mb-8'>
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className='flex items-start gap-2 text-[#143829]/80 text-sm'
            >
              <CheckCircle2
                size={18}
                className='text-[#E9972D] flex-shrink-0 mt-0.5'
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelectPlan(plan.name)}
          className={`w-full py-4 rounded-full font-bold inline-flex items-center justify-center gap-2 transition-all shadow-lg ${
            plan.highlight
              ? 'bg-gradient-to-r from-[#E9972D] to-[#FDCD00] text-white'
              : 'bg-[#143829] text-white'
          }`}
        >
          <span>Escolher {plan.name}</span>
          <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.div>
  )
}