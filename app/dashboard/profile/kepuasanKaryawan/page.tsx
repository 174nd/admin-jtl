"use client";

import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect } from "react";
import Image from "next/image";
import Questions from "@/components/dashboard/question/Questions";



export default function PenilaianKinerja() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Form Kepuasan Karyawan",
      breadCrumb: ["Dashboard", "Profile", "Form Kepuasan Karyawan"],
    });
  }, [setHeaderBar, setSidebarActiveKey])
  return (
    
    <div className="my-4 flex flex-col md:flex-row space-y-0 space-x-0 md:space-x-4">
      
      <div className="flex flex-col w-full md:w-1/3">
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
              <p className="text-center text-2xl">Shinta Amelia Rahmah</p>
            </div>
            <p className="text-center text-gray-700">
              Keuangan, Akuntansi dan Manrisk (Pusat)
            </p>
            <p className="text-sm text-gray-500">Fungsional</p>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-xl block overflow-x-auto mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex flex-col border-y py-2">
              <span className="font-bold w-32">Nama Lengkap:</span>
              <span className="text-gray-700">Shinta Amelia Rahmah</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Tanggal Lahir:</span>
              <span className="text-gray-700">24 Jul, 1991</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Jabatan:</span>
              <span className="text-gray-700">Fungsional</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Departemen:</span>
              <span className="text-gray-700">
                Keuangan, Akuntansi dan Manrisk (Pusat)
              </span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Mulai Kerja:</span>
              <span className="text-gray-700">05 June 2019</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">No. Hp:</span>
              <span className="text-gray-700">(123) 123-1234</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Email:</span>
              <span className="text-gray-700">
                ShintaAmeliaRahmah@example.com
              </span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Alamat:</span>
              <span className="text-gray-700">Jakarta, Indonesia</span>
            </li>
            <li className="flex flex-col border-b py-2">
              <span className="font-bold w-32">Status:</span>
              <span className="text-gray-700">PKWTT</span>
            </li>
          </ul>
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

      {
        //TODO: Tidak Responsive 
      }
      <div className="flex flex-col w-full md:w-2/3 ml-0">
        <div className="bg-white rounded-lg shadow-xl md:mt-0 mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold mb-2">Form Kepuasan Karyawan</h4>
          <Questions data={[{
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }, {
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }, {
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }, {
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }, {
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }, {
            question: 'Ketika membuat aplikasi React menggunakan create-react-app, maka belum terdapat page routing. Pernyataan tersebut true or false?',
            questionPoint: 10,
            answerKeys: [
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
              {label: 'A. True', point: 5},
            ],
          }]} />
          <div className="py-4 border-t-2 border-teal-800 mt-6 flex justify-between gap-2">
            <button className="px-4 py-2 rounded-lg border-solid w-40 right-0 border-2 hover:border-red-500 hover:bg-transparent bg-red-500 group transition-all duration-300">
              <p className="text-white font-normal group-hover:text-black transition-colors duration-300">Batal</p>
            </button>
            <button className="px-4 py-2 rounded-lg border-solid w-40 right-0 border-2 hover:border-sky-500 hover:bg-transparent group bg-sky-500 transition-all duration-300">
              <p className="text-white font-normal group-hover:text-black transition-colors duration-300">Simpan</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
