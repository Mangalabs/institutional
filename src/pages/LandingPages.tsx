import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  benefits,
  targetAudience,
  timeline,
  plans,
  successCases,
  testimonials,
} from '../data/landingPages.data'
import { HeroSection } from '../components/landingPages/HeroSection'
import { BenefitCard } from '../components/landingPages/BenefitCard'
import { AudienceCard } from '../components/landingPages/AudienceCard'
import { TimelineStep } from '../components/landingPages/TimelineStep'
import { WhyMangaLab } from '../components/landingPages/WhyMangaLab'
import { TestimonialCard } from '../components/landingPages/TestimonialCard'
import { PricingPlan } from '../components/landingPages/PricingPlan'
import { SuccessCase } from '../components/landingPages/SuccessCase'
import { PortfolioCard } from '../components/landingPages/PortfolioCard'
import { CTASection } from '../components/landingPages/CTASection'
import { projectsData } from '../data/projects.data'

export function LandingPages() {
  const featuredProjects = projectsData.projects.filter((p) =>
    ['SalonSync Web', 'Senior Koster'].includes(p.title)
  )
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowCTA(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='min-h-screen pt-20 bg-gradient-to-br from-[#0a0a0a] via-[#143829] to-[#0a0a0a]'>
      <HeroSection />

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#143829] overflow-hidden'>
        <div className='absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#0f4a35] to-[#1a6a4d] transform -skew-y-2 origin-top-left opacity-10' />
        <div className='relative max-w-7xl mx-auto pt-12'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4 text-4xl font-bold'>
              Por que escolher nossas{' '}
              <span className='text-[#FDCD00]'>landing pages</span>?
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
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

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#143829] to-[#0a0a0a] overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4 text-4xl font-bold'>
              Ideal para <span className='text-[#FDCD00]'>seu negócio</span>
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
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

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0a0a0a] to-[#143829] overflow-hidden'>
        <div className='relative max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4 text-4xl font-bold'>
              <span className='text-[#FDCD00]'>7 dias</span> do briefing ao ar
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
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

      <WhyMangaLab />

      <section
        id='pricing-plan'
        className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#0a0a0a] to-[#143829] overflow-hidden'>
        <div className='relative max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'>
            <h2 className='text-white mb-4 text-4xl font-bold'>
              Escolha seu <span className='text-[#FDCD00]'>plano ideal</span>
            </h2>
            <p className='text-white/70 text-lg mx-auto'>
              Soluções flexíveis para diferentes necessidades e orçamentos
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {plans.map((plan, index) => (
              <PricingPlan
                key={plan.name}
                plan={plan}
                index={index}
                onSelect={setSelectedPlan}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative py-20 px-4 sm:px-6 bg-gradient-to-br from-[#143829] to-[#0a0a0a] overflow-hidden'>
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute w-1 h-1 bg-[#FDCD00] rounded-full opacity-20'
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
            <h2 className='text-white mb-4 text-4xl font-bold'>
              De{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#FDCD00] to-[#FFB800]'>
                zero a herói
              </span>
            </h2>
            <p className='text-white/70 text-lg mx-auto mb-4'>
              Empresas que começaram sem presença digital e hoje são referência
            </p>
            <p className='text-[#FDCD00] font-semibold mb-8'>
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
                  <div className='text-[#FDCD00] text-4xl font-black mb-1'>
                    {stat.value}
                  </div>
                  <div className='text-white/70 text-sm'>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {featuredProjects.map((project, index) => (
              <PortfolioCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* <CTASection /> */}
    </div>
  )
}
