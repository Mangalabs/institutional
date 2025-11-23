import { motion } from 'framer-motion'
import { Users, Globe } from 'lucide-react'
import { locations } from '../../data/academy.data'

export function TeamLocationSection() {
  return (
    <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-orange-50/30 to-white overflow-hidden'>
      <div className='absolute top-0 left-0 right-0'>
        <svg
          className='w-full h-24 text-white'
          viewBox='0 0 1440 100'
          preserveAspectRatio='none'>
          <path
            fill='currentColor'
            d='M0,50 Q360,85 720,50 T1440,50 L1440,0 L0,0 Z'
          />
        </svg>
      </div>

      <div className='relative max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='relative rounded-3xl overflow-hidden shadow-2xl group'>
            <img
              src='https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNDU1NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080'
              alt='Time diverso em reunião'
              className='w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-10'>
              <div className='w-20 h-20 bg-orange-600/95 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl'>
                <Users className='text-white' size={40} />
              </div>
              <h3 className='text-white text-3xl font-black mb-4'>
                Nossa Equipe
              </h3>
              <p className='text-white/95 text-lg leading-relaxed'>
                Profissionais experientes em desenvolvimento de software, gestão
                de projetos e educação tecnológica. Atuação integrada entre
                produção, ensino e mentoria para garantir qualidade e
                crescimento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='relative rounded-3xl overflow-hidden shadow-2xl group'>
            <img
              src='https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2MzQ4NDIxN3ww&ixlib=rb-4.1.0&q=80&w=1080'
              alt='Sala de aula de tecnologia'
              className='w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent' />
            <div className='absolute bottom-0 left-0 right-0 p-10'>
              <div className='w-20 h-20 bg-orange-600/95 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-xl'>
                <Globe className='text-white' size={40} />
              </div>
              <h3 className='text-white text-3xl font-black mb-4'>
                Local de Atuação
              </h3>
              <p className='text-white/95 text-lg mb-4'>
                <strong>Sede:</strong> Belém, Pará
              </p>
              <p className='text-white/90 mb-4 text-base'>
                <strong>Profissionais atuando em:</strong>
              </p>
              <div className='flex flex-wrap gap-3 mb-4'>
                {locations.map((location) => (
                  <span
                    key={location}
                    className='bg-orange-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold shadow-lg'>
                    {location}
                  </span>
                ))}
              </div>
              <p className='text-white/85 text-base'>
                Formato <strong className='text-white'>híbrido</strong> com
                participação remota em todo território nacional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
