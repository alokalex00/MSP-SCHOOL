import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/msp-logo.jpeg";
import AdmissionModal from "./AdmissionModal";

const links = [
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Notices", "/notices"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  const location = useLocation();

  // Page change hone par mobile menu close
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll hone par navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Admission popup open
  const openAdmission = () => {
    setOpen(false);
    setAdmissionOpen(true);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#07182e]/95 backdrop-blur-xl shadow-lg"
            : "bg-[#07182e]/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-[1500px] mx-auto px-5 lg:px-12 h-[88px] flex items-center justify-between">

          {/* =====================
              LOGO
          ====================== */}

          <Link
            to="/"
            className="flex items-center gap-3 shrink-0"
          >
            <img
              src={logo}
              alt="MSP International School"
              className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover bg-white p-1"
            />

            <div className="text-white">

              <h2 className="font-semibold text-[14px] sm:text-lg md:text-xl leading-tight">
                MSP International School
              </h2>

              <p className="hidden sm:block text-[8px] md:text-[9px] tracking-[3px] text-white/55 mt-1">
                THE ELITE ORGANIZATION
              </p>

            </div>
          </Link>


          {/* =====================
              DESKTOP NAVIGATION
          ====================== */}

          <div className="hidden xl:flex items-center gap-7">

            {links.map(([name, path]) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `relative text-sm transition duration-200 ${
                    isActive
                      ? "text-[#d8b35c]"
                      : "text-white/75 hover:text-white"
                  }`
                }
              >
                {name}
              </NavLink>
            ))}


            {/* ADMISSION BUTTON */}

            <button
              type="button"
              onClick={openAdmission}
              className="group flex items-center gap-2 bg-white text-[#07182e] px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#d8b35c] transition duration-300"
            >
              Admission

              <ArrowUpRight
                size={15}
                className="group-hover:rotate-45 transition-transform duration-300"
              />
            </button>

          </div>


          {/* =====================
              MOBILE MENU BUTTON
          ====================== */}

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="xl:hidden w-11 h-11 rounded-full border border-white/20 text-white grid place-items-center"
            aria-label="Toggle navigation"
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </nav>


        {/* =====================
            MOBILE MENU
        ====================== */}

        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ${
            open
              ? "max-h-[650px] border-t border-white/10"
              : "max-h-0"
          }`}
        >
          <div className="bg-[#07182e] px-6 pb-8">

            {links.map(([name, path], index) => (
              <NavLink
                key={name}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between py-4 border-b border-white/10 transition ${
                    isActive
                      ? "text-[#d8b35c]"
                      : "text-white"
                  }`
                }
              >
                <span>
                  {name}
                </span>

                <span className="text-white/25 text-xs">
                  0{index + 1}
                </span>
              </NavLink>
            ))}


            {/* MOBILE ADMISSION */}

            <button
              type="button"
              onClick={openAdmission}
              className="w-full flex items-center justify-center gap-2 bg-[#d8b35c] text-[#07182e] py-3.5 rounded-full mt-6 font-semibold"
            >
              Admission

              <ArrowUpRight size={17} />
            </button>

          </div>
        </div>

      </header>


      {/* =========================
          ADMISSION POPUP
      ========================== */}

      <AdmissionModal
        open={admissionOpen}
        onClose={() => setAdmissionOpen(false)}
      />

    </>
  );
}