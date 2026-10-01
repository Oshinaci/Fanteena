import type { Metadata } from "next";
import Link from "next/link";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const body = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Fanteena - Escrow aman untuk jual beli di sosmed",
  description: "Dana dikunci di smart contract sampai barang sampai. Login pakai Google atau X, tanpa seed phrase.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable}`}>
      <body>
        <header className="sticky top-0 z-20 border-b-2 border-ink bg-paper/95 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
            <Link href="/" className="font-display text-2xl font-extrabold">fanteena<span className="text-brand">.</span></Link>
            <div className="flex items-center gap-2 sm:gap-5 text-sm font-medium">
              <Link href="/#alur" className="hidden sm:block hover:text-brand">Cara kerja</Link>
              <Link href="/#biaya" className="hidden sm:block hover:text-brand">Biaya</Link>
              <Link href="/escrow/FTN-2481" className="hidden sm:block hover:text-brand">Contoh transaksi</Link>
              <Link href="/create" className="btn-primary !py-2">Buat escrow</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="mt-24 border-t-2 border-ink bg-ink text-paper">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between">
            <p className="font-display text-lg font-bold">fanteena.</p>
            <p className="text-paper/60">Escrow tanpa perantara &amp; reputasi on-chain. v1.0.0-MVP</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
