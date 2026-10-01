"use client";
import { useEffect, useState } from "react";
import Stepper from "./Stepper";

const pad = (n: number) => String(n).padStart(2, "0");

export default function EscrowCard() {
  const [left, setLeft] = useState(71 * 3600 + 59 * 60 + 40);
  useEffect(() => {
    const t = setInterval(() => setLeft((v) => Math.max(0, v - 1)), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="hero-card card -rotate-1 p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-ink/60">Escrow #FTN-2481</p>
          <h3 className="text-xl font-bold">Kamera Fujifilm X100V</h3>
        </div>
        <span className="rounded-full border-2 border-ink bg-sun px-3 py-1 text-xs font-bold">Dana terkunci</span>
      </div>
      <p className="mt-4 font-display text-5xl font-extrabold">250 <span className="text-2xl text-ink/60">USDC</span></p>
      <div className="mt-6"><Stepper current={2} /></div>
      <div className="mt-6 rounded-lg border-2 border-dashed border-ink p-4">
        <p className="text-sm text-ink/60">Dana cair otomatis ke penjual dalam</p>
        <p className="font-display text-3xl font-bold tabular-nums">{pad(Math.floor(left / 3600))}:{pad(Math.floor((left % 3600) / 60))}:{pad(left % 60)}</p>
        <p className="text-xs text-ink/60">kecuali pembeli menekan Ajukan sengketa</p>
      </div>
    </div>
  );
}
