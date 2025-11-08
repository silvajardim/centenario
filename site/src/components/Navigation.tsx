
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {Menu, X, School, Sparkles} from 'lucide-react'

interface NavigationProps {
  activeSection: string
  onNavigate: (section: string) => void
  showMobileMenu: boolean
  setShowMobileMenu: (show: boolean) => void
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection, 
  onNavigate, 
  showMobileMenu, 
  setShowMobileMenu 
}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre-site', label: 'Sobre' },
    { id: 'missao-visao', label: 'Missão' },
    { id: 'historia', label: 'História' },
    { id: 'legado', label: 'Legado' },
    { id: 'linha-do-tempo', label: 'Timeline' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'comentarios', label: 'Comentários' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl border-b border-slate-700/50' 
          : 'bg-slate-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('inicio')}
          >
            <div className="relative">
              <School className="h-8 w-8 text-cyan-400" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 border border-cyan-400/30 rounded-full"
              />
            </div>
            <div>
              <span className="font-bold text-lg text-white">Silva Jardim</span>
              <div className="flex items-center gap-1">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                <span className="text-xs text-cyan-400 font-medium">Centenário</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {showMobileMenu ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
