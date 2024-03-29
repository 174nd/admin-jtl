import { ButtonLink } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Image from "next/image";
import { TbDoorExit } from "react-icons/tb";

export default function Login() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500">
      <div className="bg-[url('/bg-login.jpeg')] w-full h-2/3 md:h-2/5 sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-blue-600">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-50 bg-sky-800 md:h-full h-1/3">

          <Image src={"logo.svg"} alt="My SVG" width={200} height={200} className="w-20 h-20 mx-auto hidden md:block" />

          <h1 className="text-3xl md:text-3xl font-extrabold text-white md:my-2">
            Jasa Tirta Luhur
          </h1>
          <p className=" text-white font-mono md:mb-2">
            Sistem Informasi Manajemen
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center bg-white md:py-8 px-4">
          <h3 className="mb-4 font-bold text-3xl flex items-center text-blue-500">Masuk</h3>
          <form action="#" className="px-3 flex flex-col justify-center items-center w-full gap-3">
            <Input className="w-full" type="email" placeholder="email"/>
            <Input className="w-full" type="password" placeholder="password"/>

            <ButtonLink href="/dashboard" className="w-full">
              <TbDoorExit className="w-5 h-5 inline"/>
              Login
            </ButtonLink>
          </form>
        </div>
      </div>
    </div>
  );
}
