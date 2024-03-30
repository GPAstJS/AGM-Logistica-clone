import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Servicos from "./pages/servicos";
import Contato from "./pages/contato";
import AreaDoCliente from "./pages/area-do-cliente";
import Carreira from "./pages/carreira";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="servicos" element={<Servicos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="areadocliente" element={<AreaDoCliente />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="carreira" element={<Carreira />} />
      </Routes>
    </BrowserRouter>
  );
}
