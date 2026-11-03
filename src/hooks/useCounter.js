import { useState } from 'react';

// Extrai a lógica reutilizável dos contadores.
export function useCounter(inicial = 0) {
  const [contador, setContador] = useState(inicial);

  const aumentar = () => setContador(n => n + 1);
  const diminuir = () => setContador(n => n - 1);
  const zerar = () => setContador(inicial);

  return { contador, aumentar, diminuir, zerar };
}