import {
  ArrowRight,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import PageHero from "../components/PageHero";

const steps = [
  "Contact the school office for admission information.",
  "Visit the school campus and speak with the admission team.",
  "Complete the required admission formalities.",
  "Submit the required documents to the school office.",
];

export default function Admission() {
  return (
    <main>
      <PageHero
        label="Admissions"
        title="Begin your"
        accent="MSP journey."
      />

      <section className="page-section">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 lg:gap-20">

            <div>
              <p className="eyebrow">ADMISSION ENQUIRY</p>

              <h2 className="section-title mt-5">
                Your journey
                <span className="gold italic block">
                  starts here.
                </span>
              </h2>

              <p className="body-text mt-6">
                For information about admission availability,
                eligibility, required documents and other details,
                please contact the school office directly.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                <a
                  href="tel:+917252955955"
                  className="bg-[#07182e] text-white rounded-full px-6 py-3 inline-flex items-center gap-2 font-semibold"
                >
                  <Phone size={16} />
                  Call School
                </a>

                <a
                  href="https://wa.me/917252955955?text=Hello%20MSP%20International%20School%2C%20I%20would%20like%20to%20know%20about%20admission."
                  target="_blank"
                  rel="noreferrer"
                  className="border border-black/15 rounded-full px-6 py-3 inline-flex items-center gap-2 font-semibold"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

              </div>
            </div>

            {/* STEPS */}
            <div className="border-t border-black/10">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="grid grid-cols-[50px_1fr] gap-5 py-6 border-b border-black/10"
                >
                  <span className="text-[#b28b34] text-sm">
                    0{index + 1}
                  </span>

                  <div className="flex gap-4">
                    <CheckCircle2
                      size={18}
                      className="shrink-0 mt-1"
                    />

                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* CONTACT */}
          <div className="grid md:grid-cols-2 mt-16">

            <div className="bg-[#07182e] text-white p-8 md:p-12">
              <p className="text-[#d8b35c] text-[10px] tracking-[4px]">
                TALK TO US
              </p>

              <h3 className="text-3xl mt-5">
                Admission Enquiry
              </h3>

              <a
                href="tel:+917252955955"
                className="text-2xl md:text-4xl block mt-8"
              >
                7252 955 955
              </a>

              <a
                href="tel:+917251955955"
                className="text-white/50 block mt-2"
              >
                7251 955 955
              </a>
            </div>

            <div className="bg-[#d8b35c] text-[#07182e] p-8 md:p-12">
              <MapPin />

              <h3 className="text-3xl mt-5">
                Visit the School
              </h3>

              <p className="mt-5 leading-7">
                MSP International School
                <br />
                Main Road Patan
                <br />
                Palamu, Jharkhand – 822123
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-7 font-semibold"
              >
                Contact Information
                <ArrowRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}