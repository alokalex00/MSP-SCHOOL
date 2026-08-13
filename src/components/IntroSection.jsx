import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  ["CBSE", "Affiliated"],
  ["3430792", "Affiliation No."],
  ["360°", "Learning"],
  ["01", "Growing Community"],
];

export default function IntroSection() {
  return (
    <>
      {/* ANNOUNCEMENT */}
      <section className="bg-[#d8b35c] text-[#07182e] overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-14 py-4 flex items-center gap-5">

          <span className="shrink-0 text-[10px] font-bold tracking-[3px] uppercase">
            Latest
          </span>

          <span className="w-px h-5 bg-[#07182e]/30" />

          <div className="overflow-hidden flex-1">
            <p className="whitespace-nowrap text-sm font-medium">
              Welcome to MSP International School
              <span className="mx-5 opacity-40">•</span>
              Admissions & latest school updates
            </p>
          </div>

          <a
            href="#notices"
            className="hidden sm:flex items-center gap-2 text-xs font-bold"
          >
            ALL NOTICES
            <ArrowUpRight size={15} />
          </a>

        </div>
      </section>


      {/* INTRO */}
      <section
        id="about"
        className="bg-[#f7f4ed] text-[#07182e] px-6 lg:px-14 py-24 md:py-36"
      >
        <div className="max-w-[1450px] mx-auto">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-px bg-[#b48a37]" />

                <p className="text-[11px] tracking-[4px] uppercase font-bold text-[#9b752e]">
                  This is MSP
                </p>
              </div>

              <p className="mt-7 text-sm leading-7 text-slate-500 max-w-xs">
                MSP International School is committed to creating
                an environment where education goes beyond the
                classroom.
              </p>
            </motion.div>


            {/* RIGHT / HUGE STATEMENT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8"
            >
              <h2 className="text-[clamp(2.8rem,5vw,5.5rem)] leading-[1.02] tracking-[-2px]">
                More than a school.
                <span className="block text-[#a37b31] italic">
                  A place to become.
                </span>
              </h2>

              <div className="mt-10 grid md:grid-cols-2 gap-8 border-t border-[#07182e]/15 pt-8">

                <p className="text-slate-600 leading-8">
                  We believe meaningful education develops curiosity,
                  confidence and character. Every learning experience
                  at MSP is designed to help students discover their
                  potential.
                </p>

                <div>
                  <p className="text-slate-600 leading-8">
                    From academics to sports, creativity and life
                    skills, students are encouraged to explore,
                    participate and grow.
                  </p>

                  <a
                    href="#campus"
                    className="inline-flex items-center gap-3 mt-7 font-semibold group"
                  >
                    Explore our school

                    <span className="w-10 h-10 rounded-full border border-[#07182e]/25 grid place-items-center group-hover:bg-[#07182e] group-hover:text-white transition">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </div>

              </div>
            </motion.div>

          </div>


          {/* STATS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 mt-24 border-y border-[#07182e]/15">

            {stats.map(([number, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  py-9 md:py-12
                  border-[#07182e]/15
                  even:border-l
                  lg:border-l
                  lg:first:border-l-0
                  px-5 md:px-8
                "
              >
                <p className="text-3xl md:text-5xl font-semibold">
                  {number}
                </p>

                <p className="mt-3 text-[10px] md:text-xs uppercase tracking-[2px] text-slate-500">
                  {label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}