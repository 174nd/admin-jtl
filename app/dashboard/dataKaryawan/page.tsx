"use client";

import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPencilAlt } from "react-icons/fa";
import { FaMagnifyingGlass, FaRegEye } from "react-icons/fa6";


export default function DataKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({pageName: "Data Karyawan", breadCrumb: ["Dashboard", "Data Karyawan"]});
    setSidebarActiveKey("Data Karyawan");
  }, [])

  return (
    <div className="my-4 flex flex-row space-y-0 space-x-4">
      <div className="w-full bg-white rounded-lg shadow-xl mt-4 p-8">
        <div className="mt-2">
          <div className="right-0 relative flex items-center my-4 md:mt-0">
            <span className="absolute">
              <FaMagnifyingGlass className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600" />
            </span>
            <Input props={{type: "text", className: "block w-full py-1.5 pr-5 md:w-80 pl-11 rtl:pr-11 rtl:pl-5 ", placeholder: "Search"}}/>

            <div className="md:ml-4">
              <Dropdown data={[
                {value: "X1"},
                {value: "X2"},
                {value: "X3"},
              ]} />
            </div>

            {/* <Checkbox label="xixixi" onClick={(v,s) => console.log(v,s)} /> */}

          </div>

          <div className=" bg-gray-50 border-gray-300 rounded-lg shadow-xl">
            <div className="block w-full overflow-x-auto">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Nama</th>
                    <th className="py-3 px-6 text-center">Jabatan</th>
                    <th className="py-3 px-6 text-center">Divisi</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {[
                    {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      jabatan: "Fungsional (Plt Asisten Manager)",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }
                  ].map((value, index) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image width={6} height={6} alt={value.name} className="w-6 h-6 rounded-full" src={value.image}/>
                          </div>
                          <span>{value.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {value.jabatan}
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span>{value.divisi}</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <Link href={"/dashboard/dataKaryawan/profile"} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <FaRegEye/>
                          </Link>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <FaPencilAlt/>
                          </div>
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
