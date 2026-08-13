import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const academics = [
  {
    no: "01",
    title: "Foundational Years",
    range: "Early Learning",
    text: "A joyful beginning focused on curiosity, communication, creativity and strong learning foundations.",
  },
  {
    no: "02",
    title: "Primary School",
    range: "Growing Minds",
    text: "Building confidence and core academic skills through engaging, meaningful and student-centred learning.",
  },
  {
    no: "03",
    title: "Middle School",
    range: "Exploring Ideas",
    text: "Encouraging students to think independently, explore subjects deeply and develop problem-solving abilities.",
  },
  {
    no: "04",
    title: "Beyond Academics",
    range: "Whole Child",
    text: "Sports, activities, creativity and values work alongside academics to support well-rounded development.",
  },
];

export default function AcademicsSection() {
  return (
    <section
      id="academics"
      className="bg-[#d8b35c] text-[#07182e] py-24 md:py-36 px-6 lg:px-14"
    >
      <div className="max-w-[1450px] mx-auto">

        {/* TOP */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20">

          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-px bg-[#07182e]" />

              <p className="text-[11px] tracking-[4px] font-bold">
                ACADEMICS AT MSP
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[clamp(3rem,6vw,6.5rem)] leading-[0.94] tracking-[-3px]"
            >
              Learning that
              <span className="block italic">
                grows with you.
              </span>
            </motion.h2>

            <p className="max-w-xl mt-8 leading-8 text-[#07182e]/65">
              Our academic environment is designed to develop knowledge,
              curiosity, confidence and the ability to apply learning
              beyond the classroom.
            </p>

          </div>
        </div>


        {/* ACADEMIC ROWS */}
        <div className="border-t border-[#07182e]/25">

          {academics.map((item, index) => (
            <motion.a
              href="#"
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group grid md:grid-cols-12 gap-5 items-center py-8 md:py-10 border-b border-[#07182e]/25"
            >

              <div className="md:col-span-1">
                <span className="text-xs opacity-45">
                  {item.no}
                </span>
              </div>

              <div className="md:col-span-4">
                <p className="text-[10px] tracking-[3px] font-bold opacity-50 mb-2">
                  {item.range}
                </p>

                <h3 className="text-2xl md:text-4xl group-hover:italic transition-all">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm leading-7 text-[#07182e]/60 max-w-lg">
                  {item.text}
                </p>
              </div>

              <div className="md:col-span-2 md:flex md:justify-end">
                <span className="w-12 h-12 rounded-full border border-[#07182e]/30 grid place-items-center group-hover:bg-[#07182e] group-hover:text-white group-hover:rotate-45 transition duration-300">
                  <ArrowUpRight size={18} />
                </span>
              </div>

            </motion.a>
          ))}

        </div>


        {/* BOTTOM MESSAGE */}
        <div className="grid lg:grid-cols-12 mt-16 gap-8">

          <div className="lg:col-start-5 lg:col-span-8 flex flex-col md:flex-row md:items-center justify-between gap-8">

            <p className="text-sm leading-7 max-w-xl text-[#07182e]/65">
              MSP International School follows a learning approach
              aligned with the CBSE framework while encouraging
              participation, creativity and practical understanding.
            </p>

            <a
              href="#"
              className="shrink-0 inline-flex items-center gap-3 font-semibold text-sm"
            >
              Explore academics
              <ArrowUpRight size={17} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}