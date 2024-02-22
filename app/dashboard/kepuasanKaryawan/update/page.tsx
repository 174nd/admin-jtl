"use client";
import { useHeaderSidebarContext } from "@/contexts/headerSidebar-context";
import QuestionGroupsInput from "@/components/dashboard/question/QuestionGroupsInput";
import { QuestionGroupType } from "@/components/dashboard/question/question.type";
import Dropdown from "@/components/ui/Dropdown";
import { useEffect, useState } from "react";
import { FaRegSave } from "react-icons/fa";
import Input from "@/components/ui/Input";
import QuestionGroups from "@/components/dashboard/question/QuestionGroups";




export default function ProfileKaryawan() {
  const { setHeaderBar, setSidebarActiveKey } = useHeaderSidebarContext();
  useEffect(() => {
    setHeaderBar({
      pageName: "Ubah Form Kepuasan Karyawan",
      breadCrumb: ["Dashboard", "Kepuasan Karyawan", "Ubah Form Kepuasan Karyawan"],
    });
    setSidebarActiveKey("Kepuasan Karyawan");
  }, [setHeaderBar, setSidebarActiveKey])

  
  const [questionGroups, setQuestionGroups] = useState<QuestionGroupType[]>([{
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
  const totalQuestion = questionGroups.reduce((r,d) => r + d.questions.length, 0);
  const maxTotalPoint = questionGroups.reduce((r, v) => r + v.questions.reduce((r1, v1) => r1 + v1.answerKeys.reduce((r2, v2) => r2 < v2.point ? v2.point : r2, 0) ?? 0, 0), 0);

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

      </div>

      <div className="w-full md:w-1/2">

        <QuestionGroups data={questionGroups} />
      </div>
    </div>
  );
}
