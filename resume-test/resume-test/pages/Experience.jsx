import { Link } from "react-router-dom";
import { asset } from "../utils/asset";         

const BG    = asset("assets/img/green.png");
const PLANT = asset("assets/img/plant.png");

function ExperienceCard({ title, duration, bullets }) {
  return (
    <div className="w-full rounded-xl bg-white/90 shadow-md p-5 md:p-6">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
        <h3 className="pixel-title text-xl md:text-2xl text-black">{title}</h3>
        <span className="pixel-title text-sm md:text-base text-black/80">
          {duration}
        </span>
      </div>

      <ul className="press2start mt-3 list-disc list-inside text-sm md:text-base leading-relaxed text-black space-y-1">
        {bullets.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

/* -------------- Page -------------- */
export default function Experience() {
  const items = [
    {
      title: "Machine Learning Research Assistant – San Jose State University",
      duration: "July 2025 – Present",
      bullets: [
        "Evaluated Mixture of Experts (MoE) models for classifying synthetic riboswitch sequences to detect SARS-CoV-2 in wastewater.",
        "Benchmarked Lasso, Decision Trees, and XGBoost against MoE for accuracy and interpretability.",
        "Traced and fixed logic issues; hardened preprocessing and model-input pipelines.",
        "Improved pathogen detection vs. PCR, enabling earlier and more effective public-health interventions.",
      ],
    },
    {
      title: "Computational Epigenetics Researcher – UCLA",
      duration: "Sep 2024 – Present",
      bullets: [
        "Built an alignment-free pipeline to predict dog biological age from short k-mer frequencies across 96 whole-genome FASTQ samples.",
        "Ran 10-fold repeated subsampling with Random Forest & ElasticNet; achieved Pearson r = 0.21 and a significant signal (p = 0.01).",
        "Used PCA/NMF for dimensionality reduction; tuned hyperparameters for performance.",
        "Delivered a reusable workflow for phenotype prediction from raw genomic data—faster and more scalable for large studies/vet research.",
      ],
    },
    {
      title: "Protein Analytical Chemistry Intern – Genentech",
      duration: "Jun 2023 – Sep 2023",
      bullets: [
        "Authored GMP-compliant LC-MS maintenance work instructions with visual aids; adopted across the validation team and department.",
        "Digitized freezer sample inventory to streamline tracking and access, cutting retrieval time by 50%+ and reducing misplacement during high-throughput analysis.",
      ],
    },
    {
      title: "Habitat Garden Research Intern – West Valley College",
      duration: "Sep 2022 – Aug 2023",
      bullets: [
        "Researched native California plants and organized biodiversity datasets in Google Sheets.",
        "Helped design an educational habitat garden for public awareness at West Valley College.",
        "Cultivated partnerships with local nurseries; coordinated the Annual Wildflower Show.",
        "Advanced ecological literacy and native plant conservation through community engagement.",
      ],
    },
    {
      title: "Cashier – Bill of Fare Cafe",
      duration: "Mar 2021 – May 2022",
      bullets: [
        "Handled transactions and maintained efficient service in a high-volume setting.",
        "Collaborated effectively to optimize peak-hour delivery and team flow.",
      ],
    },
    {
      title: "Tennis Instructor – Brookside Club of Saratoga",
      duration: "Jun 2021 – Aug 2021",
      bullets: ["Coached children ages 5–12 through tennis drills and personalized instruction."],
    },
  ];

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}     
    >
      <div className="mx-auto max-w-[1150px] px-4 py-6 md:py-10">  {/* a bit wider */}
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src={PLANT} alt="" className="h-20 w-20 md:h-24 md:w-24 select-none" /> {/* bigger plant */}
          <h1 className="pixel-title text-2xl md:text-3xl text-black">Experience</h1>
        </div>

        {/* Cards */}
        <div className="mt-6 md:mt-8 space-y-5">
          {items.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
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
