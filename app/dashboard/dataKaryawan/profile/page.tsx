"use client";

import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import { useEffect } from "react";
import {
  MdDateRange,
  MdOutlineSentimentVerySatisfied,
  MdOutlineWorkHistory,
} from "react-icons/md";



export default function Profile() {
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
          <div className="absolute right-12 mt-4 rounded">
            <div
              className="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl"
              style={{ display: "none" }}
            >
              <div className="py-2 border-b">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Settings
                </p>
                <button className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">Share Profile</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">Block User</span>
                </button>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">More Info</span>
                </button>
              </div>
              <div className="py-2">
                <p className="text-gray-400 text-xs px-6 uppercase mb-1">
                  Feedback
                </p>
                <button className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    ></path>
                  </svg>
                  <span className="text-sm text-gray-700">Report</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px]">
            <Image alt=""
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              className="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div className="flex flex-col items-center -mt-20">
            <Image alt=""
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
            <li key={Math.random()} className="flex border-y py-2">
              <span className="font-bold w-32">Nama Lengkap:</span>
              <span className="text-gray-700">Shinta Amelia Rahmah</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Tanggal Lahir:</span>
              <span className="text-gray-700">24 Jul, 1991</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Jabatan:</span>
              <span className="text-gray-700">Fungsional</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Departemen:</span>
              <span className="text-gray-700">
                Keuangan, Akuntansi dan Manrisk (Pusat)
              </span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Mulai Kerja:</span>
              <span className="text-gray-700">05 June 2019</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">No. Hp:</span>
              <span className="text-gray-700">(123) 123-1234</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Email:</span>
              <span className="text-gray-700">
                ShintaAmeliaRahmah@example.com
              </span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
              <span className="font-bold w-32">Alamat:</span>
              <span className="text-gray-700">Jakarta, Indonesia</span>
            </li>
            <li key={Math.random()} className="flex border-b py-2">
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
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdDateRange />
                          </div>
                          <span className="font-medium">20 April 2023</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image alt=""
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/1.jpg"
                            />
                          </div>
                          <span>Eshal Rosas</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          20 / 100
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdDateRange />
                          </div>
                          <span className="font-medium">20 April 2023</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image alt=""
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/women/2.jpg"
                            />
                          </div>
                          <span>Anita Rodriquez</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          20 / 100
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdDateRange />
                          </div>
                          <span className="font-medium">20 April 2023</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image alt=""
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/3.jpg"
                            />
                          </div>
                          <span>Taylan Bush</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          20 / 100
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdDateRange />
                          </div>
                          <span className="font-medium">20 April 2023</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image alt=""
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/4.jpg"
                            />
                          </div>
                          <span>Tarik Novak</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          20 / 100
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <MdDateRange />
                          </div>
                          <span className="font-medium">20 April 2023</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <div className="mr-2">
                            <Image alt=""
                              className="w-6 h-6 rounded-full"
                              src="https://randomuser.me/api/portraits/men/5.jpg"
                            />
                          </div>
                          <span>Oscar Howard</span>
                        </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                          20 / 100
                        </span>
                      </td>
                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
                  <div className="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer">
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.1665 4H12.8332"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.1665 4L4.49984 7.33333"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.1665 4.00002L4.49984 0.666687"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
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
                    <svg
                      width="14"
                      height="8"
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.1665 4H12.8332"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 7.33333L12.8333 4"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 0.666687L12.8333 4.00002"
                        stroke="currentColor"
                        stroke-width="1.25"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
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
