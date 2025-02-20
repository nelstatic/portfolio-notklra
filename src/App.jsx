import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import Header from "@components/Header";
import Footer from "@components/Footer";
import ScrollTop from "@components/ScrollTop";

// Pages
import Home from "@pages/Home";
import FullMedium from "@pages/FullMedium";
import Places from "@pages/Places";
import Commissions from "@pages/Commissions";
import Exhibitions from "@pages/Exhibitions";
import Music from "@pages/Music";
import Archives from "@pages/Archives";
import Contact from "@pages/Contact";
import ErrorPage from "@pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

function Main() {
  const location = useLocation(); // L'utilisation de useLocation() dans un composant enfant de BrowserRouter
  const isHome = location.pathname === "/"; // Vérifie si on est sur la page d'accueil

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="full-frame-and-medium-format" element={<FullMedium />} />
          <Route path="commissions" element={<Commissions />} />
          <Route path="exhibitions" element={<Exhibitions />} />
          <Route path="places" element={<Places />} />
          <Route path="music" element={<Music />} />
          <Route path="archives" element={<Archives />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <ScrollTop />
      {!isHome && <Footer />}
    </>
  );
}

export default App;
