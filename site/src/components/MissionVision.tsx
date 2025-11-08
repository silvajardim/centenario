
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Target, Eye, Heart, Star, Users, Lightbulb} from 'lucide-react'

const MissionVision: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const values = [
    {
      icon: Heart,
      title: "Excelência",
      description: "Compromisso com a qualidade educacional e desenvolvimento integral"
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Educação acessível e respeitosa à diversidade de todos os estudantes"
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Métodos pedagógicos modernos e adaptados aos tempos atuais"
    },
    {
      icon: Star,
      title: "Tradição",
      description: "100 anos de história e experiência em formar cidadãos"
    }
  ]

  return (
    <section id="missao-visao" className="py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Nossa Missão & Visão
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Valores que nos guiam há um século na formação de cidadãos conscientes e preparados para o futuro
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-400">Nossa Missão</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Promover uma educação de qualidade, inclusiva e transformadora, 
                formando cidadãos críticos, éticos e preparados para os desafios 
                do século XXI, preservando nossa tradição centenária de excelência educacional.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-400">Nossa Visão</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Ser reconhecida como referência em educação pública de qualidade, 
                continuando a transformar vidas e comunidades pelos próximos 100 anos, 
                sempre inovando e mantendo nossos valores fundamentais.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Nossos Valores Fundamentais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-cyan-400 mb-3">{value.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30">
            <h4 className="text-2xl font-bold text-cyan-400 mb-4">
              Faça Parte da Nossa História
            </h4>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Conheça mais sobre nossa trajetória centenária e descubra como continuamos 
              transformando vidas através da educação.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('historia')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Conheça Nossa História
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision
