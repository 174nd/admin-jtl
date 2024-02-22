import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tambah Penilaian Kinerja - JTL admin dashboard",
  description: "NextJs admin dashboard created by Andi",
  icons: "/logo.svg"
};

export default function ProfileKaryawanLayout({children}: {children: React.ReactNode}) {
  return children;
}
