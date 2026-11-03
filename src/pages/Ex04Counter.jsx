import { useCounter } from '../hooks/useCounter.js';

function Contador({ titulo, inicial }) {
  // Cada chamada possui um estado próprio.
  const { contador, aumentar, diminuir, zerar } = useCounter(inicial);

  return (
    <div className="subpanel">
      <h2>{titulo}: {contador}</h2>
      <button onClick={diminuir}>-1</button>
      <button onClick={aumentar}>+1</button>
      <button onClick={zerar}>Restaurar</button>
    </div>
  );
}

export default function Ex04Counter() {
  return (
    <section className="panel">
      <h1>Custom Hook</h1>
      <div className="cards">
        <Contador titulo="A" inicial={0} />
        <Contador titulo="B" inicial={10} />
      </div>
    </section>
  );
}