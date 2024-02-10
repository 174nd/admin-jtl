import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Departemen - JTL admin dashboard",
  description: "NextJs admin dashboard created by Andi",
  icons: "/logo.svg"
};

export default function DataKaryawanLayout({children}: {children: React.ReactNode}) {
  return children;
}
