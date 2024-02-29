import '@/app/globals.css';
import { Karla } from 'next/font/google';
import { Metadata } from 'next';

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})

export const metadata: Metadata = {
  title: "Login - Sistem Informasi Manajemen JTL",
  description: "Sistem Informasi Manajemen Jasa Tirta Luhur",
  icons: "/logo.svg"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className}>
        {children}
      </body>
    </html>
  )
}
