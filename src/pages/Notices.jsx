import { useEffect, useState } from "react";
import {
  Bell,
  CalendarDays,
  ArrowUpRight,
  X,
  Clock,
  MapPin,
} from "lucide-react";

import PageHero from "../components/PageHero";
import roadSafetyNotice from "../assets/road-safety-notice.jpeg";
import independenceDayNotice from "../assets/independence-day-notice.jpeg";

const notices = [
  {
    id: 1,
    date: "12 August 2026",
    category: "Event",
    title: "Road Safety Awareness Programme",
    description:
      "MSP International School is organizing a Road Safety Awareness Programme to promote road safety, traffic rules and responsible behaviour among students and citizens.",
    time: "11:00 AM",
    location: "MSP International School, Patan",
    image: roadSafetyNotice,
  },

  {
    id: 2,
    date: "15 August 2026",
    category: "Celebration",
    title: "Independence Day Celebration",
    description:
      "MSP International School invites students, parents and members of the school community to join us in celebrating Independence Day with pride, unity and patriotic spirit.",
    time: "School Hours",
    location: "MSP International School, Patan",
    image: independenceDayNotice,
  },
];

export default function Notices() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  // ESC key se popup close
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSelectedNotice(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  // Popup open hone par background scroll stop
  useEffect(() => {
    document.body.style.overflow = selectedNotice ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedNotice]);

  return (
    <main>

      <PageHero
        label="Notices"
        title="Stay informed,"
        accent="stay connected."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          {/* INTRO */}
          <div className="grid lg:grid-cols-2 gap-10 mb-14">

            <div>
              <p className="eyebrow">
                NOTICE BOARD
              </p>

              <h2 className="section-title mt-5">
                Latest from
                <span className="gold italic block">
                  MSP.
                </span>
              </h2>
            </div>

            <p className="body-text max-w-xl lg:self-end">
              Stay updated with important announcements, upcoming
              events and official information from MSP International
              School.
            </p>

          </div>


          {/* NOTICE LIST */}
          <div className="border-t border-black/10">

            {notices.map((notice) => (
              <article
                key={notice.id}
                className="group border-b border-black/10 py-7 md:py-9"
              >

                <div className="grid lg:grid-cols-[170px_1fr_auto] gap-6 lg:items-center">

                  {/* DATE */}
                  <div>

                    <div className="flex items-center gap-2 text-black/45">
                      <CalendarDays size={15} />

                      <span className="text-sm">
                        {notice.date}
                      </span>
                    </div>

                    <p className="text-[9px] tracking-[3px] uppercase text-[#b28b34] mt-2">
                      {notice.category}
                    </p>

                  </div>


                  {/* DETAILS */}
                  <div>

                    <h3 className="text-2xl md:text-3xl">
                      {notice.title}
                    </h3>

                    <p className="body-text text-sm mt-3 max-w-2xl">
                      {notice.description}
                    </p>


                    <div className="flex flex-wrap gap-5 mt-4 text-xs text-black/45">

                      <span className="flex items-center gap-2">
                        <Clock size={14} />
                        {notice.time}
                      </span>

                      <span className="flex items-center gap-2">
                        <MapPin size={14} />
                        {notice.location}
                      </span>

                    </div>

                  </div>


                  {/* VIEW BUTTON */}
                  <button
                    onClick={() => setSelectedNotice(notice)}
                    className="inline-flex items-center gap-3 border border-black/15 px-5 py-3 rounded-full text-sm font-semibold hover:bg-[#07182e] hover:text-white transition justify-self-start lg:justify-self-end"
                  >
                    View Notice
                    <ArrowUpRight size={15} />
                  </button>

                </div>

              </article>
            ))}

          </div>


          {/* BOTTOM MESSAGE */}
          <div className="bg-[#f7f4ed] mt-10 p-7 md:p-9 flex gap-5">

            <Bell
              size={21}
              className="shrink-0 mt-1"
            />

            <div>
              <h3 className="text-xl">
                Official Notice Board
              </h3>

              <p className="body-text text-sm mt-2">
                Please check this page regularly for school
                announcements, events and important updates.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          NOTICE FULLSCREEN POPUP
      ========================== */}

      {selectedNotice && (
        <div
          onClick={() => setSelectedNotice(null)}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
        >

          {/* CLOSE */}
          <button
            onClick={() => setSelectedNotice(null)}
            className="fixed top-5 right-5 md:top-7 md:right-7 w-12 h-12 rounded-full bg-white text-[#07182e] grid place-items-center z-[210] hover:scale-105 transition"
            aria-label="Close notice"
          >
            <X size={21} />
          </button>


          {/* IMAGE */}
          <div
            onClick={(event) => event.stopPropagation()}
            className="max-w-4xl w-full h-full flex flex-col items-center justify-center"
          >

            <img
              src={selectedNotice.image}
              alt={selectedNotice.title}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl"
            />

            <p className="text-white/60 text-sm mt-4 text-center">
              {selectedNotice.title}
            </p>

          </div>

        </div>
      )}

    </main>
  );
}