import React from 'react'
import {Quote, Star} from 'lucide-react'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Maria Silva Santos",
      role: "Ex-aluna (1965-1971)",
      content: "O Silva Jardim foi muito mais que uma escola para mim. Foi onde aprendi os valores que carrego até hoje. As professoras eram dedicadas e nos tratavam como filhos. Tenho orgulho de ter estudado lá!",
      rating: 5
    },
    {
      name: "João Carlos Oliveira", 
      role: "Ex-professor (1980-2010)",
      content: "Trabalhei 30 anos no Silva Jardim e posso dizer que foi a experiência mais gratificante da minha carreira. Ver gerações de alunos crescerem e se tornarem cidadãos de bem não tem preço.",
      rating: 5
    },
    {
      name: "Ana Paula Ferreira",
      role: "Ex-aluna (1995-2002)",
      content: "Estudei no Silva Jardim do fundamental ao médio. A escola me preparou não só academicamente, mas para a vida. Os professores sempre incentivaram nossos sonhos e nos mostraram que tudo era possível.",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      role: "Ex-aluno (1978-1985)", 
      content: "Lembro com carinho dos recreios, das festas juninas e principalmente dos professores que marcaram minha vida. O Silva Jardim sempre foi uma segunda casa para todos nós.",
      rating: 5
    },
    {
      name: "Carmen Rodrigues",
      role: "Ex-funcionária (1990-2015)",
      content: "Trabalhei na secretaria por 25 anos e vi a escola evoluir mantendo sempre sua essência. Era emocionante ver ex-alunos voltarem para matricular seus filhos. Isso mostra a confiança na instituição.",
      rating: 5
    },
    {
      name: "Pedro Augusto Lima",
      role: "Ex-aluno (2005-2012)",
      content: "O Silva Jardim me deu a base que eu precisava para chegar à universidade. Os professores sempre acreditaram no potencial dos alunos e nos incentivaram a buscar nossos objetivos.",
      rating: 5
    }
  ]

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Depoimentos</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Histórias e memórias de quem viveu a tradição Silva Jardim ao longo dos anos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-3 mb-4">
                <Quote className="h-6 w-6 text-cyan-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 leading-relaxed italic">"{testimonial.content}"</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('comentarios')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Compartilhe Sua História
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials