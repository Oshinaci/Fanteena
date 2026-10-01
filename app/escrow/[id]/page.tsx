"use client";
import { useState } from "react";
import Stepper from "@/components/Stepper";
import ProofCard from "@/components/ProofCard";

type Status = "Created" | "Funded" | "Shipped" | "Completed" | "Disputed" | "Refunded";
const index: Record<Status, number> = { Created: 0, Funded: 1, Shipped: 2, Completed: 3, Disputed: 2, Refunded: 3 };
const label: Record<Status, string> = { Created: "Menunggu dana", Funded: "Dana terkunci", Shipped: "Sudah dikirim", Completed: "Selesai", Disputed: "Sengketa", Refunded: "Dana dikembalikan" };

export default function EscrowDetail({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState<Status>("Funded"); // TODO: baca dari smart contract
  const [proof, setProof] = useState("");

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm text-ink/60">Escrow #{params.id}</p>
      <div className="mt-1 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-4xl font-extrabold">Kamera Fujifilm X100V</h1>
        <span className={`rounded-full border-2 border-ink px-4 py-1 text-sm font-bold ${status === "Disputed" ? "bg-coral" : status === "Completed" ? "bg-mint" : "bg-sun"}`}>{label[status]}</span>
      </div>
      <p className="mt-3 font-display text-5xl font-extrabold">250 <span className="text-2xl text-ink/60">USDC</span></p>

      <div className="card mt-8 p-6"><Stepper current={index[status]} /></div>

      <div className="card mt-6 p-6">
        <h2 className="text-xl font-bold">Aksi</h2>
        <p className="mt-1 text-sm text-ink/60">Mode demo: semua aksi tampil agar alur mudah dicoba.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {status === "Created" && <button className="btn-primary" onClick={() => setStatus("Funded")}>Setor 250 USDC</button>}
          {status === "Funded" && (
            <div className="flex w-full flex-col gap-3 sm:flex-row">
              <input className="field" value={proof} onChange={(e) => setProof(e.target.value)} placeholder="Nomor resi atau link hasil kerja" />
              <button className="btn-primary whitespace-nowrap" disabled={proof.trim().length < 4} onClick={() => setStatus("Shipped")}>Kirim bukti</button>
            </div>
          )}
          {status === "Shipped" && (<>
            <button className="btn-primary" onClick={() => setStatus("Completed")}>Terima &amp; cairkan dana</button>
            <button className="btn-light !bg-coral" onClick={() => setStatus("Disputed")}>Ajukan sengketa</button>
          </>)}
          {status === "Disputed" && (<>
            <p className="w-full text-sm">Dana dibekukan. Arbiter Fanteena sedang memeriksa bukti.</p>
            <button className="btn-light" onClick={() => setStatus("Refunded")}>Putusan: refund pembeli</button>
            <button className="btn-light" onClick={() => setStatus("Completed")}>Putusan: release penjual</button>
          </>)}
          {(status === "Completed" || status === "Refunded") && <p className="text-sm">Transaksi ditutup.</p>}
        </div>
      </div>

      {status === "Completed" && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <ProofCard />
          <button className="btn-primary" onClick={() => window.open("https://x.com/intent/tweet?text=" + encodeURIComponent("Baru saja menyelesaikan transaksi aman $250 via Fanteena!"), "_blank")}>Bagikan ke X</button>
        </div>
      )}
    </div>
  );
}
