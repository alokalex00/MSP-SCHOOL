import {
  BookOpen,
  Microscope,
  Monitor,
  Trophy,
  Palette,
  Users,
  ArrowUpRight,
} from "lucide-react";

import PageHero from "../components/PageHero";

const learningAreas = [
  {
    icon: BookOpen,
    number: "01",
    title: "Strong Academics",
    text: "A structured learning environment focused on clear concepts, regular practice and steady academic progress.",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Learning by Doing",
    text: "Practical activities and laboratory experiences help students connect classroom learning with the real world.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Digital Learning",
    text: "Computer education helps students build confidence with technology and develop skills for a digital future.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Sports & Fitness",
    text: "Physical activities and sports encourage discipline, teamwork, confidence and a healthy lifestyle.",
  },
  {
    icon: Palette,
    number: "05",
    title: "Creativity",
    text: "Creative activities give students opportunities to express ideas, explore interests and discover their abilities.",
  },
  {
    icon: Users,
    number: "06",
    title: "Life Skills",
    text: "Students are encouraged to develop communication, responsibility, leadership and respect for others.",
  },
];

export default function Academics() {
  return (
    <main>
      <PageHero
        label="Academics"
        title="Learning with"
        accent="purpose."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          {/* INTRO */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
            <div>
              <p className="eyebrow">OUR ACADEMIC APPROACH</p>

              <h2 className="section-title mt-5">
                Building strong
                <span className="gold italic block">
                  foundations.
                </span>
              </h2>
            </div>

            <div className="lg:self-end">
              <p className="body-text max-w-xl">
                At MSP International School, learning goes beyond
                textbooks. We aim to create an environment where
                students understand concepts, ask questions, explore
                ideas and grow with confidence.
              </p>
            </div>
          </div>

          {/* CBSE BLOCK */}
          <div className="bg-[#07182e] text-white overflow-hidden">
            <div className="grid lg:grid-cols-[1.3fr_.7fr]">

              <div className="p-8 md:p-12 lg:p-14">
                <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-semibold">
                  CURRICULUM
                </p>

                <h2 className="text-3xl md:text-5xl mt-5">
                  CBSE affiliated.
                  <span className="text-[#d8b35c] italic block">
                    Future focused.
                  </span>
                </h2>

                <p className="text-white/55 leading-7 mt-6 max-w-2xl">
                  Our academic environment follows the CBSE framework
                  while encouraging understanding, curiosity,
                  discipline and meaningful learning.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 border border-white/15 rounded-full px-5 py-3">
                  <span className="w-2 h-2 rounded-full bg-[#d8b35c]" />
                  <span className="text-sm">
                    CBSE Affiliation No. 3430792
                  </span>
                </div>
              </div>

              <div className="bg-[#d8b35c] text-[#07182e] p-8 md:p-12 lg:p-14 flex flex-col justify-between min-h-[300px]">
                <span className="text-[10px] tracking-[4px] font-semibold">
                  OUR FOCUS
                </span>

                <div>
                  <p className="text-6xl md:text-7xl font-serif">
                    Learn.
                  </p>
                  <p className="text-6xl md:text-7xl font-serif italic">
                    Explore.
                  </p>
                  <p className="text-6xl md:text-7xl font-serif">
                    Grow.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* LEARNING AREAS */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
              <div>
                <p className="eyebrow">BEYOND THE CLASSROOM</p>
                <h2 className="section-title mt-4">
                  A complete learning
                  <span className="gold italic"> experience.</span>
                </h2>
              </div>

              <p className="body-text max-w-md">
                Academic learning, practical skills, creativity and
                physical development come together at MSP.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
              {learningAreas.map(
                ({ icon: Icon, number, title, text }) => (
                  <div
                    key={number}
                    className="group p-7 md:p-9 min-h-[290px] border-r border-b border-black/10 hover:bg-[#07182e] hover:text-white transition duration-300"
                  >
                    <div className="flex justify-between">
                      <Icon
                        size={23}
                        className="group-hover:text-[#d8b35c]"
                      />

                      <span className="text-xs text-black/30 group-hover:text-white/30">
                        {number}
                      </span>
                    </div>

                    <h3 className="text-2xl mt-16">
                      {title}
                    </h3>

                    <p className="text-sm leading-6 mt-3 text-black/50 group-hover:text-white/55">
                      {text}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[#f7f4ed] p-8 md:p-12 flex flex-col md:flex-row justify-between md:items-center gap-7">
            <div>
              <p className="eyebrow">THE MSP EXPERIENCE</p>
              <h3 className="text-3xl md:text-4xl mt-3">
                See where learning happens.
              </h3>
            </div>

            <a
              href="/facilities"
              className="inline-flex items-center gap-3 bg-[#07182e] text-white rounded-full px-6 py-3 font-semibold self-start"
            >
              Explore Facilities
              <ArrowUpRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}