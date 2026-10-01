import Link from "next/link";
import EscrowCard from "@/components/EscrowCard";
import ProofCard from "@/components/ProofCard";

const pains = [
  ["Penjual takut kirim duluan", "Pembeli takut transfer duluan. Akhirnya transaksi batal atau berujung penipuan."],
  ["Pembeli lupa konfirmasi", "Dana penjual tertahan berhari-hari karena pembeli tidak menekan tombol terima."],
  ["Crypto itu ribet", "Seed phrase, gas fee, alamat wallet panjang. Orang awam menyerah di langkah pertama."],
  ["Reputasi mudah dipalsukan", "Screenshot testimoni bisa diedit. Penjual jujur sulit membuktikan rekam jejaknya."],
];
const steps = [
  ["Buat link escrow", "Isi judul, nominal, dan batas waktu. Bagikan link atau QR ke pembeli."],
  ["Pembeli setor dana", "USDC atau USDT terkunci di smart contract. Penjual bisa langsung lihat statusnya."],
  ["Penjual kirim barang", "Unggah nomor resi atau link hasil kerja. Timer auto-release mulai berjalan."],
  ["Dana cair", "Pembeli menekan Terima, atau dana cair sendiri saat timer habis tanpa sengketa."],
];
const features = [
  ["Link & QR instan", "Satu link untuk satu transaksi, siap ditempel di chat atau bio."],
  ["Login tanpa wallet", "Masuk dengan Email, Google, atau akun X. Wallet dibuat otomatis."],
  ["Biaya gas mikro", "Berjalan di Layer 2 (Base/Arbitrum), biaya di bawah $0,02."],
  ["Auto-release", "Pembeli diam? Dana tetap sampai ke penjual setelah timer habis."],
  ["Mediasi arbiter", "Sengketa membekukan dana, arbiter memeriksa bukti lalu refund atau release."],
  ["Kartu reputasi", "Setiap transaksi sukses menambah skor yang bisa dibagikan ke X dan IG Story."],
];

export default function Home() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-14 md:grid-cols-2 md:pt-20">
        <div>
          <h1 className="text-5xl font-extrabold leading-[1.05] sm:text-6xl">Bayar aman, kirim tenang, tanpa perantara.</h1>
          <p className="mt-6 max-w-md text-lg text-ink/75">Fanteena mengunci uang pembeli di smart contract sampai barang atau jasa diterima. Cocok untuk jual beli di X, Instagram, TikTok, dan Telegram.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/create" className="btn-primary">Buat escrow pertama</Link>
            <Link href="/escrow/FTN-2481" className="btn-light">Lihat contoh transaksi</Link>
          </div>
          <p className="mt-5 text-sm text-ink/60">Stablecoin USDC &amp; USDT. Tanpa seed phrase.</p>
        </div>
        <EscrowCard />
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">Jual beli informal masih penuh rasa curiga</h2>
        <div className="mt-8 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {pains.map(([t, d]) => (
            <div key={t} className="border-l-4 border-coral pl-4">
              <h3 className="text-xl font-bold">{t}</h3>
              <p className="mt-1 max-w-md text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="alur" className="mx-auto mt-24 max-w-6xl scroll-mt-20 px-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Cara kerja</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <li key={t} className="card p-5">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-brand font-bold text-white">{i + 1}</span>
              <h3 className="mt-4 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-ink/70">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-12 px-5 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Dibuat supaya terasa seperti aplikasi bank</h2>
          <dl className="mt-8 divide-y-2 divide-ink border-y-2 border-ink">
            {features.map(([t, d]) => (
              <div key={t} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]">
                <dt className="font-display text-lg font-bold">{t}</dt>
                <dd className="text-ink/70">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="rotate-2"><ProofCard /></div>
          <p className="max-w-xs text-center text-sm text-ink/60">Kartu reputasi dibuat otomatis setelah transaksi selesai.</p>
        </div>
      </section>

      <section id="biaya" className="mx-auto mt-24 max-w-6xl scroll-mt-20 px-5">
        <h2 className="text-3xl font-bold sm:text-4xl">Biaya yang jelas</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[["0,8% - 1,2%", "Biaya transaksi", "Dipotong otomatis oleh smart contract saat dana cair."],
            ["3%", "Biaya mediasi", "Hanya jika sengketa butuh pemeriksaan manual arbiter."],
            ["Langganan", "Merchant", "Domain link sendiri (escrow.tokokamu.com) dan badge terverifikasi."]].map(([n, t, d]) => (
            <div key={t} className="card p-6">
              <p className="font-display text-4xl font-extrabold text-brand">{n}</p>
              <h3 className="mt-3 text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-ink/70">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-5">
        <div className="card flex flex-col items-start justify-between gap-6 bg-brand p-8 text-white md:flex-row md:items-center">
          <h2 className="max-w-lg text-3xl font-bold">Siap jualan tanpa takut ditipu?</h2>
          <Link href="/create" className="btn-light !text-ink">Buat link escrow</Link>
        </div>
      </section>
    </>
  );
}
