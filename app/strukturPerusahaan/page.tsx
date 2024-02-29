import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Image from "next/image";

export default function Login() {
  return (
    <>
      <Header/>
      <div className={`w-full h-96 relative flex justify-center overflow-hidden -z-10`}>
        <Image alt='' src="/hero.jpg" width={1080} height={1080} className={`absolute h-screen w-full -bottom-24`}/>
        <div className="absolute top-0 h-full w-full bg-gradient-to-r from-sky-300/30 via-sky-400/30 to-blue-500/30 backdrop-blur-sm"/>
      </div>
      <div className="container mx-auto w-full -mt-56 bg-white/90 rounded-xl shadow-xl mb-24">
        <div className="relative overflow-hidden h-48 rounded-t-xl backdrop-blur-sm">
          <Image alt='' src="/bgJabaran.jpeg" width={1080} height={1080} className={`w-full absolute -bottom-64`}/>
          <div className="absolute top-0 h-full w-full bg-black/30 backdrop-blur-sm"/>
          <div className="absolute w-full h-full z-10 flex items-center">
            <h1 className="mx-auto font-bold text-6xl text-white">Struktur Perusahaan</h1>
          </div>
        </div>
        <div className="bg-blue-500"/>
        <div className="px-16 py-10">



        <div className="flex flex-wrap justify-center">
      <div className="w-full grid lg:grid-cols-11 lg:gap-4">
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-1 lg:col-start-5">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/UdienYulianto.png" alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Udien Yulianto</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Komisaris Utama</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-2 lg:col-start-8">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture11.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Indriani Widiastuti</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Komisaris</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-4 lg:col-start-5">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
            <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Utama</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-7 lg:col-start-3">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
              <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Operasi dan Pengembangan</p>
          </div>
        </div>
        
        <div className="flex justify-center py-3 w-full mb-10 text-center transition-all duration-200  rounded-lg md:flex-row md:text-left bg-neutral-50 shadow hover:bg-white ease col-span-12 lg:col-span-3 lg:row-span-3 lg:row-start-7 lg:col-start-7">
          <div className="flex flex-col mx-4">
            <img className="object-cover w-full h-fw-full rounded-full rounded-tr-none mb-5 bg-gray-300 md:mb-0"
            src="/Picture22.jpg"
            alt=""/>
            <h3 className="mt-3 text-xl text-center font-semibold text-gray-800 truncate">Nandang Munandar</h3>
              <p className="mt-2 text-sm font-base text-center text-gray-600">Direktur Keuangan, SDM dan Manajemen Risiko</p>
          </div>
        </div>

      </div>
    </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
}
