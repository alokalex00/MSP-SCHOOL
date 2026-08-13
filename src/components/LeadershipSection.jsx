import { ArrowUpRight, Quote } from "lucide-react";
import { motion } from "motion/react";
import principal from "../assets/principal.jpeg";

export default function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="bg-[#f7f4ed] text-[#07182e] py-24 md:py-36 px-6 lg:px-14 overflow-hidden"
    >
      <div className="max-w-[1450px] mx-auto">

        {/* TOP LABEL */}
        <div className="flex items-center gap-3 mb-14">
          <span className="w-10 h-px bg-[#a37b31]" />
          <p className="text-[#9b752e] text-[11px] tracking-[4px] font-bold uppercase">
            From the Principal's Desk
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* PRINCIPAL IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative">

              <div className="overflow-hidden bg-[#e7e1d5]">
                <img
                  src={principal}
                  alt="Gyan Ranjan Priyadarshi - Principal"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>

              {/* Decorative number */}
              <span className="absolute -bottom-8 -right-2 md:-right-8 text-[100px] md:text-[150px] leading-none font-serif text-[#07182e]/5 select-none">
                MSP
              </span>

            </div>
          </motion.div>


          {/* MESSAGE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7"
          >

            <Quote
              size={45}
              strokeWidth={1}
              className="text-[#a37b31] mb-8"
            />

            <h2 className="text-[clamp(2.7rem,5vw,5.5rem)] leading-[1.02] tracking-[-2px]">
              Every child has
              <span className="block italic text-[#a37b31]">
                something special
              </span>
              to discover.
            </h2>

            <div className="mt-10 max-w-2xl space-y-5 text-slate-600 leading-8">

              <p>
                At MSP International School, we believe that education
                is not only about completing a syllabus or scoring good
                marks. It is about helping children understand
                themselves, become confident and learn how to face the
                world with curiosity and courage.
              </p>

              <p>
                Every student who enters our campus brings different
                interests, abilities and dreams. Our responsibility as
                educators is to recognise those differences and give
                each child the right environment to learn, ask
                questions, make mistakes and grow.
              </p>

              <p>
                We want our students to leave MSP not only with
                knowledge, but also with good values, happy memories
                and the confidence to choose their own path.
              </p>

            </div>


            {/* SIGNATURE AREA */}
            <div className="mt-12 pt-7 border-t border-[#07182e]/15 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-7">

              <div>
                <h3 className="text-2xl md:text-3xl">
                  Gyan Ranjan Priyadarshi
                </h3>

                <p className="mt-2 text-[10px] tracking-[3px] uppercase text-[#9b752e] font-bold">
                  Principal · MSP International School
                </p>
              </div>

              <a
                href="#principal-message"
                className="group inline-flex items-center gap-3 text-sm font-semibold"
              >
                Read full message

                <span className="w-10 h-10 rounded-full border border-[#07182e]/20 grid place-items-center group-hover:bg-[#07182e] group-hover:text-white transition">
                  <ArrowUpRight size={16} />
                </span>
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}