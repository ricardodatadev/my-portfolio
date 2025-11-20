import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full py-16 md:py-28 lg:py-40 bg-gradient-to-br from-black via-gray-950 to-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-6xl">
        {/* Header centralizado */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-700 to-teal-700 px-4 py-1.5 text-sm text-white mb-6 font-mono">
            Sobre Mim
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 mb-12 font-mono">
            Ricardo Pereira
          </h2>

          {/* Foto centralizada no topo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 rounded-full animate-pulse blur-xl opacity-50"></div>
              <div className="absolute inset-1 bg-black rounded-full overflow-hidden relative">
                <Image
                  src="/minha-foto.jpeg"
                  alt="Ricardo Pereira"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700/30 to-teal-700/30 rounded-full mix-blend-overlay"></div>
            </div>
          </div>
        </div>

        {/* Textos centralizados em coluna única */}
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <p className="text-gray-400 md:text-lg lg:text-xl leading-relaxed font-mono">
            Olá! 👋 Sou{" "}
            <span className="font-semibold text-emerald-500">
              Ricardo Pereira
            </span>,
            desenvolvedor full stack com experiência prática em projetos web e em atividades analíticas. 
          </p>

          <p className="text-gray-400 md:text-lg lg:text-xl leading-relaxed font-mono">
            Atuo em desenvolvimento de front e back-end, integração com bancos de dados e vivência em processos, indicadores e KPIs, contribuindo para a organização de dados, eficiência operacional e apoio à tomada de decisão.
          </p>

          <p className="text-gray-400 md:text-lg lg:text-xl leading-relaxed font-mono">
            Minha principal especialidade é o desenvolvimento com{" "}
            <span className="font-semibold text-emerald-500">JavaScript</span>,{" "}
            <span className="font-semibold text-emerald-500">
              React / Next.js
            </span>
            , <span className="font-semibold text-emerald-500">Python</span> e{" "}
            <span className="font-semibold text-emerald-500">PHP</span> —
            incluindo boas práticas e código limpo.
          </p>
        </div>
      </div>
    </section>
  );
}
