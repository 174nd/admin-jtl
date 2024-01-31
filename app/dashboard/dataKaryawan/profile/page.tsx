"use client";

import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import { useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaPencilAlt, FaRegEye } from "react-icons/fa";
import {
  MdDateRange,
  MdOutlineSentimentVerySatisfied,
  MdOutlineWorkHistory,
} from "react-icons/md";



export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Profile",
      breadCrumb: ["Dashboard", "Data Karyawan", "Profile"],
    });
    setSidebarActiveKey("Data Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])
  return (
    <div className="my-4 flex flex-row space-y-0 space-x-4">
      <div className="flex flex-col w-1/3">
        <div className="bg-white rounded-lg shadow-xl pb-8">
          <div className="w-full h-[150px]">
            <Image alt="" width={300} height={300}
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <Image alt="" width={300} height={300}
              src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              className="w-40 border-4 border-white rounded-full"
            />
            <div className="flex items-center space-x-2 mt-2">
              <p className="text-2xl">Shinta Amelia Rahmah</p>
            </div>
            <p className="text-gray-700">
              Keuangan, Akuntansi dan Manrisk (Pusat)
            </p>
            <p className="text-sm text-gray-500">Fungsional</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">
            Statistik Kinerja Terakhir
          </h4>

          <div className="grid grid-cols-1 gap-8 mt-4">
            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-green-600">
                  Penilaian Kinerja
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  06/2023
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <MdOutlineWorkHistory className="w-12 h-12 p-3 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">230</span>
                    <div className="flex items-center ml-2 mb-1">
                      <span className="font-bold text-sm text-green-500 ml-0.5">
                        / 300
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-blue-600">
                  Kepuasan Karyawan
                </span>
                <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">
                  06/2023
                </span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <MdOutlineSentimentVerySatisfied className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold">50</span>
                    <div className="flex items-center ml-2 mb-1">
                      <span className="font-bold text-sm text-gray-500 ml-0.5">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Mutasi Jabatan</h4>
          <div className="relative px-4">
            <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

            <div className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="text-sm">
                  Operator{" "}
                  <a href="#" className="text-blue-600 font-bold">
                    SPAM Curug
                  </a>
                  .
                </p>
                <p className="text-xs text-gray-500">29 September 2023</p>
              </div>
            </div>

            <div className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="text-sm">
                  Driver{" "}
                  <a href="#" className="text-blue-600 font-bold">
                    AMDK
                  </a>
                  .
                </p>
                <p className="text-xs text-gray-500">23 Juni 2023</p>
              </div>
            </div>

            <div className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="text-sm">
                  Driver{" "}
                  <a href="#" className="text-blue-600 font-bold">
                    Direksi
                  </a>
                  .
                </p>
                <p className="text-xs text-gray-500">1 Februari 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-2/3">
        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex border-y py-2">
              <span className="font-bold w-32">Nama Lengkap:</span>
              <span className="text-gray-700">Shinta Amelia Rahmah</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Tanggal Lahir:</span>
              <span className="text-gray-700">24 Jul, 1991</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Jabatan:</span>
              <span className="text-gray-700">Fungsional</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Departemen:</span>
              <span className="text-gray-700">
                Keuangan, Akuntansi dan Manrisk (Pusat)
              </span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Mulai Kerja:</span>
              <span className="text-gray-700">05 June 2019</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">No. Hp:</span>
              <span className="text-gray-700">(123) 123-1234</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Email:</span>
              <span className="text-gray-700">
                ShintaAmeliaRahmah@example.com
              </span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Alamat:</span>
              <span className="text-gray-700">Jakarta, Indonesia</span>
            </li>
            <li className="flex border-b py-2">
              <span className="font-bold w-32">Status:</span>
              <span className="text-gray-700">PKWTT</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-xl mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>
          <div className="mt-4">
            <div className="bg-white">
              <nav className="flex flex-col sm:flex-row">
                <button className="bg-gray-200   py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-t-2 font-medium border-blue-500">
                  Penilaian Kinerja
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  Kepuasan Karyawan
                </button>
              </nav>
            </div>
            <div className=" bg-gray-50 border-gray-300 rounded-lg shadow-xl">
              <div className="block w-full overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Tanggal</th>
                      <th className="py-3 px-6 text-left">Penilai</th>
                      <th className="py-3 px-6 text-center">Skor</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {[
                      {
                        date: "20 April 2023",
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        skor: 20,
                        maxSkor: 100,
                      }, {
                        date: "20 April 2023",
                        image: "https://randomuser.me/api/portraits/women/2.jpg",
                        name: "Anita Rodriquez",
                        skor: 20,
                        maxSkor: 100,
                      }, {
                        date: "20 April 2023",
                        image: "https://randomuser.me/api/portraits/men/3.jpg",
                        name: "Taylan Bush",
                        skor: 20,
                        maxSkor: 100,
                      }, {
                        date: "20 April 2023",
                        image: "https://randomuser.me/api/portraits/men/4.jpg",
                        name: "Tarik Novak",
                        skor: 20,
                        maxSkor: 100,
                      }, {
                        date: "20 April 2023",
                        image: "https://randomuser.me/api/portraits/men/5.jpg",
                        name: "Oscar Howard",
                        skor: 20,
                        maxSkor: 100,
                      }
                    ].map((v,i) => (
                      <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <MdDateRange />
                            </div>
                            <span className="font-medium">{v.date}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                            <div className="mr-2">
                              <Image alt="" width={6} height={6}
                                className="w-6 h-6 rounded-full"
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                              />
                            </div>
                            <span>{v.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                            {v.skor} / {v.maxSkor}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                            <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <FaRegEye/>
                            </div>
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
                    <p className="text-sm font-medium leading-none mr-3">
                      Next
                    </p>
                    <FaArrowRight width="14" height="8"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
