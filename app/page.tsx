import Input from "@/components/Input";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
      <div className="bg-[url('https://i.postimg.cc/13pssvxG/bg-image.png')] w-full h-2/3 md:h-2/5 sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-50 bg-sky-300 md:h-full h-1/3">

          <Image src={"logo.svg"} alt="My SVG" width={200} height={200} className="w-20 h-20 mx-auto hidden md:block" />

          <h1 className="text-3xl md:text-3xl font-extrabold text-white md:my-2">
            Jasa Tirta Luhur
          </h1>
          <p className=" text-white font-mono md:mb-2">
            Sistem Kepegawaian
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white md:py-8 px-4">
          <h3 className="mb-4 font-bold text-3xl flex items-center text-blue-500">Masuk</h3>
          <form action="#" className="px-3 flex flex-col justify-center items-center w-full gap-3">
            <Input props={{className: "w-full", type: "email", placeholder: "email"}}/>
            <Input props={{className: "w-full", type: "password", placeholder: "password"}}/>
            
            <Link href="/dashboard" className="flex justify-center items-center gap-1 bg-blue-500 hover:bg-blue-600 rounded-xl w-full text-white py-2 hover:scale-105 duration-300">
              <svg className="w-5 h-5 inline"fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
