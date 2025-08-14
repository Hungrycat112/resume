import { useEffect, useRef, useState } from "react";
const AUDIO_SRC = "/assets/audio/cottagecore-17463.mp3"; 

export default function BackgroundAudio() {
  const audioRef = useRef(null);
  const [enabled, setEnabled] = useState(
    () => localStorage.getItem("bgmEnabled") === "true"
  );
  const [volume, setVolume] = useState(
    () => Number(localStorage.getItem("bgmVolume") ?? 0.2)
  );

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(AUDIO_SRC);
      audio.loop = true;
      audio.volume = volume;
      audioRef.current = audio;
    }
    if (enabled) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [enabled, volume]);

  useEffect(() => localStorage.setItem("bgmEnabled", enabled), [enabled]);
  useEffect(() => { 
    localStorage.setItem("bgmVolume", volume);
    audioRef.current.volume = volume;
  }, [volume]);

  return (
    <div 
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg bg-white/90 p-1 border-4 border-black/70 scale-80 origin-bottom-right"
    >
      <button
        onClick={() => setEnabled((s) => !s)}
        className="press2start px-1 py-0.5 text-sm"
      >
        {enabled ? "🔊 On" : "🔈 Off"}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
        className="w-20"
      />
    </div>
  );
}
