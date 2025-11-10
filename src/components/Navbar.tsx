import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/academy', label: 'Academy' },
    { path: '/landing-pages', label: 'Landing Pages' },
    { path: '/projects', label: 'Projetos' },
    { path: '/about', label: 'Sobre' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#143829]/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='relative z-10'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-2'>
              <img src='/icon.webp' alt='MangaLab Icon' className='h-10 w-10' />
              <span className='text-white font-black text-xl hidden sm:block'>
                MangaLab
              </span>
            </motion.div>
          </Link>

          <div className='hidden md:flex items-center gap-8'>
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.path ||
                (item.path !== '/' && location.pathname.startsWith(item.path))

              return (
                <Link key={item.path} to={item.path} className='relative group'>
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-[#E9972D]'
                        : 'text-white/80 hover:text-white'
                    }`}>
                    {item.label}
                  </span>
                  <motion.div
                    className='absolute -bottom-1 left-0 h-0.5 bg-[#E9972D]'
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )
            })}
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to='/investir'
              className='hidden md:block bg-[#E9972D] hover:bg-[#C4501B] text-white px-6 py-2.5 rounded-full transition-colors duration-300'>
              Investir
            </Link>
          </motion.div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-white p-2'>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className='md:hidden overflow-hidden'>
              <div className='pt-4 pb-6 space-y-4'>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'bg-[#E9972D] text-white'
                          : 'text-white/80 hover:bg-white/10'
                      }`}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}>
                  <Link
                    to='/investir'
                    onClick={() => setIsMobileMenuOpen(false)}
                    className='block w-full bg-[#E9972D] text-white px-4 py-3 rounded-full'>
                    Investir na Academy
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
