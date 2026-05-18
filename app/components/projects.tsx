import React from 'react';

const listaProjetos = [
  {
    title: "Odonto PSL",
    desc: "Projeto de site institucional para clínica odontológica. Desenvolvido com HTML5, CSS3 e JavaScript puro, focado em design responsivo e experiência do usuário.",
    tech: "HTML",
    techColor: "#E34F26",
    codeUrl: "https://github.com/jarthur-dev/odontopslsitepages.git",
    demoUrl: "https://odontopslsitepages.vercel.app/"
  },
  {
    title: "Forno Nobre - Sistema de Estoque",
    desc: "Um sistema de estoque básico para uma padaria com controles de nível de acesso 'Administrador/Funcionário'.",
    tech: "Python",
    techColor: "#3776AB",
    codeUrl: "https://github.com/jarthur-dev/Forno-Nobre-Sistema-de-Estoque.git"
  },
  {
    title: "Pão e Prosa",
    desc: "Aplicação mobile em desenvolvimento utilizando React Native com TypeScript, focada na gestão e experiência de usuário para o contexto de uma padaria.",
    tech: "TypeScript",
    techColor: "#3178C6",
    codeUrl: "https://github.com/aaxs7a/Pao-e-Prosa.git"
  },
  {
    title: "NEXUS",
    desc: "E-commerce moderno Nexus desenvolvido com foco em alta performance, Fluidez de navegação e uma experiência de compra totalmente responsiva e integrada.",
    tech: "TypeScript",
    techColor: "#3178C6",
    codeUrl: "https://github.com/PedroDavi-01/nexus_loja.git",
    demoUrl: "https://nexus-loja-xi.vercel.app/"
  },
  {
    title: "Sabor no Ponto",
    desc: "Projeto em desenvolvimento de um sistema para gestão e pedidos da lanchonete Sabor no Ponto. Desenvolvido com foco em agilidade e uma experiência deliciosa para o cliente.",
    tech: "TypeScript",
    techColor: "#3178C6",
    codeUrl: "https://github.com/jadevbuilds/Sabor-no-Ponto.git"
  },
  {
    title: "POBREFLIX",
    desc: "Plataforma de streaming conceitual inspirada na Netflix, desenvolvida com consumo dinâmico de API de conteúdos, interface fluida de alta fidelidade visual e sistema completo de busca e categorização.",
    tech: "TypeScript",
    techColor: "#3178C6",
    codeUrl: "https://github.com/jarthur-dev/Pobreflix-Projeto.git",
    demoUrl: "https://pobreflix-projeto.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#262630]">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black uppercase tracking-wider inline-block font-orbitron">
          Projetos no <span className="text-[#ff2a2a] drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]">GitHub</span>
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {listaProjetos.map((proj, index) => (
          <div 
            key={index} 
            className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] transition-all duration-300 group"
            style={{
              ['--hover-color' as any]: proj.techColor,
              ['--hover-shadow' as any]: `0 0 35px ${proj.techColor}25`
            }}
          >
            <div>
              <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[var(--hover-color)] transition-colors">
                {proj.title}
              </h3>
              <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                {proj.desc}
              </p>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                <span 
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ 
                    backgroundColor: proj.techColor, 
                    boxShadow: `0 0 8px ${proj.techColor}` 
                  }}
                ></span>
                {proj.tech}
              </div>
              <div className="flex gap-4">
                <a 
                  href={proj.codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:text-white transition-all border-0 outline-none hover-btn"
                >
                  <span>Code</span>
                </a>
                {proj.demoUrl && (
                  <a 
                    href={proj.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:text-white transition-all border-0 outline-none hover-btn"
                  >
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>

            <style jsx>{`
              div.group:hover {
                border-color: var(--hover-color);
                box-shadow: var(--hover-shadow);
              }
              :global(.hover-btn:hover) {
                background-color: var(--hover-color) !important;
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}