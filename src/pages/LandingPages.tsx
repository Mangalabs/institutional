import { motion } from 'framer-motion'
import {
  ArrowRight,
  Rocket,
  BarChart3,
  BadgeCheck,
  Heart,
  Lightbulb,
  Shield,
  DollarSign,
} from 'lucide-react'
import { useState } from 'react'

import { useScrollVisibility } from '../hooks/useScrollVisibility'

import {
  benefits,
  targetAudience,
  timeline,
  plans,
  successCases,
  portfolio,
  testimonials,
} from '../data/landingPages.data'

import { BenefitCard } from '../components/landingPages/BenefitCard'
import { AudienceCard } from '../components/landingPages/AudienceCard'
import { TimelineStep } from '../components/landingPages/TimelineStep'
import { PricingPlan } from '../components/landingPages/PricingPlan'
import { SuccessCase } from '../components/landingPages/SuccessCase'
import { PortfolioCard } from '../components/landingPages/PortfolioCard'
import { TestimonialCard } from '../components/landingPages/TestimonialCard'

export function LandingPages() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  const showCTA = useScrollVisibility(300)

  return (
    <div className='min-h-screen pt-20 bg-gradient-to-b from-[#1d3a31] to-[#143829]'>
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-[#FDCD00] via-[#FFE8A3] to-[#E9972D]' />
          <motion.div
            className='absolute inset-0 opacity-10'
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 40px, #143829 40px, #143829 42px)`,
            }}
            animate={{ x: [0, 100] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute top-20 right-20 w-[300px] h-[300px] opacity-20'
            style={{
              background:
                'linear-gradient(135deg, #E9972D 0%, transparent 100%)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className='absolute bottom-20 left-20 w-[200px] h-[200px] opacity-20'
            style={{
              background:
                'linear-gradient(135deg, #FDCD00 0%, transparent 100%)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            }}
            animate={{
              borderRadius: [
                '30% 70% 70% 30% / 30% 30% 70% 70%',
                '70% 30% 30% 70% / 70% 70% 30% 30%',
                '30% 70% 70% 30% / 30% 30% 70% 70%',
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className='absolute w-1 h-1 bg-[#E9972D] rounded-full'
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        <div className='relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-[#143829] mb-6'>
            Converta{' '}
            <span className='relative inline-block'>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E9972D] to-[#143829]'>
                rápido
              </span>
              <motion.div
                className='absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#E9972D] to-[#143829]'
                style={{ clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </span>
            {', '}
            cresça <span className='text-[#E9972D]'>mais</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-[#143829]/80 text-lg sm:text-xl mx-auto mb-10 leading-relaxed'>
            Páginas de alta performance em 7 dias. Design moderno, código
            otimizado e resultados mensuráveis para seu negócio decolar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 50px rgba(233, 151, 45, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className='relative bg-gradient-to-r from-[#E9972D] to-[#FDCD00] text-[#143829] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2 shadow-2xl overflow-hidden group'>
              <motion.div
                className='absolute inset-0 bg-white/20'
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <Rocket size={20} className='relative z-10' />
              <span className='relative z-10'>Ver Pacotes</span>
              <ArrowRight size={20} className='relative z-10' />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#143829]/10 backdrop-blur-sm border-2 border-[#143829]/20 hover:border-[#143829] text-[#143829] px-10 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-colors'>
              <BarChart3 size={20} />
              <span>Ver Cases de Sucesso</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='mt-16 grid grid-cols-3 gap-8 mx-auto'>
            {[
              { value: '7 dias', label: 'Entrega garantida' },
              { value: '+45%', label: 'Taxa de conversão' },
              { value: '100%', label: 'Responsivo' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1, y: -5 }}
                className='text-center'>
                <div className='text-3xl font-black text-[#E9972D] mb-1'>
                  {stat.value}
                </div>
                <div className='text-[#143829]/70 text-sm'>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#FDCD00] to-[#E9972D] transform -skew-y-2 origin-top-left' />

        <div className='relative max-w-7xl mx-auto pt-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              Por que escolher nossas{' '}
              <span className='text-[#E9972D]'>landing pages</span>?
            </h2>
            <p className='text-[#143829]/70 text-lg mx-auto'>
              Performance, design e resultados em um único pacote
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={benefit.title}
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              Ideal para <span className='text-[#E9972D]'>seu negócio</span>
            </h2>
            <p className='text-[#143829]/70 text-lg mx-auto'>
              Landing pages que convertem para diferentes perfis
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {targetAudience.map((audience, index) => (
              <AudienceCard
                key={audience.title}
                audience={audience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              <span className='text-[#E9972D]'>7 dias</span> do briefing ao ar
            </h2>
            <p className='text-[#143829]/70 text-lg   mx-auto'>
              Processo ágil e transparente para resultados rápidos
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {timeline.map((step, index) => (
              <TimelineStep
                key={step.step}
                step={step}
                index={index}
                isLast={index === timeline.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] overflow-hidden'>
        <motion.div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, #E9972D 30px, #E9972D 32px)`,
          }}
          animate={{ x: [0, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute top-10 right-10 w-[200px] h-[200px] opacity-10'
          style={{
            background: 'linear-gradient(135deg, #FDCD00 0%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              Escolha seu <span className='text-[#E9972D]'>plano ideal</span>
            </h2>
            <p className='text-[#143829]/70 text-lg   mx-auto'>
              Soluções flexíveis para diferentes necessidades e orçamentos
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {plans.map((plan, index) => (
              <PricingPlan
                key={plan.name}
                plan={plan}
                index={index}
                onSelectPlan={setSelectedPlan}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-white overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              Resultados <span className='text-[#E9972D]'>comprovados</span>
            </h2>
            <p className='text-[#143829]/70 text-lg   mx-auto'>
              Cases reais de clientes que cresceram com nossas landing pages
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {successCases.map((caseItem, index) => (
              <SuccessCase
                key={caseItem.label}
                caseItem={caseItem}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-yellow-200 overflow-hidden'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#E9972D] rounded-full opacity-20'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}

        <div className='relative max-w-6xl mx-auto pt-16'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-[#143829] mb-4'>
              De{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E9972D] to-[#FDCD00]'>
                zero a herói
              </span>
            </h2>
            <p className='text-[#143829]/70 text-lg mx-auto mb-4'>
              Empresas que começaram sem presença digital e hoje são referência
            </p>
            <p className='text-[#E9972D] font-semibold mb-8'>
              Muitos não tinham nem site. Hoje colhem resultados
              extraordinários.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className='flex flex-wrap justify-center gap-8 mt-8'>
              {[
                { value: '150+', label: 'Projetos Entregues' },
                { value: '3 em 4', label: 'Começaram do Zero' },
                { value: '98%', label: 'Recomendariam' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className='text-center'>
                  <div className='text-[#E9972D] text-4xl font-black mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-[#143829]/70 text-sm'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {portfolio.map((project, index) => (
              <PortfolioCard
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#FFF8F0] to-[#FFFBF5] overflow-hidden'>
        <motion.div
          className='absolute inset-0 opacity-5'
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 30px, #E9972D 30px, #E9972D 32px)`,
          }}
          animate={{ x: [0, 50] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className='absolute top-10 right-10 w-[200px] h-[200px] opacity-10'
          style={{
            background: 'linear-gradient(135deg, #FDCD00 0%, transparent 100%)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />

        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className='inline-block mb-6'>
              <div className='w-16 h-16 bg-gradient-to-br from-[#E9972D] to-[#FDCD00] rounded-2xl flex items-center justify-center shadow-xl mx-auto'>
                <Heart size={32} className='text-white' />
              </div>
            </motion.div>

            <h2 className='text-[#143829] mb-4'>
              Por que a MangaLab é{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#E9972D] to-[#FDCD00]'>
                diferente?
              </span>
            </h2>
            <p className='text-[#143829]/70 text-lg mx-auto'>
              Não somos apenas uma empresa de tecnologia, somos um ecossistema
              que une propósito, inovação e impacto real.
            </p>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'>
              <div className='relative bg-white/70 backdrop-blur-sm border border-[#E9972D]/20 hover:border-[#FDCD00] rounded-3xl p-8 shadow-lg transition-all'>
                <motion.div
                  className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{
                    background:
                      'radial-gradient(circle at top, #E9972D10 0%, transparent 70%)',
                  }}
                />

                <div className='relative flex items-center gap-4 mb-4'>
                  <motion.div
                    className='w-14 h-14 bg-gradient-to-br from-[#E9972D] to-[#FDCD00] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}>
                    <Rocket size={24} className='text-white' />
                  </motion.div>
                  <h3 className='text-[#143829] text-xl font-bold'>
                    Tecnologia acessível
                  </h3>
                </div>

                <p className='text-[#143829]/70 leading-relaxed relative'>
                  Acreditamos que{' '}
                  <strong className='text-[#143829]'>
                    toda empresa merece soluções digitais de alto nível
                  </strong>
                  , independentemente do porte. Democratizamos o acesso à
                  inovação sem abrir mão da qualidade.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'>
              <div className='relative bg-white/70 backdrop-blur-sm border border-[#E9972D]/20 hover:border-[#FDCD00] rounded-3xl p-8 shadow-lg transition-all'>
                <motion.div
                  className='absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                  style={{
                    background:
                      'radial-gradient(circle at top, #FDCD0010 0%, transparent 70%)',
                  }}
                />

                <div className='relative flex items-center gap-4 mb-4'>
                  <motion.div
                    className='w-14 h-14 bg-gradient-to-br from-[#FDCD00] to-[#E9972D] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}>
                    <Lightbulb size={24} className='text-white' />
                  </motion.div>
                  <h3 className='text-[#143829] text-xl font-bold'>
                    Formando para Transformar
                  </h3>
                </div>

                <p className='text-[#143829]/70 leading-relaxed relative'>
                  Somos uma{' '}
                  <strong className='text-[#143829]'>
                    ponte entre talentos em formação e empresas
                  </strong>{' '}
                  que precisam evoluir. Criamos oportunidades aprendizado
                  enquanto impulsionamos a transformação digital.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-6 max-w-4xl mx-auto'>
            <p className='text-[#143829]/80 text-lg leading-relaxed'>
              Esse modelo cria um{' '}
              <span className='text-[#E9972D] font-semibold'>
                ciclo virtuoso
              </span>
              : negócios pagam menos, novos devs crescem com projetos reais e o
              resultado final mantém padrão sênior.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className='relative group mb-6'>
            <div className='relative bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-md border-2 border-[#143829]/10 hover:border-[#143829]/30 rounded-3xl p-8 shadow-xl transition-all'>
              <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                <motion.div
                  className='w-14 h-14 bg-gradient-to-br from-[#143829] to-[#2B5B3F] rounded-xl flex items-center justify-center shadow-lg flex-shrink-0'
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}>
                  <Shield size={26} className='text-white' />
                </motion.div>
                <div>
                  <h3 className='text-[#143829] text-xl font-bold mb-2'>
                    Qualidade garantida por especialistas
                  </h3>
                  <p className='text-[#143829]/70 leading-relaxed'>
                    Todo projeto é supervisionado por{' '}
                    <span className='text-[#143829] font-semibold'>
                      desenvolvedores seniores
                    </span>
                    , garantindo código limpo, estável e de alto desempenho —
                    sem perder o frescor das novas ideias.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className='relative group'>
            <div className='relative bg-gradient-to-br from-[#FDCD00]/20 to-[#E9972D]/20 backdrop-blur-sm border-l-4 border-[#E9972D] rounded-r-3xl p-8 shadow-xl transition-all overflow-hidden'>
              <div
                className='absolute top-0 right-0 w-32 h-32 opacity-10'
                style={{
                  background: 'linear-gradient(135deg, #E9972D, transparent)',
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                }}
              />

              <div className='relative flex flex-col sm:flex-row items-start sm:items-center gap-4'>
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='w-14 h-14 bg-gradient-to-br from-[#E9972D] to-[#FDCD00] rounded-full flex items-center justify-center shadow-xl flex-shrink-0'>
                  <DollarSign size={26} className='text-white' />
                </motion.div>
                <div>
                  <h3 className='text-[#143829] text-xl font-black mb-2'>
                    Resultado: até 40% abaixo do mercado
                  </h3>
                  <p className='text-[#143829]/80 leading-relaxed'>
                    Nosso modelo colaborativo entrega{' '}
                    <strong className='text-[#143829]'>
                      qualidade de alto padrão com investimento reduzido
                    </strong>
                    . Uma escolha inteligente que impulsiona negócios e forma
                    novos profissionais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'></motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className='group relative'></motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-6 max-w-4xl mx-auto'></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className='relative group mb-6'></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className='relative group'></motion.div>
        </div>
      </section>

      <section className='py-20 sm:py-24 px-4 sm:px-6 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-14 sm:mb-16'>
            <h2 className='text-[#143829] mb-4 px-4'>
              O que nossos clientes dizem
            </h2>
            <p className='text-[#474747] text-lg sm:text-xl px-4'>
              Histórias de sucesso de quem confiou na MangaLab
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8'>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-[#E9972D] via-[#FDCD00] to-[#E9972D] overflow-hidden'>
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
            <h2 className='text-white mb-6'>
              Pronto para decolar suas conversões?
            </h2>
            <p className='text-white/95 text-lg mb-10   mx-auto leading-relaxed'>
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
    </div>
  )
}
