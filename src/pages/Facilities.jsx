import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import PageHero from "../components/PageHero.jsx";

import science from "../assets/composite-lab.png";
import computer from "../assets/computer-lab.png";
import library from "../assets/library.png";
import sports from "../assets/sports-room.png";
import playground from "../assets/playground-area.png";
import kabaddi from "../assets/kabaddi.png";
import khoKho from "../assets/kho-kho.png";
import water from "../assets/drinking-area.png";

const facilities = [
  {
    no: "01",
    category: "LEARNING",
    title: "Composite Science Lab",
    image: science,
    text: "A practical learning space where students explore scientific ideas through observation, experiments and hands-on learning.",
  },
  {
    no: "02",
    category: "TECHNOLOGY",
    title: "Computer Laboratory",
    image: computer,
    text: "A dedicated digital learning environment that helps students build confidence with technology and develop essential computer skills.",
  },
  {
    no: "03",
    category: "READING",
    title: "School Library",
    image: library,
    text: "A calm and welcoming space where students can read, research, explore ideas and develop a lifelong interest in books.",
  },
  {
    no: "04",
    category: "INDOOR SPORTS",
    title: "Sports Room",
    image: sports,
    text: "An activity-focused space that supports concentration, coordination, recreation and sporting development.",
  },
];

const outdoor = [
  {
    title: "Playground",
    image: playground,
  },
  {
    title: "Kabaddi",
    image: kabaddi,
  },
  {
    title: "Kho-Kho",
    image: khoKho,
  },
];

export default function Facilities() {
  return (
    <main>

      <PageHero
        label="Campus Facilities"
        title="Spaces made"
        italic="for growing minds."
        number="01"
      />


      {/* INTRO */}
      <section className="bg-[#f7f4ed] px-6 lg:px-14 py-16 md:py-24">

        <div className="max-w-[1450px] mx-auto grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4">
            <p className="text-[#9b752e] text-[11px] tracking-[4px] font-bold">
              THE MSP CAMPUS
            </p>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl leading-tight text-[#07182e] max-w-4xl">
              Learning needs the right environment.
            </h2>

            <p className="text-slate-600 leading-8 mt-6 max-w-2xl">
              Our campus brings together academic, technological,
              recreational and everyday facilities to create a
              comfortable environment for students to learn and grow.
            </p>
          </div>

        </div>
      </section>


      {/* MAIN FACILITIES */}
      <section className="bg-white px-6 lg:px-14 py-20 md:py-28">

        <div className="max-w-[1450px] mx-auto grid md:grid-cols-2 gap-x-6 gap-y-16">

          {facilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={index % 2 ? "md:mt-20" : ""}
            >

              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[16/10] object-cover hover:scale-[1.025] transition duration-700"
                />
              </div>

              <div className="flex justify-between items-center border-b border-[#07182e]/15 py-4">
                <span className="text-[10px] tracking-[3px] text-[#9b752e] font-bold">
                  {item.category}
                </span>

                <span className="text-xs text-[#07182e]/35">
                  {item.no}
                </span>
              </div>

              <h3 className="text-[#07182e] text-3xl md:text-4xl mt-6">
                {item.title}
              </h3>

              <p className="text-slate-500 leading-7 mt-4 max-w-xl">
                {item.text}
              </p>

            </motion.article>
          ))}

        </div>

      </section>


      {/* OUTDOOR SPORTS */}
      <section className="bg-[#07182e] text-white py-20 md:py-28">

        <div className="max-w-[1450px] mx-auto px-6 lg:px-14">

          <div className="grid lg:grid-cols-2 gap-8 items-end mb-14">

            <div>
              <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-bold">
                OUTDOOR FACILITIES
              </p>

              <h2 className="text-4xl md:text-6xl mt-5">
                Built for
                <span className="block italic text-[#d8b35c]">
                  active learning.
                </span>
              </h2>
            </div>

            <p className="text-white/55 leading-8 max-w-lg lg:ml-auto">
              Dedicated outdoor spaces encourage students to stay
              active while developing teamwork, discipline and
              confidence.
            </p>

          </div>


          {/* SPORTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {outdoor.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <span className="absolute top-5 right-5 text-white/50 text-xs">
                  0{index + 1}
                </span>

                <h3 className="absolute left-6 bottom-6 text-2xl md:text-3xl">
                  {item.title}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* WATER FACILITY */}
      <section className="bg-[#f7f4ed] px-6 lg:px-14 py-20 md:py-28">

        <div className="max-w-[1450px] mx-auto grid lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7 overflow-hidden">
            <img
              src={water}
              alt="Drinking Water Facility"
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div className="lg:col-span-5 lg:pl-8">

            <p className="text-[#9b752e] text-[10px] tracking-[4px] font-bold">
              STUDENT AMENITIES
            </p>

            <h2 className="text-[#07182e] text-4xl md:text-5xl mt-5">
              Everyday comfort
              <span className="block italic text-[#a37b31]">
                matters too.
              </span>
            </h2>

            <p className="text-slate-600 leading-8 mt-6">
              Safe drinking water and essential student amenities
              support a comfortable and student-friendly campus
              environment.
            </p>

          </div>

        </div>

      </section>


      {/* GALLERY CTA */}
      <section className="bg-[#d8b35c] px-6 lg:px-14 py-16">

        <div className="max-w-[1450px] mx-auto flex flex-col md:flex-row gap-7 md:items-center justify-between">

          <div>
            <p className="text-[10px] tracking-[4px] font-bold opacity-60">
              SEE MORE OF MSP
            </p>

            <h2 className="text-[#07182e] text-3xl md:text-5xl mt-3">
              Explore our campus gallery.
            </h2>
          </div>

          <a
            href="/gallery"
            className="group shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#07182e] text-white grid place-items-center"
            aria-label="Open gallery"
          >
            <ArrowUpRight
              className="group-hover:rotate-45 transition"
            />
          </a>

        </div>

      </section>

    </main>
  );
}