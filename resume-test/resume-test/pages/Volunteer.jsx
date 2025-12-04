import { Link } from "react-router-dom";

const BG = asset("assets/img/green.png");
const ICON = asset("assets/img/volunteer.png");      

/* ---------- Card ---------- */
function VolunteerCard({ org, role, dates, bullets = [] }) {
  return (
    <div className="w-full rounded-xl bg-white/90 shadow-md p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3 className="press2start text-xl md:text-2xl text-black">
          {org}
          {role ? <span className="text-black/70"> — {role}</span> : null}
        </h3>
        {dates ? (
          <span className="press2start text-xs md:text-sm text-black/80">{dates}</span>
        ) : null}
      </div>

      {bullets.length > 0 && (
        <ul className="press2start mt-3 list-disc list-inside text-xs md:text-sm leading-relaxed text-black space-y-2">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ---------- Page ---------- */
export default function Volunteer() {
  const items = [
    {
      org: "West Valley College Bird Research Group",
      role: "Avian Researcher",
      dates: "Jan 2021 – Apr 2023",
      bullets: [
        "Collaborated in Dr. Michelle Geary’s cohort to craft research posters on avian handling protocols (CCFS & Avian Research for Students).",
        "Collected field data on birds; refined handling and recording methods.",
        "Identified strategies to improve data accuracy and consistency.",
      ],
    },
    {
      org: "El Camino Hospital",
      role: "Front Desk Volunteer",
      dates: "Apr 2022 - May 2023",
      bullets: [
      "Assisted surgical patients and organized materials to support clinical staff.",
      "Welcomed and checked in visitors, answering questions and providing directions within the hospital.",
      "Escorted patients in wheelchairs to and from appointments, ensuring safety and comfort.",
      "Delivered newspapers and informational materials to patient rooms and waiting areas.",
      "Coordinated with nursing staff to relay patient requests and facilitate timely support."
    ],
    },
  ];

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img
            src={ICON}
            alt=""
            className="h-14 w-14 select-none"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="press2start text-2xl md:text-3xl text-black">Volunteer</h1>
        </div>

        {/* Cards */}
        <div className="mt-6 md:mt-8 space-y-5">
          {items.map((v, i) => (
            <VolunteerCard key={i} {...v} />
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
        </div>
      </div>
    </div>
  );
}
