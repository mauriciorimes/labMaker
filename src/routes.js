import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Agendamento from "./pages/Agendamento";
import Equipamentos from "./pages/Equipamentos";
import GaleriaDeFotos from "./pages/GaleriaDeFotos";
import Inicio from "./pages/Inicio";
import PraticasPedagogicas from "./pages/PraticasPedagogicas";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/galeria" element={<GaleriaDeFotos />} />
        <Route path="/praticas" element={<PraticasPedagogicas />} />
      </Routes>
      <Footer />    
    </BrowserRouter>
  );
}

export default AppRoutes;
