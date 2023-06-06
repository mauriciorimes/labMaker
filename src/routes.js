import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Agendamento from "./pages/Agendamento";
import Equipamentos from "./pages/Equipamentos";
import GaleriaDeFotos from "./pages/GaleriaDeFotos";
import Inicio from "./pages/Inicio";
import PraticasPedagogicas from "./pages/PraticasPedagogicas";
import AdminAgendamentos from "pages/AdminAgendamento";
import AdminPraticasPedagogicas from "pages/AdminProfessor";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/galeria-de-fotos" element={<GaleriaDeFotos />} />
        <Route path="/praticas-pedagogicas" element={<PraticasPedagogicas />} />
        <Route path="/admin-agendamento" element={<AdminAgendamentos />} />
        <Route path="/admin-professor" element={<AdminPraticasPedagogicas />} />
      </Routes>
      <Footer />    
    </BrowserRouter>
  );
}

export default AppRoutes;
