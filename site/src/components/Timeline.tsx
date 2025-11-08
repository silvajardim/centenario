
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {Clock} from 'lucide-react'

const Timeline: React.FC = () => {
  const [activeTimelineEvent, setActiveTimelineEvent] = useState<number | null>(null)

  const timelineEvents = [
    {
      title: "Anos 1920",
      subtitle: "Fundação",
      content: "1926 – Fundação do Grupo Escolar \"Silva Jardim\" (em homenagem ao político Antônio da Silva Jardim). Esse grupo escolar já atendia alunos da região, e seu prédio definitivo seria projetado uma década depois."
    },
    {
      title: "Anos 1930",
      subtitle: "Consolidação e Expansão da Infraestrutura",
      content: "1936 – O arquiteto José Maria da Silva Neves elaborou o projeto do novo edifício escolar na Av. Tucuruvi, 724. Segundo registros acadêmicos, o prédio foi concluído em 12/3/1936 (data de inauguração do Grupo Escolar)."
    },
    {
      title: "Anos 1940",
      subtitle: "Modernização e Mudanças pedagógicas",
      content: "1940–1949 – Mudanças pedagógicas significativas nesse período. A escola seguiu funcionando como instituição de 1.º grau (ensino fundamental), consolidando-se na comunidade local."
    },
    {
      title: "Anos 1950",
      subtitle: "Inovação Pedagógica e Ampliação dos Serviços",
      content: "1950–1959 – Continuidade das atividades escolares regulares, possivelmente ainda incluindo turmas de \"Ginásio\" (antigo Ensino Médio da época)."
    },
    {
      title: "Anos 1960",
      subtitle: "Evidência nos Indicadores de Desempenho",
      content: "1960–1969 – A escola manteve ensino fundamental e, eventualmente, cursos de Ginásio, até mudanças no sistema educacional brasileiro no fim da década."
    },
    {
      title: "Anos 1970",
      subtitle: "Atualizações, Investimentos e o Compromisso com a Modernização",
      content: "1970–1979 – Mantida como escola estadual de 1.º grau, sem informação pública sobre reformas estruturais. Mudanças administrativas gerais ocorreram na rede estadual (como o fim dos antigos \"ginásios\" e a criação do ensino fundamental único), mas sem fontes específicas sobre o Silva Jardim."
    },
    {
      title: "Anos 1980",
      subtitle: "Tradição e Desafios para o Futuro",
      content: "1980–1989 – Período de estabilidade: a escola continuou atendendo o ensino fundamental (e, eventualmente, ensino médio, conforme mudanças de nomenclatura da rede), sem registro de grandes reformas ou eventos públicos nas fontes consultadas."
    },
    {
      title: "Anos 1990",
      subtitle: "Expansão Geral do Ensino Fundamental",
      content: "1990–1999 – A escola manteve suas atividades normais. Nos últimos anos do século, houve expansão geral do ensino fundamental no estado, mas não há dados específicos públicos sobre obras ou prêmios no Silva Jardim."
    },
    {
      title: "Anos 2000",
      subtitle: "Expansão da Infraestrutura e Ensino Religioso Facultativo",
      content: "2002 – Implementação opcional do Ensino Religioso nas escolas estaduais. Na EE Silva Jardim, a professora Francisca Nascimento passou a ministrar aulas de ensino religioso facultativo, atendendo à orientação da Secretaria de Educação do Estado. 2007 – A EE Silva Jardim sediou a \"Feira de Biologia\" do Projeto Celular do Instituto de Biociências da USP. O evento – com trabalhos de ciências, maquetes e apresentações – reuniu alunos de várias escolas públicas e teve entrada aberta à comunidade."
    },
    {
      title: "Anos 2010",
      subtitle: "Greve, Reformas e Novas Iniciativas Educacionais",
      content: "Mar/2010 – Professores e funcionários da Silva Jardim aderiram à greve estadual da educação pública paulista. Relatórios do sindicato Apeoesp citaram a escola como uma das paralisadas naquele dia na Zona Norte de São Paulo. 2010–2019 – Década marcada por programas educacionais estaduais: por exemplo, o \"Professores Conectados\" (2015-16) e o \"Novo Ensino Médio\" em 2017 (reforma curricular), mas não há fontes específicas públicas sobre como a Silva Jardim participou."
    },
    {
      title: "Anos 2020",
      subtitle: "Tecnologias e Inovações Em Educação",
      content: "2021 – A escola foi contemplada pelo Programa de Ensino Integral (PEI) do estado e pelo curso EJATEC (Educação de Jovens e Adultos com itinerário Tecnológico). A implantação desses programas gerou debate: a comunidade escolar chegou a lançar uma petição pública contra as mudanças propostas durante a pandemia. 2021 – Desempenho em índices de qualidade: o IDEB (índice nacional) dos anos finais (6º-9º anos) da EE Silva Jardim foi 5,30 em 2021, atingindo a meta estadual para a série (5,3). O IDESP (índice estadual) correspondente ficou em 3,39. 2022 – Como compensação às perdas da pandemia, a escola participou do \"Projeto de Recuperação Intensiva\" da Secretaria da Educação (programa para reforço escolar emergencial). 2024 – A EE Silva Jardim participa de vários programas estaduais de apoio e inovação: além do envolvimento em projetos como Centro de Estudos de Línguas, Centro de Mídias, Inova Educação, Novotec Integrado, Dignidade Íntima e Professores Conectados."
    }
  ]

  return (
    <section id="linha-do-tempo" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-800"
        >
          Linha do Tempo
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-600"></div>
          
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ml-16 mb-8 cursor-pointer transition-all duration-300 ${
                activeTimelineEvent === index ? 'active' : ''
              }`}
              onClick={() => setActiveTimelineEvent(activeTimelineEvent === index ? null : index)}
            >
              <div className="absolute -left-20 top-6 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              
              <div className={`bg-white rounded-lg shadow-md p-6 border-l-4 transition-all duration-300 hover:shadow-lg ${
                activeTimelineEvent === index ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg text-navy-800">{event.title}</h3>
                  <span className="text-blue-600 font-semibold text-sm">{event.subtitle}</span>
                </div>
                
                {activeTimelineEvent === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-700 leading-relaxed mt-3"
                  >
                    {event.content}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-8">
          Clique em cada etapa para ver detalhes da jornada.
        </p>
      </div>
    </section>
  )
}

export default Timeline
