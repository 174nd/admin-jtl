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
import { ImCross } from "react-icons/im";


export default function DataKaryawan() {
  const { setHeaderBar, setSidebarActiveKey, addModal, removeModal } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({pageName: "Data Karyawan", breadCrumb: ["Dashboard", "Data Karyawan"]});
    setSidebarActiveKey("Data Karyawan");
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
              <Input type="text" className="block w-full py-1.5 pr-5 md:w-80 pl-11 rtl:pr-11 rtl:pl-5 " placeholder="Search" />

              <div className="md:ml-4">
                <Dropdown placeholder="Pilih Divisi" className="w-54" data={[
                  {value: "X1"},
                  {value: "X2"},
                  {value: "X3"},
                ]} />
              </div>
            </div>

            <button 
              className="flex justify-center h-3/4 items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-48 text-white py-2 duration-300"
              onClick={() => {
                setOpenModal(!openModal);
                addModal();
              }}
            >
              <FaUserPlus/>
              Tambah Karyawan
            </button>
            
            <Modal openModal={openModal} closeModal={() => setOpenModal(!openModal)}>
              <div className="w-full max-w-xl bg-white shadow-md rounded-lg border">
                <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
                  <h2 className="text-xl font-semibold text-gray-600">{"Tambah Karyawan"}</h2>
                  <button role="button" onClick={() => {
                    setOpenModal(!openModal);
                    removeModal();
                  }} className="cursor-pointertext-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"> 
                    <ImCross width={20} height={20} />
                  </button>
                </div>

                <div className="py-5 px-8">
                  <div className="grid grid-cols-1 gap-5 divide-y">
                    {[
                      "Nama Lengkap",
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
              </div>
            </Modal>
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
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
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
