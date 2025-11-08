
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {School, Home, Info, Target, BookOpen, Award, Clock, MessageSquare, Edit} from 'lucide-react'

interface MobileNavigationProps {
  showMobileMenu: boolean
  activeSection: string
  onNavigate: (section: string) => void
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  showMobileMenu, 
  activeSection, 
  onNavigate 
}) => {
  const navItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'sobre-site', label: 'Sobre o Site', icon: Info },
    { id: 'missao-visao', label: 'Missão & Visão', icon: Target },
    { id: 'historia', label: 'História', icon: BookOpen },
    { id: 'legado', label: 'Legado', icon: Award },
    { id: 'linha-do-tempo', label: 'Linha do Tempo', icon: Clock },
    { id: 'depoimentos', label: 'Depoimentos', icon: MessageSquare },
    { id: 'comentarios', label: 'Comentários', icon: Edit }
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <AnimatePresence>
      {showMobileMenu && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => onNavigate('')}
          />

          {/* Mobile Menu */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 z-50 lg:hidden shadow-2xl"
          >
            <div className="max-w-md mx-auto p-4">
              {/* Header */}
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 mb-6 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30"
              >
                <School className="h-8 w-8 text-cyan-400" />
                <div>
                  <h3 className="text-white font-bold">Silva Jardim</h3>
                  <p className="text-cyan-400 text-sm">Centenário 1924-2024</p>
                </div>
              </motion.div>

              {/* Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    variants={itemVariants}
                    onClick={() => onNavigate(item.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon className={`h-5 w-5 ${
                      activeSection === item.id ? 'text-white' : 'text-cyan-400'
                    }`} />
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeMobileSection"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <motion.div 
                variants={itemVariants}
                className="mt-6 p-4 text-center border-t border-slate-700/50"
              >
                <p className="text-slate-400 text-sm">
                  100 anos formando o futuro
                </p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNavigation
