// app/hooks/usePortfolio.ts
import { useState } from 'react';

export function usePortfolio() {
  const [menuAberto, setMenuAberto] = useState(false);

  // Toda a tua lógica que seria o antigo script.js entra aqui
  const abrirMenu = () => setMenuAberto(true);
  const fecharMenu = () => setMenuAberto(false);

  const lidarComWhatsApp = () => {
    window.open("https://wa.me/5511933333826", "_blank");
  };

  // Tu exportas as funções e os estados para a tua página usar
  return {
    menuAberto,
    abrirMenu,
    fecharMenu,
    lidarComWhatsApp
  };
}