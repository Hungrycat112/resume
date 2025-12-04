import { useState } from "react";
import { Link } from "react-router-dom";
import { asset } from "../utils/asset";


const BG = asset("assets/img/yellow.png");
const TROPHY = asset("assets/img/trophy.png");
const CERT_PDF = asset("assets/img/certification.pdf"); 

function AwardCard({ title, org, date, bullets = [], pdf }) {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <div className="w-full rounded-xl bg-white/90 shadow-md p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3 className=" press2start pixel-title text-xl md:text-2xl text-black">
          {title}
          {org ? <span className="text-black/70"> — {org}</span> : null}
        </h3>
        {date ? (
          <span className="pixel-title text-sm md:text-base text-black/80">
            {date}
          </span>
        ) : null}
      </div>

      {bullets.length > 0 && (
        <ul className="press2start mt-3 list-disc list-inside text-sm md:text-base leading-relaxed text-black space-y-1">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}

      {pdf && (
        <>
          <button
            onClick={() => setShowPDF(true)}
            className="mt-4 inline-block pixel-title rounded-lg border-4 border-black/70 bg-white px-3 py-1.5 text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            View Certificate
          </button>

          {/* Modal */}
          {showPDF && (
            <div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              onClick={() => setShowPDF(false)}
            >
              <div
                className="bg-white w-11/12 md:w-3/4 h-5/6 p-4 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={pdf}
                  title="Certification"
                  className="w-full h-full"
                />
                <button
                  onClick={() => setShowPDF(false)}
                  className="mt-2 pixel-title border-4 border-black/70 px-3 py-1 rounded-lg bg-white hover:scale-[1.03]"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function Awards() {
  const items = [
    {
      title: "Second Place",
      org: "IntBiohackathon",
      bullets: [
        "Led development of a CNN regression model to predict brain tumors from MRI images, achieving a 99.72% accuracy rate.",
        "Assembled and guided a dedicated team, initiating the project idea and steering execution.",
        "Designed and presented a research poster and demo prototype to effectively showcase the model’s capabilities.",
      ],
    },
    {
      title: "Introduction to Python in Biomanufacturing",
      org: "SCU BioCAD",
      date: "Issued Jul 2023",
      bullets: [
        "Completed training on Python applications in biomanufacturing workflows: data handling, automation, and analysis.",
        "Credential ID: 7459357245SH",
      ],
      pdf: CERT_PDF,
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
          <img src={TROPHY} alt="" className="h-16 w-16 select-none" />
          <h1 className="pixel-title text-2xl md:text-3xl text-black">Awards & Certifications</h1>
        </div>

        {/* Cards */}
        <div className="mt-6 md:mt-8 space-y-5">
          {items.map((a, i) => (
            <AwardCard key={i} {...a} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between gap-3">
          <Link
            to="/home"
            className="pixel-title inline-block rounded-lg border-4 border-black/70 bg-white px-4 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
