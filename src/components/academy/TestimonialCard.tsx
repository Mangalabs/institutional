import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export function TestimonialCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group'>
      <img
        src='https://images.unsplash.com/photo-1752650735943-d0fbf1edce21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM0MTE4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080'
        alt='Time colaborando'
        className='w-full object-cover transition-transform duration-700 group-hover:scale-110'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent' />
      <div className='absolute inset-0 flex items-center p-10'>
        <div className=''>
          <div className='inline-flex items-center gap-3 bg-orange-600/95 backdrop-blur-md rounded-full px-6 py-3 mb-6 shadow-lg'>
            <Heart size={24} className='text-white' />
            <span className='text-white font-bold text-lg'>
              Impacto Mensurável
            </span>
          </div>
          <h3 className='text-white text-4xl font-black mb-4'>
            Transformando Vidas
          </h3>
          <p className='text-white/95 text-xl leading-relaxed'>
            Cada aluno formado representa uma família impactada positivamente e
            uma comunidade mais forte.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
