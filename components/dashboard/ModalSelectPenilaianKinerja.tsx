import React, { useState } from 'react'
import Modal from '../ui/Modal';
import { ImCross } from 'react-icons/im';
import Image from "next/image";
import moment from 'moment';
import { QuestionType } from './question/question.type';
import QuestionsSelect from './question/QuestionsSelect';

type userData = {
  name      : string;
  position  : string;
  time      : Date;
  questions : QuestionType[];
}

export default function ModalSelectPenilaianKinerja({openModal, closeModal, data}: {data: userData, openModal: boolean, closeModal: () => void}) {
  const [questions, setQuestions] = useState<QuestionType[]>(data.questions);
  const totalNilai = questions.reduce((r, v) => r + v.answerKeys.reduce((r1, v1) => r1 < v1.point ? v1.point : r1, 0), 0);
  const selectNilai = questions.reduce((r, v) => r + v.answerKeys.reduce((r1, v1) => v1.status ? v1.point : r1, 0), 0);
  const persentaseNilai = Math.round(selectNilai / totalNilai * 100);
  // const persentaseNilai = selectNilai / totalNilai * 100;

  return (
    <Modal openModal={openModal} closeModal={closeModal}>
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg border">
        <div className="px-5 py-3 border-b border-gray-200 flex justify-between">
          <h2 className="text-xl font-semibold text-gray-600">Form Penilaian Kinerja</h2>
          <button role="button" onClick={closeModal} className="cursor-pointertext-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"> 
            <ImCross width={20} height={20} />
          </button>
        </div>

        <div className="py-5 px-8">

        <div className="relative flex flex-col items-center rounded-[10px] border-[1px] border-gray-200 mx-auto p-4 bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="relative flex h-32 w-full justify-left rounded-xl bg-cover">
              <Image width={300} height={300} alt='' src='https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/>
              <div className="absolute top-7 sm:top-20 px-2 sm:px-8 flex flex-col sm:flex-row sm:justify-between items-center w-full">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-4">
                  <div className="flex h-[87px] w-[87px] items-center justify-center rounded-xl border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                    <Image width={300} height={300} alt='' className="h-full w-full rounded-xl" src='https://vojislavd.com/ta-template-demo/assets/img/profile.jpg'/>
                  </div>
                  <div className="flex flex-col gap-1 mt-2 sm:gap-0 mb-2 sm:mb-0">
                    <h4 className="text-2xl font-bold text-center sm:text-left text-black sm:text-white">{data.name}</h4>
                    <div className="mt-2">
                      <p className="text-sm font-normal text-center sm:text-left sm:text-gray-600">{data.position}</p>
                      <p className="text-xs font-normal text-center sm:text-left sm:text-gray-600">{moment(data.time).format('Do MMMM YYYY')}</p>

                    </div>
                  </div>
                </div>

                <div className={`h-fit py-2 px-6 bg-blue-500 sm:bg-blue-500/50 shadow-md shadow-[#F3F3F3] backdrop-blur-sm rounded-xl flex flex-col`}>
                  <span className={`mx-auto text-3xl font-bold text-white`}>{persentaseNilai}<span className='text-sm'> %</span></span>
                  <span className={`text-xs text-center font-bold text-white`}>{selectNilai + `/` + totalNilai}</span>
                </div>
              </div>
          </div> 
          <div className="mt-36 sm:mt-10 flex flex-col items-center">
          </div>
        </div>

        <QuestionsSelect data={questions} setData={setQuestions} />

        </div>
        
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-lg">
          <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Simpan </button>
          <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button>
        </div>
      </div>

    </Modal>
  )
}
