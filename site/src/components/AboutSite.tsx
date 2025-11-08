
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {Heart, Users, BookOpen, Camera, Award, Globe} from 'lucide-react'

const AboutSite: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Heart,
      title: "Preservação da Memória",
      description: "Mantemos viva a rica história de 100 anos de educação e transformação social."
    },
    {
      icon: Users,
      title: "Comunidade Unida",
      description: "Conectamos gerações de estudantes, professores e famílias que fizeram parte desta jornada."
    },
    {
      icon: BookOpen,
      title: "Legado Educacional",
      description: "Celebramos a excelência acadêmica e os valores que moldaram milhares de vidas."
    },
    {
      icon: Camera,
      title: "Memórias Visuais",
      description: "Compartilhamos fotos, documentos e momentos históricos que contam nossa trajetória."
    },
    {
      icon: Award,
      title: "Conquistas e Marcos",
      description: "Destacamos os momentos mais importantes e as conquistas que nos definem."
    },
    {
      icon: Globe,
      title: "Impacto Social",
      description: "Mostramos como a escola transformou a comunidade do Tucuruvi e além."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="sobre-site" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Sobre Este Site Comemorativo
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Este espaço digital foi criado com carinho para celebrar o centenário da 
            Escola Estadual Silva Jardim, preservando nossa história e conectando nossa comunidade.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Faça Parte da Nossa História</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Convidamos você a explorar, compartilhar suas memórias e celebrar conosco 
              este marco histórico da educação paulista.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('comentarios')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Contribua com Suas Memórias
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSite
