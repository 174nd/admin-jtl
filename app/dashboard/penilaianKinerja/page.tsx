"use client";

import Input from "@/components/ui/Input";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPen } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegEye } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { ImCross } from "react-icons/im";


export default function DataKaryawan() {
  const { setHeaderBar, setSidebarActiveKey, addModal, removeModal } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({pageName: "Penilaian Kinerja", breadCrumb: ["Dashboard", "Penilaian Kinerja"]});
    setSidebarActiveKey("Penilaian Kinerja");
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
              <Input type="text" className="block w-full py-1.5 pr-5 md:w-80 pl-11 rtl:pr-11 rtl:pl-5 " placeholder="Search"/>

            </div>


            
            <Link
              href={`/dashboard/penilaianKinerja/insert`}
              className="flex justify-center h-3/4 items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-48 text-white py-2 duration-300"
            >
              <MdFormatListBulletedAdd/>
              Buat Form
          </Link>
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
                    <th className="py-3 px-6 text-center w-16">Actions</th>
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
                    }, {
                      date: "30 April 2024",
                      name: "Form ABCDE1",
                      questionAmount: 10,
                      usingAmount: 0,
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
                          <Link href={"/dashboard/penilaianKinerja/" + (value.usingAmount > 0 ? 'update': 'updateEdit')} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <FaPen/>
                          </Link>
                          <Link href={"/dashboard/penilaianKinerja/detail"} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
