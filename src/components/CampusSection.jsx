import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import science from "../assets/composite-lab.png";
import computer from "../assets/computer-lab.png";
import library from "../assets/library.png";
import sports from "../assets/sports-room.png";
import playground from "../assets/playground-area.png";
import kabaddi from "../assets/kabaddi.png";
import khoKho from "../assets/kho-kho.png";
import water from "../assets/drinking-area.png";

const learningSpaces = [
  {
    no: "01",
    tag: "EXPERIMENT",
    title: "Composite Science Lab",
    text: "A practical learning space where students explore scientific concepts through observation and experimentation.",
    image: science,
  },
  {
    no: "02",
    tag: "CREATE",
    title: "Computer Laboratory",
    text: "A dedicated digital learning environment that helps students develop technology skills and confidence.",
    image: computer,
  },
  {
    no: "03",
    tag: "DISCOVER",
    title: "School Library",
    text: "A welcoming space for reading, research and independent learning with access to a wide collection of books.",
    image: library,
  },
];

const games = [
  {
    title: "Kabaddi",
    image: kabaddi,
  },
  {
    title: "Kho-Kho",
    image: khoKho,
  },
];

export default function CampusSection() {
  return (
    <>
      {/* LEARNING SPACES */}
      <section
        id="campus"
        className="bg-[#07182e] text-white py-24 md:py-36"
      >
        <div className="max-w-[1450px] mx-auto px-6 lg:px-14">

          {/* HEADING */}
          <div className="grid lg:grid-cols-12 gap-10 mb-24">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-[#d8b35c]" />

                <span className="text-[#d8b35c] text-[11px] tracking-[4px] font-bold">
                  EXPLORE OUR CAMPUS
                </span>
              </div>
            </div>

            <div className="lg:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[clamp(3rem,6vw,6rem)] leading-[0.95]"
              >
                Spaces designed
                <span className="block italic text-[#d8b35c]">
                  for possibility.
                </span>
              </motion.h2>
            </div>
          </div>


          {/* LEARNING SPACES */}
          <div id="facilities" className="space-y-28 md:space-y-40">

            {learningSpaces.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >

                {/* IMAGE */}
                <div
                  className={`lg:col-span-8 overflow-hidden ${
                    index % 2 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full aspect-[16/9] object-cover hover:scale-[1.025] transition duration-700"
                  />
                </div>

                {/* TEXT */}
                <div
                  className={`lg:col-span-4 ${
                    index % 2 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="flex justify-between border-b border-white/15 pb-5">
                    <span className="text-[#d8b35c] text-[10px] tracking-[3px]">
                      {item.tag}
                    </span>

                    <span className="text-white/30 text-xs">
                      {item.no}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-5xl mt-7">
                    {item.title}
                  </h3>

                  <p className="text-white/55 leading-8 mt-6">
                    {item.text}
                  </p>

                  <a
                    href="#gallery"
                    className="group inline-flex items-center gap-3 mt-8 text-sm"
                  >
                    Explore space

                    <span className="w-10 h-10 rounded-full border border-white/20 grid place-items-center group-hover:bg-[#d8b35c] group-hover:text-[#07182e] transition">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </div>

              </motion.article>
            ))}

          </div>
        </div>
      </section>


      {/* SPORTS */}
      <section className="bg-[#f7f4ed] text-[#07182e] py-24 md:py-36">

        <div className="max-w-[1450px] mx-auto px-6 lg:px-14">

          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">

            <div>
              <p className="text-[#9b752e] text-[11px] tracking-[4px] font-bold">
                BEYOND THE CLASSROOM
              </p>

              <h2 className="text-[clamp(3rem,5vw,5.5rem)] leading-[0.95] mt-6">
                Room to move.
                <span className="block italic text-[#a37b31]">
                  Space to grow.
                </span>
              </h2>
            </div>

            <p className="text-slate-600 leading-8 max-w-lg lg:ml-auto">
              Sports encourage teamwork, discipline, confidence and
              physical well-being as an important part of student life
              at MSP.
            </p>

          </div>
        </div>


        {/* GIANT PLAYGROUND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-4 md:mx-8 overflow-hidden group"
        >
          <img
            src={playground}
            alt="MSP Playground"
            className="w-full h-[55vh] md:h-[75vh] object-cover group-hover:scale-[1.02] transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

          <div className="absolute bottom-8 left-8 md:bottom-14 md:left-14 text-white">
            <p className="text-[10px] tracking-[4px] text-white/60">
              ACTIVE CAMPUS
            </p>

            <h3 className="text-4xl md:text-7xl mt-3">
              Playground
            </h3>
          </div>
        </motion.div>


        {/* KABADDI + KHO KHO */}
        <div className="max-w-[1450px] mx-auto px-6 lg:px-14 grid md:grid-cols-2 gap-5 mt-5">

          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden group"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <span className="absolute top-6 right-6 text-white/50 text-xs">
                0{index + 1}
              </span>

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-[10px] tracking-[3px] text-white/60">
                  OUTDOOR SPORTS
                </p>

                <h3 className="text-3xl md:text-5xl mt-2">
                  {game.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>


        {/* SPORTS ROOM */}
        <div className="max-w-[1450px] mx-auto px-6 lg:px-14 mt-24">

          <div className="grid lg:grid-cols-12 gap-10 items-center">

            <div className="lg:col-span-4">
              <p className="text-[#9b752e] text-[11px] tracking-[4px] font-bold">
                INDOOR SPORTS
              </p>

              <h3 className="text-4xl md:text-6xl mt-5">
                Play.
                <span className="block italic text-[#a37b31]">
                  Focus.
                </span>
                Improve.
              </h3>

              <p className="text-slate-600 leading-8 mt-7">
                Dedicated indoor sports facilities provide students
                with more opportunities to develop concentration,
                coordination and sporting skills.
              </p>
            </div>

            <div className="lg:col-span-8 overflow-hidden">
              <img
                src={sports}
                alt="MSP Sports Room"
                className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition duration-700"
              />
            </div>

          </div>
        </div>
      </section>


      {/* AMENITIES */}
      <section className="bg-white py-24 px-6 lg:px-14">

        <div className="max-w-[1450px] mx-auto grid lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5">

            <p className="text-[#9b752e] text-[11px] tracking-[4px] font-bold">
              EVERYDAY CARE
            </p>

            <h2 className="text-[#07182e] text-4xl md:text-6xl mt-5">
              A campus built
              <span className="block italic text-[#a37b31]">
                around students.
              </span>
            </h2>

            <p className="text-slate-600 leading-8 mt-7 max-w-md">
              Everyday amenities support a clean, comfortable and
              student-friendly learning environment.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {[
                "Safe Drinking Water",
                "Green Campus",
                "Sports Facilities",
                "Learning Spaces",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-[#07182e]/15 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

          <div className="lg:col-span-7 overflow-hidden">
            <img
              src={water}
              alt="Drinking Water Facility"
              className="w-full max-h-[500px] object-cover"
            />
          </div>

        </div>
      </section>
    </>
  );
}