export default function Projects() {
  const projects = [
    {
      title: "Agente de IA para Saúde Pública",
      description:
        "Desenvolvimento de um agente de IA para atendimento público de saúde (SUS municipal) integrado via Docker Compose, utilizando arquitetura RAG com Qdrant para consulta e citação de fontes (unidades, horários, vacinas, exames e diretrizes do Ministério da Saúde).",
      technologies: ["Python", "React", "LangChain", "LangGraph", "FastAPI"],

      link: "https://github.com/ricardodatadev/health-ai-agent.git",
    },
    {
      title: "Sistema de Gestão de Frotas",
      description:
        "Desenvolvimento de um ERP para gestão de frotas e manutenção, estruturando o backend em Laravel (PHP 8.3+) e o frontend em React, integrados via Docker e Docker Compose.",
      technologies: ["PHP", "React", "Laravel", "Docker"],

      link: "https://github.com/ricardodatadev/fleet-management-erp-showcase.git",
    },
    {
      title: "Plataforma de Gestão para Escolas de Música",
      description:
        "Desenvolvimento de uma plataforma SaaS multi-tenant para gestão de escolas de música, com controle de alunos, matrículas, professores, financeiro e agenda sem conflitos de horário. Isolamento de dados entre escolas com Row-Level Security no PostgreSQL.",
      technologies: ["TypeScript", "Node.js", "React", "PostgreSQL"],

      link: "https://github.com/ricardodatadev/music-manager-erp-showcase.git",
    },
    {
      title: "Sistema de Detecção de Objetos",
      description:
        "Projeto utilizando Python e as bibliotecas YOLO e OpenCV com o objetivo de detectar objetos em vídeos. YOLO (You Only Look Once) é um modelo de rede neural convolucional extremamente eficiente para detecção de objetos em tempo real.",
      technologies: ["Python", "YOLO", "OpenCV"],

      link: "https://github.com/ricardodatadev/detector-objetos.git",
    },
    {
      title: "Dashboard Financeiro",
      description:
        "Dashboard utilizando Python, Streamlit e Plotly, com uma interface simples e interativa que facilita o acompanhamento dos principais indicadores financeiros.",
      technologies: ["Python", "Streamlit", "Plotly"],

      link: "https://github.com/ricardodatadev/Dashboard-Python.git",
    },
  ];

  const techColors: Record<string, string> = {
    React: "bg-blue-900/40 text-blue-400 border border-blue-800/50",
    Html: "bg-red-900/40 text-red-400 border border-red-800/50",
    CSS: "bg-gray-800/40 text-gray-300 border border-gray-700/50",
    Javascript: "bg-blue-900/40 text-blue-400 border border-blue-800/50",
    PHP: "bg-blue-900/40 text-blue-200 border border-blue-800/50",
    YOLO: "bg-blue-900/40 text-blue-400 border border-blue-800/50",
    OpenCV: "bg-blue-900/40 text-blue-300 border border-blue-800/50",
    "Power BI": "bg-yellow-900/40 text-yellow-400 border border-yellow-800/50",
    Selenium: "bg-gray-800/40 text-gray-300 border border-gray-700/50",
    PyAutoGUI: "bg-yellow-900/40 text-yellow-300 border border-yellow-800/50",
    Plotly: "bg-orange-900/40 text-orange-400 border border-orange-800/50",
    Streamlit: "bg-pink-900/40 text-pink-400 border border-pink-800/50",
    "Next.js": "bg-gray-900 text-gray-100 border border-gray-700",
    "Node.js": "bg-green-900/40 text-green-400 border border-green-800/50",
    MongoDB: "bg-green-900/40 text-green-300 border border-green-800/50",
    Stripe: "bg-purple-900/40 text-purple-400 border border-purple-800/50",
    TypeScript: "bg-blue-900/40 text-blue-300 border border-blue-800/50",
    PostgreSQL: "bg-indigo-900/40 text-indigo-400 border border-indigo-800/50",
    "Chart.js": "bg-orange-900/40 text-orange-400 border border-orange-800/50",
    "React Native": "bg-teal-900/40 text-teal-400 border border-teal-800/50",
    Firebase: "bg-yellow-900/40 text-yellow-400 border border-yellow-800/50",
    "Maps API": "bg-cyan-900/40 text-cyan-400 border border-cyan-800/50",
    "Tailwind CSS": "bg-teal-900/40 text-teal-300 border border-teal-800/50",
    Prisma: "bg-purple-900/40 text-purple-300 border border-purple-800/50",
    Express: "bg-gray-800/40 text-gray-300 border border-gray-700/50",
    JWT: "bg-red-900/40 text-red-400 border border-red-800/50",
    "D3.js": "bg-orange-900/40 text-orange-300 border border-orange-800/50",
    Python: "bg-yellow-900/40 text-yellow-400 border border-yellow-800/50",
    FastAPI: "bg-green-900/40 text-green-400 border border-green-800/50",
    LangChain: "bg-emerald-900/40 text-emerald-300 border border-emerald-800/50",
    LangGraph: "bg-cyan-900/40 text-cyan-300 border border-cyan-800/50",
    Laravel: "bg-red-900/40 text-red-400 border border-red-800/50",
    Docker: "bg-sky-900/40 text-sky-400 border border-sky-800/50",
  };

  const defaultTechColor =
    "bg-gray-800/40 text-gray-300 border border-gray-700/50";

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden"
    >
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
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/80 border border-gray-800/50 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 flex flex-col h-full ${
                  projects.length % 2 === 1 && index === projects.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
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
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${techColors[tech] ?? defaultTechColor} font-mono`}
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
