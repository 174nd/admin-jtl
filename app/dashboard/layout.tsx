import '@/app/globals.css';
import Footer from '@/components/dashboard/footer';
import Header from '@/components/dashboard/header';
import Sidebar from '@/components/dashboard/sidebar';
import HeaderSidebarContextProvider from '@/contexts/headerSidebar-context';
import { Metadata } from 'next';
import { Karla } from 'next/font/google';

const karla = Karla({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ['latin'],
  variable: "--font-karla"
})

export const metadata: Metadata = {
  title: "JTL admin dashboard",
  description: "NextJs admin dashboard created by Andi",
  icons: "/logo.svg"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={karla.className}>
      <div className="min-h-screen bg-gray-50/50">
        <HeaderSidebarContextProvider>
          <Sidebar/>
          <div className="p-4 xl:ml-72 relative">
            <Header/>
            <div className="mt-9">
              {children}
            </div>
            <Footer/>
          </div>
        </HeaderSidebarContextProvider>
      </div>
      </body>
    </html>
  )
}
