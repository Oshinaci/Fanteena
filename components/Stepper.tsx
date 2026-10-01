export const STEPS = ["Dibuat", "Didanai", "Dikirim", "Selesai"];

export default function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex items-center">
      {STEPS.map((s, i) => (
        <li key={s} className="flex flex-1 items-center last:flex-none">
          <div className="flex flex-col items-center gap-1">
            <span className={`grid h-8 w-8 place-items-center rounded-full border-2 border-ink text-sm font-bold ${i < current ? "bg-mint" : i === current ? "bg-sun" : "bg-white"}`}>
              {i < current ? "✓" : i + 1}
            </span>
            <span className="text-xs font-medium">{s}</span>
          </div>
          {i < STEPS.length - 1 && <span className={`mx-1 mb-5 h-0.5 flex-1 ${i < current ? "bg-ink" : "bg-ink/20"}`} />}
        </li>
      ))}
    </ol>
  );
}
