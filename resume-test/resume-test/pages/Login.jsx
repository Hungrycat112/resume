import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { playClick } from "../components/clickSound";
import { asset } from "../utils/asset";

const BG = asset('assets/img/title_back.png');
const AVATAR = asset('assets/img/avatar_background_removed_exact.png');
const BASE_W = 1280;
const BASE_H = 720;
const TITLE_Y = 65;
const TITLE_SIZE = 44;
const AVATAR_Y = 150;
const AVATAR_W = 480;
const BTN_Y = 560;
const BTN_W = 520;
const BTN_H = 80;
const TITLE_WIDTH = 1000;

export default function Login() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const ww = window.innerWidth;
      const wh = window.innerHeight;
      setScale(Math.min(ww / BASE_W, wh / BASE_H));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="min-h-dvh grid place-items-center"
      style={{
        backgroundImage: `url(${BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="relative"
        style={{
          width: BASE_W,
          height: BASE_H,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 8,
        }}
      >
        {/* Title */}
        <h1
          className="absolute pixel-title text-black text-center select-none"
          style={{
            top: TITLE_Y,
            left: "50%",
            transform: "translateX(-50%)",
            width: TITLE_WIDTH,
            fontSize: TITLE_SIZE,
            lineHeight: 1.3,
            letterSpacing: "0.5px",
            textShadow: "0 2px 0 rgba(255,255,255,0.75)",
            whiteSpace: "normal",
          }}
        >
          Welcome to Sonya’s
          <br />
          Portfolio
        </h1>

        {/* Avatar */}
        <Link
          to="/me"
          onClick={playClick}
          className="group absolute left-1/2 -translate-x-1/2"
          style={{ top: AVATAR_Y, width: AVATAR_W }}
          aria-label="Open About Me"
        >
          {/* Glow halo */}
          <span
            className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-0
                       transition-opacity duration-200 group-hover:opacity-70"
            style={{
              background:
                "radial-gradient(closest-side, rgba(255,255,255,0.9), rgba(255,255,255,0.35) 60%, rgba(255,255,255,0) 75%)",
            }}
          />

          <img
            src={AVATAR}
            alt="avatar"
            draggable="false"
            className="relative mx-auto w-full h-auto select-none cursor-pointer
                       transition-transform duration-200 ease-out
                       hover:scale-110 active:scale-95
                       drop-shadow-[0_10px_0_rgba(0,0,0,0.18)]"
            style={{ imageRendering: "pixelated" }}
          />
        </Link>

        {/* Press Start */}
        <Link
          to="/home"
          onClick={playClick}
          className="absolute grid place-items-center pixel-title text-black rounded-[20px]
                     bg-[#CDECCB] border-[4px] border-[#8CBF8A]
                     transition-transform duration-200 ease-in-out
                     hover:scale-110 hover:brightness-110 cursor-pointer
                     active:scale-95"
          style={{
            top: BTN_Y,
            left: "50%",
            transform: "translateX(-50%)",
            width: BTN_W,
            height: BTN_H,
            fontSize: 28,
          }}
          aria-label="Press Start"
        >
          Press Start
        </Link>
      </div>
    </div>
  );
}
