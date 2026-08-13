import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#07182e] text-white flex items-center justify-center px-6">
      <div className="text-center">

        <p className="text-[#d8b35c] text-[10px] tracking-[5px] font-semibold">
          ERROR 404
        </p>

        <h1 className="text-[120px] md:text-[180px] leading-none text-white/5 font-serif mt-4">
          404
        </h1>

        <h2 className="text-3xl md:text-5xl -mt-8">
          Page not found.
        </h2>

        <p className="text-white/45 max-w-md mx-auto mt-5 leading-7">
          The page you're looking for doesn't exist or may have
          been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-[#d8b35c] text-[#07182e] px-6 py-3 rounded-full mt-8 font-semibold"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

      </div>
    </main>
  );
}