import { Link } from "react-router-dom";
import { playClick } from "../components/clickSound";
import { asset } from "../utils/asset";

const CANVAS_IMG = asset("assets/img/canvas.jpg");

export default function Me() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage:`url(${asset("assets/img/blue.png")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-xl p-8 max-w-3xl w-full text-center shadow-lg">
        {/* Large Picture */}
        <img
          src={CANVAS_IMG}
          alt="Sonya"
          className="w-full h-auto mb-6 rounded-lg object-cover"
        />

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-blue-800">
          Hi, I’m Sonya 👋
        </h1>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">
          I’m a computational biology graduate with a passion for applying machine learning 
          to genomics and bioinformatics. I’ve worked on k-mer analysis, riboswitch classification, 
          and love blending science with creative side projects like pixel art UI.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Outside of research, I enjoy tennis, volunteering, and making visually fun, interactive 
          projects like this one. I’m always exploring ways to combine my STEM background 
          with engaging storytelling.
        </p>

        {/* Back to Room Button */}
        <Link
        to="/"
        onClick={playClick}
        className="press2start inline-flex items-center gap-2 px-6 py-2 border-4 border-black/70 bg-white text-black rounded-xl shadow-lg hover:scale-[1.05] hover:shadow-xl active:scale-95 transition-all duration-150"
        >
        ← Back to Room
        </Link>

      </div>
    </div>
  );
}
