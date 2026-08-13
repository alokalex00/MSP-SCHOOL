import { motion } from "motion/react";

export default function PageHero({ label, title, accent }) {
  return (
    <section className="bg-[#07182e] text-white pt-40 md:pt-48 pb-16 md:pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-bold uppercase mb-7">
          {label}
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl lg:text-8xl leading-[.95]"
        >
          {title}
          {accent && (
            <span className="block italic text-[#d8b35c]">
              {accent}
            </span>
          )}
        </motion.h1>
      </div>
    </section>
  );
}