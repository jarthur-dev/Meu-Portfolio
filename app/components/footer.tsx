"use client";

import React from 'react';

interface FooterProps {
  onContactClick: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  return (
    <footer id="contato" className="py-20 bg-[#121216] border-t border-[#262630] text-center w-full">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-black uppercase tracking-wider mb-3">Vamos construir algo juntos?</h2>
        <p className="text-[#a0a0b0] mb-10 max-w-md mx-auto text-sm">
          Estou disponível para projetos freelancers, contratos e posições de tempo integral.
        </p>
        
        {/* Fileira de Logos Oficiais em SVG */}
        <div className="flex justify-center items-center gap-8 md:gap-12 mb-12">
          
          {/* WhatsApp Logo */}
          <a 
            href="https://wa.me/5581999472821?text=Olá%20JArthur,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a0a0b0] hover:text-[#25D366] hover:drop-shadow-[0_0_10px_rgba(37,211,102,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            title="WhatsApp"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 12.004-11.952 12.004-.003 0-.005 0-.007 0-2.005-.001-3.975-.5-5.757-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.853.002-2.63-1.023-5.101-2.887-6.967C16.528 1.967 14.063 1.94 11.44 1.94c-5.438 0-9.864 4.421-9.868 9.856-.001 1.714.453 3.39 1.316 4.873l-.991 3.616 3.712-.975zm11.367-5.221c-.303-.151-1.793-.884-2.073-.985-.28-.102-.483-.151-.686.151-.204.302-.79.985-.969 1.186-.18.203-.359.227-.662.076-.303-.151-1.278-.47-2.434-1.499-.899-.801-1.505-1.792-1.681-2.093-.177-.302-.019-.465.132-.615.136-.135.303-.352.454-.529.151-.177.202-.293.303-.49.101-.197.05-.37-.026-.521-.075-.151-.686-1.652-.939-2.26-.247-.593-.499-.513-.686-.523-.178-.01-.382-.01-.585-.01s-.534.076-.813.382c-.28.303-1.069 1.045-1.069 2.551 0 1.506 1.096 2.964 1.246 3.165.151.202 2.157 3.294 5.225 4.617.73.315 1.3.504 1.743.645.733.233 1.4.2 1.925.122.585-.087 1.794-.734 2.048-1.413.255-.68.255-1.263.178-1.382-.077-.119-.28-.191-.583-.341z"/>
            </svg>
          </a>

          {/* LinkedIn Logo */}
          <a 
            href="www.linkedin.com/in/joaoarthur-19d33" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a0a0b0] hover:text-[#0077B5] hover:drop-shadow-[0_0_10px_rgba(0,119,181,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            title="LinkedIn"
          >
            <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>

          {/* GitHub Logo */}
          <a 
            href="https://github.com/jadevbuilds" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#a0a0b0] hover:text-[#ffffff] hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            title="GitHub"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

        </div>

{/* Rodapé inferior com botão de email ativo */}
        <div className="border-t border-[#262630]/50 pt-12 pb-8 text-center">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=joao717arthur@gmail.com&su=Contato%20via%20Portfólio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 py-3 px-8 bg-[#121216] border border-[#262630] rounded-full text-[#a0a0b0] font-mono text-base md:text-lg font-bold tracking-wide uppercase font-orbitron hover:scale-105 hover:border-[#ff2a2a] hover:text-white hover:shadow-[0_0_30px_rgba(255,42,42,0.25)] transition-all duration-300 outline-none group"
          >
            {/* Ícone de Envelope (E-mail) que acende no hover */}
            <svg 
              className="w-5 h-5 text-[#a0a0b0] group-hover:text-[#ff2a2a] transition-colors" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>joao717arthur@gmail.com</span>
          </a>
          
          <p className="text-xs text-[#a0a0b0] mt-6 font-poppins">&copy; 2026 por JArthur.Dev. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}