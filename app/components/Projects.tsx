export default function Projects() {
  // Ordem pensada em pares por linha na grade de 2 colunas:
  // [IA + ERP] → [SaaS + Web MVC] → [Visão computacional + Dados]
  const projects = [
    {
      title: "Agente de IA para Saúde Pública",
      description:
        "Desenvolvimento de um agente de IA para atendimento público de saúde (SUS municipal) integrado via Docker Compose, utilizando arquitetura RAG com Qdrant para consulta e citação de fontes (unidades, horários, vacinas, exames e diretrizes do Ministério da Saúde).",
      technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "React"],
      link: "https://github.com/ricardodatadev/health-ai-agent.git",
    },
    {
      title: "Sistema de Gestão de Frotas",
      description:
        "Desenvolvimento de um ERP para gestão de frotas e manutenção, estruturando o backend em Laravel (PHP 8.3+) e o frontend em React, integrados via Docker e Docker Compose.",
      technologies: ["PHP", "Laravel", "React", "Docker"],
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
      title: "Sales Web MVC",
      description:
        "Desenvolvimento de uma aplicação web para gerenciamento de departamentos e vendedores, seguindo o padrão MVC com ASP.NET Core, persistência de dados com Entity Framework Core e MySQL.",
      technologies: ["C#", "ASP.NET Core", "Entity Framework", "MySQL", "Docker"],
      link: "https://github.com/ricardodatadev/sales-web-mvc.git",
    },
    {
      title: "Sistema de Detecção de Objetos",
      description:
        "Desenvolvimento de um sistema de detecção de objetos em vídeos com Python, utilizando YOLO (You Only Look Once), modelo de rede neural convolucional voltado à detecção em tempo real, e OpenCV para o processamento das imagens.",
      technologies: ["Python", "YOLO", "OpenCV"],
      link: "https://github.com/ricardodatadev/detector-objetos.git",
    },
    {
      title: "Dashboard Financeiro",
      description:
        "Desenvolvimento de um dashboard interativo com Python, Streamlit e Plotly, com uma interface simples que facilita o acompanhamento dos principais indicadores financeiros.",
      technologies: ["Python", "Streamlit", "Plotly"],
      link: "https://github.com/ricardodatadev/Dashboard-Python.git",
    },
  ];

  // Cores padronizadas por categoria: cada cor tem um significado.
  const categoryColors = {
    linguagem: "bg-amber-900/30 text-amber-300 border border-amber-800/50",
    backend: "bg-emerald-900/30 text-emerald-300 border border-emerald-800/50",
    frontend: "bg-sky-900/30 text-sky-300 border border-sky-800/50",
    dadosIA: "bg-violet-900/30 text-violet-300 border border-violet-800/50",
    banco: "bg-orange-900/30 text-orange-300 border border-orange-800/50",
    devops: "bg-rose-900/30 text-rose-300 border border-rose-800/50",
  } as const;

  const techCategory: Record<string, keyof typeof categoryColors> = {
    // Linguagens
    Python: "linguagem",
    PHP: "linguagem",
    TypeScript: "linguagem",
    JavaScript: "linguagem",
    "C#": "linguagem",
    // Back-end
    FastAPI: "backend",
    Laravel: "backend",
    "Node.js": "backend",
    Express: "backend",
    "ASP.NET Core": "backend",
    // Front-end
    React: "frontend",
    "Next.js": "frontend",
    "Tailwind CSS": "frontend",
    Bootstrap: "frontend",
    // Dados & IA
    LangChain: "dadosIA",
    LangGraph: "dadosIA",
    YOLO: "dadosIA",
    OpenCV: "dadosIA",
    Pandas: "dadosIA",
    Plotly: "dadosIA",
    Streamlit: "dadosIA",
    // Banco de dados & ORM
    PostgreSQL: "banco",
    MySQL: "banco",
    Qdrant: "banco",
    "Entity Framework": "banco",
    // DevOps
    Docker: "devops",
    Git: "devops",
  };

  const defaultTechColor =
    "bg-gray-800/40 text-gray-300 border border-gray-700/50";

  const getTechColor = (tech: string) => {
    const category = techCategory[tech];
    return category ? categoryColors[category] : defaultTechColor;
  };

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

        {/* Grid uniforme - se o total for ímpar, o último card ocupa a linha inteira */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
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
                      className={`px-2.5 py-1 rounded-full text-xs font-bold ${getTechColor(tech)} font-mono`}
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
