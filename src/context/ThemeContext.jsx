import { createContext, useState } from 'react';

// Cria o contexto; o valor será disponibilizado pelo Provider.
export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  // O estado está acima das páginas da aplicação.
  const [tema, setTema] = useState('claro');

  function alternarTema() {
    setTema(anterior => anterior === 'claro' ? 'escuro' : 'claro');
  }

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}