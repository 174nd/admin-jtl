"use client";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPen, FaRegEye, FaRegSave } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
import EmployeeQuestionsInput, { EmployeeQuestionType } from "@/components/dashboard/question1/EmployeeQuestionsInput";
import { ButtonLink } from "@/components/ui/Button";
import ModalKepuasanKaryawan from "@/components/dashboard/ModalKepuasanKaryawan";
import { QuestionGroupType } from "@/components/dashboard/question/question.type";
import QuestionGroups from "@/components/dashboard/question/QuestionGroups";




export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey, removeModal, addModal } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({
      pageName: "Detail Kepuasan Karyawan",
      breadCrumb: ["Dashboard", "Kepuasan Karyawan", "Detail"],
    });
    setSidebarActiveKey("Kepuasan Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])

  
  const [questions, setQuestions] = useState<QuestionGroupType[]>([{
      id: `ABCDE1`,
      title : `ABCDE1`,
      questions: [{
        id: 'ABCDE11',
        question: 'ABCDE11',
        answerKeys: [
          {id: 'ABCDE111', label: 'ABCDE111', point: 5},
          {id: 'ABCDE112', label: 'ABCDE112', point: 5},
          {id: 'ABCDE113', label: 'ABCDE113', point: 5},
          {id: 'ABCDE114', label: 'ABCDE114', point: 5},
        ],
      }, {
        id: 'ABCDE12',
        question: 'ABCDE12',
        answerKeys: [
          {id: 'ABCDE121', label: 'ABCDE121', point: 5},
          {id: 'ABCDE122', label: 'ABCDE122', point: 5},
          {id: 'ABCDE123', label: 'ABCDE123', point: 5},
          {id: 'ABCDE124', label: 'ABCDE124', point: 5},
        ],
      }]
    }, {
      id: `ABCDE2`,
      title : `ABCDE2`,
      questions: [{
        id: 'ABCDE21',
        question: 'ABCDE21',
        answerKeys: [
          {id: 'ABCDE211', label: 'ABCDE211', point: 5},
          {id: 'ABCDE212', label: 'ABCDE212', point: 5},
          {id: 'ABCDE213', label: 'ABCDE213', point: 5},
          {id: 'ABCDE214', label: 'ABCDE214', point: 5},
        ],
        }, {
        id: 'ABCDE22',
        question: 'ABCDE22',
        answerKeys: [
          {id: 'ABCDE221', label: 'ABCDE221', point: 5},
          {id: 'ABCDE222', label: 'ABCDE222', point: 5},
          {id: 'ABCDE223', label: 'ABCDE223', point: 5},
          {id: 'ABCDE224', label: 'ABCDE224', point: 5},
        ],
      }]
    }, {
      id: `ABCDE3`,
      title : `ABCDE3`,
      questions: [{
        id: 'ABCDE31',
        question: 'ABCDE31',
        answerKeys: [
          {id: 'ABCDE311', label: 'ABCDE311', point: 5},
          {id: 'ABCDE312', label: 'ABCDE312', point: 5},
          {id: 'ABCDE313', label: 'ABCDE313', point: 5},
          {id: 'ABCDE314', label: 'ABCDE314', point: 5},
        ],
        }, {
        id: 'ABCDE32',
        question: 'ABCDE32',
        answerKeys: [
          {id: 'ABCDE321', label: 'ABCDE321', point: 5},
          {id: 'ABCDE322', label: 'ABCDE322', point: 5},
          {id: 'ABCDE323', label: 'ABCDE323', point: 5},
          {id: 'ABCDE324', label: 'ABCDE324', point: 5},
        ],
      }]
  }]);
  return (
    <div className="my-4 flex flex-col md:flex-row space-y-0 space-x-0 md:space-x-4">
      <div className="flex flex-col w-full md:w-1/2 gap-4">

      <div className="bg-white rounded-lg shadow-xl block mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Detail Form Kepuasan Karyawan</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex flex-col items-center justify-between sm:flex-row border-y py-2">
              <span className="font-bold w-fit">Nama Form:</span>
              <span className="text-gray-700 w-fit">Form ABCDE1</span>
            </li>
            <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
              <span className="font-bold text-right sm:text-left w-fit">Jumlah Pertanyaan:</span>
              <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">999 Pertanyaan</span>
            </li>
            <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
              <span className="font-bold text-right sm:text-left w-fit">Total Nilai:</span>
              <span className="bg-blue-200 text-blue-600 py-1 px-3 rounded-full text-xs">999 Poin</span>
            </li>
            <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
              <span className="font-bold text-right sm:text-left w-fit">Jumlah Digunakan</span>
              <span className="bg-sky-200 text-sky-600 py-1 px-3 rounded-full text-xs">20x Digunakan</span>
            </li>
            <li className="flex flex-col items-center justify-between sm:flex-row py-2">
              <span className="font-bold text-right sm:text-left w-fit">Status Pertanyaan:</span>
              <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">False</span>
            </li>
          </ul>
        </div>

        <ButtonLink 
          href="/dashboard/kepuasanKaryawan/updateEdit"
          className="flex justify-center items-center gap-2 bg-sky-500 hover:bg-sky-600 rounded-xl w-full text-white py-2 duration-300"
        >
          <FaPen className="w-5 h-5 inline"/>
          Ubah Form Pertanyaan
        </ButtonLink>

        <div className="bg-white rounded-lg shadow-xl p-8 order-5">
          <h4 className="text-xl text-gray-900 font-bold">Data Pengguna Form</h4>
          <div className="mt-4">
            <div className=" bg-gray-50 border-gray-300 rounded-lg shadow-xl">
              <div className="block w-full overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left  w-32">Tanggal</th>
                      <th className="py-3 px-6 text-left">Penilai</th>
                      <th className="py-3 px-6 text-center w-32">Skor</th>
                      <th className="py-3 px-6 text-center w-8">Actions</th>
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
                            <div 
                              className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                              onClick={() => {
                                setOpenModal(!openModal);
                                addModal();
                              }}
                            >
                              <FaRegEye/>
                            </div>
                            {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                              <FaPencilAlt/>
                            </div> */}
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

        <ModalKepuasanKaryawan data={{
          name           : `ABCDE1`,
          position       : `ABCDE1`,
          time           : new Date(),
          questionGroups : [{
              id: `ABCDE1`,
              title : `ABCDE1`,
              questions: [{
                id: 'ABCDE11',
                question: 'ABCDE11',
                answerKeys: [
                  {id: 'ABCDE111', label: 'ABCDE111', point: 5, status: true},
                  {id: 'ABCDE112', label: 'ABCDE112', point: 5, status: false},
                  {id: 'ABCDE113', label: 'ABCDE113', point: 5, status: false},
                  {id: 'ABCDE114', label: 'ABCDE114', point: 5, status: false},
                ],
              }, {
                id: 'ABCDE12',
                question: 'ABCDE12',
                answerKeys: [
                  {id: 'ABCDE121', label: 'ABCDE121', point: 5, status: true},
                  {id: 'ABCDE122', label: 'ABCDE122', point: 5, status: false},
                  {id: 'ABCDE123', label: 'ABCDE123', point: 5, status: false},
                  {id: 'ABCDE124', label: 'ABCDE124', point: 5, status: false},
                ],
              }]
            }, {
              id: `ABCDE2`,
              title : `ABCDE2`,
              questions: [{
                id: 'ABCDE21',
                question: 'ABCDE21',
                answerKeys: [
                  {id: 'ABCDE211', label: 'ABCDE211', point: 5, status: true},
                  {id: 'ABCDE212', label: 'ABCDE212', point: 5, status: false},
                  {id: 'ABCDE213', label: 'ABCDE213', point: 5, status: false},
                  {id: 'ABCDE214', label: 'ABCDE214', point: 5, status: false},
                ],
                }, {
                id: 'ABCDE22',
                question: 'ABCDE22',
                answerKeys: [
                  {id: 'ABCDE221', label: 'ABCDE221', point: 5, status: true},
                  {id: 'ABCDE222', label: 'ABCDE222', point: 5, status: false},
                  {id: 'ABCDE223', label: 'ABCDE223', point: 5, status: false},
                  {id: 'ABCDE224', label: 'ABCDE224', point: 5, status: false},
                ],
              }]
            }, {
              id: `ABCDE3`,
              title : `ABCDE3`,
              questions: [{
                id: 'ABCDE31',
                question: 'ABCDE31',
                answerKeys: [
                  {id: 'ABCDE311', label: 'ABCDE311', point: 5, status: true},
                  {id: 'ABCDE312', label: 'ABCDE312', point: 5, status: false},
                  {id: 'ABCDE313', label: 'ABCDE313', point: 5, status: false},
                  {id: 'ABCDE314', label: 'ABCDE314', point: 5, status: false},
                ],
                }, {
                id: 'ABCDE32',
                question: 'ABCDE32',
                answerKeys: [
                  {id: 'ABCDE321', label: 'ABCDE321', point: 5, status: true},
                  {id: 'ABCDE322', label: 'ABCDE322', point: 5, status: false},
                  {id: 'ABCDE323', label: 'ABCDE323', point: 5, status: false},
                  {id: 'ABCDE324', label: 'ABCDE324', point: 5, status: false},
                ],
              }]
          }]
        }} openModal={openModal} closeModal={() => {setOpenModal(!openModal); removeModal()}}/>
      </div>

      <div className="w-full md:w-1/2">
        <QuestionGroups data={questions} />
      </div>
    </div>
  );
}
