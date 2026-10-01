# Fanteena Frontend

Frontend MVP untuk Fanteena (escrow terdesentralisasi & reputasi on-chain). Next.js 14 (App Router), TypeScript, TailwindCSS.

## Menjalankan
```bash
npm install
npm run dev   # http://localhost:3000
```

## Halaman
- `/` landing page
- `/create` form buat link escrow + pratinjau biaya
- `/escrow/[id]` status transaksi, bukti kirim, sengketa, kartu reputasi (demo, state lokal)

## Langkah berikutnya
- Pasang Privy (`@privy-io/react-auth`) di `app/layout.tsx`, isi `NEXT_PUBLIC_PRIVY_APP_ID`
- Hubungkan Viem/Wagmi ke smart contract pada `submit` (`app/create`) dan aksi (`app/escrow/[id]`)
- Simpan metadata ke Supabase, bukti ke IPFS/Arweave
- Generate QR code untuk link escrow
