"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Table from "@/components/ui/Table";
import Textarea from "@/components/ui/Textarea";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPencilAlt, FaUserPlus } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegEye } from "react-icons/fa6";



function Action(){
  return (
    <>
      <Link href={"/dashboard/dataKaryawan/profile"} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
        <FaRegEye/>
      </Link>
      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110" 
      // onClick={() => {setOpenModal(!openModal); addModal()}}
      >
        <FaPencilAlt/>
      </div>

    </>
  );
}


export default function DataKaryawan() {
  const { setHeaderBar, setSidebarActiveKey, addModal } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({pageName: "Departemen", breadCrumb: ["Dashboard", "Departemen"]});
    setSidebarActiveKey("Departemen");
  }, [setHeaderBar, setSidebarActiveKey])

  return (
    <div className="my-4 grid grid-cols-2 space-y-0 space-x-4">
      <div className="relative rounded-lg overflow-hidden h-fit bg-white shadow-xl p-8">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"/>
        <div className="mt-2">
          <div className="flex flex-col md:flex-row md:justify-between items-center my-4 md:mt-0 gap-3">
              <div className="w-full relative flex items-center">
                <span className="absolute">
                  <FaMagnifyingGlass className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
                </span>
                <Input type="text" className="block w-full py-1.5 pr-5 pl-11 rtl:pr-11 rtl:pl-5 " placeholder="Search" />
              </div>

          </div>

          <div className=" bg-gray-50 border-gray-300 rounded-lg shadow-xl">
            <Table data={{
              header:  [
                {child: "Nama", dataKey: 'nama', headClass: 'text-left'},
                {child: "Actions", dataKey: 'action', headClass: 'text-center w-36', bodyClass: 'flex justify-center'},
              ],
              body: [
                {nama: 'ABCDE1', action: Action()},
                {nama: 'ABCDE1', action: Action()},
                {nama: 'ABCDE1', action: Action()},
              ]
            }} />
          </div>


        </div>
      </div>



      <div className="relative rounded-xl overflow-hidden h-fit flex flex-col bg-clip-border bg-white text-gray-700 shadow-md">
        <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"/>
        <header className="group-hover:bg-white transition-colors"> 
          <div className="p-4 border-b flex flex-col">
            <h4 className="text-lg font-mono text-gray-700">Input Data Departemen</h4>
          </div>
        </header>
        <div className="my-2 px-8">
          <div className="grid grid-cols-1 gap-3 divide-y">
            <div className="py-2">
              <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Nama Departemen
              </label>
              <Input id="name" className="mt-2 w-full" placeholder={`Nama Departemen`} />
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Simpan </button>
        </div>
      </div>

    </div>
  );
}
