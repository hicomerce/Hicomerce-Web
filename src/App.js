import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/* Páginas */
import Contacto from "./pages/HC-Contacto";
import IndexHC from "./pages";
import ServiciosIA from "./pages/HC-ServiciosIA";
import Servicios360 from "./pages/HC-Servicios360";
import Portafolio from "./pages/HC-Portafolio";
import PageNotFound from "./pages/PageNotFound";
import ClientesHC from "./pages/HC-Clientes";
import NosotrosHC from "./pages/HC-Nosotros";
import NosotrosBorrador from "./pages/HC-NosotrosBorrador";
import AvisoPr from "./pages/HC-AvisoPrivacidad";
import TerminosServicio from "./pages/HC-TerminosyCondiciones";
import BlogsComponent from "./components/Blogs";
import BlogDetail from "./components/BlogDetail";
/* Componentes */
import Layout from "./components/Layout";

/* Util */
import ScrollToTop from "./utils/ScrollToTop";
import useRevealSections from "./utils/useRevealSections";

// 👇 Este componente ya está DENTRO del Router, aquí sí se puede useLocation()
function AppRoutes() {
  const location = useLocation();

  // Re-ejecuta el setup cada vez que cambia la ruta
  useRevealSections({ key: location.pathname });

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexHC />} />
          <Route path="clientes" element={<ClientesHC />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="blogs" element={<BlogsComponent />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="nosotros" element={<NosotrosHC />} />
          <Route path="nosotros-borrador" element={<NosotrosBorrador />} />
          <Route path="servicios360" element={<Servicios360 />} />
          <Route path="serviciosIA" element={<ServiciosIA />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="aviso-de-privacidad" element={<AvisoPr />} />
          <Route path="terminos-del-servicio" element={<TerminosServicio />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
