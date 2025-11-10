import { motion } from 'framer-motion'
import { type Testimonial } from '../../data/academy.data'
import { MapPin } from 'lucide-react'

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export function TestimonialCard({
  testimonial,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      key={testimonial.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, type: 'spring' }}
      whileHover={{ y: -10 }}
      className='group relative'
    >
      <div className='relative bg-white/80 backdrop-blur-md border border-[#B6461B]/10 hover:border-[#FDCD00] rounded-3xl p-8 shadow-xl transition-all h-full'>
        <div className='mb-6 relative'>
          <motion.div
            className='absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B6461B] to-[#FDCD00] text-white text-xs px-3 py-1 rounded-full font-semibold whitespace-nowrap'
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {testimonial.role}
          </motion.div>
        </div>

        <p className='text-[#143829]/80 italic mb-6 leading-relaxed text-sm'>
          "{testimonial.quote}"
        </p>

        <div className='border-t border-[#B6461B]/10 pt-4'>
          <div className='font-bold text-[#143829]'>{testimonial.name}</div>
          <div className='text-[#B6461B] text-sm flex items-center gap-1 justify-center mt-1'>
            <MapPin size={14} />
            <span>{testimonial.from}</span>
          </div>
          <div className='text-[#FDCD00] text-xs mt-2 font-semibold'>
            {testimonial.highlight}
          </div>
        </div>
      </div>
    </motion.div>
  )
}