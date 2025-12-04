import { Link } from "react-router-dom";
import { asset } from "../utils/asset";

const BG = asset("assets/img/blue.png");
const DEGREE = asset("assets/img/degree.png");

function Pill({ children }) {
  return (
    <span className="press2start inline-block rounded-lg border-4 border-black/70 bg-white/95 px-2.5 py-1 text-xs text-black">
      {children}
    </span>
  );
}

function EducationCard({ school, degree, dates, location, bullets = [], coursework = [] }) {
  return (
    <div className="w-full rounded-xl bg-white/90 shadow-md p-5 md:p-6">
      {/* Top line */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3 className="press2start text-xl md:text-2xl text-black">
          {school}
          {location ? <span className="text-black/70"> — {location}</span> : null}
        </h3>
        {dates ? (
          <span className="press2start text-xs md:text-sm text-black/80">{dates}</span>
        ) : null}
      </div>

      {/* Degree line */}
      {degree ? (
        <p className="press2start mt-2 text-xs md:text-sm text-black/90">{degree}</p>
      ) : null}

      {/* Bullets */}
      {bullets.length > 0 && (
        <ul className="press2start mt-3 list-disc list-inside text-xs md:text-sm leading-relaxed text-black space-y-2">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {/* Coursework pills */}
      {coursework.length > 0 && (
        <>
          <p className="press2start mt-4 mb-2 text-xs md:text-sm text-black/80">Relevant coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c, i) => (
              <Pill key={i}>{c}</Pill>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

/* --------------- Page ---------------- */
export default function Education() {
  const items = [
    {
      school: "UCLA",
      location: "Los Angeles, CA",
      degree: "B.S. — Computational Biology",
      dates: "2023–2025",
      bullets: [
        "Current coursework/research focused on ML for genomics and bioinformatics.",
        "Part of BCT — Bruin Club Tennis",
      ],
      coursework: [
        "C++ Programming & Data Structures",
        "Algorithms in Bioinformatics",
        "Probabilistic Genomic Modeling",
        "Biological Modeling",
        "Differential Equations",
        "Linear Algebra",
        "Intro to Probability",
        "Intro to Biostatistics",
      ],
    },
    {
      school: "West Valley College",
      location: "Saratoga, CA",
      degree: "Associate of Biology",
      dates: "2021–2023",
      bullets: [
        "Played for West Valley College Women's Tennis team.",
        "Member of Dr. Michelle Geary's research cohort; co-authored posters on avian handling protocols at CCFS and student-led avian research.",
      ],
      coursework: ["Chemistry", "Biology", "Introduction to Python", "Organic Chemistry"],
    },
  ];

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src={DEGREE} alt="" className="h-14 w-14 select-none" />
          <h1 className="press2start text-2xl md:text-3xl text-black">Education</h1>
        </div>

        {/* Cards */}
        <div className="mt-6 md:mt-8 space-y-5">
          {items.map((ed, i) => (
            <EducationCard key={i} {...ed} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between gap-3">
          <Link
            to="/home"
            className="press2start inline-block rounded-lg border-4 border-black/70 bg-white px-4 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            ← Back to Home
          </Link>
          {/* Example for transcript PDF if you add one to public/assets/img/ */}
          { <a
            href={asset("assets/img/transcript.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="press2start rounded-lg border-4 border-black/70 bg-white px-4 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            View Transcript
          </a> }
        </div>
      </div>
    </div>
  );
}
