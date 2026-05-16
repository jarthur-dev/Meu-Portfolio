"use client"; 

import React from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { 
  siHtml5, 
  siCss, 
  siJavascript, 
  siTypescript, 
  siReact, 
  siNextdotjs, 
  siPython, 
  siSupabase, 
  siMysql, 
  siSqlite, 
  siNeon,
  siNodedotjs
} from 'simple-icons';
import Particles from './components/particles';

export default function Home() {

  const lidarComContato = () => {
    const mensagem = encodeURIComponent("Olá João Arthur, vi o teu portfólio e gostaria de falar sobre um projeto!");
    window.open(`https://wa.me/5511933333826?text=${mensagem}`, "_blank");
  };

  return (
    <div className="bg-[#0a0a0c] text-[#f1f1f4] min-h-screen selection:bg-[#ff2a2a] selection:text-black relative overflow-x-hidden">
      
      {/* CANVAS DE PARTÍCULAS NO FUNDO FIXO DA TELA */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-80">
        <Particles
          particleColors={["#ff2a2a", "#ff0000", "#ff5555", "#cc0000"]}
          particleCount={180}
          particleSpread={12}
          speed={0.06}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={2}
        />
      </div>

      {/* CONTEÚDO PRINCIPAL (z-10 garante que o site fica por cima do canvas) */}
      <div className="relative z-10 w-full">

        {/* ESTILOS CUSTOMIZADOS PARA A ANIMAÇÃO DE BOIAR (FLOATING) */}
        <style jsx global>{`
          @keyframes boiar {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animacao-boiar {
            animation: boiar 4s ease-in-out infinite;
          }
        `}</style>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION - COM EFEITO MÁQUINA DE ESCREVER (TYPEWRITER) */}
        <section id="inicio" className="min-h-screen max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-36 lg:pt-0 gap-16">
          
          {/* Lado Esquerdo: Textos */}
          <div className="flex-1 space-y-6 text-left w-full">
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#ff2a2a" className="animate-pulse drop-shadow-[0_0_10px_#ff2a2a]"/>
              </svg>
              <span className="text-lg font-bold text-[#f1f1f4] tracking-widest block uppercase font-orbitron">
                HELLO WORLD
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[1.1] font-orbitron">
              <span className="block text-white">EU SOU</span> 
              <span className="text-[#ff2a2a] block drop-shadow-[0_0_20px_rgba(255,42,42,0.4)]">
                JOÃO ARTHUR
              </span>
            </h1> 

            {/* Subtítulo Animado */}
            <div className="h-8 md:h-10 flex items-center">
              <h2 className="text-xl md:text-2xl font-bold text-[#e1e1e6] font-orbitron flex items-center">
                <TypewriterEffect />
              </h2>
            </div>

            <p className="text-[#a0a0b0] leading-relaxed text-base max-w-lg font-poppins">
              Construindo aplicações web de alta performance com TypeScript, interfaces modernas e arquiteturas escaláveis.
            </p>
            
            <button 
              onClick={lidarComContato}
              className="px-8 py-4 border-2 border-[#ff2a2a] text-[#ff2a2a] font-black tracking-wider rounded uppercase hover:bg-[#ff2a2a] hover:text-black hover:shadow-[0_0_25px_rgba(255,42,42,0.6)] transition-all transform hover:-translate-y-1 cursor-pointer block text-base font-orbitron"
            >
              Fale Comigo
            </button>
          </div>

          {/* Lado Direito: Foto Ampliada e Ícones flutuando */}
          <div className="flex-1 flex justify-center items-center relative w-full max-w-[480px] aspect-square group">
            <div className="absolute w-[60%] h-[60%] rounded-full bg-[#ff2a2a]/10 blur-[80px] pointer-events-none z-0"></div>
            
            <div 
              className="w-[76%] h-[76%] rounded-2xl bg-[#121216] border border-[#262630] p-3 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 relative group-hover:border-[#ff2a2a]/40 transition-all duration-500 animacao-boiar"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#1c1c24]">
                <Image 
                  src="/joaoperfil.jpg" 
                  alt="João Arthur" 
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* TypeScript */}
            <div 
              className="absolute top-[6%] right-[6%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#3178C6] shadow-lg hover:scale-110 hover:border-[#3178C6] hover:shadow-[0_0_15px_rgba(49,120,198,0.4)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '0.6s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siTypescript.path} /></svg>
            </div>

            {/* React.js */}
            <div 
              className="absolute top-[28%] right-[2%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#61DAFB] shadow-lg hover:scale-110 hover:border-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.4)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '1.4s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siReact.path} /></svg>
            </div>

            {/* HTML5 */}
            <div 
              className="absolute bottom-[6%] left-[6%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#E34F26] shadow-lg hover:scale-110 hover:border-[#E34F26] hover:shadow-[0_0_15px_rgba(227,79,38,0.4)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '0.3s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siHtml5.path} /></svg>
            </div>

            {/* CSS3 */}
            <div 
              className="absolute bottom-[28%] left-[2%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#1572B6] shadow-lg hover:scale-110 hover:border-[#1572B6] hover:shadow-[0_0_15px_rgba(21,114,182,0.4)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '1.1s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siCss.path} /></svg>
            </div>

            {/* JavaScript */}
            <div 
              className="absolute bottom-[-2%] left-[26%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#F7DF1E] shadow-lg hover:scale-110 hover:border-[#F7DF1E] hover:shadow-[0_0_15px_rgba(247,223,30,0.3)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '1.8s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siJavascript.path} /></svg>
            </div>

            {/* Next.js */}
            <div 
              className="absolute bottom-[4%] right-[14%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-white shadow-lg hover:scale-110 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 z-20 animacao-boiar"
              style={{ animationDelay: '0.9s' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siNextdotjs.path} /></svg>
            </div>

            <div className="absolute w-[92%] h-[92%] border border-[#262630]/40 rounded-full pointer-events-none z-0"></div>
            <div className="absolute w-[105%] h-[105%] border border-[#262630]/20 rounded-full pointer-events-none rotate-45 z-0"></div>
          </div>
        </section>
  
        {/* SEÇÃO SOBRE MIM */}
        <section id="sobre" className="py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#262630]">
          <h2 className="text-3xl font-black uppercase tracking-wider mb-16 relative inline-block font-orbitron after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-[#ff2a2a] after:shadow-[0_0_10px_#ff2a2a]">
            Sobre Mim
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-auto flex justify-center relative min-h-[260px] px-6">
              <div className="w-64 h-64 bg-gradient-to-br from-[#121216] to-[#0a0a0c] border border-[#262630] rounded-2xl flex items-center justify-center text-6xl text-[#ff2a2a] shadow-2xl -rotate-6 hover:rotate-0 hover:border-[#ff2a2a] transition-all duration-500 group select-none">
                <code>&lt;/&gt;</code>
              </div>
              <div className="absolute top-4 left-0 text-[#3178c6] bg-[#121216] border border-[#262630] px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold font-orbitron group-hover:border-[#3178c6] transition-colors">TS</div>
              <div className="absolute bottom-4 right-0 text-[#61dafb] bg-[#121216] border border-[#262630] px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold font-orbitron group-hover:border-[#61dafb] transition-colors">React</div>
            </div>

            <div className="flex-1 space-y-5 text-[#a0a0b0] font-poppins text-base md:text-lg">
              <p className="font-semibold text-white text-xl">
                Olá! Meu nome é João Arthur, tenho <span className="text-[#ff2a2a] font-orbitron">20 anos</span> e atuo no mercado digital como <span className="text-[#ff2a2a] font-orbitron">JArthur.Dev</span>.
              </p>
              
              <p className="leading-relaxed">
                Minha maior força e afinidade estão no desenvolvimento <strong className="text-white">Front-End</strong>. É na linha de frente da aplicação onde me destaco, transformando ideias complexas em interfaces modernas, fluidas e de alta conversão utilizando <strong className="text-white">HTML5, CSS3, Bootstrap, JavaScript e TypeScript</strong>, potencializados pelo ecossistema do <strong className="text-white">React.js e Next.js</strong>.
              </p>
              
              <p className="leading-relaxed">
                Apesar do meu foco principal na interface, possuo uma base sólida e versátil que me permite transitar pelo ecossistema full-stack. Tenho experiência prática no desenvolvimento de automações e lógica com <strong className="text-white">Python</strong>, criação de estruturas escaláveis com <strong className="text-white">Node.js</strong> e manipulação inteligente de bancos de dados relacionais e serverless, como <strong className="text-white">Supabase, Neon, MySQL e SQLite</strong>.
              </p>

              <p className="leading-relaxed">
                Domino o fluxo de versionamento com <strong className="text-white">Git e GitHub</strong> para manter projetos limpos e organizados, além de gerenciar de ponta a ponta o deploy e a hospedagem de aplicações em plataformas modernas como <strong className="text-white">Vercel e Netlify</strong>. Meu objetivo é continuar construindo soluções robustas que unem design de impacto à máxima performance.
              </p>
            </div>
          </div>
        </section>

        {/* CONHECIMENTOS (SKILLS) */}
        <section id="conhecimentos" className="py-24 px-[8%] border-t border-[#262630]">
          <h2 className="text-3xl font-black uppercase tracking-wider mb-12 relative inline-block after:absolute after:bottom-[-8px] after:left-0 after:w-16 after:h-1 after:bg-[#ff2a2a] after:shadow-[0_0_10px_#ff2a2a]">
            Conhecimentos
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Card HTML5 */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#E34F26] hover:shadow-[0_10px_25px_rgba(227,79,38,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#E34F26] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siHtml5.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">HTML5</h3>
              <p className="text-sm text-[#a0a0b0]">Estruturação semântica, acessibilidade web e SEO otimizado.</p>
            </div>

            {/* Card CSS3 */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#1572B6] hover:shadow-[0_10px_25px_rgba(21,114,182,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#1572B6] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siCss.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">CSS3</h3>
              <p className="text-sm text-[#a0a0b0]">Estilizações modernas, layouts responsivos com Flexbox e Grid.</p>
            </div>

            {/* Card JavaScript */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#F7DF1E] hover:shadow-[0_10px_25px_rgba(247,223,30,0.1)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#F7DF1E] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siJavascript.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">JavaScript</h3>
              <p className="text-sm text-[#a0a0b0]">Manipulação de DOM, assincronismo, consumo de APIs e ES6+.</p>
            </div>

            {/* Card TypeScript */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#3178C6] hover:shadow-[0_10px_25px_rgba(49,120,198,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#3178C6] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siTypescript.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">TypeScript</h3>
              <p className="text-sm text-[#a0a0b0]">Tipagem estática estrita eliminando bugs antes mesmo do código rodar.</p>
            </div>

            {/* Card React */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#61DAFB] hover:shadow-[0_10px_25px_rgba(97,218,251,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#61DAFB] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siReact.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">React.js</h3>
              <p className="text-sm text-[#a0a0b0]">Arquitetura de componentes reutilizáveis e reatividade de estados.</p>
            </div>

            {/* Card Next.js */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#ffffff] hover:shadow-[0_10px_25px_rgba(255,255,255,0.08)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#ffffff] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siNextdotjs.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Next.js</h3>
              <p className="text-sm text-[#a0a0b0]">Renderização Server-Side (SSR), App Router e otimização de SEO.</p>
            </div>

            {/* Card Python */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#3776AB] hover:shadow-[0_10px_25px_rgba(55,118,171,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#3776AB] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siPython.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-sm text-[#a0a0b0]">Scripts de automação, lógica de programação pura e desenvolvimento ágil.</p>
            </div>

            {/* Card Supabase */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#3ECF8E] hover:shadow-[0_10px_25px_rgba(62,207,142,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#3ECF8E] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siSupabase.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Supabase</h3>
              <p className="text-sm text-[#a0a0b0]">Plataforma Backend (BaaS), banco PostgreSQL real-time e segurança RLS.</p>
            </div>

            {/* Card MySQL */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#00758F] hover:shadow-[0_10px_25px_rgba(0,117,143,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#00758F] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siMysql.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">MySQL</h3>
              <p className="text-sm text-[#a0a0b0]">Bancos de dados relacionais estruturados, modelagem e queries SQL.</p>
            </div>

            {/* Card SQLite */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#003B57] hover:shadow-[0_10px_25px_rgba(0,59,87,0.2)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#005F87] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siSqlite.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">SQLite</h3>
              <p className="text-sm text-[#a0a0b0]">Bancos locais EMBARCADOS eficientes ideais para desenvolvimento e mobile.</p>
            </div>

            {/* Card Neon */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#00E599] hover:shadow-[0_10px_25px_rgba(0,229,153,0.12)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#00E599] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siNeon.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Neon</h3>
              <p className="text-sm text-[#a0a0b0]">Banco de dados PostgreSQL Serverless na nuvem com ramificação instantânea.</p>
            </div>

            {/* Card Node.js */}
            <div className="bg-[#121216] border border-[#262630] p-6 rounded-lg text-center hover:border-[#339933] hover:shadow-[0_10px_25px_rgba(51,153,51,0.15)] transition-all group">
              <div className="flex justify-center mb-4 text-[#a0a0b0] group-hover:text-[#339933] group-hover:scale-110 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d={siNodedotjs.path} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Node.js</h3>
              <p className="text-sm text-[#a0a0b0]">Ambiente de execução JavaScript assíncrono focado em APIs escaláveis.</p>
            </div>
          </div>
        </section>

{/* SEÇÃO DE PROJETOS (INSPIRADO MO MODELO GC.DEV SOLICITADO) */}
        <section id="projetos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#262630]">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black uppercase tracking-wider inline-block font-orbitron">
              Projetos no <span className="text-[#ff2a2a] drop-shadow-[0_0_15px_rgba(255,42,42,0.4)]">GitHub</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 - BellaMake */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#E34F26] hover:shadow-[0_0_45px_rgba(227,79,38,0.15)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#E34F26] transition-colors">
                  BellaMake
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                  Loja de maquiagem feminina BellaMake com painel de administrador integrado e gerenciamento de estoque em tempo real.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E34F26] shadow-[0_0_8px_#E34F26]"></span>
                  HTML
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/joaoarthur717/BellaMake" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#E34F26] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                  <a href="https://joaoarthur717.github.io/BellaMake/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#E34F26] hover:text-white transition-all border-0 outline-none">
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 - JH-Pink */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#1572B6] hover:shadow-[0_0_35px_rgba(21,114,182,0.25)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#1572B6] transition-colors">
                  JH-Pink
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                  Loja de maquiagem feminina JH Pink. Interface responsiva focada em alta conversão e experiência visual minimalista.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1572B6] shadow-[0_0_8px_#1572B6]"></span>
                  CSS
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/joaoarthur717/JH-Pink" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#1572B6] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                  <a href="https://joaoarthur717.github.io/JH-Pink/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#1572B6] hover:text-white transition-all border-0 outline-none">
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 - CloneSpotify */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#F7DF1E] hover:shadow-[0_0_35px_rgba(247,223,30,0.18)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#F7DF1E] transition-colors">
                  CloneSpotify
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                  Um tipo de clone do Spotify utilizando a API oficial do próprio Spotify para autenticação, busca e reprodução de faixas.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7DF1E] shadow-[0_0_8px_#F7DF1E]"></span>
                  JavaScript
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/joaoarthur717/CloneSpotify" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#F7DF1E] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 - NEXUS */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#3178C6] hover:shadow-[0_0_35px_rgba(49,120,198,0.25)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#3178C6] transition-colors">
                  NEXUS
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                 E-commerce moderno Nexus desenvolvido com foco em alta performance, Fluidez de navegação e uma experiência de compra totalmente responsiva e integrada.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3178C6] shadow-[0_0_8px_#3178C6]"></span>
                  TypeScript
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/PedroDavi-01/nexus_loja.git" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#3178C6] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                  <a href="https://nexus-loja-xi.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#3178C6] hover:text-white transition-all border-0 outline-none">
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 5 - Sabor-no-Ponto */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#3178C6] hover:shadow-[0_0_35px_rgba(49,120,198,0.25)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#3178C6] transition-colors">
                  Sabor-no-Ponto
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                  Site de catálogo de filmes feito como projeto final da unidade acadêmica, focado em boas práticas estruturais e semântica.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3178C6] shadow-[0_0_8px_#3178C6]"></span>
                  TypeScript
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/jadevbuilds/Sabor-no-Ponto.git" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#1572B6] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 6 - GB-TechStore */}
            <div className="bg-[#121216] border border-[#262630] p-8 rounded-xl flex flex-col justify-between min-h-[320px] hover:scale-[1.03] hover:border-[#F7DF1E] hover:shadow-[0_0_35px_rgba(247,223,30,0.18)] transition-all duration-300 group">
              <div>
                <h3 className="text-2xl font-black text-white font-orbitron mb-3 tracking-wide group-hover:text-[#F7DF1E] transition-colors">
                  GB-TechStore
                </h3>
                <p className="text-[#a0a0b0] font-poppins text-sm leading-relaxed mb-6">
                  Projeto desenvolvido com foco em performance e UI moderna, simulando um e-commerce de hardware completo e fluido.
                </p>
              </div>
              
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2 text-sm font-bold text-white font-orbitron">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F7DF1E] shadow-[0_0_8px_#F7DF1E]"></span>
                  JavaScript
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/joaoarthur717/GB-TechStore" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#1c1c24] rounded font-bold text-sm tracking-wider uppercase font-orbitron text-[#a0a0b0] hover:scale-105 hover:bg-[#F7DF1E] hover:text-white transition-all border-0 outline-none">
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <Footer onContactClick={lidarComContato} />

      </div>
    </div>
  );
}

// SUBCOMPONENTE DE ANIMAÇÃO MÁQUINA DE ESCREVER
function TypewriterEffect() {
  const frases = [
    "Desenvolvedor Front-End",
    "HTML & CSS",
    "JavaScript & TypeScript",
    "React.js & Next.js",
    "Criador de Soluções"
  ];

  const [indiceFrase, setIndiceFrase] = React.useState(0);
  const [textoAtual, setTextoAtual] = React.useState("");
  const [estaApagando, setEstaApagando] = React.useState(false);

  React.useEffect(() => {
    const fraseCompleta = frases[indiceFrase];
    let tempoVariante = estaApagando ? 50 : 120;

    if (!estaApagando && textoAtual === fraseCompleta) {
      tempoVariante = 2000;
      const timeout = setTimeout(() => setEstaApagando(true), tempoVariante);
      return () => clearTimeout(timeout);
    }

    if (estaApagando && textoAtual === "") {
      setEstaApagando(false);
      setIndiceFrase((prev) => (prev + 1) % frases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setTextoAtual(
        estaApagando
          ? fraseCompleta.substring(0, textoAtual.length - 1)
          : fraseCompleta.substring(0, textoAtual.length + 1)
      );
    }, tempoVariante);

    return () => clearTimeout(timeout);
  }, [textoAtual, estaApagando, indiceFrase]);

  return (
    <>
      <span>{textoAtual}</span>
      <span className="ml-1 inline-block w-[3px] h-[22px] bg-[#ff2a2a] animate-pulse"></span>
    </>
  );
}