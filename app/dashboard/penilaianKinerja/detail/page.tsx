"use client";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import QuestionsInput from "@/components/dashboard/question/QuestionsInput";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaPen, FaRegEye, FaRegSave } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import ModalPenilaianKinerja from "@/components/dashboard/ModalPenilaianKinerja";
import { QuestionType } from "@/components/dashboard/question/question.type";
import { ButtonLink } from "@/components/ui/Button";
import Questions from "@/components/dashboard/question/Questions";




export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey, removeModal, addModal } = useHeaderSidebarContext();
  const [openModal, setOpenModal] = useState<boolean>(false);
  useEffect(() => {
    setHeaderBar({
      pageName: "Detail Penilaian Kinerja",
      breadCrumb: ["Dashboard", "Penilaian Kinerja", "Detail"],
    });
    setSidebarActiveKey("Penilaian Kinerja");
  }, [setHeaderBar, setSidebarActiveKey])

  const questionData: QuestionType[] = [{
    id: "ABCDE1",
    question: 'Occaecat dolore consequat sint adipisicing reprehenderit aute eiusmod officia. Dolor nostrud velit voluptate qui. Fugiat amet elit pariatur elit anim ullamco aliquip ea commodo consectetur. Tempor cupidatat velit cillum consequat consequat proident Lorem sint duis proident id id elit.',
    answerKeys: [
      {id: 'ABCDE11', label: 'Eu velit non quis ullamco culpa officia minim ut est cillum eiusmod ex. Commodo duis aliqua et deserunt proident et fugiat Lorem eu qui voluptate. Consectetur cupidatat commodo ad ex esse. Voluptate culpa incididunt irure labore laboris magna eu voluptate dolore tempor. Cillum sunt qui est deserunt nulla ad qui fugiat ad do. Culpa consequat anim eu exercitation.', point: 10},
      {id: 'ABCDE12', label: 'ABCDE12', point: 5},
      {id: 'ABCDE13', label: 'ABCDE13', point: 5},
      {id: 'ABCDE14', label: 'ABCDE14', point: 5},
    ],
  }, {
    id: 'ABCDE2',
    question: 'ABCDE2',
    answerKeys: [
      {id: 'ABCDE21', label: 'ABCDE21', point: 5},
      {id: 'ABCDE22', label: 'ABCDE22', point: 10},
      {id: 'ABCDE23', label: 'ABCDE23', point: 5},
      {id: 'ABCDE24', label: 'ABCDE24', point: 5},
    ],
  }, {
    id: 'ABCDE3',
    question: 'ABCDE3',
    answerKeys: [
      {id: 'ABCDE31', label: 'ABCDE31', point: 5},
      {id: 'ABCDE32', label: 'ABCDE32', point: 5},
      {id: 'ABCDE33', label: 'ABCDE33', point: 5},
      {id: 'ABCDE34', label: 'ABCDE34', point: 5},
    ],
  }, {
    id: 'ABCDE4',
    question: 'ABCDE4',
    answerKeys: [
      {id: 'ABCDE41', label: 'ABCDE41', point: 5},
      {id: 'ABCDE42', label: 'ABCDE42', point: 5},
      {id: 'ABCDE43', label: 'ABCDE43', point: 5},
      {id: 'ABCDE44', label: 'ABCDE44', point: 5},
    ],
  }, {
    id: 'ABCDE5',
    question: 'ABCDE5',
    answerKeys: [
      {id: 'ABCDE51', label: 'ABCDE51', point: 5},
      {id: 'ABCDE52', label: 'ABCDE52', point: 5},
      {id: 'ABCDE53', label: 'ABCDE53', point: 5},
      {id: 'ABCDE54', label: 'ABCDE54', point: 5},
    ],
  }, {
    id: 'ABCDE6',
    question: 'ABCDE6',
    answerKeys: [
      {id: 'ABCDE61', label: 'ABCDE61', point: 5},
      {id: 'ABCDE62', label: 'ABCDE62', point: 5},
      {id: 'ABCDE63', label: 'ABCDE63', point: 5},
      {id: 'ABCDE64', label: 'ABCDE64', point: 5},
    ],
  }];

  const [questions, setQuestions] = useState<QuestionType[]>(questionData);
  return (
    <div className="my-4 flex flex-col md:flex-row space-y-0 space-x-0 md:space-x-4">
      <div className="flex flex-col w-full md:w-1/2 gap-4">

      <div className="bg-white rounded-lg shadow-xl block mt-4 p-8">
          <h4 className="text-xl text-gray-900 font-bold">Detail Form Penilaian Kinerja</h4>
          <ul className="mt-2 text-gray-700">
            <li className="flex flex-col items-center justify-between sm:flex-row border-y py-2">
              <span className="font-bold w-fit">Nama Form:</span>
              <span className="text-gray-700 w-fit">Form ABCDE1</span>
              {/* <span className="text-gray-700 w-fit"></span> */}
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
          href="/dashboard/penilaianKinerja/updateEdit"
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

        <ModalPenilaianKinerja data={{
          name      : `Eshal Rosas`,
          position  : `ABCDE1234`,
          penilai   : `Andi`,
          time      : new Date(),
          questions : [{
            id: "ABCDE1",
            question: 'Occaecat dolore consequat sint adipisicing reprehenderit aute eiusmod officia. Dolor nostrud velit voluptate qui. Fugiat amet elit pariatur elit anim ullamco aliquip ea commodo consectetur. Tempor cupidatat velit cillum consequat consequat proident Lorem sint duis proident id id elit.',
            answerKeys: [
              {id: 'ABCDE11', label: 'Eu velit non quis ullamco culpa officia minim ut est cillum eiusmod ex. Commodo duis aliqua et deserunt proident et fugiat Lorem eu qui voluptate. Consectetur cupidatat commodo ad ex esse. Voluptate culpa incididunt irure labore laboris magna eu voluptate dolore tempor. Cillum sunt qui est deserunt nulla ad qui fugiat ad do. Culpa consequat anim eu exercitation.', point: 10, status: true},
              {id: 'ABCDE12', label: 'ABCDE12', point: 5, status: false},
              {id: 'ABCDE13', label: 'ABCDE13', point: 5, status: false},
              {id: 'ABCDE14', label: 'ABCDE14', point: 5, status: false},
            ],
          }, {
            id: 'ABCDE2',
            question: 'ABCDE2',
            answerKeys: [
              {id: 'ABCDE21', label: 'ABCDE21', point: 5, status: true},
              {id: 'ABCDE22', label: 'ABCDE22', point: 10, status: false},
              {id: 'ABCDE23', label: 'ABCDE23', point: 5, status: false},
              {id: 'ABCDE24', label: 'ABCDE24', point: 5, status: false},
            ],
          }, {
            id: 'ABCDE3',
            question: 'ABCDE3',
            answerKeys: [
              {id: 'ABCDE31', label: 'ABCDE31', point: 5, status: false},
              {id: 'ABCDE32', label: 'ABCDE32', point: 5, status: false},
              {id: 'ABCDE33', label: 'ABCDE33', point: 5, status: false},
              {id: 'ABCDE34', label: 'ABCDE34', point: 5, status: true},
            ],
          }, {
            id: 'ABCDE4',
            question: 'ABCDE4',
            answerKeys: [
              {id: 'ABCDE41', label: 'ABCDE41', point: 5, status: false},
              {id: 'ABCDE42', label: 'ABCDE42', point: 5, status: true},
              {id: 'ABCDE43', label: 'ABCDE43', point: 5, status: false},
              {id: 'ABCDE44', label: 'ABCDE44', point: 5, status: false},
            ],
          }, {
            id: 'ABCDE5',
            question: 'ABCDE5',
            answerKeys: [
              {id: 'ABCDE51', label: 'ABCDE51', point: 5, status: false},
              {id: 'ABCDE52', label: 'ABCDE52', point: 5, status: false},
              {id: 'ABCDE53', label: 'ABCDE53', point: 5, status: true},
              {id: 'ABCDE54', label: 'ABCDE54', point: 5, status: false},
            ],
          }, {
            id: 'ABCDE6',
            question: 'ABCDE6',
            answerKeys: [
              {id: 'ABCDE61', label: 'ABCDE61', point: 5, status: false},
              {id: 'ABCDE62', label: 'ABCDE62', point: 5, status: false},
              {id: 'ABCDE63', label: 'ABCDE63', point: 5, status: false},
              {id: 'ABCDE64', label: 'ABCDE64', point: 5, status: true},
            ],
          }],
        }} openModal={openModal} closeModal={() => {setOpenModal(!openModal); removeModal()}}/>
      </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <div className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8 order-2">
          <h4 className="text-xl text-gray-900 font-bold"></h4>
          <Questions data={questions}/>
        </div>
      </div>
    </div>
  );
}
