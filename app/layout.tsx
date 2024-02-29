import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

const karla = Inter({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})

export const metadata: Metadata = {
  title: "Jasa Tirta Luhur",
  description: "Manajemen Jasa Tirta Luhur",
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
