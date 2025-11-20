import React from "react";

const habilidadesData = [
  {
    categoria: "Backend",
    habilidades: ["PHP", "Python", "Node.js", "Next.js"],
  },
  {
    categoria: "Frontend",
    habilidades: ["HTML5 / CSS3", "JavaScript/React/Next.js", "Tailwind CSS"],
  },
  {
    categoria: "Banco de Dados",
    habilidades: ["MySQL", "PostgreSQL"],
  },
  {
    categoria: "DevOps",
    habilidades: ["Docker", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="w-full py-16 md:py-28 lg:py-40 bg-gradient-to-br from-black via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-emerald-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-teal-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-6xl">
        <div className="mb-16 text-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-700 to-teal-700 px-4 py-1.5 text-sm text-white mb-6 font-mono">
            Habilidades
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 font-mono">
            Tecnologias & Ferramentas
          </h2>
        </div>

        {/* Layout centralizado em coluna única */}
        <div className="max-w-4xl mx-auto space-y-8">
          {habilidadesData.map((item) => (
            <div
              key={item.categoria}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/80 border border-gray-800/50 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20"
            >
              <h3 className="text-3xl font-semibold text-white mb-6 group-hover:text-emerald-400 transition-colors font-mono">
                {item.categoria}
              </h3>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {item.habilidades.map((habilidade) => (
                  <div
                    key={habilidade}
                    className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors font-mono"
                  >
                    <span className="w-2.5 h-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="font-medium text-lg whitespace-nowrap">{habilidade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
