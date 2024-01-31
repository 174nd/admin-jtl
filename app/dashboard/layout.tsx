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
      <div className="min-h-screen bg-gray-50/50 relative">
        <HeaderSidebarContextProvider>
          <Sidebar/>
          <div className="p-4 xl:ml-72 relative">
            <Header/>
            <div className="mt-9 container">
              {children}
            </div>
            <Footer/>
          </div>
        </HeaderSidebarContextProvider>
      



      </div>




      {/* <div className="fixed inset-0 z-50 w-full h-screen overflow-hidden bg-black/30 flex items-center justify-center">
          <div className="w-full max-w-md px-4 pt-10 pb-4 rounded-md shadow-lg overflow-auto bg-white my-10">
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            </div>
          </div>
        </div> */}


      </body>
    </html>
  )
}
