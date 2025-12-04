import { useEffect } from "react";
import { playClick } from "./clickSound";
import { asset } from "../utils/asset";

export default function GlobalClickSound() {
  useEffect(() => {
    const handler = (e) => {
      // don't trigger from slider/volume inputs etc.
      if (e.target.closest('input[type="range"], [data-no-click-sound]')) return;

      // find the nearest "clickable" ancestor
      const clickable = e.target.closest('button, a, [role="button"], .click-sfx');
      if (!clickable) return;

      // avoid double-firing if nested handlers
      if (e.__clickSfxPlayed) return;
      e.__clickSfxPlayed = true;

      playClick();
    };

    // use capture so we catch it early but not interfere
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  return null; // no UI
}
