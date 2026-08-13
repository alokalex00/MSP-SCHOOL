import { useEffect, useState } from "react";
import { X } from "lucide-react";

import PageHero from "../components/PageHero";

import campus from "../assets/school-campus.jpeg";
import science from "../assets/composite-lab.png";
import computer from "../assets/computer-lab.png";
import library from "../assets/library.png";
import sports from "../assets/sports-room.png";
import playground from "../assets/playground-area.png";
import kabaddi from "../assets/kabaddi.png";
import khoKho from "../assets/kho-kho.png";
import water from "../assets/drinking-area.png";

const photos = [
  { src: campus, category: "Campus", title: "School Campus" },

  { src: science, category: "Learning", title: "Science Lab" },
  { src: computer, category: "Learning", title: "Computer Lab" },
  { src: library, category: "Learning", title: "Library" },

  { src: sports, category: "Sports", title: "Sports Room" },
  { src: playground, category: "Sports", title: "Playground" },
  { src: kabaddi, category: "Sports", title: "Kabaddi Ground" },
  { src: khoKho, category: "Sports", title: "Kho-Kho Ground" },

  { src: water, category: "Amenities", title: "Drinking Water" },
];

const filters = [
  "All",
  "Campus",
  "Learning",
  "Sports",
  "Amenities",
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const visiblePhotos =
    filter === "All"
      ? photos
      : photos.filter((photo) => photo.category === filter);

  return (
    <main>
      <PageHero
        label="Gallery"
        title="Life at MSP,"
        accent="captured."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          {/* FILTERS */}
          <div className="flex gap-2 overflow-x-auto pb-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm transition ${
                  filter === item
                    ? "bg-[#07182e] text-white"
                    : "border border-black/15 bg-white text-[#07182e]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PHOTOS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {visiblePhotos.map((photo) => (
              <button
                key={photo.title}
                onClick={() => setSelected(photo)}
                className="relative overflow-hidden group text-left"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">
                  <p className="text-[9px] tracking-[3px] text-white/60 uppercase">
                    {photo.category}
                  </p>

                  <h2 className="text-xl md:text-2xl mt-1">
                    {photo.title}
                  </h2>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* FULL SCREEN IMAGE */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] bg-black/95 p-4 md:p-10 flex items-center justify-center"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white/20"
            aria-label="Close image"
          >
            <X size={22} />
          </button>

          <div
            onClick={(event) => event.stopPropagation()}
            className="max-w-6xl w-full"
          >
            <img
              src={selected.src}
              alt={selected.title}
              className="max-w-full max-h-[82vh] object-contain mx-auto"
            />

            <div className="text-center text-white mt-4">
              <p className="text-xs tracking-[3px] text-white/45 uppercase">
                {selected.category}
              </p>

              <h3 className="text-xl mt-1">
                {selected.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}