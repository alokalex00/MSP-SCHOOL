import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Trophy,
  Monitor,
  MapPin,
} from "lucide-react";

import hero from "../assets/school-campus.jpeg";
import science from "../assets/composite-lab.png";
import library from "../assets/library.png";
import playground from "../assets/playground-area.png";
import principal from "../assets/Principal.jpeg";


export default function Home() {
  return (
    <main>

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden bg-[#07182e]">

        {/* HERO IMAGE */}
        <img
          src={hero}
          alt="MSP International School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#04101f]/95 via-[#04101f]/65 to-[#04101f]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04101f]/90 via-transparent to-[#04101f]/20" />


        {/* HERO CONTENT */}
        <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 md:px-8 lg:px-12 pb-12 md:pb-16 lg:pb-20 pt-36">

          <div className="max-w-4xl">

            {/* CBSE */}
            <div className="flex items-center gap-3 text-[#d8b35c]">

              <span className="w-8 h-px bg-[#d8b35c]" />

              <p className="text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[5px] font-semibold">
                CBSE AFFILIATED • 3430792
              </p>

            </div>


            {/* TITLE */}
            <h1 className="text-white font-serif text-[46px] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[92px] mt-6 tracking-[-2px]">

              Learn with

              <span className="block italic text-[#d8b35c]">
                purpose.
              </span>

              Grow with confidence.

            </h1>


            {/* DESCRIPTION */}
            <p className="text-white/65 max-w-xl text-sm md:text-base leading-7 mt-7">
              A learning environment where knowledge, character,
              curiosity and confidence grow together.
            </p>


            {/* BUTTONS */}
            <div className="flex flex-wrap gap-3 mt-8">

              <Link
                to="/about"
                className="inline-flex items-center gap-3 bg-[#d8b35c] text-[#07182e] px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white transition"
              >
                Discover MSP
                <ArrowRight size={16} />
              </Link>


              <Link
                to="/gallery"
                className="inline-flex items-center gap-3 border border-white/25 text-white px-6 py-3.5 rounded-full font-semibold text-sm hover:bg-white hover:text-[#07182e] transition"
              >
                Explore Campus
                <ArrowUpRight size={15} />
              </Link>

            </div>

          </div>


          {/* HERO BOTTOM INFO */}
          <div className="hidden md:flex justify-between items-end border-t border-white/15 mt-12 pt-5">

            <div className="flex gap-10">

              <div>

                <p className="text-white text-sm">
                  Patan
                </p>

                <p className="text-white/35 text-[9px] tracking-[3px] mt-1">
                  PALAMU • JHARKHAND
                </p>

              </div>


              <div>

                <p className="text-white text-sm">
                  CBSE Affiliated
                </p>

                <p className="text-white/35 text-[9px] tracking-[3px] mt-1">
                  AFFILIATION NO. 3430792
                </p>

              </div>

            </div>


            <p className="text-white/30 text-xs">
              MSP International School
            </p>

          </div>

        </div>

      </section>



      {/* =====================================
          WELCOME / INTRO
      ====================================== */}

      <section className="px-5 md:px-8 lg:px-12 py-16 md:py-20">

        <div className="max-w-7xl mx-auto">


          {/* INTRO */}
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-20">

            <div>

              <p className="eyebrow">
                WELCOME TO MSP
              </p>

              <h2 className="section-title mt-5">

                More than a

                <span className="gold italic block">
                  classroom.
                </span>

              </h2>

            </div>


            <div className="lg:self-end">

              <p className="body-text max-w-2xl">
                MSP International School provides an environment
                where academic learning is supported by practical
                experiences, sports, technology, creativity and
                values.
              </p>


              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold mt-6 text-sm group"
              >

                Our Story

                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

            </div>

          </div>



          {/* THREE HIGHLIGHTS */}

          <div className="grid md:grid-cols-3 mt-12 border-t border-l border-black/10">

            <Highlight
              icon={BookOpen}
              number="01"
              title="Meaningful Learning"
              text="Strong academic foundations with an emphasis on understanding and curiosity."
            />


            <Highlight
              icon={Monitor}
              number="02"
              title="Modern Exposure"
              text="Practical learning and technology help students connect education with the world around them."
            />


            <Highlight
              icon={Trophy}
              number="03"
              title="Beyond Academics"
              text="Sports and activities encourage confidence, teamwork, discipline and personal growth."
            />

          </div>

        </div>

      </section>



      {/* =====================================
          PRINCIPAL MESSAGE
      ====================================== */}

      <section className="px-5 md:px-8 lg:px-12 pb-16 md:pb-20">

        <div className="max-w-7xl mx-auto">


          <div className="grid lg:grid-cols-[380px_1fr] bg-[#f7f4ed] overflow-hidden">


            {/* PRINCIPAL PHOTO */}

            <div className="relative min-h-[400px] lg:min-h-[460px]">

              <img
                src={principal}
                alt="Gyan Ranjan Priyadarshi - Principal"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />


              {/* PHOTO OVERLAY */}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 pt-24">

                <p className="text-white text-xl font-semibold">
                  Gyan Ranjan Priyadarshi
                </p>

                <p className="text-[#d8b35c] text-[10px] tracking-[3px] mt-1">
                  PRINCIPAL
                </p>

              </div>

            </div>



            {/* PRINCIPAL MESSAGE */}

            <div className="p-7 md:p-10 lg:p-14 flex flex-col justify-center">

              <p className="eyebrow">
                FROM THE PRINCIPAL'S DESK
              </p>


              <h2 className="text-3xl md:text-5xl font-serif mt-5 leading-tight">

                Every child has the

                <span className="gold italic block">
                  potential to grow.
                </span>

              </h2>


              <p className="body-text mt-6 max-w-2xl">
                At MSP International School, we believe that education
                is not only about academic achievement. It is also
                about helping children become confident, responsible
                and thoughtful individuals.
              </p>


              <p className="body-text mt-4 max-w-2xl">
                Our effort is to provide students with a supportive
                environment where they can learn with curiosity,
                discover their strengths and move forward with
                confidence.
              </p>


              {/* SIGNATURE */}

              <div className="mt-8 pt-6 border-t border-black/10">

                <p className="font-semibold text-lg">
                  Gyan Ranjan Priyadarshi
                </p>

                <p className="text-xs tracking-[2px] text-black/40 mt-1 uppercase">
                  Principal • MSP International School
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================
          CAMPUS / FACILITIES PREVIEW
      ====================================== */}

      <section className="bg-[#07182e] text-white py-16 md:py-20 px-5 md:px-8 lg:px-12">

        <div className="max-w-7xl mx-auto">


          {/* HEADING */}

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

            <div>

              <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-semibold">
                THE CAMPUS
              </p>


              <h2 className="text-4xl md:text-6xl font-serif mt-4">

                Spaces made for

                <span className="block italic text-[#d8b35c]">
                  growing minds.
                </span>

              </h2>

            </div>


            <Link
              to="/facilities"
              className="inline-flex items-center gap-3 text-sm border border-white/20 rounded-full px-5 py-3 self-start hover:bg-white hover:text-[#07182e] transition"
            >

              All Facilities

              <ArrowUpRight size={15} />

            </Link>

          </div>



          {/* FACILITY IMAGES */}

          <div className="grid md:grid-cols-12 gap-3 mt-10">


            {/* SCIENCE LAB */}

            <Link
              to="/facilities"
              className="md:col-span-6 relative overflow-hidden group"
            >

              <img
                src={science}
                alt="Science Laboratory"
                className="w-full h-[280px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />

              <FacilityOverlay
                label="LEARNING"
                title="Science Laboratory"
              />

            </Link>



            {/* LIBRARY */}

            <Link
              to="/facilities"
              className="md:col-span-3 relative overflow-hidden group"
            >

              <img
                src={library}
                alt="School Library"
                className="w-full h-[250px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />

              <FacilityOverlay
                label="KNOWLEDGE"
                title="Library"
              />

            </Link>



            {/* PLAYGROUND */}

            <Link
              to="/facilities"
              className="md:col-span-3 relative overflow-hidden group"
            >

              <img
                src={playground}
                alt="School Playground"
                className="w-full h-[250px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
              />

              <FacilityOverlay
                label="SPORTS"
                title="Playground"
              />

            </Link>

          </div>

        </div>

      </section>



      {/* =====================================
          VISIT MSP CTA
      ====================================== */}

      <section className="px-5 md:px-8 lg:px-12 py-12">

        <div className="max-w-7xl mx-auto">


          <div className="bg-[#d8b35c] text-[#07182e] p-7 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">


            {/* TEXT */}

            <div>

              <p className="text-[9px] tracking-[4px] font-bold opacity-50">
                VISIT MSP
              </p>


              <h2 className="text-3xl md:text-5xl font-serif mt-3">

                Come and experience

                <span className="italic">
                  {" "}our campus.
                </span>

              </h2>


              <div className="flex items-center gap-2 mt-4 opacity-60 text-sm">

                <MapPin size={15} />

                <span>
                  Main Road Patan, Palamu, Jharkhand – 822123
                </span>

              </div>

            </div>



            {/* BUTTONS */}

            <div className="flex flex-wrap gap-3">


              <Link
                to="/contact"
                className="bg-[#07182e] text-white rounded-full px-6 py-3.5 font-semibold inline-flex items-center gap-3"
              >

                Contact Us

                <ArrowRight size={16} />

              </Link>


              <Link
                to="/notices"
                className="border border-[#07182e]/25 rounded-full px-6 py-3.5 font-semibold inline-flex items-center gap-3"
              >

                Latest Notices

                <ArrowUpRight size={15} />

              </Link>

            </div>

          </div>

        </div>

      </section>


    </main>
  );
}



/* =====================================
   HIGHLIGHT CARD
===================================== */

function Highlight({
  icon: Icon,
  number,
  title,
  text,
}) {
  return (
    <div className="group border-r border-b border-black/10 p-7 md:p-8 min-h-[250px] hover:bg-[#07182e] hover:text-white transition duration-300">

      <div className="flex justify-between items-start">

        <Icon
          size={21}
          className="group-hover:text-[#d8b35c]"
        />

        <span className="text-xs text-black/25 group-hover:text-white/25">
          {number}
        </span>

      </div>


      <h3 className="text-2xl mt-12">
        {title}
      </h3>


      <p className="text-sm leading-6 mt-3 text-black/50 group-hover:text-white/50">
        {text}
      </p>

    </div>
  );
}



/* =====================================
   FACILITY IMAGE OVERLAY
===================================== */

function FacilityOverlay({
  label,
  title,
}) {
  return (
    <>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />


      <div className="absolute bottom-0 left-0 p-5 md:p-6">

        <p className="text-[#d8b35c] text-[9px] tracking-[3px]">
          {label}
        </p>

        <h3 className="text-white text-xl md:text-2xl mt-1">
          {title}
        </h3>

      </div>

    </>
  );
}