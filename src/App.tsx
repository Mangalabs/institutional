import { lazy, Suspense } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() =>
  import('./pages/Home').then((m) => ({ default: m.Home }))
)
const Academy = lazy(() =>
  import('./pages/Academy').then((m) => ({ default: m.Academy }))
)
const LandingPages = lazy(() =>
  import('./pages/LandingPages').then((m) => ({
    default: m.LandingPages,
  }))
)
const Projects = lazy(() => import('./pages/Projects'))

const About = lazy(() =>
  import('./pages/About').then((m) => ({ default: m.About }))
)

const PageLoader = () => (
  <div className='min-h-screen flex items-center justify-center bg-[#143829]'>
    <div className='flex flex-col items-center gap-3'>
      <div className='w-12 h-12 border-4 border-[#E9972D] border-t-transparent rounded-full animate-spin' />
      <p className='text-white/60 text-sm tracking-wide'>Carregando...</p>
    </div>
  </div>
)

const AnimatedRoutes = () => {
  const location = useLocation()

  const variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  }

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.15, ease: [0.3, 0, 0.2, 1] }}
        className='relative min-h-screen'>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path='/' element={<Home />} />
            <Route path='/academy' element={<Academy />} />
            <Route path='/landing-pages' element={<LandingPages />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />

            <Route path='*' element={<Home />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='min-h-screen bg-[#143829]'>
        <Navbar />

        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  )
}
