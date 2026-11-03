import { NavLink, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Ex01Titulo from "./pages/Ex01Titulo";


export default function App() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="brand">⚛ Laboratório React</div>
        <p>5 exercícios demonstrativos</p>
        <nav aria-label="Exercícios">
          {pages.map((pagina) => (
            // NavLink aplica 'active' automaticamente na rota selecionada.
            <NavLink key={pagina.path} to={pagina.path} end>
              {pagina.label}
            </NavLink>
          ))}
        </nav>
      </aside>

    </div>
  );
}const pages = [
  { path: "/", label: "Home" },
  { path: "/exercicio-1", label: "01 · Effect: título" },
];

