import { motion } from 'framer-motion'
import { contactData } from '../../data/contactData'

export function ContactSection() {
  return (
    <section
      id='contato'
      className='relative py-24 px-4 sm:px-6 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700 text-white overflow-hidden'>
      <motion.div
        className='absolute top-20 right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl'
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className='absolute bottom-20 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl'
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <div className='relative max-w-5xl mx-auto text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='sm:text-5xl font-black mb-8'>
          Entre em Contato
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className='text-orange-100 text-xl mb-16 mx-auto leading-relaxed'>
          Quer saber mais sobre o programa, tornar-se parceiro ou conhecer como
          podemos trabalhar juntos?
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16'>
          {contactData.contactItems.map((item, index) => {
            const Icon = item.icon

            const isExternal =
              item.href &&
              (item.href.startsWith('http') || item.href.startsWith('https'))

            const hrefProps = item.href
              ? {
                  href: item.href,
                  ...(isExternal && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }),
                }
              : {}

            return (
              <motion.a
                key={item.title}
                {...hrefProps}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className='bg-white/15 backdrop-blur-md border-2 border-white/30 hover:bg-white/25 hover:border-white/50 rounded-2xl p-8 transition-all duration-300 shadow-xl block'>
                <Icon size={36} className='mx-auto mb-4' />
                <div className='font-bold text-lg mb-2'>{item.title}</div>
                <div className='text-orange-100'>{item.content}</div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
