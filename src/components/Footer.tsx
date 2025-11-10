import { motion } from 'framer-motion'
import { footerData } from '../data/footerData'
import { MapPin } from 'lucide-react'

interface FooterProps {
  onNavigate: (page: string) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const year = new Date().getFullYear()
  const { brand, socialLinks, copyright } = footerData

  const footerLinks = {
    Empresa: [
      { label: 'Sobre', page: 'sobre' },
      { label: 'Academy', page: 'investir' },
      { label: 'Projetos', page: 'projetos' },
    ],
    Serviços: [
      { label: 'Landing Pages', page: 'landing-pages' },
      { label: 'Projetos Customizados', page: 'projetos' },
    ],
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='bg-[#0f2819] border-t border-[#2B5B3F]/30'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
          <div className='space-y-3'>
            <div className='flex items-center gap-2'>
              <img
                src='/icon.webp'
                alt={`${brand.name} logo`}
                className='w-9 h-9 sm:w-10 sm:h-10'
              />
              <span className='text-white font-black text-lg sm:text-xl'>
                {brand.name.split(brand.highlight)[0]}
                <span className='text-[#E9972D]'>{brand.highlight}</span>
              </span>
            </div>
            <p className='text-white/60 text-xs sm:text-sm leading-relaxed'>
              {brand.description}
            </p>
            <div className='flex items-center gap-2 text-white/40 text-xs sm:text-sm'>
              <MapPin size={13} className='sm:w-[15px] sm:h-[15px]' />
              <span>Belém, Pará 🇧🇷</span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className='text-white mb-2 sm:mb-3 text-sm sm:text-base'>
                {category}
              </h4>
              <ul className='space-y-1.5 sm:space-y-2'>
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.page)}
                      className='text-white/60 hover:text-[#E9972D] transition-colors duration-200 text-xs sm:text-sm'>
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className='text-white mb-2 sm:mb-3 text-sm sm:text-base'>
              Conecte-se
            </h4>
            <div className='flex gap-2 sm:gap-3'>
              {socialLinks.map(({ label, icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href || '#'}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-8 h-8 sm:w-9 sm:h-9 bg-white/10 hover:bg-[#E9972D] rounded-lg flex items-center justify-center text-white transition-colors duration-300'
                  aria-label={label}
                  target='_blank'>
                  <Icon size={15} className='text-white' />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-yellow-200/30 mt-6 pt-6 text-center'>
          <p className='text-white/60 text-xs sm:text-sm'>
            © {year} MangaLab. {copyright.text} |{' '}
            <span className='bold ml-2'>
              Desenvolvido com{' '}
              <img
                src={copyright.icon}
                alt='amor'
                className='h-3.5 w-3.5 inline mx-1'
              />{' '}
              pela equipe <b>MangaLab</b>
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
