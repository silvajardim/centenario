
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {MessageSquare, Send, Users, Calendar, RefreshCw, Star, School, BookOpen, History, Award, Clock, Heart, Menu, X, Edit3, Save, XCircle, Camera, ZoomIn, ChevronLeft, ChevronRight, ExternalLink, Book, GraduationCap, TreePine, Building, Globe} from 'lucide-react';
import Papa from 'papaparse';
import Footer from './components/Footer';

interface Comment {
  Nome: string;
  Comentario: string;
  Data: string;
}

interface Testimonial {
  id: number;
  text: string;
  author: string;
  year?: string;
  role?: string;
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('cap1');
  const [activeLegacyTab, setActiveLegacyTab] = useState('impacto');
  const [activeTimelineEvent, setActiveTimelineEvent] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
  {
    id: 1,
    text: "Olá, pessoal. Sou o professor Stefano e dou aula de inglês. Estou na escola a 17 anos, tenho um carinho muito especial por essa escola que me acolheu como se fosse uma família, tenho uma turma muito especial guardada no meu coração até hoje, pois foi a primeira turma que eu acompanhei do primeiro ano do nível fundamental até o último ano do ensino médio, até hoje tenho grandes amizades e de vez em quando ainda nos encontramos.",
    author: "Stefano",
    role: "Professor"
  },
  {
    id: 2,
    text: "É um colégio referência na zona norte de São Paulo. Aprecio e admiro demais a organização pedagógica e também o incentivo cultural, principalmente da parte da direção para os alunos.",
    author: "Marcela Buttazzi",
    role: "Professora do Técnico"
  },
  {
    id: 3,
    text: "Cheguei aqui em 2002, eu poderia já estar aposentado, porém quero e vou ter o prestígio de participar dos 100 anos dessa escola maravilhosa que mudou minha vida. Estou aqui nessa escola a 23 anos, meu nome é Eraldo Sampaio. Nesses 23 anos tivemos muita alegria! Nossa escola proporciona aos nossos alunos a serem pessoas melhores, do bem, cidadãos de caráter e a serem protagonistas. Comigo os alunos tem um ótimo relacionamento, diante de conversas diretas com os alunos eu sugiro projetos, passeios acadêmicos, teatros, etc.",
    author: "Eraldo Sampaio",
    role: "Diretor"
  },
  {
    id: 4,
    text: "Colégio Silva Jardim, eu estou aqui a pouco tempo, porém eu conheço a escola a muitos anos. O Silva Jardim é uma instituição de ensino secundário, que carrega no meu ponto de vista, valores e princípios, pautados na relação de ensino e aprendizado, priorizando os discentes. Com isso, a escola prestes a completar seu centenário, se tornou ao longo do tempo uma referência quando o assunto é educação.",
    author: "Érico Bernardes",
    role: "Professor"
  },
  {
    id: 5,
    text: "A escola é muito boa, um momento marcante foi com a primeira classe, quando tivemos o primeiro interclasse que foi no Parque da Juventude, conseguimos utilizar lá quase todas as quadras.",
    author: "Lucas",
    role: "Professor Educação Física"
  },
  {
    id: 6,
    text: "Eu gosto da escola! Os alunos são bem educados, principalmente os alunos do terceiros anos. Ela é bem firme e exigente em relação ao uniforme e ao respeito com os funcionários. Eu gosto de trabalhar aqui.",
    author: "Silvia",
    role: "Inspetora"
  },
  {
    id: 7,
    text: "Entrei na escola 2014 e saí em agosto de 2023, porém voltei novamente em dezembro de 2023. O conhecimento que eu tenho da escola como trabalhadora e como mãe de alunos que estudaram aqui, a escola é muito boa, a direção é muito boa, os alunos são bem simpáticos, principalmente os alunos do terceiro ano, que sempre me tratam super bem.",
    author: "Nazaré",
    role: "Colaboradora da escola"
  },
  {
    id: 8,
    text: "Eu estudo aqui desde o sexto ano. Pouco tempo depois de eu entrar na escola, um certo aluno da minha sala começou a mexer comigo, porém, conforme o tempo foi passando, o bullying só aumentava. Tempos depois dessa perseguição, ele simplesmente começou a mandar fotos pra minha família, até que decidi tomar uma atitude. Fui até a direção e comecei descrever o ocorrido e o que ele já vinha fazendo a algum tempo, nisso a direção chamou os pais deles e decidiram expulsar o garoto, o qual fazia bullying comigo. Diante a esse acontecimento, eu quero mostrar o quanto a escola prezou e me valorizou como aluno, pois tomou uma atitude de imediato e não aceitou esse tipo de coisa. Já se passou um tempinho desse acontecimento, mas um fato verídico é, que a escola continua com essa atenção com os alunos.",
    author: "Eduardo",
    role: "Aluno"
  },
  {
    id: 9,
    text: "As festas juninas do Silva Jardim eram as melhores do bairro! A comunidade toda se envolvia. Que saudade daqueles tempos.",
    author: "Miguel Oliveira",
    role: "Ex-aluno"
  },
  {
    id: 10,
    text: "Minha mãe, eu e minha filha estudamos no Silva Jardim. É uma tradição familiar que se mantém há três gerações.",
    author: "Patricia Lima",
    role: "Ex-aluna e mãe"
  },
  {
    id: 11,
    text: ": eu acho que essa escola aqui é boa e os professores são bons más a escola é muito pequena para quantidade de alunos que tem, os professores são bem acolhedores e legais, e a escola é bem organizada e regrada em questão de tudo.",
    author: "Rafaella",
    role: "Aluno"
  },
  {
    id: 13,
    text: " a comida de vez em quando é bem mediana, às vezes falta tempero às vezes tem em excesso e por aí vai, a plataforma é bem complicada de ser efetuada por conta da quantidade de lições, a infraestrutura dela é muito boa e é uma escola de fácil acesso, muito bem localizada.Algo que me incomoda séria a falta de interesse de alguns professores, que não tem nenhum comprometimento com as atividades.",
    author: "Nycolas",
    role: "Aluno"
  },
  {
    id: 14,
    text: "Hoje muito da escola como aluna, acho legal os uniformes tanto para identificação tanto de vestimenta, a coordenação é muito acolhedora e sempre está disposta á nos ouvir, gosto muito da estrutura dos sites para efetuar as atividades, a escola é muito limpa ( em partes ) Alguns alunos dificultam na limpeza é só, gosto bastante daqui e conheci pessoas incríveis!.",
    author: "Laura Figueira",
    role: "Aluna"
  },
  {
    id: 15,
    text: "a escola é muito boa como um todo e tem professores excelentes aqui, porém tem alguns que deixam a desejar, que apenas entram na sala e enchem a lousa de matéria sem explicar nada, mesmo sendo poucos, prejudica bastante quem quer estudar.",
    author: "Bruna",
    role: "Aluna"
  },
  {
    id: 16,
    text: "A escola sempre apoiou alunos com dificuldades. Tive dislexia e recebi todo o suporte necessário para me formar.",
    author: "Bruno Martins",
    role: "Ex-aluno"
  },
  {
    id: 17,
    text: "Os projetos ambientais do Silva Jardim despertaram minha consciência ecológica. Hoje trabalho com sustentabilidade.",
    author: "Camila Verde",
    role: "Ex-aluna"
  },
  {
    id: 23,
    text: "Meu avô foi um dos primeiros alunos, meu pai estudou aqui, eu também, e agora meu filho. O Silva Jardim é parte da nossa história familiar.",
    author: "Geraldo",
    role: "Ex-aluno, pai"
  }]
  );

  const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://www.diariozonanorte.com.br/ha-117-anos-128-contos-de-reis-deram-inicio-ao-tucuruvi/tucuruvi2/",
    alt: "Fachada do Grupo Escolar Silva Jardim, década de 1940",
    caption: "Fachada histórica do Grupo Escolar Silva Jardim na década de 1940"
  },
  {
    id: 2,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9_cWLVKpqydGS-cUr0ykFHXGnUa2KNNLUTeDhugwM3Y0FyRd4aTmR9ig8JGeEVwX4eU&usqp=CAU",
    alt: "Estudantes reunidos em frente ao prédio da escola, anos 1980",
    caption: "Estudantes reunidos em frente ao prédio da escola nos anos 1980"
  },
  {
    id: 3,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvQtSkBwYG3Z-HoKY2Pft_EnfRQDVh6ptzQ&s",
    alt: "Retrato de Antonio da Silva Jardim, patrono da escola",
    caption: "Retrato de Antônio da Silva Jardim, patrono da escola"
  },
  {
    id: 4,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNKC2wEbmgBgKp3fFqhfK798zfkI5K4e84JsC9iW5qotAoFfSoc4DwcNFER-_LFDPmy0&usqp=CAU",
    alt: "Brasão de Silva Jardim",
    caption: "Brasão oficial do município de Silva Jardim"
  },
  {
    id: 5,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISQsg2QBz1Y4lmEL2CotTDJGI2WkG0pM_S56eV3CDs9jUxmO008Lu6SaHGNVUDy7Yu0g&usqp=CAU",
    alt: "Foto antiga do prédio escolar",
    caption: "Registro histórico do prédio escolar em seus primeiros anos"
  },
  {
    id: 6,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4UwBSDoEyhVLguu9AB2G5GffRpInU4CcIujHEUyyX-dqIabLgFVldZGY_NnTsMNPpp8&usqp=CAU",
    alt: "Grupo de estudantes em frente à escola, década de 1920",
    caption: "Grupo de estudantes em frente à escola na década de 1920"
  },
  {
    id: 7,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPdmnftePqzIqH835T73jeRdmMUVTBbVxhFyv_l2h2NfGM_vyHKUWXiRzHtY1jAP5IQs4&usqp=CAU",
    alt: "Vesúvio - local da morte de Silva Jardim",
    caption: "Monte Vesúvio na Itália, local da trágica morte de Silva Jardim"
  },
  {
    id: 8,
    src: "https://i.pinimg.com/236x/d5/9f/94/d59f940be8ef5e063642e1bd6551b94c.jpg",
    alt: "Vista aérea da escola Silva Jardim",
    caption: "Vista aérea contemporânea da Escola Silva Jardim"
  }];


  // URLs do Google Forms e Planilha
  const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/1kQDuvDfQHIDjSV-4rDfz0d4uWdfzjhLvkpPcg6zN1lE/export?format=csv";
  const GOOGLE_FORMS_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfAJQKwRlfjdgbNnM5vbmMRGDqoJlzvymVM-HdCY5Q_PSivaA/viewform?usp=dialog";

  const loadComments = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${SHEET_CSV_URL}&_ts=${Date.now()}`);
      const csvText = await response.text();

      const result = Papa.parse<Comment>(csvText, {
        header: true,
        skipEmptyLines: true
      });

      const validComments = result.data.filter(
        (comment) => comment.Nome && comment.Comentario && comment.Data
      );

      setComments(validComments.reverse());
    } catch (err) {
      setError('Erro ao carregar comentários');
      console.error('Erro ao carregar dados:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleEditTestimonial = (id: number) => {
    setEditingTestimonial(id);
  };

  const handleSaveTestimonial = (id: number, newText: string, newAuthor: string) => {
    setTestimonials((prev) =>
    prev.map((testimonial) =>
    testimonial.id === id ?
    { ...testimonial, text: newText, author: newAuthor } :
    testimonial
    )
    );
    setEditingTestimonial(null);
  };

  const handleCancelEdit = () => {
    setEditingTestimonial(null);
  };

  const openImageModal = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage);
    let newIndex;

    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(galleryImages[newIndex].id);
  };

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
    content: "1970–1979 – Mantida como escola estadual de 1.º grau, sem informação pública sobre reformas estruturais. Mudanças administrativas gerais ocorreram na rede estadual."
  },
  {
    title: "Anos 1980",
    subtitle: "Tradição e Desafios para o Futuro",
    content: "1980–1989 – Período de estabilidade: a escola continuou atendendo o ensino fundamental (e, eventualmente, ensino médio, conforme mudanças de nomenclatura da rede)."
  },
  {
    title: "Anos 1990",
    subtitle: "Expansão Geral do Ensino Fundamental",
    content: "1990–1999 – A escola manteve suas atividades normais. Nos últimos anos do século, houve expansão geral do ensino fundamental no estado."
  },
  {
    title: "Anos 2000",
    subtitle: "Expansão da Infraestrutura e Ensino Religioso Facultativo",
    content: "2002 – Implementação opcional do Ensino Religioso nas escolas estaduais. 2007 – A EE Silva Jardim sediou a \"Feira de Biologia\" do Projeto Celular do Instituto de Biociências da USP."
  },
  {
    title: "Anos 2010",
    subtitle: "Greve, Reformas e Novas Iniciativas Educacionais",
    content: "Mar/2010 – Professores e funcionários da Silva Jardim aderiram à greve estadual da educação pública paulista."
  },
  {
    title: "2019",
    subtitle: "Programa de Ensino Integral e Debates Comunitários",
    content: "2019 – A escola foi contemplada pelo Programa de Ensino Integral (PEI) do estado e pelo curso EJATEC (Educação de Jovens e Adultos com itinerário Tecnológico). A implantação desses programas gerou debate: a comunidade escolar chegou a lançar uma petição pública contra as mudanças propostas durante a pandemia."
  },
  {
    title: "2021",
    subtitle: "Desempenho em Índices de Qualidade",
    content: "2021 – Desempenho em índices de qualidade: o IDEB (índice nacional) dos anos finais (6º-9º anos) da EE Silva Jardim foi 5,30 em 2021, atingindo a meta estadual para a série (5,3). O IDESP (índice estadual) correspondente ficou em 3,39."
  },
  {
    title: "2022",
    subtitle: "Projeto de Recuperação Intensiva",
    content: "2022 – Como compensação às perdas da pandemia, a escola participou do \"Projeto de Recuperação Intensiva\" da Secretaria da Educação (programa para reforço escolar emergencial)."
  },
  {
    title: "2024",
    subtitle: "Programas Estaduais de Apoio e Inovação",
    content: "2024 – A EE Silva Jardim participa de vários programas estaduais de apoio e inovação: além do envolvimento em projetos como Centro de Estudos de Línguas, Centro de Mídias, Inova Educação, Novotec Integrado, Dignidade Íntima e Professores Conectados."
  }];

  const navigationItems = [
  { id: 'inicio', label: 'Início', icon: School },
  { id: 'sobre-site', label: 'Sobre o Site', icon: BookOpen },
  { id: 'historia', label: 'História', icon: History },
  { id: 'legado', label: 'Legado', icon: Award },
  { id: 'linha-do-tempo', label: 'Linha do Tempo', icon: Clock },
  { id: 'galeria', label: 'Galeria', icon: Camera },
  { id: 'depoimentos', label: 'Depoimentos', icon: Heart },
  { id: 'fontes', label: 'Bibliografia', icon: Book },
  { id: 'comentarios', label: 'Comentários', icon: MessageSquare }];

  return (
    <div className="min-h-screen" style={{ background: 'var(--gray-light)' }}>
      {/* Navegação */}
      <nav className="silva-jardim-nav">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3">

              <School className="h-8 w-8 text-white" />
              <span className="text-white font-bold text-xl">Silva Jardim</span>
            </motion.div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {navigationItems.map((item) =>
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10">

                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              )}
            </div>

            {/* Menu Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>

              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen &&
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-white/20">

              <div className="flex flex-col gap-2 mt-4">
                {navigationItems.map((item) =>
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 text-white hover:text-blue-300 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/10 text-left">

                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
              )}
              </div>
            </motion.div>
          }
        </div>
      </nav>

      {/* Hero */}
      <section id="inicio" className="silva-jardim-hero">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-4 hero-glow"
          style={{ animation: 'fadeInDown 1s' }}>

          Centenário do Silva Jardim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto text-shadow"
          style={{ animation: 'fadeInUp 1.2s' }}>

          100 anos formando cidadãos para o futuro.
        </motion.p>
      </section>

      {/* Sobre o Site */}
      <section id="sobre-site" className="py-16" style={{ background: 'linear-gradient(120deg, #f3f4f7 80%, #e0e3ea 100%)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ color: '#23272f' }}>

            Sobre o Site
          </motion.h2>
          
          <div className="space-y-6 text-gray-700">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed">

              Criado para celebrar o centenário da Escola Estadual Silva Jardim, este portal reúne informações históricas, curiosidades, depoimentos, fotos, documentos e registros que contam 100 anos de dedicação à comunidade do Tucuruvi.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg leading-relaxed">

              Nosso objetivo é preservar a memória da escola, valorizar sua importância local e oferecer um espaço interativo para ex-alunos, professores, colaboradores e toda a sociedade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid md:grid-cols-2 gap-6 mt-8">

              {[
              { title: "Linha do Tempo Interativa", desc: "acompanhe marcos históricos da criação em 1925 até os dias atuais." },
              { title: "Depoimentos em Texto e Vídeo", desc: "relatos emocionantes de quem viveu a tradição Silva Jardim." },
              { title: "Galeria de Imagens", desc: "fotografias antigas e contemporâneas digitalizadas em alta resolução." },
              { title: "Documentos Históricos", desc: "atas, jornais de época e projetos pedagógicos disponíveis para download." }].
              map((feature, index) =>
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* História com Abas Expandida */}
      <section id="historia" className="py-16" style={{ background: 'var(--white)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ color: 'var(--navy)' }}>

            História
          </motion.h2>

          <div className="tabs">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {[
              { id: 'cap1', title: 'O Patrono', subtitle: 'Antônio da Silva Jardim' },
              { id: 'cap2', title: 'A Fundação', subtitle: 'Tucuruvi nos anos 1920' },
              { id: 'cap3', title: 'Memórias', subtitle: 'Curiosidades e Registros' }].
              map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 rounded-lg font-semibold transition-all duration-300 text-center ${
                activeTab === tab.id ?
                'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' :
                'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'}`
                }>
                  <div className="text-sm font-bold">{tab.title}</div>
                  <div className="text-xs opacity-80">{tab.subtitle}</div>
                </button>
              )}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-xl p-8 min-h-[600px]">

              {activeTab === 'cap1' &&
              <div className="space-y-8">
                  <div className="text-center mb-8">
                    <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative inline-block">
                      <img
                      src="https://i0.wp.com/www.osaqua.com.br/wp-content/uploads/2021/05/Antonio-da-Silva-Jardim-Histituto-Historico-e-Geografico-de-Santos.jpg?resize=200%2C350"
                      alt="Antonio da Silva Jardim"
                      className="mx-auto rounded-lg shadow-lg max-w-xs border-4 border-blue-100" />
                      <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        1860-1891
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                      O Homem por Trás do Nome
                    </h3>
                  </motion.div>

                  {/* Seção para texto completo do Capítulo 1 */}
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Edit3 className="h-5 w-5 text-blue-600" />
                      Texto Completo - Capítulo 1: O Patrono
                    </h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        <p>
                          <strong>Antônio da Silva Jardim</strong> foi um proeminente advogado, jornalista e ativista político brasileiro, amplamente reconhecido por seu envolvimento ativo nos movimentos pela abolição da escravatura e pela implantação da república. Ele defendia que tanto a Abolição quanto a República deveriam engendrar mudanças significativas para toda a sociedade brasileira.
                        </p>
                        
                        <p>
                          Ele nasceu na vila de Nossa Senhora da Lapa de Capivari, que atualmente é o município que leva seu nome, no estado do Rio de Janeiro. Filho de Gabriel da Silva Jardim, um educador humilde que lecionava em sua própria propriedade, e de Felismina Leopoldina de Mendonça, vinha de uma família simples, mas marcada por valores sólidos. Por parte de pai, era neto de Antônio da Silva Jardim e Dona Luciana Maria; por parte de mãe, de Leandro Freire Ribeiro e Dona Lauriana Leopoldina do Amor Divino.
                        </p>
                        
                        <p>
                          Buscando uma educação mais avançada, foi enviado a Niterói, onde estudou nos colégios Silva Pontes e São Bento. Ali, aprendeu português, francês, geografia e latim. Durante esse período, ajudou a fundar o jornal estudantil <em>O Laboro Literário</em>, que marcou o início de sua militância política em defesa da liberdade e da justiça.
                        </p>
                        
                        <p>
                          Com poucos recursos financeiros, enfrentou grandes desafios durante sua trajetória acadêmica. Mudou-se para o Externato Jasper, onde também passou a trabalhar para custear os estudos. Determinado, seguiu para São Paulo e ingressou na tradicional Faculdade de Direito de São Paulo, onde se engajou nas discussões políticas da época, especialmente nas ideias republicanas e na luta abolicionista.
                        </p>
                        
                        <p>
                          Durante sua juventude, aproximou-se da influente família do Conselheiro Martim Francisco de Andrada. Foi nesse meio que conheceu Ana Margarida, com quem se casou. Ela era neta do Patriarca da Independência, José Bonifácio de Andrada e Silva. O casal teve quatro filhos, incluindo um que recebeu o nome do pai como homenagem.
                        </p>
                        
                        <p>
                          Movido por seus ideais, Silva Jardim abandonou a advocacia, vendeu seu escritório e dissolveu sua sociedade para se dedicar integralmente à causa republicana. Viajou intensamente entre os estados do Rio de Janeiro, São Paulo e Minas Gerais, participando de comícios, escrevendo, discursando e enfrentando tanto aclamações quanto perseguições.
                        </p>
                        
                        <p>
                          Mesmo com a saúde fragilizada desde a infância por causa do paludismo, manteve-se firme em sua militância. Após a Proclamação da República, no entanto, foi ignorado pelos militares que assumiram o poder. Tentou se eleger deputado, mas não teve sucesso. Desencantado, afastou-se da política e buscou descanso e novas experiências na Europa.
                        </p>
                        
                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                          <h5 className="font-bold text-red-800 mb-2">🌋 O Trágico Final</h5>
                          <p className="text-red-700">
                            Em 1891, aos 30 anos, durante uma visita a Pompeia, na Itália, decidiu explorar o vulcão Vesúvio. Apesar dos alertas sobre possíveis riscos, foi tragado por uma fenda que se abriu repentinamente na cratera. Sua morte permanece envolta em mistério — não se sabe ao certo se foi um acidente ou um ato deliberado.
                          </p>
                        </div>
                        
                        <p>
                          De acordo com reportagem do jornal <em>A Pátria Mineira</em>, publicada em 30 de julho de 1891, em São João del-Rei, o episódio foi testemunhado por um guia e seu amigo Joaquim Carneiro de Mendonça. A matéria, baseada na "Carta Parisiense" de Xavier de Carvalho, relata que Silva Jardim chegou a tentar escapar, mas ficou ferido, enquanto Carneiro foi socorrido por um guia local.
                        </p>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <p className="text-blue-700 font-semibold">
                            Como homenagem a seu legado, o antigo município de Capivari passou a se chamar Silva Jardim — um tributo eterno a uma vida dedicada à liberdade, à justiça social e à transformação do Brasil.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                      <p className="font-semibold text-amber-800 mb-2">💡 Você sabia?</p>
                      <p className="text-amber-700">
                        Silva Jardim foi um dos mais jovens e eloquentes defensores da República no Brasil, 
                        dedicando sua vida inteira à causa da liberdade e da justiça social.
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-800 mb-2">🎓 Formação</h4>
                        <ul className="text-sm space-y-1 text-blue-700">
                          <li>• Colégios Silva Pontes e São Bento (Niterói)</li>
                          <li>• Faculdade de Direito de São Paulo</li>
                          <li>• Fundador do jornal "O Laboro Literário"</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-bold text-green-800 mb-2">⚖️ Causas Defendidas</h4>
                        <ul className="text-sm space-y-1 text-green-700">
                          <li>• Abolição da escravatura</li>
                          <li>• Proclamação da República</li>
                          <li>• Justiça social e liberdade</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="text-lg font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
                      É em homenagem a este grande brasileiro que nossa escola carrega o nome Silva Jardim há quase 100 anos.
                    </motion.p>
                  </div>
                </div>
              }

              {activeTab === 'cap2' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <History className="h-6 w-6 text-green-600" />
                      Tucuruvi e a Fundação da Escola
                    </h3>
                  </motion.div>

                  {/* Seção para texto completo do Capítulo 2 */}
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Edit3 className="h-5 w-5 text-green-600" />
                      Texto Completo - Capítulo 2: A Fundação
                    </h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-bold text-blue-800 mb-2">🏛️ Contexto Histórico dos Anos 1920</h5>
                          <p className="text-blue-700">
                            A educação pública ainda chegava lentamente aos bairros periféricos de São Paulo. A reforma educacional de 1920 em SP incluiu um recenseamento escolar para identificar o analfabetismo infantil. Na prática, o Tucuruvi era área rural até por volta de 1918 e só então passou a ver surgirem instituições públicas: igrejas, cinemas e escolas públicas começaram a aparecer gradualmente na região.
                          </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                          <h5 className="font-bold text-green-800 mb-4">📅 Cronologia da Escola em Tucuruvi</h5>
                          <div className="space-y-3 text-green-700">
                            <div className="border-l-2 border-green-300 pl-4">
                              <strong>24 fev 1922</strong> – Inauguração das Escolas Reunidas do Tucuruvi, primeira escola pública do bairro, cujo diretor foi o professor Nestor Pereira Leite.
                            </div>
                            <div className="border-l-2 border-green-300 pl-4">
                              <strong>fev 1925</strong> – Criação do Grupo Escolar do Tucuruvi (localizado na Rua Ausônia, hoje Av. Tucuruvi, 724) com 12 salas de aula; o diretor era o professor Antônio M. Rosa.
                            </div>
                            <div className="border-l-2 border-green-300 pl-4">
                              <strong>1936</strong> – Elaboração do projeto arquitetônico do Grupo Escolar Silva Jardim (Av. Tucuruvi, 724) – esse dado consta em arquivo da FAU-USP: "Data do projeto: 1936".
                            </div>
                            <div className="border-l-2 border-green-300 pl-4">
                              <strong>29 set 1938</strong> – Inauguração oficial do Grupo Escolar Silva Jardim, em homenagem ao político Antônio da Silva Jardim. Na cerimônia, o diretor continuava sendo Antônio M. Rosa e estiveram presentes autoridades como o futuro governador Adhemar de Barros.
                            </div>
                          </div>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                          <h5 className="font-bold text-amber-800 mb-2">📋 Registros Oficiais e Documentos do Governo</h5>
                          <p className="text-amber-700 mb-3">
                            Não foram encontrados decretos ou portarias estaduais datados de 1926 criando a escola Silva Jardim. Na verdade, os registros oficiais posteriores confirmam o quadro acima. Por exemplo, o <strong>Decreto-lei nº 42.030/1963</strong> do Estado de São Paulo menciona expressamente a existência do Grupo Escolar "Silva Jardim" ao estabelecer a criação do Grupo Escolar do Tucuruvi via transferência de classes.
                          </p>
                          <p className="text-amber-700">
                            Esse decreto, embora muito posterior a 1926, é documento oficial do governo paulista atestando a continuidade da Silva Jardim. Não localizamos menções a 1926 na imprensa ou na legislação daquela época; sabe-se apenas, por historiadores locais, que a construção do prédio sede foi projetada em 1936.
                          </p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg">
                          <h5 className="font-bold text-purple-800 mb-4">👨‍🏫 Primeiros Diretores e Professores</h5>
                          <p className="text-purple-700 mb-3">
                            As fontes históricas apontam o professor <strong>Antônio M. Rosa</strong> como primeiro diretor tanto do Grupo Escolar do Tucuruvi (1925) quanto, depois, do Grupo Escolar Silva Jardim (inaugurado em 1938). Em relatos de ex-alunos, aparece também o nome de <strong>Ulisses Guimarães</strong> (que viria a ser importante político nacional) como diretor da escola nesse período, conforme depoimento de quem cursou os primeiros anos do Colégio Silva Jardim na década de 1930.
                          </p>
                          <p className="text-purple-700">
                            Já a professora primária <strong>Mariazinha</strong> é lembrada como primeira professora de classe por um ex-aluno, mas não há fonte publicada que confirme data ou cargo formal.
                          </p>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg">
                          <h5 className="font-bold text-gray-800 mb-4">🏫 Transformações ao Longo dos Anos</h5>
                          <div className="space-y-3 text-gray-700">
                            <p><strong>Década de 1960:</strong> A escola passou a oferecer o 1º grau, conhecido como Curso Normal Regional "Frei Rogério Neuhaus".</p>
                            <p><strong>1962:</strong> A instituição foi transformada em Ginásio Normal "Professora Eládia de Maia Barbosa", ampliando sua oferta educacional.</p>
                            <p><strong>12 jun. 1963:</strong> Decreto Estadual nº 42.030/1963 (governo Adhemar de Barros) cria formalmente o "Grupo Escolar do Tucuruvi" e transfere para ele 8 salas originárias do já existente Grupo Escolar Silva Jardim. Esse ato comprova que, em 1963, a Escola Silva Jardim já funcionava há tempo na capital.</p>
                            <p><strong>1971:</strong> A escola passou a se chamar Escola Básica Silva Jardim, refletindo sua expansão e diversificação de cursos.</p>
                            <p><strong>1987:</strong> A denominação foi alterada para Colégio Estadual "Silva Jardim", consolidando seu status como instituição de ensino fundamental e médio.</p>
                            <p><strong>2000:</strong> A escola recebeu sua nomenclatura atual, Escola de Educação Básica Silva Jardim, mantendo-se até os dias atuais.</p>
                          </div>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                          <h5 className="font-bold text-indigo-800 mb-3">🏢 Estrutura Atual</h5>
                          <p className="text-indigo-700 mb-3">
                            Atualmente, a Escola de Educação Básica Silva Jardim ocupa uma área total de <strong>10.000 m²</strong>, com um prédio principal de <strong>1.779,33 m²</strong> e um ginásio de <strong>854,90 m²</strong>. A instituição atende aproximadamente <strong>960 alunos</strong> distribuídos em <strong>34 turmas</strong>, abrangendo séries iniciais, finais do ensino fundamental e ensino médio.
                          </p>
                          <p className="text-indigo-700">
                            Além disso, oferece serviços de <strong>Atendimento Educacional Especializado (SAEDE)</strong> para alunos com necessidades específicas.
                          </p>
                        </div>

                        <div className="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-400">
                          <h5 className="font-bold text-rose-800 mb-2">🎖️ O Patrono da Escola</h5>
                          <p className="text-rose-700">
                            O patrono da escola é o ilustre político e ativista <strong>Antônio da Silva Jardim</strong>, reconhecido por sua luta pela implantação da República e pela abolição dos escravos. Seu nome atual é uma homenagem ao jornalista e político fluminense que dedicou sua vida à transformação social do Brasil.
                          </p>
                        </div>

                        <div className="bg-teal-50 p-6 rounded-lg">
                          <h5 className="font-bold text-teal-800 mb-4">🏛️ História do Município Silva Jardim</h5>
                          <p className="text-teal-700 mb-3">
                            Anteriormente, o município chamava-se <strong>Capivari</strong>, cuja fundação se deu em 1801, nas terras de D. Maria Rodrigues, viúva de Manoel da Silveira Azevedo, onde o casal havia construído uma capela em devoção à Sant'Ana. A viúva doou a capela e seu entorno para a criação da paróquia de Nossa Senhora da Lapa de Capivari, a pedido da população local.
                          </p>
                          <p className="text-teal-700 mb-3">
                            No entorno da capela, formou-se o vilarejo, que posteriormente foi elevado à categoria de freguesia e, mais adiante, à categoria de vila, por decreto de 1841, separando-se definitivamente do município de Cabo Frio. A condição imposta para o desmembramento era de que alguns fazendeiros locais se responsabilizassem e construíssem uma câmara, que executava as mesmas funções atuais de uma prefeitura, bem como uma cadeia para a nova vila.
                          </p>
                          <p className="text-teal-700">
                            O Major Joaquim Fernandes Lopes Ramos, o Alferes Luiz Gomes da Silva Leite, juntamente com alguns membros da família Pinto Coelho, executaram as construções entre os anos de 1841 e 1843, atendendo assim às exigências. <strong>A partir do ano de 1943, a vila de Capivari teve seu nome modificado para Silva Jardim</strong>, denominação esta que perdura até os dias atuais.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}>
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gBQHP3jEARAoaENwX8BTR6DqHqZ-4GXs_YPXaDUFm3kCjaHc2SC-WnF-gy432u_2f_Q&usqp=CAU"
                      alt="Grupo Escolar Silva Jardim antigo"
                      className="w-full rounded-lg shadow-lg" />
                      <p className="text-sm text-gray-600 mt-2 italic text-center">
                        Edifício do Grupo Escolar de Tucuruvi em 1928
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4">
                      <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-bold text-yellow-800 mb-2">🏗️ Contexto Histórico</h4>
                        <p className="text-yellow-700 text-sm">
                          Nos anos 1920, a educação pública chegava lentamente aos bairros periféricos de São Paulo. 
                          O Tucuruvi era área rural até 1918, quando começaram a surgir as primeiras instituições públicas.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-bold text-blue-800 mb-2">📅 Cronologia</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li><strong>1922:</strong> Escolas Reunidas do Tucuruvi</li>
                          <li><strong>1925:</strong> Grupo Escolar do Tucuruvi</li>
                          <li><strong>1936:</strong> Projeto arquitetônico Silva Jardim</li>
                          <li><strong>1938:</strong> Inauguração oficial</li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    
                    <p>
                      A história da nossa escola começou em <strong>24 de fevereiro de 1922</strong>, com a inauguração 
                      das Escolas Reunidas do Tucuruvi, a primeira escola pública do bairro. O diretor foi o 
                      professor Nestor Pereira Leite, um pioneiro da educação na região.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-3">🏛️ A Construção do Prédio Atual</h4>
                      <p className="mb-3">
                        Em 1936, o arquiteto <strong>José Maria da Silva Neves</strong> elaborou o projeto do novo 
                        edifício escolar na Av. Tucuruvi, 724. O prédio foi concluído em 12 de março de 1936, 
                        mas a inauguração oficial só aconteceu em <strong>29 de setembro de 1938</strong>.
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        Na cerimônia de inauguração, estiveram presentes autoridades como o futuro governador 
                        Adhemar de Barros, demonstrando a importância da escola para a região.
                      </p>
                    </div>

                    <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-3">✨ Curiosidade</h4>
                      <p className="text-purple-700">
                        O primeiro diretor, professor Antônio M. Rosa, permaneceu no cargo desde a criação do 
                        Grupo Escolar do Tucuruvi em 1925 até a inauguração oficial do Silva Jardim em 1938, 
                        garantindo a continuidade pedagógica durante toda a transição.
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              }

              {activeTab === 'cap3' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border-l-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Camera className="h-6 w-6 text-orange-600" />
                      Memórias e Curiosidades
                    </h3>
                  </motion.div>

                  {/* Seção para texto completo do Capítulo 3 */}
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gray-50 p-8 rounded-xl border-2 border-dashed border-gray-300">
                    <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                      <Edit3 className="h-5 w-5 text-orange-600" />
                      Texto Completo - Capítulo 3: Memórias
                    </h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                          <h5 className="font-bold text-amber-800 mb-3">🏛️ O Edifício Original de 1928</h5>
                          <p className="text-amber-700 mb-3">
                            Este era o edifício do Grupo Escolar de Tucuruvi no ano de 1928. Os estudantes podem ser vistos na varanda durante a captura da imagem. No lugar onde funcionou a escola, atualmente, encontra-se a Igreja Metodista do Tucuruvi, na Rua Ausônia.
                          </p>
                          <p className="text-amber-700">
                            Provavelmente, era uma construção muito antiga, uma vez que existiria antes do parcelamento da Vila Mazzei... talvez fosse a principal residência da fazenda. Impressionante... situado em uma região privilegiada com uma vista deslumbrante.
                          </p>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                          <h5 className="font-bold text-blue-800 mb-3">👩‍🏫 A Era da Professora Durvalina Cardoso</h5>
                          <p className="text-blue-700 mb-3">
                            A diretora era Profa. Durvalina Cardoso e, naquele ano, Silva Jardim contava com <strong>1.054 alunos</strong> distribuídos entre o 1.º ao 4.º ano primário em dois períodos (manhã e tarde), com uma fila de espera de <strong>230 crianças</strong>.
                          </p>
                          <p className="text-blue-700">
                            Era a principal unidade de ensino público de Tucuruvi, tendo seu prédio atual sido inaugurado em 1938 e já contava com assistência dentária e cozinha econômica que fornecia alimentação básica no refeitório.
                          </p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                          <h5 className="font-bold text-green-800 mb-3">🏫 Expansão e Necessidade de Novas Instalações</h5>
                          <p className="text-green-700 mb-3">
                            As vagas para estudantes do ciclo primário eram insuficientes para atender à demanda no Grupo Escolar de Tucuruvi. O Governo do Estado criou então uma nova escola que funcionou em um prédio adaptado na Av. Tucuruvi para que pudesse comportar o maior número de alunos possível.
                          </p>
                          <p className="text-green-700">
                            Isso ocorre no início da década de 30, demonstrando o crescimento populacional e a demanda por educação na região.
                          </p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                          <h5 className="font-bold text-purple-800 mb-3">📸 Memórias Fotográficas Preciosas</h5>
                          <p className="text-purple-700 mb-3">
                            Nossa curtidora Neide dos Anjos nos brinda com uma incrível foto da turma de alunos do Silva Jardim ainda em suas antigas instalações. <strong>Seu pai é o segundo menino ao alto do lado direito com paletó.</strong>
                          </p>
                          <p className="text-purple-700">
                            Havia uma grande ansiedade pelo término das obras do Grupo Escolar Silva Jardim, que foi entregue à população em <strong>29 de setembro de 1938</strong>.
                          </p>
                        </div>

                        <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                          <h5 className="font-bold text-rose-800 mb-3">🎺 A Famosa Fanfarra do Silva Jardim</h5>
                          <p className="text-rose-700 mb-3">
                            Foto dos alunos da fanfarra do G. E. Silva Jardim na área de concentração antes do início do desfile. O local é onde foi a estação Tucuruvi do trem da Cantareira. Observa-se ao fundo a chaminé de onde era a padaria do Sr. Ângelo e de seu filho, Walter Davanzo.
                          </p>
                          <p className="text-rose-700">
                            Foto tirada em desfile no bairro Tucuruvi, em <strong>07 de setembro de 1969</strong>. Nesta foto, estou ao centro, apoiando as baquetas com os dedos sobre o instrumento (surdo). <em>(Jânio Pires)</em>
                          </p>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                          <h5 className="font-bold text-indigo-800 mb-3">🚂 Contexto Geográfico e Urbano</h5>
                          <p className="text-indigo-700 mb-3">
                            As referências geográficas nas fotografias nos ajudam a entender o desenvolvimento urbano da região. A menção à <strong>estação Tucuruvi do trem da Cantareira</strong> e à <strong>padaria do Sr. Ângelo</strong> mostra como a escola estava integrada ao cotidiano do bairro.
                          </p>
                          <p className="text-indigo-700">
                            Estes marcos urbanos faziam parte da vida escolar e comunitária, criando um senso de pertencimento e identidade local que perdura até hoje.
                          </p>
                        </div>

                        <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                          <h5 className="font-bold text-teal-800 mb-3">👥 Depoimentos Pessoais</h5>
                          <p className="text-teal-700 mb-3">
                            Os relatos pessoais, como o de Jânio Pires sobre sua participação na fanfarra, são tesouros históricos que humanizam a experiência escolar. Cada fotografia conta uma história, cada depoimento revela uma faceta da vida na escola.
                          </p>
                          <p className="text-teal-700">
                            Essas memórias individuais, quando reunidas, formam o mosaico coletivo da história da Escola Silva Jardim, mostrando como a instituição moldou gerações de estudantes.
                          </p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                          <h5 className="font-bold text-yellow-800 mb-2">🎭 Vida Social e Cultural</h5>
                          <p className="text-yellow-700">
                            A escola sempre foi mais que um local de ensino - era o centro da vida cultural e social do bairro. Os desfiles cívicos, as apresentações da fanfarra e os eventos escolares eram momentos de orgulho e união da comunidade.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}>
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9_cWLVKpqydGS-cUr0ykFHXGnUa2KNNLUTeDhugwM3Y0FyRd4aTmR9ig8JGeEVwX4eU&usqp=CAU"
                      alt="Estudantes em frente à escola"
                      className="w-full rounded-lg shadow-lg" />
                      <p className="text-sm text-gray-600 mt-2 italic text-center">
                        Estudantes reunidos em frente ao prédio nos anos 1980
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-6">
                      
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-bold text-green-800 mb-2">📊 Dados Históricos</h4>
                        <p className="text-green-700 text-sm mb-2">
                          <strong>Anos 1950:</strong> A diretora Profa. Durvalina Cardoso comandava uma escola com:
                        </p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• 1.054 alunos matriculados</li>
                          <li>• 230 crianças na fila de espera</li>
                          <li>• Funcionamento em dois períodos</li>
                          <li>• Assistência dentária</li>
                          <li>• Cozinha econômica com refeitório</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-bold text-blue-800 mb-2">🎭 Vida Escolar</h4>
                        <p className="text-blue-700 text-sm">
                          A escola sempre foi o centro cultural do bairro, com apresentações teatrais, 
                          festivais de música e as famosas festas juninas que reuniam toda a comunidade.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid md:grid-cols-3 gap-4">
                    
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">🏛️</div>
                      <h4 className="font-bold text-yellow-800 mb-1">Arquitetura</h4>
                      <p className="text-yellow-700 text-sm">
                        Prédio projetado em estilo neoclássico, com amplos corredores e salas bem iluminadas
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">🎺</div>
                      <h4 className="font-bold text-purple-800 mb-1">Fanfarra</h4>
                      <p className="text-purple-700 text-sm">
                        A fanfarra da escola era famosa nos desfiles de 7 de setembro, orgulho do bairro
                      </p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg text-center">
                      <div className="text-3xl mb-2">👥</div>
                      <h4 className="font-bold text-pink-800 mb-1">Comunidade</h4>
                      <p className="text-pink-700 text-sm">
                        Gerações inteiras de famílias estudaram na escola, criando laços duradouros
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-gray-800 mb-4">📸 Registro Histórico</h4>
                    <p className="text-gray-700 mb-4">
                      Uma das fotos mais preciosas do nosso acervo mostra os alunos da fanfarra do G.E. Silva Jardim 
                      em 1969, antes do desfile de 7 de setembro. A foto foi tirada onde funcionava a antiga estação 
                      Tucuruvi do trem da Cantareira.
                    </p>
                    <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                      <p className="text-gray-600 text-sm italic">
                        "Observa-se ao fundo a chaminé de onde era a padaria do Sr. Ângelo e de seu filho, 
                        Walter Davanzo. Nesta foto, estou ao centro, apoiando as baquetas com os dedos sobre 
                        o instrumento (surdo)." - Jânio Pires, ex-aluno
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
                    <h4 className="font-bold text-xl mb-2">🎉 100 Anos de História</h4>
                    <p className="text-lg">
                      Cada foto, cada memória, cada depoimento conta a história de uma escola que não apenas 
                      educou, mas formou o caráter de milhares de pessoas ao longo de um século.
                    </p>
                  </motion.div>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legado Interativo */}
      <section id="legado" className="py-16" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Legado
          </motion.h2>

          <div className="tabs">
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              {[
              { id: 'impacto', title: 'Impacto Social', subtitle: 'Transformando Vidas', icon: Users },
              { id: 'educacao', title: 'Excelência Educativa', subtitle: 'Formando Cidadãos', icon: GraduationCap },
              { id: 'comunidade', title: 'Raízes Comunitárias', subtitle: '100 Anos de Tradição', icon: TreePine },
              { id: 'futuro', title: 'Visão de Futuro', subtitle: 'Próximos 100 Anos', icon: Globe }].
              map((tab) =>
              <button
                key={tab.id}
                onClick={() => setActiveLegacyTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center ${
                activeLegacyTab === tab.id ?
                'bg-white text-purple-700 shadow-lg transform scale-105' :
                'bg-white/20 text-white hover:bg-white/30 hover:scale-102'}`
                }>
                  <tab.icon className="h-5 w-5" />
                  <div>
                    <div className="text-sm font-bold">{tab.title}</div>
                    <div className="text-xs opacity-80">{tab.subtitle}</div>
                  </div>
                </button>
              )}
            </div>

            <motion.div
              key={activeLegacyTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-2xl p-8 min-h-[600px]">

              {activeLegacyTab === 'impacto' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Transformação Social</h3>
                    <p className="text-gray-600 text-lg">Um século mudando vidas e construindo futuros</p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                      <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                      <div className="text-gray-700 font-semibold">Alunos Formados</div>
                      <div className="text-sm text-gray-600 mt-2">Ao longo de 100 anos</div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl">
                      <div className="text-4xl font-bold text-green-600 mb-2">3</div>
                      <div className="text-gray-700 font-semibold">Gerações</div>
                      <div className="text-sm text-gray-600 mt-2">Famílias inteiras formadas</div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl">
                      <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
                      <div className="text-gray-700 font-semibold">Educadores</div>
                      <div className="text-sm text-gray-600 mt-2">Professores dedicados</div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <h4 className="font-bold text-gray-800 mb-3 text-xl">🌟 Histórias de Transformação</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      A Escola Silva Jardim não apenas ensinou matemática, português e ciências. Ela construiu 
                      sonhos, abriu horizontes e transformou destinos. De filhos de operários que se tornaram 
                      médicos e engenheiros, a crianças tímidas que descobriram sua voz no coral da escola.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-blue-700 mb-2">Ascensão Social</h5>
                        <p className="text-sm text-gray-600">
                          Primeira oportunidade de educação formal para milhares de famílias do Tucuruvi
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h5 className="font-semibold text-green-700 mb-2">Inclusão</h5>
                        <p className="text-sm text-gray-600">
                          Acolhimento de alunos com necessidades especiais e diferentes origens sociais
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                    <h4 className="font-bold text-xl mb-2">💝 Mais que uma Escola</h4>
                    <p className="text-lg opacity-90">
                      Um centro de esperança que mudou o destino de milhares de famílias no Tucuruvi
                    </p>
                  </motion.div>
                </div>
              }

              {activeLegacyTab === 'educacao' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mb-4">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Excelência Educativa</h3>
                    <p className="text-gray-600 text-lg">Formando cidadãos críticos e preparados para o futuro</p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4">
                      <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
                        <h4 className="font-bold text-amber-800 mb-3">🏆 Conquistas Acadêmicas</h4>
                        <ul className="space-y-2 text-amber-700">
                          <li>• IDEB 2021: 5,30 (atingiu a meta estadual)</li>
                          <li>• IDESP: 3,39 (acima da média regional)</li>
                          <li>• Participação em olimpíadas científicas</li>
                          <li>• Projetos de extensão com universidades</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-bold text-green-800 mb-3">📚 Inovação Pedagógica</h4>
                        <ul className="space-y-2 text-green-700">
                          <li>• Programa de Ensino Integral (PEI)</li>
                          <li>• EJATEC - Educação Tecnológica</li>
                          <li>• Centro de Estudos de Línguas</li>
                          <li>• Projeto Inova Educação</li>
                        </ul>
                      </div>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-bold text-blue-800 mb-3">👨‍🏫 Corpo Docente</h4>
                        <p className="text-blue-700 text-sm mb-3">
                          Professores dedicados que vão além do currículo, construindo relacionamentos 
                          duradouros com os alunos e suas famílias.
                        </p>
                        <div className="bg-white p-3 rounded text-xs text-blue-600 italic">
                          "Estou na escola há 17 anos... tenho um carinho muito especial por essa escola 
                          que me acolheu como se fosse uma família" - Prof. Stefano
                        </div>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-bold text-purple-800 mb-3">🎯 Formação Integral</h4>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Desenvolvimento de valores éticos</li>
                          <li>• Protagonismo juvenil</li>
                          <li>• Preparação para cidadania</li>
                          <li>• Projetos sociais e culturais</li>
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-4 text-xl flex items-center gap-2">
                      <Award className="h-6 w-6 text-indigo-600" />
                      Metodologia Silva Jardim
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Ao longo de 100 anos, a escola desenvolveu uma abordagem única que combina rigor 
                      acadêmico com cuidado humano. Cada aluno é visto como um indivíduo com potencial 
                      único, recebendo atenção personalizada para superar desafios e desenvolver talentos.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl mb-1">🎓</div>
                        <div className="font-semibold text-sm">Rigor Acadêmico</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-1">❤️</div>
                        <div className="font-semibold text-sm">Cuidado Humano</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-1">🌟</div>
                        <div className="font-semibold text-sm">Desenvolvimento Integral</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              }

              {activeLegacyTab === 'comunidade' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mb-4">
                      <TreePine className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Raízes Comunitárias</h3>
                    <p className="text-gray-600 text-lg">O coração pulsante do bairro Tucuruvi</p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}>
                      <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26c8m4dTsTvlDRTGizRRz3CO98CrKEpmB2g&s"
                      alt="Escola Silva Jardim"
                      className="w-full rounded-lg shadow-lg mb-4" />
                      <p className="text-sm text-gray-600 italic text-center">
                        A escola como centro de convergência da comunidade
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6">
                      
                      <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                        <h4 className="font-bold text-rose-800 mb-3">🎊 Tradições Familiares</h4>
                        <p className="text-rose-700 text-sm mb-3">
                          "Minha mãe, eu e minha filha estudamos no Silva Jardim. É uma tradição 
                          familiar que se mantém há três gerações." - Patricia Lima
                        </p>
                        <div className="flex items-center gap-2 text-xs text-rose-600">
                          <Heart className="h-3 w-3" />
                          <span>Famílias unidas pela escola</span>
                        </div>
                      </div>

                      <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                        <h4 className="font-bold text-teal-800 mb-3">🏘️ Centro Cultural</h4>
                        <ul className="space-y-2 text-teal-700 text-sm">
                          <li>• Festas juninas legendárias do bairro</li>
                          <li>• Apresentações teatrais e musicais</li>
                          <li>• Eventos esportivos comunitários</li>
                          <li>• Encontros de ex-alunos</li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                        <h4 className="font-bold text-indigo-800 mb-3">🤝 Rede de Apoio</h4>
                        <p className="text-indigo-700 text-sm">
                          A escola sempre funcionou como uma grande família, onde funcionários, 
                          professores, alunos e comunidade se apoiam mutuamente em momentos 
                          de alegria e dificuldade.
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-4 text-xl">🌳 Árvore Genealógica Educacional</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Como uma árvore centenária, a Escola Silva Jardim criou raízes profundas na 
                      comunidade. Seus galhos se estendem por gerações, conectando avós, pais e filhos 
                      através de memórias compartilhadas e valores transmitidos.
                    </p>
                    
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl mb-2">👴👵</div>
                        <div className="font-semibold text-sm text-gray-700">1ª Geração</div>
                        <div className="text-xs text-gray-500">Anos 1940-1960</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl mb-2">👨👩</div>
                        <div className="font-semibold text-sm text-gray-700">2ª Geração</div>
                        <div className="text-xs text-gray-500">Anos 1970-1990</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl mb-2">👦👧</div>
                        <div className="font-semibold text-sm text-gray-700">3ª Geração</div>
                        <div className="text-xs text-gray-500">Anos 2000-2020</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="text-2xl mb-2">👶</div>
                        <div className="font-semibold text-sm text-gray-700">4ª Geração</div>
                        <div className="text-xs text-gray-500">2020+</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              }

              {activeLegacyTab === 'futuro' &&
              <div className="space-y-8">
                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4">
                      <Globe className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Visão de Futuro</h3>
                    <p className="text-gray-600 text-lg">Preparando os próximos 100 anos de excelência</p>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-xl text-center">
                      <div className="text-4xl mb-3">🚀</div>
                      <h4 className="font-bold text-blue-800 mb-2">Inovação Tecnológica</h4>
                      <p className="text-blue-700 text-sm">
                        Laboratórios modernos, ensino híbrido e tecnologia educacional de ponta
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl text-center">
                      <div className="text-4xl mb-3">🌱</div>
                      <h4 className="font-bold text-green-800 mb-2">Sustentabilidade</h4>
                      <p className="text-green-700 text-sm">
                        Educação ambiental, energia renovável e práticas eco-conscientes
                      </p>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl text-center">
                      <div className="text-4xl mb-3">🤝</div>
                      <h4 className="font-bold text-purple-800 mb-2">Parcerias Globais</h4>
                      <p className="text-purple-700 text-sm">
                        Intercâmbios culturais, projetos internacionais e rede mundial de ex-alunos
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-6 text-2xl text-center">
                      🎯 Plano Centenário 2025-2125
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-semibold text-indigo-800 mb-4 flex items-center gap-2">
                          <Building className="h-5 w-5" />
                          Infraestrutura do Futuro
                        </h5>
                        <ul className="space-y-2 text-indigo-700 text-sm">
                          <li>• Salas de aula inteligentes com IA</li>
                          <li>• Laboratórios de realidade virtual</li>
                          <li>• Espaços maker e fab labs</li>
                          <li>• Auditório multiuso renovado</li>
                          <li>• Quadras esportivas cobertas</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-purple-800 mb-4 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5" />
                          Pedagogia Inovadora
                        </h5>
                        <ul className="space-y-2 text-purple-700 text-sm">
                          <li>• Currículo personalizado por IA</li>
                          <li>• Metodologias ativas e gamificação</li>
                          <li>• Projetos interdisciplinares globais</li>
                          <li>• Mentoria individual contínua</li>
                          <li>• Avaliação formativa em tempo real</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-4 text-xl">💫 Compromisso com as Próximas Gerações</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Assim como nossos fundadores sonharam com uma escola que durasse gerações, 
                      hoje planejamos os próximos 100 anos. Queremos que em 2125, os bisnetos dos 
                      atuais alunos encontrem uma escola ainda mais transformadora, tecnologicamente 
                      avançada, mas sempre fiel aos valores humanos que nos definem.
                    </p>
                    <div className="text-center bg-white p-4 rounded-lg">
                      <p className="text-gray-600 italic">
                        "Uma escola centenária não para no tempo - ela se reinventa para o futuro, 
                        mantendo sua essência transformadora."
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl">
                    <h4 className="font-bold text-2xl mb-4">🎊 Rumo ao Bicentenário</h4>
                    <p className="text-xl opacity-90 mb-4">
                      De 1925 a 2125: 200 anos transformando vidas e construindo o futuro
                    </p>
                    <div className="text-4xl">🎓✨🌟</div>
                  </motion.div>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Linha do Tempo */}
      <section id="linha-do-tempo" className="py-16" style={{ background: 'var(--white)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: 'var(--navy)' }}>

            Linha do Tempo
          </motion.h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-600"></div>
            
            {timelineEvents.map((event, index) => <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`timeline-event ml-16 ${activeTimelineEvent === index ? 'active' : ''}`} onClick={() => setActiveTimelineEvent(activeTimelineEvent === index ? null : index)}>

                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg" style={{ color: 'var(--navy)' }}>{event.title}</h3>
                  <span className="text-blue-600 font-semibold">{event.subtitle}</span>
                </div>
                
                {activeTimelineEvent === index && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-gray-700 leading-relaxed mt-3">

                    {event.content}
                  </motion.div>}
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section id="galeria" className="py-16" style={{ background: 'linear-gradient(120deg, #1a1a1a 80%, #2a2a2a 100%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Galeria de Fotos
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Momentos históricos capturados através dos anos da Escola Silva Jardim
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) =>
            <motion.figure
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openImageModal(image.id)}>

                <div className="aspect-square overflow-hidden">
                  <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy" />

                </div>
                
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {image.caption || image.alt}
                    </p>
                  </div>
                  
                  {/* Ícone de zoom */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.figure>
            )}
          </div>

          {/* Indicador de interação */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              <Camera className="h-4 w-4" />
              Clique nas imagens para visualizar em tamanho completo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modal de Imagem */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeImageModal}>

            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}>

              {(() => {
              const currentImage = galleryImages.find((img) => img.id === selectedImage);
              if (!currentImage) return null;

              return (
                <>
                    <img
                    src={currentImage.src}
                    alt={currentImage.alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />

                    
                    {/* Legenda */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                      <p className="text-white text-center font-medium">
                        {currentImage.caption || currentImage.alt}
                      </p>
                    </div>
                    
                    {/* Botão de fechar */}
                    <button
                    onClick={closeImageModal}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors">

                      <X className="h-6 w-6" />
                    </button>
                    
                    {/* Navegação */}
                    <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors">

                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    
                    <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors">

                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>);

            })()}
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      {/* Depoimentos Expandidos */}
      <section id="depoimentos" className="py-16" style={{ background: 'linear-gradient(120deg, #f3f4f7 80%, #e0e3ea 100%)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-center mb-8" style={{ color: '#23272f' }}>

            Depoimentos
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => {
              const isEditing = editingTestimonial === testimonial.id;
              const [editText, setEditText] = useState(testimonial.text);
              const [editAuthor, setEditAuthor] = useState(testimonial.author);

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group relative">

                  <>
                    <p className="text-gray-700 italic mb-4 min-h-[80px]">"{testimonial.text}"</p>
                    <div className="flex items-center gap-2 text-blue-600">
                      <Heart className="h-4 w-4" />
                      <div className="text-sm">
                        <div className="font-semibold">{testimonial.author}</div>
                        {testimonial.role && <div className="text-gray-500">{testimonial.role}</div>}
                        {testimonial.year && <div className="text-gray-400">Turma de {testimonial.year}</div>}
                      </div>
                    </div>
                  </>
                </motion.div>);

            })}
          </div>


        </div>
      </section>

      {/* Bibliografia e Fontes */}
      <section id="fontes" className="py-16" style={{ background: 'var(--white)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-8"
            style={{ color: 'var(--navy)' }}>
            Bibliografia e Fontes
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Wikipédia</h3>
                  <p className="text-gray-700 mb-2">
                    <a
                      href="https://pt.wikipedia.org/wiki/Ant%C3%B4nio_da_Silva_Jardim"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline inline-flex items-center gap-1">
                      Antônio da Silva Jardim
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fonte de informações biográficas, trajetória política e contexto histórico do patrono da escola, reunindo dados de domínio público e referências acadêmicas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Decreto Estadual nº 42.030/1963</h3>
                  <p className="text-gray-700 mb-2">Governo do Estado de São Paulo</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Legislação oficial que reconhece e regulamenta a existência do Grupo Escolar Silva Jardim e sua importância para a educação paulista.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Relatos de ex-alunos e professores</h3>
                  <p className="text-gray-700 mb-2">Depoimentos coletados especialmente para o centenário</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Histórias, memórias e experiências compartilhadas por quem viveu a escola, disponíveis nas redes sociais e arquivos internos.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Documentos oficiais digitalizados</h3>
                  <p className="text-gray-700 mb-2">Certificado de Fundação, Anuários, Recortes de Jornal</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Arquivos históricos preservados e digitalizados, acessíveis na seção Documentos e Arquivos Históricos deste site.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Imagens históricas</h3>
                  <p className="text-gray-700 mb-2">Acervo da escola, arquivos públicos e redes sociais</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Fotografias antigas e atuais que ilustram a trajetória da escola e de sua comunidade.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Book className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Dados educacionais</h3>
                  <p className="text-gray-700 mb-2">IDEB, IDESP, Secretaria da Educação do Estado de São Paulo</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Indicadores oficiais de desempenho e qualidade do ensino, utilizados para contextualizar a evolução da escola.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-gray-700 leading-relaxed">
                Esta bibliografia reúne fontes históricas, acadêmicas e relatos pessoais, garantindo a credibilidade e a riqueza das informações apresentadas. Caso queira contribuir com novas fontes ou correções, entre em contato com a equipe do site.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sistema de Comentários */}
      <section id="comentarios" className="py-16" style={{ background: 'var(--gray-light)' }}>
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Formulário Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">

            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                📝 Envie seu Comentário
              </h2>
              <p className="text-slate-300 text-lg">
                Compartilhe suas memórias e experiências com a Escola Silva Jardim
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-6 card-hover max-w-4xl mx-auto">
              <div className="relative w-full bg-white rounded-xl overflow-hidden shadow-2xl">
                <iframe src={GOOGLE_FORMS_URL} className="w-full h-[720px] border-0" loading="lazy" title="Formulário de comentários Silva Jardim" />

              </div>
            </div>
          </motion.div>

          {/* Comentários Section */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                  💬 Comentários da Comunidade
                </h2>
                <p className="text-slate-300 text-lg">
                  Veja o que nossa comunidade escolar está dizendo
                </p>
              </div>
              
              <button onClick={loadComments} disabled={loading} className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">

                <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                Atualizar
              </button>
            </div>

            {error && <div className="bg-red-500/20 border border-red-500 text-red-100 px-6 py-4 rounded-lg mb-6">
                {error}
              </div>}

            {loading ? <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                <span className="ml-3 text-slate-300">Carregando comentários...</span>
              </div> : comments.length === 0 ? <div className="text-center py-12 glass-effect rounded-2xl">
                <MessageSquare className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-300 text-lg">Nenhum comentário encontrado</p>
                <p className="text-slate-400">Seja o primeiro a compartilhar suas memórias!</p>
              </div> : <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {comments.map((comment, index) => <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="glass-effect rounded-xl p-6 card-hover">

                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {comment.Nome.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{comment.Nome}</h3>
                        <div className="flex items-center gap-1 text-slate-400 text-sm">
                          <Calendar className="h-3 w-3" />
                          {formatDate(comment.Data)}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-slate-200 leading-relaxed mb-4">
                      {comment.Comentario}
                    </p>
                    
                    <div className="flex items-center gap-2 text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    </div>
                  </motion.div>)}
              </div>}
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>);

}

export default App;

