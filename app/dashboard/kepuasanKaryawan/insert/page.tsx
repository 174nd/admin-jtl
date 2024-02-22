"use client";
import QuestionGroupsInput from "@/components/dashboard/question/QuestionGroupsInput";
import { QuestionGroupType, QuestionType } from "@/components/dashboard/question/question.type";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import { FaClipboardQuestion } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';



export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Tambah Form Kepuasan Karyawan",
      breadCrumb: ["Dashboard", "Penilaian Kineja", "Tambah Form Kepuasan Karyawan"],
    });
    setSidebarActiveKey("Kepuasan Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])

  const [questionGroups, setQuestionGroups] = useState<QuestionGroupType[]>([]);
  const totalQuestion = questionGroups.reduce((r,d) => r + d.questions.length, 0);
  const maxTotalPoint = questionGroups.reduce((r, v) => r + v.questions.reduce((r1, v1) => r1 + v1.answerKeys.reduce((r2, v2) => r2 < v2.point ? v2.point : r2, 0) ?? 0, 0), 0);

  const addQuestionGroups = () => {
    const qd = [...questionGroups];
    qd.push({
      id         : uuidv4(),
      title      : '',
      questions  : [],
    })
    setQuestionGroups(qd);
  }



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
            <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">{totalQuestion} Pertanyaan</span>
          </li>
          <li className="flex flex-col items-center justify-between sm:flex-row border-b py-2">
            <span className="font-bold text-right sm:text-left w-fit">Total Maksimal Nilai:</span>
            <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">{maxTotalPoint} Poin</span>
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
      
      <button 
        className="flex justify-center items-center gap-2 bg-sky-500 hover:bg-sky-600 rounded-xl w-full text-white py-2 duration-300"
        onClick={addQuestionGroups}
      >
        <FaClipboardQuestion className="w-5 h-5 inline"/>
        Tambah Group Pertanyaan
      </button>

    </div>

      <div className="flex flex-col w-full md:w-1/2 gap-4">

        <QuestionGroupsInput data={questionGroups} setData={setQuestionGroups} />

      </div>
    </div>
  );
}
