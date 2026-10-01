"use client";
import { useState } from "react";
import Link from "next/link";

const FEE = 0.01; // 1% (PRD: 0.8% - 1.2%)

export default function CreateEscrow() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("USDC");
  const [network, setNetwork] = useState("Base");
  const [days, setDays] = useState("3");
  const [id, setId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const num = parseFloat(amount) || 0;
  const valid = title.trim().length > 2 && num > 0;
  const link = id ? `https://fanteena.app/e/${id}` : "";

  const submit = () => setId("FTN-" + Math.floor(1000 + Math.random() * 9000)); // TODO: panggil smart contract

  return (
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold">Buat link escrow</h1>
        <p className="mt-2 text-ink/70">Isi detail transaksi, lalu bagikan link ke pembeli.</p>
        <div className="mt-8 space-y-5">
          <label className="block"><span className="mb-1 block font-semibold">Judul transaksi</span>
            <input className="field" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Contoh: Komisi ilustrasi karakter" /></label>
          <div className="grid grid-cols-2 gap-4">
            <label className="block"><span className="mb-1 block font-semibold">Nominal</span>
              <input className="field" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="250" /></label>
            <label className="block"><span className="mb-1 block font-semibold">Token</span>
              <select className="field" value={token} onChange={(e) => setToken(e.target.value)}><option>USDC</option><option>USDT</option></select></label>
            <label className="block"><span className="mb-1 block font-semibold">Jaringan</span>
              <select className="field" value={network} onChange={(e) => setNetwork(e.target.value)}><option>Base</option><option>Arbitrum</option><option>Solana</option></select></label>
            <label className="block"><span className="mb-1 block font-semibold">Auto-release</span>
              <select className="field" value={days} onChange={(e) => setDays(e.target.value)}>{["3", "5", "7"].map((d) => <option key={d} value={d}>{d} hari</option>)}</select></label>
          </div>
          <button className="btn-primary w-full" disabled={!valid} onClick={submit}>Buat link escrow</button>
          {!valid && <p className="text-sm text-ink/60">Isi judul (min. 3 huruf) dan nominal untuk melanjutkan.</p>}
        </div>
      </div>

      <div className="space-y-5">
        <div className="card p-6">
          <p className="text-sm text-ink/60">Pratinjau</p>
          <h2 className="mt-1 text-2xl font-bold">{title || "Judul transaksi"}</h2>
          <p className="mt-3 font-display text-4xl font-extrabold">{num.toLocaleString("id-ID")} <span className="text-xl text-ink/60">{token}</span></p>
          <dl className="mt-5 space-y-2 border-t-2 border-ink pt-4 text-sm">
            <div className="flex justify-between"><dt>Jaringan</dt><dd className="font-semibold">{network}</dd></div>
            <div className="flex justify-between"><dt>Dana cair otomatis setelah</dt><dd className="font-semibold">{days} hari</dd></div>
            <div className="flex justify-between"><dt>Biaya platform (1%)</dt><dd className="font-semibold">{(num * FEE).toFixed(2)} {token}</dd></div>
            <div className="flex justify-between"><dt>Diterima penjual</dt><dd className="font-semibold">{(num * (1 - FEE)).toFixed(2)} {token}</dd></div>
          </dl>
        </div>
        {id && (
          <div className="card bg-mint p-6">
            <h3 className="text-lg font-bold">Link siap dibagikan</h3>
            <p className="mt-2 break-all rounded-lg border-2 border-ink bg-white p-3 font-mono text-sm">{link}</p>
            <div className="mt-4 flex gap-3">
              <button className="btn-light" onClick={() => { navigator.clipboard?.writeText(link); setCopied(true); }}>{copied ? "Link disalin" : "Salin link"}</button>
              <Link href={`/escrow/${id}`} className="btn-primary">Buka transaksi</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
