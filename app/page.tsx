"use client"; 

import React from 'react';
import Image from 'next/image';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Particles from './components/particles';

// NOVOS IMPORTS SEPARADOS DE CONTEÚDO
import Skills from './components/skills';
import Projects from './components/projects';
import TypewriterEffect from './components/typewriter';

import { 
  siHtml5, siCss, siJavascript, siTypescript, siReact, siNextdotjs
} from 'simple-icons';

export default function Home() {

  const lidarComContato = () => {
    const mensagem = encodeURIComponent("Olá João Arthur, vi o teu portfólio e gostaria de falar sobre um projeto!");
    window.open(`https://wa.me/5581999472821?text=${mensagem}`, "_blank");
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
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animacao-boiar { animation: boiar 4s ease-in-out infinite; }
        `}</style>

        {/* NAVBAR */}
        <Navbar />

        {/* HERO SECTION */}
        <section id="inicio" className="min-h-screen max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between pt-36 lg:pt-0 gap-16">
          
          {/* Lado Esquerdo: Textos */}
          <div className="flex-1 space-y-6 text-left w-full">
            <div className="flex items-center">
              <span className="text-lg font-bold text-[#f1f1f4] tracking-widest block uppercase font-orbitron">
                <span className="text-[#ff2a2a] animate-pulse drop-shadow-[0_0_4px_#ff2a2a] mr-2 text-xl font-black">{'{'}</span>
                HELLO WORLD
                <span className="text-[#ff2a2a] animate-pulse drop-shadow-[0_0_4px_#ff2a2a] ml-2 text-xl font-black">{'}'}</span>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase leading-[1.1] font-orbitron">
              <span className="block text-white">EU SOU</span> 
              <span className="text-[#ff2a2a] block drop-shadow-[0_0_20px_rgba(255,42,42,0.4)]">
                JOÃO ARTHUR
              </span>
            </h1> 

            {/* Subtítulo Animado Reutilizado */}
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
            
            <div className="w-[76%] h-[76%] rounded-2xl bg-[#121216] border border-[#262630] p-3 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] z-10 relative group-hover:border-[#ff2a2a]/40 transition-all duration-500 animacao-boiar">
              <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#1c1c24]">
                <Image src="/joaoperfil.jpg" alt="João Arthur" fill priority className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Ícones Flutuantes Mapeados via Vetor Manual */}
            <div className="absolute top-[6%] right-[6%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#3178C6] shadow-lg hover:scale-110 hover:border-[#3178C6] hover:shadow-[0_0_15px_rgba(49,120,198,0.4)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '0.6s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siTypescript.path} /></svg></div>
            <div className="absolute top-[28%] right-[2%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#61DAFB] shadow-lg hover:scale-110 hover:border-[#61DAFB] hover:shadow-[0_0_15px_rgba(97,218,251,0.4)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '1.4s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siReact.path} /></svg></div>
            <div className="absolute bottom-[6%] left-[6%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#E34F26] shadow-lg hover:scale-110 hover:border-[#E34F26] hover:shadow-[0_0_15px_rgba(227,79,38,0.4)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '0.3s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siHtml5.path} /></svg></div>
            <div className="absolute bottom-[28%] left-[2%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#1572B6] shadow-lg hover:scale-110 hover:border-[#1572B6] hover:shadow-[0_0_15px_rgba(21,114,182,0.4)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '1.1s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siCss.path} /></svg></div>
            <div className="absolute bottom-[-2%] left-[26%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-[#F7DF1E] shadow-lg hover:scale-110 hover:border-[#F7DF1E] hover:shadow-[0_0_15px_rgba(247,223,30,0.3)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '1.8s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siJavascript.path} /></svg></div>
            <div className="absolute bottom-[4%] right-[14%] p-4 bg-[#121216] border border-[#262630] rounded-xl text-white shadow-lg hover:scale-110 hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 z-20 animacao-boiar" style={{ animationDelay: '0.9s' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={siNextdotjs.path} /></svg></div>

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
            <div className="w-full md:w-auto flex justify-center relative min-h-[260px] px-6 group">
              <div className="w-64 h-64 bg-gradient-to-br from-[#121216] to-[#0a0a0c] border border-[#262630] rounded-2xl flex items-center justify-center text-6xl text-[#ff2a2a] shadow-2xl -rotate-6 hover:rotate-0 hover:border-[#ff2a2a] transition-all duration-500 select-none">
                <code>&lt;/&gt;</code>
              </div>
              <div className="absolute top-4 left-0 text-[#3178c6] bg-[#121216] border border-[#262630] px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold font-orbitron group-hover:border-[#3178c6] transition-colors">TS</div>
              <div className="absolute bottom-4 right-0 text-[#61dafb] bg-[#121216] border border-[#262630] px-3 py-1.5 rounded-xl shadow-lg text-sm font-bold font-orbitron group-hover:border-[#61dafb] transition-colors">React.js</div>
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
                Domino o fluxo de versionamento com <strong className="text-white">Git e GitHub</strong> para manter projetos limpos e organizados, além de gerenciar de ponta a ponta o deploy e a hospedagem de aplicações em plataformas modernas como <strong className="text-white">Vercel e Netlify</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* SEÇÃO CONHECIMENTOS (COMPONENTE IMPORTADO) */}
        <Skills />

        {/* SEÇÃO DE PROJETOS (COMPONENTE IMPORTADO) */}
        <Projects />

        {/* FOOTER */}
        <Footer onContactClick={lidarComContato} />

      </div>
    </div>
  );
}