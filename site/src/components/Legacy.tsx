
import React from 'react'
import { motion } from 'framer-motion'

const Legacy: React.FC = () => {
  return (
    <section id="legado" className="py-16" style={{ background: 'linear-gradient(120deg, #0a0a0a 80%, #0a0a0a 100%)' }}>
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-white"
        >
          Legado
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <div className="text-center mb-6">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26c8m4dTsTvlDRTGizRRz3CO98CrKEpmB2g&s"
              alt="Prédio histórico de três andares identificado como Grupo Escolar Silva Jardim com janelas grandes e estilo arquitetônico art déco, grupos de estudantes uniformizados reunidos conversando perto da entrada, uma pessoa sozinha encostada na parede, rua e calçada em primeiro plano, atmosfera nostálgica evocando senso de comunidade e história"
              className="mx-auto rounded-lg shadow-md max-w-md"
            />
          </div>
          
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>A Escola Estadual Silva Jardim – em Tucuruvi – construiu, ao longo dos anos, um legado que vai muito além de sua infraestrutura e das salas de aula. Seu impacto se revela na transformação social e na formação de gerações de cidadãos críticos, resilientes e comprometidos com a comunidade.</p>
            
            <p>Mesmo passando por períodos de mudanças e adaptações, a instituição sempre soube integrar tradição à inovação, atendendo tanto alunos em educação presencial quanto à distância. Essa flexibilidade pedagógica permitiu que a escola se mantivesse atualizada e relevante diante dos desafios contemporâneos, contribuindo para um ensino de qualidade e inclusivo.</p>
            
            <p>Desde sua criação – registrada, por exemplo, na data de 13/06/1926 – a E.E. Silva Jardim tem sido referência na região, marcando sua presença como um ponto de convergência para o saber e para a cultura. As histórias que se entrelaçam em seus corredores carregam a essência de uma educação que valoriza o respeito, o esforço coletivo e o desenvolvimento integral dos alunos.</p>
            
            <p>Essa trajetória se reflete na confiança depositada pela comunidade, no reconhecimento de seus docentes dedicados e na capacidade de se reinventar para atender às demandas de cada nova geração.</p>
            
            <p>Mais do que uma simples instituição de ensino, o legado da E.E. Silva Jardim é um testemunho de superação, comprometimento e paixão pelo conhecimento. Ele está presente nas memórias dos ex-alunos, que hoje, espalhados em diversas áreas da sociedade, levam consigo os valores e a sólida formação que encontraram na escola.</p>
            
            <p>Essa herança educativa reafirma que o verdadeiro valor de uma instituição está em seu papel de transformar vidas e contribuir para a construção de uma sociedade mais justa e consciente.</p>
            
            <p>A reflexão sobre esse legado também nos leva a pensar na importância de outras escolas e instituições que, assim como a E.E. Silva Jardim, deixam marcas profundas e duradouras em suas comunidades. Se você se interessa por histórias de superação e por trajetórias que conciliam tradição com inovação, existem inúmeras narrativas no universo da educação pública que podem inspirar ainda mais a valorização do ensino como pilar de mudança social.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Legacy
