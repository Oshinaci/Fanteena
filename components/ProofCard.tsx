export default function ProofCard({ amount = 250, name = "@namastore", deals = 48, score = 98 }: { amount?: number; name?: string; deals?: number; score?: number }) {
  return (
    <div className="card w-full max-w-sm bg-sun p-6">
      <p className="font-display text-lg font-extrabold">fanteena.</p>
      <p className="mt-6 text-2xl font-bold leading-snug">Baru saja menyelesaikan transaksi aman ${amount} via Fanteena!</p>
      <div className="mt-6 flex items-end justify-between border-t-2 border-ink pt-4">
        <div><p className="font-semibold">{name}</p><p className="text-sm">{deals} transaksi selesai</p></div>
        <p className="font-display text-5xl font-extrabold">{score}<span className="text-lg">/100</span></p>
      </div>
    </div>
  );
}
