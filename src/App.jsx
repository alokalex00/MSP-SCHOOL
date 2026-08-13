import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Notices from "./pages/Notices";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notices" element={<Notices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admission" element={<Admission />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}