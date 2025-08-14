import { useState } from "react";
import { Link } from "react-router-dom";

const BG = "/assets/img/blue.png";        
const ICON = "/assets/img/phone.png"; 
const phone = "+1 (408) 386-9636";               
const phoneHref = "tel:+14083869636";

export default function Socials() {
  const email = "sonyahu939@gmail.com";  
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sonya-h/" },
    { label: "GitHub", href: "https://github.com/Hungrycat112" },
    { label: "Resume (PDF)", href: "https://drive.google.com/file/d/1_wrMvSJJNlsLMSb-FmE70rB2nRosh7jh/view?usp=drive_link" }, 
  ];

  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  const [copiedPhone, setCopiedPhone] = useState(false);
  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1200);
    } catch {}
  };

  return (
    <div
      className="min-h-dvh w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      <div className="mx-auto max-w-[900px] px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={ICON}
            className="h-12 w-12 select-none"
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <h1 className="press2start text-2xl md:text-3xl text-black">Socials & Contact</h1>
        </div>

        {/* Card */}
        <div className="rounded-xl bg-white/90 shadow-md p-5 md:p-6">
          <h2 className="press2start text-xl md:text-2xl text-black mb-4">Say hi 👋</h2>

          {/* Email row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <span className="press2start text-sm md:text-base text-black">
              {email}
            </span>
            <div className="flex gap-2">
              <button
                onClick={copyEmail}
                className="press2start rounded-lg border-4 border-black/70 bg-white px-3 py-1 text-black transition-transform hover:scale-[1.03] active:scale-95"
                aria-label="Copy email"
              >
                {copied ? "Copied!" : "Copy email"}
              </button>
            </div>
          </div>

          {/* Phone row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
            <span className="press2start text-sm md:text-base text-black">
              {phone}
            </span>
            <div className="flex gap-2">
              <button
                onClick={copyPhone}
                className="press2start rounded-lg border-4 border-black/70 bg-white px-3 py-1 text-black transition-transform hover:scale-[1.03] active:scale-95"
                aria-label="Copy phone"
              >
                {copiedPhone ? "Copied!" : "Copy number"}
              </button>
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="press2start rounded-lg border-4 border-black/70 bg-white px-3 py-2 text-black transition-transform hover:scale-[1.03] active:scale-95 text-center"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
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
