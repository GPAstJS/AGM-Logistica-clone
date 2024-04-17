import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Servicos from "./pages/servicos";
import Contato from "./pages/contato";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
