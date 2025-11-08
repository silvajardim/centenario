import React, { useState } from 'react'
import {Send, MessageSquare, Heart, Calendar} from 'lucide-react'

interface Comment {
  id: string
  name: string
  email: string
  message: string
  date: string
}

const Comments: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      name: 'Lucia Fernandes',
      email: 'lucia@email.com',
      message: 'Estudei no Silva Jardim na década de 80 e tenho as melhores lembranças! A escola sempre foi um lugar especial, onde aprendi muito mais que matérias escolares.',
      date: '2024-01-15'
    },
    {
      id: '2', 
      name: 'Carlos Eduardo',
      email: 'carlos@email.com',
      message: 'Meu pai estudou lá nos anos 60 e eu nos anos 90. É emocionante ver como a tradição se mantém viva através das gerações. Parabéns pelos 100 anos!',
      date: '2024-01-10'
    }
  ])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    const newComment: Comment = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toISOString().split('T')[0]
    }

    setComments(prev => [newComment, ...prev])
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long', 
      year: 'numeric'
    })
  }

  return (
    <section id="comentarios" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Comentários</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600">
            Compartilhe suas memórias e experiências do Silva Jardim
          </p>
        </div>

        {/* Comment Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="h-6 w-6 text-cyan-500" />
            <h3 className="text-2xl font-bold text-slate-800">Deixe seu Comentário</h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Sua Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors resize-vertical"
                placeholder="Compartilhe suas memórias, experiências ou mensagem para a escola..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 disabled:bg-slate-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Enviar Comentário
                </>
              )}
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
            Memórias Compartilhadas ({comments.length})
          </h3>
          
          {comments.map((comment) => (
            <div 
              key={comment.id}
              className="bg-white rounded-lg shadow-md p-6 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {comment.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800">{comment.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {formatDate(comment.date)}
                    </div>
                  </div>
                </div>
                <Heart className="h-5 w-5 text-slate-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
              
              <p className="text-slate-700 leading-relaxed">{comment.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Comments