"use client";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import Questions from "@/components/dashboard/question/Questions";
import { QuestionType } from "@/components/dashboard/question/question.type";




export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Ubah Form Penilaian Kinerja",
      breadCrumb: ["Dashboard", "Penilaian Kineja", "Ubah Form Penilaian Kinerja"],
    });
    setSidebarActiveKey("Penilaian Kinerja");
  }, [setHeaderBar, setSidebarActiveKey])


  const questionsData = [{
    id: "ABCDE1",
    question: 'Occaecat dolore consequat sint adipisicing reprehenderit aute eiusmod officia. Dolor nostrud velit voluptate qui. Fugiat amet elit pariatur elit anim ullamco aliquip ea commodo consectetur. Tempor cupidatat velit cillum consequat consequat proident Lorem sint duis proident id id elit.',
    answerKeys: [ ],
  }, {
    id: 'ABCDE2',
    question: 'ABCDE2',
    answerKeys: [
      {id: 'ABCDE21', label: 'ABCDE21', point: 5},
      {id: 'ABCDE22', label: 'ABCDE22', point: 5},
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
  
  const [questions, setQuestions] = useState<QuestionType[]>(questionsData);




  return (
    <div className="my-4 flex flex-col md:flex-row space-y-0 space-x-0 md:space-x-4">
      <div className="flex flex-col w-full md:w-1/2 gap-4">

      <div className="bg-white rounded-lg shadow-xl block mt-4 p-8">
        <h4 className="text-xl text-gray-900 font-bold">Detail Form Pertanyaan</h4>
        <ul className="mt-2 text-gray-700">
          <li className="flex flex-col items-center justify-between sm:flex-row border-y py-2">
            <span className="font-bold w-fit">Nama Form:</span>
            <Input defaultValue={`Form ABCDE1`} className="text-center sm:text-right" />
            {/* <span className="text-gray-700 w-fit"></span> */}
          </li>
          <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
            <span className="font-bold text-right sm:text-left w-fit">Jumlah Pertanyaan:</span>
            <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{questions.length} Pertanyaan</span>
          </li>
          <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
            <span className="font-bold text-right sm:text-left w-fit">Total Maksimal Nilai:</span>
            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{questions.reduce((r, v) => r + v.answerKeys.reduce((r1, v1) => r1 < v1.point ? v1.point : r1, 0), 0)} Poin</span>
          </li>
          <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
            <span className="font-bold text-right sm:text-left w-fit">Status Pertanyaan:</span>
            <Dropdown placeholder="Pilih Status" className="w-24" data={[
                {value: "True"},
                {value: "False", status: true},
              ]} />
          </li>
          <li className="py-2">
            <button className="flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-600 rounded-xl w-full text-white py-2 duration-300">
              <FaRegSave className="w-5 h-5 inline"/>
              Simpan
            </button>
          </li>
        </ul>
      </div>

    </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4">
        
        <div className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8 order-2">
          
          <h4 className="text-xl text-gray-900 font-bold"></h4>
          {/* <QuestionsInput data={questionData} /> */}
          {/* <QuestionsInput data={questions} setData={setQuestions} /> */}
          <Questions data={questions} />
        </div>
      </div>
    </div>
  );
}
