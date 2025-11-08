import React, { useState } from 'react'
import { motion } from 'framer-motion'

const History: React.FC = () => {
  const [activeTab, setActiveTab] = useState('cap1')

  return (
    <section id="historia" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-navy-800"
        >
          História
        </motion.h2>

        <div className="tabs">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {['cap1', 'cap2', 'cap3'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Capítulo {index + 1}
              </button>
            ))}
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            {activeTab === 'cap1' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <img 
                    src="https://i0.wp.com/www.osaqua.com.br/wp-content/uploads/2021/05/Antonio-da-Silva-Jardim-Histituto-Historico-e-Geografico-de-Santos.jpg?resize=200%2C350" 
                    alt="Antonio da Silva Jardim vestido formalmente com terno escuro e camisa branca, olhando para frente com expressão neutra. O fundo é simples e suave, focando a atenção no retratado. O tom geral é sério e histórico, evocando respeito e lembrança." 
                    className="mx-auto rounded-lg shadow-md mb-4 max-w-xs"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Bibliografia</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Antônio da Silva Jardim foi um proeminente advogado, jornalista e ativista político brasileiro, amplamente reconhecido por seu envolvimento ativo nos movimentos pela abolição da escravatura e pela implantação da república. Ele defendia que tanto a Abolição quanto a República deveriam engendrar mudanças significativas para toda a sociedade brasileira.</p>
                  
                  <p>Ele nasceu na vila de Nossa Senhora da Lapa de Capivari, que atualmente é o município que leva seu nome, no estado do Rio de Janeiro. Filho de Gabriel da Silva Jardim, um educador humilde que lecionava em sua própria propriedade, e de Felismina Leopoldina de Mendonça, vinha de uma família simples, mas marcada por valores sólidos. Por parte de pai, era neto de Antônio da Silva Jardim e Dona Luciana Maria; por parte de mãe, de Leandro Freire Ribeiro e Dona Lauriana Leopoldina do Amor Divino.</p>
                  
                  <p>Buscando uma educação mais avançada, foi enviado a Niterói, onde estudou nos colégios Silva Pontes e São Bento. Ali, aprendeu português, francês, geografia e latim. Durante esse período, ajudou a fundar o jornal estudantil O Laboro Literário, que marcou o início de sua militância política em defesa da liberdade e da justiça.</p>
                  
                  <p>Com poucos recursos financeiros, enfrentou grandes desafios durante sua trajetória acadêmica. Mudou-se para o Externato Jasper, onde também passou a trabalhar para custear os estudos. Determinado, seguiu para São Paulo e ingressou na tradicional Faculdade de Direito de São Paulo, onde se engajou nas discussões políticas da época, especialmente nas ideias republicanas e na luta abolicionista.</p>
                  
                  <p>Durante sua juventude, aproximou-se da influente família do Conselheiro Martim Francisco de Andrada. Foi nesse meio que conheceu Ana Margarida, com quem se casou. Ela era neta do Patriarca da Independência, José Bonifácio de Andrada e Silva. O casal teve quatro filhos, incluindo um que recebeu o nome do pai como homenagem.</p>
                  
                  <p>Movido por seus ideais, Silva Jardim abandonou a advocacia, vendeu seu escritório e dissolveu sua sociedade para se dedicar integralmente à causa republicana. Viajou intensamente entre os estados do Rio de Janeiro, São Paulo e Minas Gerais, participando de comícios, escrevendo, discursando e enfrentando tanto aclamações quanto perseguições.</p>
                  
                  <p>Mesmo com a saúde fragilizada desde a infância por causa do paludismo, manteve-se firme em sua militância. Após a Proclamação da República, no entanto, foi ignorado pelos militares que assumiram o poder. Tentou se eleger deputado, mas não teve sucesso. Desencantado, afastou-se da política e buscou descanso e novas experiências na Europa.</p>
                  
                  <p>Em 1891, aos 30 anos, durante uma visita a Pompeia, na Itália, decidiu explorar o vulcão Vesúvio. Apesar dos alertas sobre possíveis riscos, foi tragado por uma fenda que se abriu repentinamente na cratera. Sua morte permanece envolta em mistério — não se sabe ao certo se foi um acidente ou um ato deliberado.</p>
                  
                  <p>De acordo com reportagem do jornal A Pátria Mineira, publicada em 30 de julho de 1891, em São João del-Rei, o episódio foi testemunhado por um guia e seu amigo Joaquim Carneiro de Mendonça. A matéria, baseada na "Carta Parisiense" de Xavier de Carvalho, relata que Silva Jardim chegou a tentar escapar, mas ficou ferido, enquanto Carneiro foi socorrido por um guia local.</p>
                  
                  <p>Como homenagem a seu legado, o antigo município de Capivari passou a se chamar Silva Jardim — um tributo eterno a uma vida dedicada à liberdade, à justiça social e à transformação do Brasil.</p>
                </div>
              </div>
            )}

            {activeTab === 'cap2' && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <img 
                    src="https://i.pinimg.com/originals/69/f6/9a/69f69aaf7ee3490099873f30eb7bd33f.jpg" 
                    alt="Imagem representando o legado histórico da escola" 
                    className="mx-auto rounded-lg shadow-md mb-4 max-w-md"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">História do município e da fundação da Escola Silva Jardim</h3>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p>Nos anos 1920 a educação pública ainda chegava lentamente aos bairros periféricos de São Paulo. A reforma educacional de 1920 em SP incluiu um recenseamento escolar para identificar o analfabetismo infantil. Na prática, o Tucuruvi era área rural até por volta de 1918 e só então passou a ver surgirem instituições públicas.</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Cronologia da escola em Tucuruvi</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>24 fev 1922</strong> – Inauguração das Escolas Reunidas do Tucuruvi</li>
                      <li><strong>fev 1925</strong> – Criação do Grupo Escolar do Tucuruvi</li>
                      <li><strong>1936</strong> – Elaboração do projeto arquitetônico do Grupo Escolar Silva Jardim</li>
                      <li><strong>29 set 1938</strong> – Inauguração oficial do Grupo Escolar Silva Jardim</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Transformações ao Longo dos Anos</h4>
                    <ul className="space-y-1 text-sm">
                      <li><strong>1962:</strong> Transformação em Ginásio Normal "Professora Eládia de Maia Barbosa"</li>
                      <li><strong>1971:</strong> Passou a se chamar Escola Básica Silva Jardim</li>
                      <li><strong>1987:</strong> Denominação alterada para Colégio Estadual "Silva Jardim"</li>
                      <li><strong>2000:</strong> Nomenclatura atual: Escola de Educação Básica Silva Jardim</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Estrutura Atual</h4>
                    <p className="text-sm">Atualmente, a escola ocupa uma área total de 10.000 m², com um prédio principal de 1.779,33 m² e um ginásio de 854,90 m². A instituição atende aproximadamente 960 alunos distribuídos em 34 turmas, abrangendo séries iniciais, finais do ensino fundamental e ensino médio.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cap3' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Curiosidades Sobre a Escola</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gBQHP3jEARAoaENwX8BTR6DqHqZ-4GXs_YPXaDUFm3kCjaHc2SC-WnF-gy432u_2f_Q&usqp=CAU"
                      alt="Grupo de estudantes reunidos em frente ao prédio da escola Silva Jardim no ano de 1928"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>Este era o edifício do Grupo Escolar de Tucuruvi no ano de 1928. Os estudantes podem ser vistos na varanda durante a captura da imagem.</p>
                    <p>A diretora era Profa Durvalina Cardoso e naquele ano Silva Jardim contava com 1054 alunos distribuídos entre o 1º ao 4º ano primário.</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    <p>Era a principal unidade de ensino público de Tucuruvi tendo seu prédio atual sido inaugurado em 1938 e já contava com assistência dentária e cozinha econômica que fornecia alimentação básica no refeitório.</p>
                  </div>
                  <div>
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuBFkafdf_KFQbb9_9XLNoyfp92XfMTLNaEer1kFmf706HecHwp_DZGwe0dLR6JtgzbM&usqp=CAU"
                      alt="Estudantes da escola Silva Jardim em atividades escolares"
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-3">Foto Histórica da Fanfarra</h4>
                  <div className="text-center mb-4">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUxnhwJjqatdNpg9ozupT_H7NXA4B0ghN6g&s"
                      alt="Alunos da fanfarra do G. E. Silva Jardim em 1969"
                      className="mx-auto rounded-lg shadow-md max-w-md"
                    />
                  </div>
                  <p className="text-gray-700 text-sm">Foto dos alunos da fanfarra do G. E. Silva Jardim na área de concentração antes do início do desfile. O local é onde foi a estação Tucuruvi do trem da Cantareira. Foto tirada em desfile no bairro Tucuruvi, em 07 de setembro de 1969. (Jânio Pires)</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default History