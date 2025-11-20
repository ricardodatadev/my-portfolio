export default function Projects() {
    const projects = [
      {
        title: 'Portfólio',
        description:
          'Um portfolio moderno e responsivo desenvolvido com Next.js, React, TypeScript e Tailwind CSS.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    
        link: 'https://github.com',
      },
      
      {
        title: 'Sistema de Cadastro de Frotas',
        description:
          'O sistema implementa as operações completas de CRUD (Criar, Ler, Atualizar e Deletar), oferecendo uma interface simples, responsiva e fácil de usar, que permite o controle e a organização das frotas e equipamentos de forma eficiente e prática.',
        technologies: ['PHP', 'Javascript', 'Html', 'CSS'],
       
        link: 'https://automotiva.rdatadev.site/',
      },
      {
        title: 'Sistema de Detecção de Objetos',
        description:
          'Projeto utilizando Python e as bibliotecas YOLO e OpenCV com o objetivo de detectar objetos em vídeos. YOLO (You Only Look Once) é um modelo de rede neural convolucional extremamente eficiente para detecção de objetos em tempo real.',
        technologies: ['Python', 'YOLO', 'OpenCV'],
       
        link: 'https://github.com/ricardodatadev/Detector-Objetos.git',
      },
      {
        title: 'Dashboard Financeiro',
        description:
          'Dashboard utilizando Python, Streamlit e Plotly, com uma interface simples e interativa que facilita o acompanhamento dos principais indicadores financeiros.',
        technologies: ['Python', 'Streamlit', 'Plotly'],
        
        link: 'https://github.com/ricardodatadev/Dashboard-Python.git',
      },
    ];
  
  
    const techColors: Record<string, string> = {
      'React': 'bg-blue-900/40 text-blue-400 border border-blue-800/50',
      'Html': 'bg-red-900/40 text-red-400 border border-red-800/50',
      'CSS': 'bg-gray-800/40 text-gray-300 border border-gray-700/50',
      'Javascript': 'bg-blue-900/40 text-blue-400 border border-blue-800/50',
      'PHP': 'bg-blue-900/40 text-blue-200 border border-blue-800/50',
      'YOLO': 'bg-blue-900/40 text-blue-400 border border-blue-800/50',
      'OpenCV': 'bg-blue-900/40 text-blue-300 border border-blue-800/50',
      'Power BI': 'bg-yellow-900/40 text-yellow-400 border border-yellow-800/50',
      'Selenium': 'bg-gray-800/40 text-gray-300 border border-gray-700/50',
      'PyAutoGUI': 'bg-yellow-900/40 text-yellow-300 border border-yellow-800/50',
      'Plotly': 'bg-orange-900/40 text-orange-400 border border-orange-800/50',
      'Streamlit': 'bg-pink-900/40 text-pink-400 border border-pink-800/50',
      'Next.js': 'bg-gray-900 text-gray-100 border border-gray-700',
      'Node.js': 'bg-green-900/40 text-green-400 border border-green-800/50',
      'MongoDB': 'bg-green-900/40 text-green-300 border border-green-800/50',
      'Stripe': 'bg-purple-900/40 text-purple-400 border border-purple-800/50',
      'TypeScript': 'bg-blue-900/40 text-blue-300 border border-blue-800/50',
      'PostgreSQL': 'bg-indigo-900/40 text-indigo-400 border border-indigo-800/50',
      'Chart.js': 'bg-orange-900/40 text-orange-400 border border-orange-800/50',
      'React Native': 'bg-teal-900/40 text-teal-400 border border-teal-800/50',
      'Firebase': 'bg-yellow-900/40 text-yellow-400 border border-yellow-800/50',
      'Maps API': 'bg-cyan-900/40 text-cyan-400 border border-cyan-800/50',
      'Tailwind CSS': 'bg-teal-900/40 text-teal-300 border border-teal-800/50',
      'Prisma': 'bg-purple-900/40 text-purple-300 border border-purple-800/50',
      'Express': 'bg-gray-800/40 text-gray-300 border border-gray-700/50',
      'JWT': 'bg-red-900/40 text-red-400 border border-red-800/50',
      'D3.js': 'bg-orange-900/40 text-orange-300 border border-orange-800/50',
      'Python': 'bg-yellow-900/40 text-yellow-400 border border-yellow-800/50',
      'FastAPI': 'bg-green-900/40 text-green-400 border border-green-800/50',
    };
  
  
  
    return (
      <section id="projects" className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-teal-900 rounded-full blur-3xl"></div>
        </div>
  
        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="mb-16 text-center">
            <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-700 to-teal-700 px-4 py-1.5 text-sm text-white mb-6 font-mono">
              Projetos
            </div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 font-mono">
              Meus Trabalhos
            </h2>
          </div>
  
          {/* Grid uniforme - todos os projetos com mesmo tamanho */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/80 border border-gray-800/50 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 flex flex-col h-full"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed font-mono flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-full text-xs font-bold ${techColors[tech]} font-mono`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors font-mono mt-auto"
                  >
                    Ver Projeto →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  