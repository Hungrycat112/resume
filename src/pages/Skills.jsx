import { Link } from "react-router-dom";

const BG = "/assets/img/pink.png";            // pixel pink background
const BALL = "/assets/img/tennisball.png";    // you already have this
// If you also have a racket sprite, set it here; otherwise it will be ignored
const RACKET = "/assets/img/racket.png";      // change or delete if you don't have it

/* ------------ Reusable bits ------------ */
function SkillTag({ children }) {
  return (
    <span
      className="pixel-title inline-block rounded-lg border-4 border-black/70 bg-white/95
                 px-3 py-1 text-black transition-transform hover:scale-[1.03] active:scale-95"
    >
      {children}
    </span>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-xl bg-white/90 shadow-md p-5 md:p-6">
      <h3 className="pixel-title text-xl md:text-2xl text-black mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s, i) => (
          <SkillTag key={i}>{s}</SkillTag>
        ))}
      </div>
    </div>
  );
}

/* ----------------- Page ---------------- */
export default function Skills() {
  // ✏️ Edit these lists to match your stack
  const langs = [
    "Python", "R", "C++", "JavaScript", "Bash",
  ];
  const ml = [
    "PyTorch", "TensorFlow/Keras", "scikit-learn", "CNNs", "RNN/LSTM",
    "XGBoost", "Random Forest", "ElasticNet", "Cross-Validation",
    "PCA / NMF", "Hyperparameter Tuning",
  ];
  const bio = [
    "BioPython", "Bioconductor (R)", "k-mer analysis",
    "NGS / FASTQ", "RNA-seq preprocessing", "Alignment-free pipelines",
  ];
  const tools = [
    "NumPy", "Pandas", "Matplotlib", "Plotly", "Jupyter",
    "Git/GitHub", "Linux", "Docker (basics)",
  ];
  const other = [
    "Technical Writing", "Team Leadership", "Poster & Demo Presentations", "Collaboration", "Tennis" 
  ];

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-6 md:py-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          {/* show racket if present; otherwise only the ball */}
          <img
            src={RACKET}
            onError={(e) => (e.currentTarget.style.display = "none")}
            alt=""
            className="h-12 w-12 select-none"
          />
          <img src={BALL} alt="" className="h-8 w-8 -ml-2 select-none" />
          <h1 className="pixel-title text-2xl md:text-3xl text-black">Skills</h1>
        </div>

        {/* Groups */}
        <div className="mt-6 md:mt-8 grid gap-5">
          <SkillGroup title="Languages" items={langs} />
          <SkillGroup title="Machine Learning / AI" items={ml} />
          <SkillGroup title="Bioinformatics" items={bio} />
          <SkillGroup title="Libraries & Tools" items={tools} />
          <SkillGroup title="Other" items={other} />
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between gap-3">
          <Link
            to="/home"
            className="pixel-title inline-block rounded-lg border-4 border-black/70 bg-white px-4 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95"
          >
            ← Back to Home
          </Link>
          <button
            className="pixel-title rounded-lg border-4 border-black/70 bg-white px-4 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95"
            onClick={() => alert('Swap this for a downloadable skills PDF or resume link.')}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
}
