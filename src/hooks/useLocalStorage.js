import { useEffect, useState } from 'react';

// Reaproveita estado e persistência em qualquer componente.
export function useLocalStorage(chave, inicial) {
  const [valor, setValor] = useState(() => {
    // Busca o valor salvo quando o estado é inicializado.
    try {
      const salvo = localStorage.getItem(chave);
      return salvo === null ? inicial : JSON.parse(salvo);
    } catch {
      return inicial;
    }
  });

  useEffect(() => {
    // Persiste sempre que chave ou valor mudar.
    try {
      localStorage.setItem(chave, JSON.stringify(valor));
    } catch {
      // Erro de armazenamento não interrompe a demo.
    }
  }, [chave, valor]);

  return [valor, setValor];
}