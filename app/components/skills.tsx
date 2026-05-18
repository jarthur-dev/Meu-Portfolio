import React from 'react';
import { 
  siHtml5, siCss, siJavascript, siTypescript, 
  siReact, siNextdotjs, siPython, siSupabase, 
  siMysql, siSqlite, siNeon, siNodedotjs 
} from 'simple-icons';

const listaSkills = [
  { name: "HTML5", desc: "Estruturação semântica, acessibilidade web e SEO otimizado.", icon: siHtml5.path, color: "#E34F26", shadow: "rgba(227,79,38,0.15)" },
  { name: "CSS3", desc: "Estilizações modernas, layouts responsivos com Flexbox e Grid.", icon: siCss.path, color: "#1572B6", shadow: "rgba(21,114,182,0.15)" },
  { name: "JavaScript", desc: "Manipulação de DOM, assincronismo, consumo de APIs e ES6+.", icon: siJavascript.path, color: "#F7DF1E", shadow: "rgba(247,223,30,0.1)" },
  { name: "TypeScript", desc: "Tipagem estática estrita eliminando bugs antes mesmo do código rodar.", icon: siTypescript.path, color: "#3178C6", shadow: "rgba(49,120,198,0.15)" },
  { name: "React.js", desc: "Arquitetura de componentes reutilizáveis e reatividade de estados.", icon: siReact.path, color: "#61DAFB", shadow: "rgba(97,218,251,0.15)" },
  { name: "Next.js", desc: "Renderização Server-Side (SSR), App Router e otimização de SEO.", icon: siNextdotjs.path, color: "#ffffff", shadow: "rgba(255,255,255,0.08)" },
  { name: "Python", desc: "Scripts de automação, lógica de programação pura e desenvolvimento ágil.", icon: siPython.path, color: "#3776AB", shadow: "rgba(55,118,171,0.15)" },
  { name: "Supabase", desc: "Plataforma Backend (BaaS), banco PostgreSQL real-time e segurança RLS.", icon: siSupabase.path, color: "#3ECF8E", shadow: "rgba(62,207,142,0.15)" },
  { name: "MySQL", desc: "Bancos de dados relacionais estruturados, modelagem e queries SQL.", icon: siMysql.path, color: "#00758F", shadow: "rgba(0,117,143,0.15)" },
  { name: "SQLite", desc: "Bancos locais EMBARCADOS eficientes ideais para desenvolvimento e mobile.", icon: siSqlite.path, color: "#005F87", shadow: "rgba(0,59,87,0.2)" },
  { name: "Neon", desc: "Banco de dados PostgreSQL Serverless na nuvem com ramificação instantânea.", icon: siNeon.path, color: "#00E599", shadow: "rgba(0,229,153,0.12)" },
  { name: "Node.js", desc: "Ambiente de execução JavaScript assíncrono focado em APIs escaláveis.", icon: siNodedotjs.path, color: "#339933", shadow: "rgba(51,153,51,0.15)" },
];

export default function Skills() {
  return (
    <section id="conhecimentos" className="py-24 px-[8%] border-t border-[#262630]">
      <h2 className="text-3xl font-black uppercase tracking-wider mb-12 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-[#ff2a2a] after:shadow-[0_0_10px_#ff2a2a] font-orbitron">
        Conhecimentos
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listaSkills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:scale-105 transition-all duration-300 group"
            style={{
              // Aplica a cor de borda e sombra customizada dinamicamente no hover através de variáveis CSS nativas
              ['--hover-border' as any]: skill.color,
              ['--hover-shadow' as any]: skill.shadow,
            }}
          >
            <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:scale-110 transition-all duration-300" style={{ color: skill.color }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d={skill.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 font-orbitron">{skill.name}</h3>
            <p className="text-sm text-[#a0a0b0] font-poppins">{skill.desc}</p>

            <style jsx>{`
              div:hover {
                border-color: var(--hover-border);
                box-shadow: 0 10px 25px var(--hover-shadow);
              }
            `}</style>
          </div>
        ))}
      </div>
    </section>
  );
}