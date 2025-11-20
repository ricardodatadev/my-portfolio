import React from "react";

export default function Contact() {
  const contactItems = [
    {
      title: "Email",
      href: "mailto:ricardodatadev@gmail.com",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      description: "ricardodatadev@gmail.com",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/ricardo-pereira-3b327a298/",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      description: "@ricardodatadev",
    },
    {
      title: "GitHub",
      href: "https://github.com/ricardodatadev",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      description: "@ricardodatadev",
    },
  ];

  return (
    <section
      id="contato"
      className="w-full py-16 md:py-28 lg:py-40 bg-gradient-to-br from-gray-950 via-black to-gray-900 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10 max-w-5xl">
        <div className="mb-16 text-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-700 to-teal-700 px-4 py-1.5 text-sm text-white mb-6 font-mono">
            Contato
          </div>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-teal-600 mb-4 font-mono">
            Vamos Trabalhar Juntos
          </h2>
          <p className="max-w-[600px] mx-auto text-gray-400 md:text-xl font-mono">
            Estou sempre aberto a novos projetos e oportunidades de colaboração.
          </p>
        </div>

        {/* Layout centralizado em coluna */}
        <div className="max-w-2xl mx-auto space-y-6">
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/80 border border-gray-800/50 hover:border-emerald-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/20 w-full"
            >
              <div className="h-16 w-16 rounded-full bg-gradient-to-r from-emerald-700/30 to-teal-700/30 flex items-center justify-center group-hover:from-emerald-600/40 group-hover:to-teal-600/40 transition-all flex-shrink-0">
                <div className="text-emerald-500 group-hover:text-emerald-400 transition-colors h-6 w-6">
                  {item.icon}
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors font-mono">
                  {item.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-mono">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
