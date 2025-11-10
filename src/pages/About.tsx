import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Target,
  CheckCircle,
  ArrowRight,
  Rocket,
  Mail,
  Leaf,
  Heart,
} from 'lucide-react'
import { useRef } from 'react'

import {
  metrics,
  dna,
  globalFeatures,
  teamMembers,
  finalCtaCards,
} from '../data/about.data'

import { MetricCard } from '../components/about/MetricCard'
import { DnaCard } from '../components/about/DnaCard'
import { GlobalFeatureCard } from '../components/about/GlobalFeatureCard'
import { TeamCard } from '../components/about/TeamCard'
import { CtaCard } from '../components/about/CtaCard'

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  return (
    <div
      ref={containerRef}
      className='min-h-screen pt-20 bg-gradient-to-b from-[#0a1612] to-[#143829]'>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#143829] via-[#0f2619] to-[#0a1612]' />
          <svg
            className='absolute inset-0 w-full h-full opacity-5'
            preserveAspectRatio='none'>
            <motion.path
              d='M 600 0 Q 580 200 500 400 T 400 800'
              stroke='#FDCD00'
              strokeWidth='2'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
            <motion.path
              d='M 700 0 Q 720 200 800 400 T 900 800'
              stroke='#E9972D'
              strokeWidth='2'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 0.5, ease: 'easeInOut' }}
            />
            <motion.path
              d='M 400 0 Q 350 300 300 600 T 200 1000'
              stroke='#C4501B'
              strokeWidth='1.5'
              fill='none'
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, delay: 1, ease: 'easeInOut' }}
            />
          </svg>
          <motion.div
            className='absolute top-20 left-10 w-[600px] h-[600px] opacity-10'
            style={{
              background:
                'radial-gradient(ellipse at center, #2B5B3F 0%, transparent 70%)',
              filter: 'blur(80px)',
              borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
            }}
            animate={{
              borderRadius: [
                '60% 40% 70% 30% / 40% 60% 30% 70%',
                '40% 60% 30% 70% / 60% 40% 70% 30%',
                '60% 40% 70% 30% / 40% 60% 30% 70%',
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className='absolute bottom-20 right-10 w-[500px] h-[500px] opacity-15'
            style={{
              background:
                'radial-gradient(ellipse at center, #C4501B 0%, transparent 70%)',
              filter: 'blur(90px)',
              borderRadius: '30% 70% 50% 50% / 60% 40% 60% 40%',
            }}
            animate={{
              borderRadius: [
                '30% 70% 50% 50% / 60% 40% 60% 40%',
                '70% 30% 40% 60% / 50% 50% 40% 60%',
                '30% 70% 50% 50% / 60% 40% 60% 40%',
              ],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}>
              <Leaf
                size={12 + Math.random() * 8}
                className='text-[#FDCD00] opacity-20'
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className='relative z-10 max-w-5xl mx-auto text-center'
          style={{ opacity: heroOpacity }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-white mb-6 px-4'>
            Raízes na{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FDCD00] via-[#E9972D] to-[#C4501B]'>
                Amazônia
              </span>
              <svg
                className='absolute -bottom-3 left-0 w-full h-3'
                preserveAspectRatio='none'>
                <motion.path
                  d='M 0 5 Q 25 0, 50 5 T 100 5'
                  stroke='#FDCD00'
                  strokeWidth='3'
                  fill='none'
                  vectorEffect='non-scaling-stroke'
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>
            {', '}impacto global
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-white/70 text-lg sm:text-xl mx-auto mb-10 px-4 leading-relaxed'>
            Somos um ecossistema de inovação social que conecta educação tech,
            desenvolvimento de produtos digitais e democratização da tecnologia.
            Do Norte do Brasil para o mundo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(253, 205, 0, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-[#FDCD00] to-[#E9972D] text-[#143829] px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl'>
              <Heart size={20} />
              <span>Nosso Propósito</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FDCD00]/30 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2'>
              <Mail size={20} />
              <span>Falar conosco</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#143829] to-[#0f2619] overflow-hidden'>
        <div className='absolute inset-0 opacity-5'>
          <svg width='100%' height='100%'>
            <defs>
              <pattern
                id='root-pattern'
                x='0'
                y='0'
                width='150'
                height='150'
                patternUnits='userSpaceOnUse'>
                <path d='M 75 0 L 75 150' stroke='#FDCD00' strokeWidth='1' />
                <path d='M 0 75 L 150 75' stroke='#E9972D' strokeWidth='1' />
                <circle cx='75' cy='75' r='3' fill='#C4501B' />
              </pattern>
            </defs>
            <rect width='100%' height='100%' fill='url(#root-pattern)' />
          </svg>
        </div>

        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              Impacto <span className='text-[#FDCD00]'>enraizado</span>
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
              Cada número é uma vida transformada, um negócio que cresceu, uma
              história de sucesso
            </p>
          </motion.div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {metrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-[#143829]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight'>
              Como fazemos software de ponta com{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14A2B6] to-[#0D7A8A]'>
                preço justo
              </span>
              ?
            </h2>
            <p className='text-xl sm:text-2xl text-[#14A2B6] font-bold mb-6'>
              Não tem mágica, tem metodologia. Não somos uma software house
              comum.
            </p>
            <p className='text-lg text-white/70 leading-relaxed mx-auto'>
              Transformamos cada projeto em{' '}
              <strong className='text-white'>aprendizado real</strong>, com{' '}
              <strong className='text-[#14A2B6]'>supervisão total</strong> de
              desenvolvedores sêniores. Isso garante software de ponta com{' '}
              <strong className='text-white'>custo até 40% menor</strong>, sem
              abrir mão da qualidade.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className='relative group'>
              <motion.div className='absolute -inset-1 bg-gradient-to-r from-[#E9972D] to-[#C4501B] opacity-20 group-hover:opacity-30 rounded-3xl blur-xl transition-opacity' />
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 h-full'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-[#E9972D] to-[#C4501B] rounded-2xl flex items-center justify-center shadow-xl'>
                    <Target size={32} className='text-white' />
                  </div>
                  <h3 className='text-2xl sm:text-3xl font-black text-white'>
                    Para Empresas
                  </h3>
                </div>
                <p className='text-base sm:text-lg text-white/70 leading-relaxed'>
                  Você tira seu sonho do papel com um custo{' '}
                  <strong className='text-[#551996]'>até 40% menor</strong> que
                  o padrão de mercado, garantido pela qualidade e supervisão de
                  experts.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 },
              }}
              className='relative group'>
              <motion.div className='absolute -inset-1 bg-gradient-to-r from-[#831CED] to-[#6B14C4] opacity-20 group-hover:opacity-30 rounded-3xl blur-xl transition-opacity' />
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 h-full'>
                <div className='flex items-center gap-4 mb-6'>
                  <div className='w-16 h-16 bg-gradient-to-br from-[#831CED] to-[#6B14C4] rounded-2xl flex items-center justify-center shadow-xl'>
                    <Rocket size={32} className='text-white' />
                  </div>
                  <h3 className='text-2xl sm:text-3xl font-black text-white'>
                    Para Talentos
                  </h3>
                </div>
                <p className='text-base sm:text-lg text-white/70 leading-relaxed'>
                  Oferecemos a{' '}
                  <strong className='text-[#E9972D]'>
                    primeira experiência de mercado
                  </strong>
                  , transformando iniciantes em programadores de alto nível.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='relative'>
            <motion.div className='absolute -inset-1 bg-gradient-to-r from-[#E9972D]/30 via-[#831CED]/30 to-[#14A2B6]/30 rounded-3xl blur-xl' />
            <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 sm:p-12 text-center'>
              <p className='text-xl sm:text-2xl md:text-3xl text-white leading-relaxed'>
                Você não está apenas{' '}
                <span className='text-[#E9972D] font-bold'>
                  comprando um software
                </span>
                . Você está{' '}
                <span className='text-[#E9972D] font-bold'>
                  investindo no seu negócio
                </span>{' '}
                e, ao mesmo tempo, na{' '}
                <span className='text-[#E9972D] font-bold'>
                  formação de uma nova geração de talentos
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-[#0f2619] overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-32 opacity-10'
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'>
          <path
            d='M0,50 Q300,10 600,50 T1200,50 L1200,0 L0,0 Z'
            fill='#143829'
          />
        </svg>

        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4'>
              O <span className='text-[#FDCD00]'>DNA</span> da MangaLab
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
              Valores que nos guiam e diferenciam no mercado
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {dna.map((value, index) => (
              <DnaCard key={value.title} value={value} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#143829]'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>
              De Onde Viemos{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E9972D] to-[#F0A84D]'>
                (A História Real)
              </span>
            </h2>
          </motion.div>

          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='relative'>
              <motion.div className='absolute -inset-1 bg-[#E9972D]/20 rounded-3xl blur-xl' />
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 border-l-4 border-l-[#E9972D] rounded-3xl p-8 sm:p-10'>
                <p className='text-lg sm:text-xl text-white/80 leading-relaxed'>
                  A MangaLab{' '}
                  <strong className='text-white'>
                    não nasceu de um plano de negócios
                  </strong>
                  . Nasceu da{' '}
                  <strong className='text-[#E9972D]'>inquietação</strong>.
                  Nossos fundadores, cansados da metodologia lenta e burocrática
                  das grandes empresas de tecnologia, decidiram fazer diferente.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='relative'>
              <motion.div className='absolute -inset-1 bg-[#14A2B6]/20 rounded-3xl blur-xl' />
              <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 border-l-4 border-l-[#14A2B6] rounded-3xl p-8 sm:p-10'>
                <p className='text-lg sm:text-xl text-white/80 leading-relaxed'>
                  Tudo começou com{' '}
                  <strong className='text-white'>uma mentoria</strong>. Antes de
                  sermos uma empresa, éramos um grupo de estudo. Em{' '}
                  <strong className='text-[#14A2B6]'>2020</strong>,
                  transformamos essa mentoria em um negócio, com uma essência{' '}
                  <strong className='text-white'>100% paraense</strong> – direto
                  da "Cidade das Mangueiras" – para provar que inovação
                  disruptiva{' '}
                  <strong className='text-[#14A2B6]'>não tem CEP</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-[#0a0a0a]'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#C4501B] to-[#E9972D]'>
                Cultura de Execução
              </span>{' '}
              e Inovação
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className='relative mb-16'>
            <motion.div
              className='absolute -inset-2 bg-gradient-to-r from-[#E9972D]/30 via-[#C4501B]/30 to-[#E9972D]/30 rounded-3xl blur-2xl'
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border-2 border-white/20 rounded-3xl py-16 px-8 sm:px-16 text-center overflow-hidden'>
              <div className='absolute top-8 left-8 text-[#E9972D]/20 text-9xl font-black leading-none'>
                "
              </div>
              <div className='absolute bottom-8 right-8 text-[#E9972D]/20 text-9xl font-black leading-none'>
                "
              </div>
              <h3 className='text-3xl sm:text-4xl md:text-5xl font-black text-white italic leading-tight relative z-10'>
                Inovamos com propósito, entregamos com excelência.
              </h3>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-lg sm:text-xl text-white/70 leading-relaxed text-center'>
            Nossa cultura é movida por{' '}
            <strong className='text-[#E9972D]'>
              execução, confiança e propósito
            </strong>
            . Acreditamos em pessoas que fazem acontecer, em times que aprendem
            rápido e em projetos que geram
            <strong className='text-white'> impacto real</strong>. Não somos
            movidos por modas — somos guiados por resultados,
            <strong className='text-[#E9972D]'> inovação responsável</strong> e
            a paixão por transformar o Norte em referência global em tecnologia.
          </motion.p>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#143829]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6'>
              Da Amazônia para o{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#14A2B6] to-[#0D7A8A]'>
                Mundo
              </span>
            </h2>
            <p className='text-xl text-white/70 mx-auto leading-relaxed max-w-4xl'>
              Aplicamos{' '}
              <strong className='text-white'>padrões internacionais</strong> em
              cada projeto, com{' '}
              <strong className='text-white'>experiência comprovada</strong> em
              clientes da América do Norte, Europa e Ásia. Nossa equipe
              multilíngue garante comunicação eficiente em português, inglês e
              espanhol.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {globalFeatures.map((feature, index) => (
              <GlobalFeatureCard
                key={feature.title}
                feature={feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#143829] to-[#0a0a0a]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6'>
              Conheça Quem{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#831CED] to-[#A855F7]'>
                Faz Acontecer
              </span>
            </h2>
            <p className='text-xl text-white/70 mx-auto leading-relaxed'>
              Uma equipe apaixonada por tecnologia e impacto social. Experiência
              internacional combinada com anos de atuação em empresas e projetos
              de grande escala.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='relative'>
            <motion.div className='absolute -inset-1 bg-gradient-to-r from-[#E9972D]/20 via-[#831CED]/20 to-[#14A2B6]/20 rounded-3xl blur-xl' />
            <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 sm:p-12'>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
                <div>
                  <div className='text-4xl sm:text-5xl font-black text-[#E9972D] mb-2'>
                    30+
                  </div>
                  <div className='text-white/70'>Profissionais no Time</div>
                </div>
                <div>
                  <div className='text-4xl sm:text-5xl font-black text-[#831CED] mb-2'>
                    15+
                  </div>
                  <div className='text-white/70'>
                    Anos de Experiência Combinada
                  </div>
                </div>
                <div>
                  <div className='text-4xl sm:text-5xl font-black text-[#14A2B6] mb-2'>
                    100%
                  </div>
                  <div className='text-white/70'>Dedicados à Excelência</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='py-20 sm:py-32 px-6 sm:px-8 bg-gradient-to-b from-[#143829] via-[#0f2619] to-[#0a0a0a]'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>
              E aí, bora{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E9972D] to-[#F0A84D]'>
                transformar
              </span>
              ?
            </h2>
            <p className='text-xl sm:text-2xl text-white/70'>
              Temos duas portas abertas. Escolha a sua:
            </p>

            <motion.p
              className='text-lg text-white/80 mx-auto mt-8'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}>
              Ao escolher a MangaLab, você investe em soluções inovadoras,
              qualidade garantida e formação de novos talentos, tudo em um só
              lugar.
            </motion.p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {finalCtaCards.map((cta, index) => (
              <CtaCard key={cta.id} cta={cta} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className='mt-12 flex flex-wrap justify-center gap-8 text-white/50 text-sm'>
            <div className='flex items-center gap-2'>
              <CheckCircle size={18} className='text-[#E9972D]' />
              <span>100% remoto</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle size={18} className='text-[#E9972D]' />
              <span>Cultura inclusiva</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle size={18} className='text-[#E9972D]' />
              <span>Crescimento acelerado</span>
            </div>
            <div className='flex items-center gap-2'>
              <CheckCircle size={18} className='text-[#E9972D]' />
              <span>Impacto real</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
