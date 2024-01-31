"use client";

import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPencilAlt, FaUserPlus } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegEye } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";


export default function DataKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({pageName: "Kepuasan Karyawan", breadCrumb: ["Dashboard", "Kepuasan Karyawan"]});
    setSidebarActiveKey("Kepuasan Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])

  return (
    <div className="my-4 flex flex-row space-y-0 space-x-4">
      <div className="w-full bg-white rounded-lg shadow-xl mt-4 p-8">
        <div className="mt-2">
          <div className="flex justify-between items-center my-4 md:mt-0">
            <div className="right-0 relative flex items-center">
              <span className="absolute">
                <FaMagnifyingGlass className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
              </span>
              <Input props={{type: "text", className: "block w-full py-1.5 pr-5 md:w-80 pl-11 rtl:pr-11 rtl:pl-5 ", placeholder: "Search"}}/>

            </div>

            <button 
              className="flex justify-center h-3/4 items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-48 text-white py-2 duration-300"
              onClick={() => setOpenModal(!openModal)}
            >
              <MdFormatListBulletedAdd/>
              Buat Form
          </button>
            
            <Modal title="Form Kepuasan Karyawan" openModal={openModal} closeModal={() => setOpenModal(!openModal)}>
              <div className="py-5 px-8">
                <div className="grid grid-cols-1 gap-5 divide-y">
                  {[
                    "Nama Form",
                    "Tanggal Lahir",
                    "Jabatan",
                    "Departemen",
                    "No. Hp",
                    "Email",
                    "Alamat",
                    "Status",
                  ].map((v,i) => (
                    <div key={i} className="py-2">
                      <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                        {v}
                      </label>
                      <input id="name" className="mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder={v} />
                    </div>
                  ))}
                </div>
                
              </div>

              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Simpan </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button>
              </div>
            </Modal>
          </div>

          <div className=" bg-gray-50 border-gray-300 rounded-lg shadow-xl">
            <div className="block w-full overflow-x-auto">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Tanggal</th>
                    <th className="py-3 px-6 text-left">Nama Form</th>
                    <th className="py-3 px-6 text-center">Jumlah Pertanyaan</th>
                    <th className="py-3 px-6 text-center">Jumlah Digunakan</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {[
                    {
                      date: "30 April 2024",
                      name: "Form ABCDE1",
                      questionAmount: 30,
                      usingAmount: 30,
                      status: true,
                    }, {
                      date: "30 April 2024",
                      name: "Form ABCDE1",
                      questionAmount: 30,
                      usingAmount: 100,
                      status: false,
                    }
                  ].map((value, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                          <span>{value.date}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{value.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-center">
                          <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">{value.questionAmount} Pertanyaan</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-center">
                          <span className="bg-sky-200 text-sky-600 py-1 px-3 rounded-full text-xs">{value.usingAmount}x Digunakan</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center justify-center">
                        <span className={(value.status ? `bg-green-200 text-green-600` : `bg-red-200 text-red-600`) + ` py-1 px-3 rounded-full text-xs`}>
                        {value.status ? `Active` : `Inactive`}
                        </span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <Link href={"/dashboard/kepuasanKaryawan/detail"} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <FaRegEye/>
                          </Link>
                        </div>
                      </td>
                    </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
              <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                  <FaArrowLeft width="14" height="8"/>
                  <p className="text-sm ml-3 font-medium leading-none ">
                    Previous
                  </p>
                </div>
                <div className="sm:flex hidden">
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    1
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    2
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    3
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-blue-700 border-t border-blue-400 pt-3 mr-4 px-2">
                    4
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    5
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    6
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    7
                  </p>
                  <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-blue-700 border-t border-transparent hover:border-blue-400 pt-3 mr-4 px-2">
                    8
                  </p>
                </div>
                <div className="flex items-center pt-3 text-gray-600 hover:text-blue-700 cursor-pointer">
                  <p className="text-sm font-medium leading-none mr-3">Next</p>
                  <FaArrowRight width="14" height="8"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
