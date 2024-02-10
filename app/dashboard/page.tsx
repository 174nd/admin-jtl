"use client";

import React, { useEffect, useState } from 'react';
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import Link from "next/link";

import { FaRegEye, FaPencilAlt, FaUser, FaUserPlus } from "react-icons/fa";
import { FaMoneyBills } from 'react-icons/fa6';
import { MdOutlineBarChart } from 'react-icons/md';
import BarChart from '@/components/ui/BarChart';
import { randomNumberArray } from '@/libs/randomNumber';
import LineChart from '@/components/ui/LineChart';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';


export default function Dash() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  const [collapse, setCollapse] = useState<boolean>(true);
  useEffect(() => {
    setHeaderBar({pageName: "Dashboard", breadCrumb: ["Dashboard"]});
    setSidebarActiveKey("dashboard");
  }, [setHeaderBar, setSidebarActiveKey])
  return (
    <>
    
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <FaMoneyBills className="w-6 h-6 text-white"/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today`s Money</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <span className="text-green-500">+55%</span> than last week
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <FaUser className="w-6 h-6 text-white"/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Today`s Users</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <span className="text-green-500">+3%</span> than last month
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <FaUserPlus className="w-6 h-6 text-white"/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">New Clients</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <span className="text-red-500">-2%</span> than yesterday
            </p>
          </div>
        </div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
            <MdOutlineBarChart className="w-6 h-6 text-white"/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Sales</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <span className="text-green-500">+5%</span> than yesterday
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-4 grid grid-cols-1 gap-4 xl:grid-cols-8">


        <div className="flex flex-col gap-3 xl:col-span-5">
          <div className="group relative overflow-hidden flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"/>
            <header className="group-hover:bg-white transition-colors" onClick={() => setCollapse(!collapse)}> 
              <div className="p-4 border-b flex flex-col">
                <h4 className="text-lg font-mono text-gray-700">Data Penilaian Kinerja</h4>
              </div>
            </header>
            <motion.div
              className='group-hover:bg-white transition-colors'
              initial="closed"
              animate={collapse ? "open" : "closed"}
              variants={{
                open: {
                  height: 'auto',
                  opacity: 1,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                  }
                },
                closed: {
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeInOut'
                  }
                }
              }}
            >
              <LineChart
                labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
                datasets={[
                  {
                    label: 'Pusat',
                    data: randomNumberArray({length: 7, min: 0, max: 100}),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  }, {
                    label: 'Curug',
                    data: randomNumberArray({length: 7, min: 0, max: 100}),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  }, {
                    label: 'AMDK',
                    data: randomNumberArray({length: 7, min: 0, max: 100}),
                    borderColor: 'rgb(153, 102, 255)',
                    backgroundColor: 'rgba(153, 102, 255, 0.5)',
                  },
                ]}
              />

              <div className="p-6 pb-2 block w-full">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Nama</th>
                      <th className="py-3 px-6 text-center">Jabatan</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {[
                      {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        divisi: "Teknik dan Perencanaan (Pusat)",
                      }, {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        divisi: "Teknik dan Perencanaan (Pusat)",
                      }, {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        divisi: "Teknik dan Perencanaan (Pusat)",
                      }, {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        divisi: "Teknik dan Perencanaan (Pusat)",
                      }, {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
                        divisi: "Teknik dan Perencanaan (Pusat)",
                      }, {
                        image: "https://randomuser.me/api/portraits/men/1.jpg",
                        name: "Eshal Rosas",
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
            </motion.div>
          </div>

          <div className="relative overflow-hidden flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"/>
            <header className="group-hover:bg-white transition-colors"> 
              <div className="p-4 border-b flex flex-col">
                <h4 className="text-lg font-mono text-gray-700">Data Persentase Kepuasan Karyawan</h4>
              </div>
            </header>

            <LineChart
              labels={['January', 'February', 'March', 'April', 'May', 'June', 'July']}
              datasets={[
                {
                  label: 'Pusat',
                  data: randomNumberArray({length: 7, min: 0, max: 100}),
                  borderColor: 'rgb(255, 99, 132)',
                  backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }, {
                  label: 'Curug',
                  data: randomNumberArray({length: 7, min: 0, max: 100}),
                  borderColor: 'rgb(53, 162, 235)',
                  backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }, {
                  label: 'AMDK',
                  data: randomNumberArray({length: 7, min: 0, max: 100}),
                  borderColor: 'rgb(153, 102, 255)',
                  backgroundColor: 'rgba(153, 102, 255, 0.5)',
                },
              ]}
            />
            <div className="p-6 pb-2 block w-full">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Nama</th>
                    <th className="py-3 px-6 text-center">Jabatan</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {[
                    {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
                      divisi: "Teknik dan Perencanaan (Pusat)",
                    }, {
                      image: "https://randomuser.me/api/portraits/men/1.jpg",
                      name: "Eshal Rosas",
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
          </div>
        </div>

        <div className="relative overflow-hidden flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md xl:col-span-3 h-fit">
            <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"/>
            <header className="group-hover:bg-white transition-colors"> 
              <div className="p-4 border-b flex flex-col">
                <h4 className="text-lg font-mono text-gray-700">Jumlah Karyawan</h4>
              </div>
            </header>
          <BarChart 
            labels={['Karyawan', 'Kontrak']} 
            datasets={[{
              label: 'Pria',
              data: randomNumberArray({length: 2, min: 100, max: 300}),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }, {
              label: 'Wanita',
              data: randomNumberArray({length: 2, min: 100, max: 300}),
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }]}
          />
        </div>

      </div>
    
    </>
  );
}
