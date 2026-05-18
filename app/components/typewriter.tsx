import React from 'react';

export default function TypewriterEffect() {
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