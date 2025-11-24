import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'
import { Testimonial } from '../../data/landingPages.data'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className='bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border-2 border-[#FDCD00]/20 hover:border-[#FDCD00] transition-all shadow-lg hover:shadow-2xl relative overflow-hidden h-full flex flex-col justify-between'>
      <motion.div
        className='absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10'
        style={{ backgroundColor: testimonial.color }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className='relative'>
        <MessageSquare size={32} className='text-[#FDCD00]/30 mb-4' />
        <p className='text-white/80 mb-6 italic leading-relaxed text-sm sm:text-base'>
          "{testimonial.text}"
        </p>
      </div>

      <div className='flex items-center gap-3 relative mt-auto'>
        <div
          className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg'
          style={{ backgroundColor: testimonial.color }}>
          {testimonial.avatar}
        </div>
        <div>
          <h4 className='text-white font-semibold'>{testimonial.author}</h4>
          <p className='text-white/60 text-sm'>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}
