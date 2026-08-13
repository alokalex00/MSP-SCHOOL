import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import PageHero from "../components/PageHero";
import campus from "../assets/school-campus.jpeg";

export default function About() {
  return (
    <main>
      <PageHero
        label="About MSP"
        title="Education with"
        accent="character."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          {/* INTRO */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div>
              <p className="eyebrow">WHO WE ARE</p>

              <h2 className="section-title mt-5">
                More than
                <span className="gold italic block">
                  a school.
                </span>
              </h2>

              <p className="body-text mt-6 max-w-xl">
                MSP International School is committed to creating a
                learning environment where students can build strong
                academic foundations while developing confidence,
                discipline, values and curiosity.
              </p>

              <p className="body-text mt-4 max-w-xl">
                Our aim is simple — to help every learner grow into a
                responsible, capable and thoughtful individual prepared
                for the opportunities ahead.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-12 bg-[#d8b35c]" />

                <p className="text-xs tracking-[3px] uppercase">
                  The Elite Organization
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={campus}
                alt="MSP International School campus"
                className="w-full aspect-[4/3] object-cover"
              />

              <div className="absolute bottom-0 left-0 bg-[#07182e] text-white p-5 md:p-7">
                <p className="text-[#d8b35c] text-xs tracking-[3px]">
                  PATAN • PALAMU
                </p>
                <p className="mt-2">
                  Jharkhand — 822123
                </p>
              </div>
            </div>

          </div>

          {/* VISION MISSION */}
          <div className="grid md:grid-cols-2 mt-20">

            <div className="bg-[#07182e] text-white p-8 md:p-12">
              <Target className="text-[#d8b35c]" />

              <p className="text-[10px] tracking-[4px] text-[#d8b35c] mt-10">
                OUR MISSION
              </p>

              <h3 className="text-3xl md:text-4xl mt-4">
                Helping every student
                <span className="italic text-[#d8b35c] block">
                  move forward.
                </span>
              </h3>

              <p className="text-white/55 leading-7 mt-5">
                To provide meaningful education that develops
                knowledge, skills, discipline, confidence and a sense
                of responsibility.
              </p>
            </div>

            <div className="bg-[#d8b35c] text-[#07182e] p-8 md:p-12">
              <Eye />

              <p className="text-[10px] tracking-[4px] mt-10">
                OUR VISION
              </p>

              <h3 className="text-3xl md:text-4xl mt-4">
                Preparing learners
                <span className="italic block">
                  for tomorrow.
                </span>
              </h3>

              <p className="text-[#07182e]/65 leading-7 mt-5">
                To nurture confident and responsible learners who are
                prepared to learn, adapt and contribute positively to
                society.
              </p>
            </div>

          </div>

          {/* VALUES */}
          <div className="mt-20">
            <p className="eyebrow">WHAT GUIDES US</p>

            <h2 className="section-title mt-4">
              Values that
              <span className="gold italic"> matter.</span>
            </h2>

            <div className="grid md:grid-cols-3 mt-10 border-t border-black/10">

              <div className="py-8 md:pr-8 border-b md:border-r border-black/10">
                <Heart size={22} />
                <h3 className="text-2xl mt-7">Respect</h3>
                <p className="body-text text-sm mt-3">
                  Respect for people, ideas, learning and the
                  community around us.
                </p>
              </div>

              <div className="py-8 md:px-8 border-b md:border-r border-black/10">
                <ShieldCheck size={22} />
                <h3 className="text-2xl mt-7">Responsibility</h3>
                <p className="body-text text-sm mt-3">
                  Encouraging students to take ownership of their
                  actions and choices.
                </p>
              </div>

              <div className="py-8 md:pl-8 border-b border-black/10">
                <Target size={22} />
                <h3 className="text-2xl mt-7">Excellence</h3>
                <p className="body-text text-sm mt-3">
                  Inspiring consistent effort and the desire to keep
                  learning and improving.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-14 flex justify-end">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#07182e] text-white rounded-full px-6 py-3 font-semibold"
            >
              Visit MSP
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}