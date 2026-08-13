import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  BadgeCheck,
} from "lucide-react";

import PageHero from "../components/PageHero";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "Main Road Patan, Palamu, Jharkhand – 822123",
    href: "https://www.google.com/maps/search/?api=1&query=MSP+International+School+Main+Road+Patan+Palamu+Jharkhand+822123",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "7252 955 955",
    subtext: "7251 955 955",
    href: "tel:+917252955955",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "mspinternationalschool@gmail.com",
    href: "mailto:mspinternationalschool@gmail.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    text: "09:00 AM – 03:00 PM",
  },
];

export default function Contact() {
  return (
    <main>
      <PageHero
        label="Contact"
        title="Let's start a"
        accent="conversation."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="grid lg:grid-cols-2 gap-10 mb-14">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>

              <h2 className="section-title mt-5">
                We're here to
                <span className="gold italic block">
                  help you.
                </span>
              </h2>
            </div>

            <p className="body-text max-w-xl lg:self-end">
              Whether you have a question about admissions, academics,
              facilities or would like to visit our campus, our school
              office will be happy to assist you.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {contactCards.map(
              ({ icon: Icon, title, text, subtext, href }) => {
                const content = (
                  <>
                    <div className="w-12 h-12 rounded-full bg-[#07182e] text-white grid place-items-center group-hover:bg-[#d8b35c] group-hover:text-[#07182e] transition">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-2xl mt-7">
                      {title}
                    </h3>

                    <p className="body-text text-sm mt-3 break-words">
                      {text}
                    </p>

                    {subtext && (
                      <p className="body-text text-sm mt-1">
                        {subtext}
                      </p>
                    )}

                    {href && (
                      <div className="mt-auto pt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[2px]">
                        Open
                        <ExternalLink size={13} />
                      </div>
                    )}
                  </>
                );

                return href ? (
                  <a
                    key={title}
                    href={href}
                    target={
                      href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    className="group bg-[#f7f4ed] p-7 min-h-[260px] flex flex-col hover:-translate-y-1 transition duration-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={title}
                    className="group bg-[#f7f4ed] p-7 min-h-[260px] flex flex-col"
                  >
                    {content}
                  </div>
                );
              }
            )}

          </div>

          {/* WHATSAPP + CALL */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <a
              href="https://wa.me/917252955955?text=Hello%20MSP%20International%20School%2C%20I%20would%20like%20to%20know%20more%20about%20the%20school."
              target="_blank"
              rel="noreferrer"
              className="bg-[#07182e] text-white p-7 md:p-9 flex items-center justify-between gap-5 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-white/20 grid place-items-center">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <p className="text-white/45 text-[9px] tracking-[3px] uppercase">
                    Quick Enquiry
                  </p>

                  <h3 className="text-2xl mt-1">
                    Chat on WhatsApp
                  </h3>
                </div>
              </div>

              <ExternalLink
                size={19}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>

            <a
              href="tel:+917252955955"
              className="bg-[#d8b35c] text-[#07182e] p-7 md:p-9 flex items-center justify-between gap-5 group"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-[#07182e]/20 grid place-items-center">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-[#07182e]/50 text-[9px] tracking-[3px] uppercase">
                    School Office
                  </p>

                  <h3 className="text-2xl mt-1">
                    7252 955 955
                  </h3>
                </div>
              </div>

              <ExternalLink
                size={19}
                className="group-hover:translate-x-1 transition"
              />
            </a>

          </div>

          {/* LOCATION */}
          <div className="mt-4 bg-[#07182e] text-white relative overflow-hidden">

            <div className="grid lg:grid-cols-2">

              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-semibold">
                  FIND US
                </p>

                <h2 className="text-3xl md:text-5xl mt-5">
                  Visit our campus.
                </h2>

                <p className="text-white/55 leading-7 mt-5 max-w-md">
                  MSP International School
                  <br />
                  Main Road Patan
                  <br />
                  Palamu, Jharkhand – 822123
                </p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=MSP+International+School+Main+Road+Patan+Palamu+Jharkhand+822123"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#07182e] px-6 py-3 rounded-full mt-8 font-semibold"
                >
                  <MapPin size={17} />
                  Get Directions
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="bg-white/5 min-h-[300px] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#d8b35c] text-[#07182e] grid place-items-center">
                    <MapPin size={26} />
                  </div>

                  <p className="text-white/40 text-xs tracking-[3px] mt-6 uppercase">
                    Patan • Palamu • Jharkhand
                  </p>

                  <p className="text-xl mt-2">
                    PIN – 822123
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* AFFILIATION */}
          <div className="border border-black/10 mt-4 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-[#f7f4ed] rounded-full grid place-items-center">
                <BadgeCheck size={19} />
              </div>

              <div>
                <p className="text-[9px] tracking-[3px] text-black/40 uppercase">
                  CBSE Affiliation
                </p>

                <p className="text-xl font-semibold mt-1">
                  3430792
                </p>
              </div>
            </div>

            <p className="text-sm text-black/45">
              MSP International School
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}