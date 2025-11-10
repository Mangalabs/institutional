// eslint-disable-next-line no-unused-vars
import { delay, motion } from 'framer-motion'

import { useEffect, useState, useCallback } from 'react'
import { heroData } from '../data/heroData'

const Hero = () => {
  const [text, setText] = useState('')

  useEffect(() => {
    let i = 0
    const type = () => {
      if (i < heroData.title.typingText.length) {
        setText(heroData.title.typingText.slice(0, ++i))
        setTimeout(type, 100)
      }
    }
    const timeout = setTimeout(type, 1000)
    return () => clearTimeout(timeout)
  }, [])

  const scrollToProjects = useCallback(() => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const scrollToContacts = useCallback(() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const floatAnim = {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
  }

  const buttonFx = {
    hover: {
      scale: 1.05,
      transition: { type: 'spring', stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  }

  return (
    <section id='home' className='min-h-screen relative overflow-hidden mt-15'>
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-green-dark via-green-deep to-green-vibrant'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}>
        {heroData.floatingElements.map(({ position, size, delay }, i) => (
          <motion.div
            key={i}
            className={`absolute ${position} ${size} bg-white/10 rounded-full backdrop-blur-sm`}
            variants={{ float: floatAnim }}
            animate='float'
            style={{ animationDelay: `${delay}s` }}
          />
        ))}
      </motion.div>

      <div className='container mx-auto px-4 py-20 relative z-10 flex items-center'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.h1
            className='text-4xl md:text-6xl font-bold mb-6'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            {heroData.title.part1}{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-vibrant to-orange-light'>
              {heroData.title.highlighted}
            </span>{' '}
            {heroData.title.part2}
            <span className='block md:inline-block ml-2 h-5 '>
              {text}
              <span
                className='border-r-2 border-orange-light h-15 inline-block align-middle ml-1'
                style={{ animation: 'blink 1s infinite' }}></span>
            </span>
          </motion.h1>

          <motion.p
            className='text-xl md:text-2xl mb-8 text-gray-200'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}>
            {heroData.subtitle}
          </motion.p>

          <motion.div
            className='flex flex-col sm:flex-row gap-4 justify-center'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}>
            {heroData.buttons.map(({ text, variant, action, gradient }, i) => (
              <motion.button
                key={i}
                whileHover={buttonFx.hover}
                whileTap={buttonFx.tap}
                onClick={
                  action === 'scrollToProjects'
                    ? scrollToProjects
                    : scrollToContacts
                }
                className={`relative overflow-hidden px-8 py-4 rounded-full font-semibold text-lg ${
                  variant === 'primary'
                    ? 'text-white'
                    : 'border-2 border-orange-light text-orange-light hover:bg-orange-light hover:text-green-deep'
                }`}
                style={
                  variant === 'primary'
                    ? {
                        background: gradient,
                        boxShadow: '0 0 20px rgba(196, 80, 27, 0.3)',
                      }
                    : {}
                }>
                <span className='relative z-10'>{text}</span>
                {variant === 'primary' && (
                  <motion.span
                    className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className='grid md:grid-cols-4 gap-8 mt-20'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}>
            {heroData.services.map(
              // eslint-disable-next-line no-unused-vars
              ({ title, description, icon: IconComponent, iconBg }, i) => (
                <motion.div
                  key={i}
                  className='text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all'
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { delay: i * 0.2, duration: 0.5 },
                    },
                    hover: { y: -5, scale: 1.03 },
                    float: {
                      y: [0, -15, 0],
                      transition: {
                        duration: 4 + Math.random() * 2,
                        delay: Math.random() * 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    },
                  }}
                  custom={i}
                  whileHover='hover'
                  animate={['visible', 'float']}>
                  <motion.div
                    className='w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center'
                    style={{ background: iconBg }}
                    animate={{
                      scale: [1, 1.1, 1],
                      transition: {
                        delay: delay + 0.1,
                        duration: 1,
                        repeat: Infinity,
                      },
                    }}>
                    <IconComponent className='text-3xl text-orange-light' />
                  </motion.div>
                  <h3 className='text-lg font-semibold mb-2'>{title}</h3>
                  <p className='text-gray-300'>{description}</p>
                </motion.div>
              )
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes blink {
          0%,
          50% {
            border-color: #e9972d;
          }
          51%,
          100% {
            border-color: transparent;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
