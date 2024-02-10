import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Karyawan - JTL admin dashboard",
  description: "NextJs admin dashboard created by Andi",
  icons: "/logo.svg"
};

export default function DataKaryawanLayout({children}: {children: React.ReactNode}) {
  return children;
}
