import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/msp-logo.jpeg";

const links = [
  ["About", "/about"],
  ["Academics", "/academics"],
  ["Facilities", "/facilities"],
  ["Gallery", "/gallery"],
  ["Notices", "/notices"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-[#06162a] text-white">

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">

        <div className="grid lg:grid-cols-[1.2fr_.6fr_1fr] gap-12">

          {/* SCHOOL */}
          <div>
            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="MSP International School Logo"
                className="w-14 h-14 rounded-full object-cover bg-white"
              />

              <div>
                <h3 className="font-serif text-xl md:text-2xl">
                  MSP International School
                </h3>

                <p className="text-white/35 text-[9px] tracking-[4px] mt-1">
                  THE ELITE ORGANIZATION
                </p>
              </div>

            </div>

            <p className="text-white/45 leading-7 max-w-md mt-7">
              Building knowledge, character and confidence for a
              brighter tomorrow.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 text-[#d8b35c] text-sm">
              CBSE Affiliation No. 3430792
            </div>
          </div>


          {/* LINKS */}
          <div>
            <p className="text-[10px] tracking-[4px] text-white/35">
              EXPLORE
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 mt-6">

              {links.map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  className="text-white/65 hover:text-[#d8b35c] transition inline-flex items-center gap-2"
                >
                  {name}
                </a>
              ))}

            </div>
          </div>


          {/* CONTACT */}
          <div>
            <p className="text-[10px] tracking-[4px] text-white/35">
              CONTACT
            </p>

            <div className="space-y-5 mt-6">

              <a
                href="tel:+917252955955"
                className="flex gap-3 text-white/65 hover:text-white"
              >
                <Phone size={17} className="shrink-0 mt-1" />
                7252 955 955
              </a>

              <a
                href="mailto:mspinternationalschool@gmail.com"
                className="flex gap-3 text-white/65 hover:text-white break-all"
              >
                <Mail size={17} className="shrink-0 mt-1" />
                mspinternationalschool@gmail.com
              </a>

              <div className="flex gap-3 text-white/65">
                <MapPin size={17} className="shrink-0 mt-1" />

                <p>
                  Main Road Patan,
                  <br />
                  Palamu, Jharkhand – 822123
                </p>
              </div>

            </div>
          </div>

        </div>


        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/30">

          <p>
            © {new Date().getFullYear()} MSP International School.
            All rights reserved.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            Contact School
            <ArrowUpRight size={13} />
          </a>

        </div>

        <p className="text-xs text-white/80">
  Designed & Developed by{" "}
  <a
    href="YOUR_PORTFOLIO_URL"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/100 hover:text-[#d8b35c] transition-colors duration-300 font-medium"
  >
    Alok ↗
  </a>
</p>

      </div>
    </footer>
  );
}