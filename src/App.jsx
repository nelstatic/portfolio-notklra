import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Header from "@components/header/Header.jsx";
import Footer from "@components/footer/Footer.jsx";
import ScrollTop from "@components/scrolltop/ScrollTop";
// pages
import Home from "@pages/home/Home.jsx";
import FullMedium from "@pages/fullmedium/FullMedium.jsx";
import Places from "@pages/places/Places.jsx";
import Commissions from "@pages/commissions/Commissions.jsx";
import Exhibitions from "@pages/exhibitions/Exhibitions.jsx";
import Music from "@pages/music/Music.jsx";
import Archives from "@pages/archives/Archives.jsx";
import Contact from "@pages/contact/Contact.jsx";
import ErrorPage from "@pages/error-page/ErrorPage.jsx";

function App() {
  return (
    <BrowserRouter>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
