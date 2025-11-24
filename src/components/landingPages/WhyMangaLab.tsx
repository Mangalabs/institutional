import { motion } from 'framer-motion'
import {
  Rocket,
  DollarSign,
  Shield,
  BadgeCheck,
  TrendingUp,
  Zap,
  ArrowRight,
} from 'lucide-react'

export function WhyMangaLab() {
  return (
    <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] via-[#143829]/40 to-[#0a0a0a] overflow-hidden'>
      <motion.div
        className='absolute inset-0 opacity-5'
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 60px, #FDCD00 60px, #FDCD00 62px)`,
        }}
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <motion.div
        className='absolute top-40 right-20 w-[200px] h-[200px] border-2 border-[#FDCD00]/20 rounded-full'
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className='absolute bottom-40 left-20 w-[150px] h-[150px] border-2 border-[#E9972D]/20 rounded-full'
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div className='relative max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-10'>
          <h2 className='text-white mb-6'>
            Por que escolher a{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FDCD00] to-[#E9972D]'>
              MangaLab
            </span>
            ?
          </h2>
          <p className='text-white/70 text-xl mx-auto leading-relaxed'>
            Não somos apenas mais uma empresa de tecnologia. Somos um{' '}
            <span className='text-[#FDCD00]'>ecossistema completo</span> que une
            propósito, inovação e impacto real.
          </p>
        </motion.div>

        <div className='space-y-8'>
          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'>
              <div className='relative bg-white/5 backdrop-blur-sm border-2 border-[#FDCD00]/20 hover:border-[#FDCD00] rounded-3xl p-8 transition-all h-full overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FDCD00]/20 to-transparent rounded-bl-[100px]' />
                <div className='relative'>
                  <div className='flex items-center gap-4 mb-6'>
                    <motion.div className='w-16 h-16 bg-gradient-to-br from-[#FDCD00]/20 to-[#FDCD00]/5 rounded-2xl flex items-center justify-center'>
                      <Rocket size={32} className='text-[#FDCD00]' />
                    </motion.div>

                    <h3 className='text-white text-2xl font-black'>
                      Tecnologia Acessível
                    </h3>
                  </div>

                  <p className='text-white/70 leading-relaxed mb-6'>
                    Democratizamos o acesso à inovação. Toda empresa merece
                    soluções digitais de{' '}
                    <span className='text-[#FDCD00] font-semibold'>
                      alto nível.
                    </span>
                  </p>

                  <div className='flex items-center gap-2 text-[#FDCD00] font-bold'>
                    <DollarSign size={20} />
                    <span>Até 40% mais acessível</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'>
              <div className='relative bg-white/5 backdrop-blur-sm border-2 border-[#E9972D]/20 hover:border-[#E9972D] rounded-3xl p-8 transition-all h-full overflow-hidden'>
                <div className='absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#E9972D]/20 to-transparent rounded-bl-[100px]' />
                <div className='relative'>
                  <div className='flex items-center gap-4 mb-6'>
                    <motion.div className='w-16 h-16 bg-gradient-to-br from-[#E9972D]/20 to-[#E9972D]/5 rounded-2xl flex items-center justify-center'>
                      <Shield size={32} className='text-[#E9972D]' />
                    </motion.div>

                    <h3 className='text-white text-2xl font-black'>
                      Qualidade Sênior
                    </h3>
                  </div>

                  <p className='text-white/70 leading-relaxed mb-6'>
                    Todo projeto é{' '}
                    <span className='text-[#E9972D] font-semibold'>
                      supervisionado por especialistas
                    </span>
                    . Código limpo, estável e de alto desempenho, garantido.
                  </p>

                  <div className='flex items-center gap-2 text-[#E9972D] font-bold'>
                    <BadgeCheck size={20} />
                    <span>Supervisão especializada</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: 'spring' }}
          className='mt-12 relative'>
          <div className='relative bg-gradient-to-br from-[#143829]/60 to-[#143829]/30 backdrop-blur-md border-2 border-[#FDCD00]/30 rounded-3xl p-10 overflow-hidden'>
            <motion.div
              className='absolute inset-0 opacity-10'
              style={{
                backgroundImage: `radial-gradient(circle, #FDCD00 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
              animate={{ backgroundPosition: ['0px 0px', '30px 30px'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />

            <div className='relative text-center'>
              <h3 className='text-white text-3xl font-black mb-6 max-w-4xl mx-auto leading-tight'>
                Esse modelo cria um ciclo virtuoso:
              </h3>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10'>
                {[
                  {
                    icon: DollarSign,
                    title: 'Para Você',
                    description: 'Economia de até 40% com qualidade premium',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Para os Devs',
                    description: 'Experiência real em projetos de impacto',
                  },
                  {
                    icon: BadgeCheck,
                    title: 'Para o Resultado',
                    description: 'Código revisado por profissionais seniores',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    whileHover={{ y: -5 }}
                    className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6'>
                    <div className='w-12 h-12 bg-[#FDCD00]/20 rounded-xl flex items-center justify-center mb-4 mx-auto'>
                      <item.icon size={24} className='text-[#FDCD00]' />
                    </div>
                    <h4 className='text-white font-bold text-lg mb-2'>
                      {item.title}
                    </h4>
                    <p className='text-white/60 text-sm'>{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring' }}
          whileHover={{ scale: 1.02 }}
          className='mt-12 relative group cursor-pointer'>
          <div className='relative bg-gradient-to-r from-[#FDCD00]/10 to-[#E9972D]/10 border-2 border-[#FDCD00]/20 hover:border-[#FDCD00] rounded-3xl p-8 transition-all'>
            <div className='flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>
              <motion.div
                className='flex-shrink-0'
                transition={{ duration: 3, repeat: Infinity }}>
                <div className='w-20 h-20 bg-gradient-to-br from-[#FDCD00] to-[#E9972D] rounded-2xl flex items-center justify-center shadow-xl'>
                  <Zap size={40} className='text-white' />
                </div>
              </motion.div>

              <div className='flex-1'>
                <h3 className='text-white text-2xl font-black mb-3'>
                  Pronto para fazer a diferença?
                </h3>
                <p className='text-white/70 leading-relaxed'>
                  Transforme seu negócio e ajude a formar a próxima geração de
                  desenvolvedores.{' '}
                  <span className='text-[#FDCD00] font-semibold'>
                    É uma escolha inteligente que gera impacto real.
                  </span>
                </p>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className='flex-shrink-0'>
                <ArrowRight size={40} className='text-[#FDCD00]' />
              </motion.div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}
