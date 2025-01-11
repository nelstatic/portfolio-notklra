import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Header from "@components/Header.jsx";
import Footer from "@components/Footer.jsx";
import ScrollTop from "@components/ScrollTop";
// pages
import Home from "@pages/Home.jsx";
import FullMedium from "@pages/FullMedium.jsx";
import Places from "@pages/Places.jsx";
import Commissions from "@pages/Commissions.jsx";
import Exhibitions from "@pages/Exhibitions.jsx";
import Music from "@pages/Music.jsx";
import Archives from "@pages/Archives.jsx";
import Contact from "@pages/Contact.jsx";
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
