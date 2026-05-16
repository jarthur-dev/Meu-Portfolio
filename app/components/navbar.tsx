"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Classe utilitária para não repetir o mesmo efeito de linha em todos os links
  const classeLinkNav = "hover:text-[#ff2a2a] transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff2a2a] hover:after:w-full after:transition-all duration-300";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0a0a0c]/90 backdrop-blur-md border-b border-[#262630] z-50 px-6 md:px-24 py-5">
      <nav className="flex justify-between items-center max-w-7xl mx-auto logo">
        <div className="text-2xl font-black tracking-widest font-orbitron">
          JArthur<span className="text-[#ff2a2a] drop-shadow-[0_0_10px_rgba(255,42,42,0.4)]">.Dev</span>
        </div>

        {/* Links Desktop - Efeito replicado para todos com espaçamento ideal */}
        <ul className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider font-orbitron">
          <li>
            <a href="#inicio" className={classeLinkNav}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className={classeLinkNav}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#conhecimentos" className={classeLinkNav}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projetos" className={classeLinkNav}>
              Projetos
            </a>
          </li>

          <li>
            <a href="#contato" className={classeLinkNav}>
              Contato
            </a>
          </li>

        </ul>

        {/* Menu Mobile */}
        <button 
          onClick={() => setMenuAberto(!menuAberto)} 
          className="block md:hidden text-[#f1f1f4] hover:text-[#ff2a2a] cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menu Mobile Aberto */}
      {menuAberto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0c] border-b border-[#262630] py-4 px-6 flex flex-col gap-4 text-center font-orbitron uppercase text-sm">
          <a href="#inicio" onClick={() => setMenuAberto(false)} className="hover:text-[#ff2a2a] py-2">Início</a>
          <a href="#sobre" onClick={() => setMenuAberto(false)} className="hover:text-[#ff2a2a] py-2">Sobre</a>
          <a href="#conhecimentos" onClick={() => setMenuAberto(false)} className="hover:text-[#ff2a2a] py-2">Skills</a>
          <a href="#projetos" onClick={() => setMenuAberto(false)} className="hover:text-[#ff2a2a] py-2">Projetos</a>
          <a href="#contato" onClick={() => setMenuAberto(false)} className="hover:text-[#ff2a2a] py-2">Contato</a>
        </div>
      )}
    </header>
  );
}