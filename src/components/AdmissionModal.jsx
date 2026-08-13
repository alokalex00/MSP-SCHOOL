import { useEffect, useState } from "react";
import {
  X,
  User,
  Phone,
  Mail,
  GraduationCap,
  Send,
} from "lucide-react";

export default function AdmissionModal({ open, onClose }) {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    className: "",
    message: "",
  });

  // ESC press karne par close
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Abhi backend connected nahi hai
    console.log("Admission Enquiry:", form);

    alert(
      "Submission Successful!\n\nThank you for your admission enquiry. Our school team will contact you soon."
    );

    // Form reset
    setForm({
      studentName: "",
      parentName: "",
      phone: "",
      email: "",
      className: "",
      message: "",
    });

    // Popup close
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[300] bg-[#020b15]/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#f8f5ee] w-full max-w-5xl max-h-[94vh] overflow-y-auto shadow-2xl rounded-2xl md:rounded-[28px]"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close admission form"
          className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-[#07182e] text-white grid place-items-center hover:rotate-90 transition duration-300"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-[0.75fr_1.25fr]">

          {/* LEFT SIDE */}
          <div className="bg-[#07182e] text-white p-8 md:p-10 lg:p-12 rounded-t-2xl lg:rounded-l-[28px] lg:rounded-tr-none">

            <p className="text-[#d8b35c] text-[10px] tracking-[4px] font-bold">
              ADMISSION ENQUIRY
            </p>

            <h2 className="text-4xl md:text-5xl mt-5 leading-tight">
              Begin your
              <span className="block italic text-[#d8b35c]">
                MSP journey.
              </span>
            </h2>

            <p className="text-white/55 leading-7 mt-6">
              Fill in a few details and our school team will contact
              you regarding admission information.
            </p>

            <div className="border-t border-white/10 mt-9 pt-7 space-y-4 text-sm text-white/60">

              <p>
                <span className="text-white">
                  School
                </span>
                <br />
                MSP International School
              </p>

              <p>
                <span className="text-white">
                  Admission Contact
                </span>
                <br />
                7252 955 955
              </p>

              <p>
                <span className="text-white">
                  Location
                </span>
                <br />
                Main Road Patan, Palamu
              </p>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="p-6 sm:p-8 md:p-10 lg:p-12">

            <div className="pr-12">
              <p className="eyebrow">
                STUDENT INFORMATION
              </p>

              <h3 className="text-3xl md:text-4xl mt-3">
                Admission Enquiry
              </h3>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8"
            >
              <div className="grid md:grid-cols-2 gap-5">

                <Field
                  icon={User}
                  label="Student Name"
                  name="studentName"
                  value={form.studentName}
                  onChange={handleChange}
                  placeholder="Enter student's name"
                  required
                />

                <Field
                  icon={User}
                  label="Parent / Guardian Name"
                  name="parentName"
                  value={form.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent name"
                  required
                />

                <Field
                  icon={Phone}
                  label="Mobile Number"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  type="tel"
                  required
                />

                <Field
                  icon={Mail}
                  label="Email Address"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  type="email"
                />

              </div>

              {/* CLASS */}
              <div className="mt-5">

                <label className="text-xs font-semibold tracking-wide">
                  Class Seeking Admission
                </label>

                <div className="relative mt-2">

                  <GraduationCap
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
                  />

                  <input
                    name="className"
                    value={form.className}
                    onChange={handleChange}
                    required
                    placeholder="Example: Class 5"
                    className="w-full border border-black/10 bg-white rounded-xl py-4 pl-11 pr-4 outline-none focus:border-[#b58b35]"
                  />

                </div>
              </div>

              {/* MESSAGE */}
              <div className="mt-5">

                <label className="text-xs font-semibold tracking-wide">
                  Message
                  <span className="text-black/35 font-normal">
                    {" "}— optional
                  </span>
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Anything you would like to ask us?"
                  className="w-full border border-black/10 bg-white rounded-xl p-4 mt-2 outline-none resize-none focus:border-[#b58b35]"
                />

              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full sm:w-auto mt-7 bg-[#07182e] text-white px-7 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 hover:bg-[#d8b35c] hover:text-[#07182e] transition"
              >
                Submit Enquiry
                <Send size={16} />
              </button>

              <p className="text-[11px] text-black/40 leading-5 mt-4">
                Please provide accurate contact information so the
                school can respond to your enquiry.
              </p>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}


/* =========================
   REUSABLE INPUT FIELD
========================= */

function Field({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) {
  return (
    <div>

      <label className="text-xs font-semibold tracking-wide">
        {label}
      </label>

      <div className="relative mt-2">

        <Icon
          size={17}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-black/35"
        />

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full border border-black/10 bg-white rounded-xl py-4 pl-11 pr-4 outline-none focus:border-[#b58b35]"
        />

      </div>

    </div>
  );
}