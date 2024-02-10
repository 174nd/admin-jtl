import moment from 'moment';
import Image from 'next/image';
import React, { useState } from 'react';
export type QuestionType = {
  question: string;
  questionPoint: number;
  answerKeys: AnswerKeyType[]
};
type AnswerKeyType = {id: string, label: string, point: number, isSelected: boolean};
export default function QuestionsDetail({data}: {data: {
  name: string,
  position: string,
  time: Date,

  questions:QuestionType[],
}}) {
  return (


      <>
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
                    <span className={`mx-auto text-3xl font-bold text-white`}>79<span className='text-sm'> %</span></span>
                    <span className={`text-xs text-center font-bold text-white`}>100/999</span>
                  </div>
                </div>
            </div> 
            <div className="mt-36 sm:mt-10 flex flex-col items-center">
            </div>
        </div>
      <div className="grid grid-cols-1 gap-5 divide-y">
        {data.questions.map((question, questionIndex) => (
          <div className={`pt-4 ${question.answerKeys.length > 0 && `pb-2`} group/question`} key={questionIndex}>
            <div className={`flex items-center justify-between ${question.answerKeys.length > 0 && `pb-4`} gap-3`}>
              <div className="w-full">
                <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
                <p>{question.question}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {question.answerKeys.map((answer, answerIndex) => (
                    <div className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 ${answer.isSelected ? 'bg-sky-500' : `border-sky-500`} group/answer flex items-center justify-between gap-4`} key={answerIndex}>
                      
                      {/* <Textarea className='w-full !p-0 transition-none border-0 focus:shadow-none' value={answer.label}/> */}
                      <p className={`text-left font-normal transition-colors duration-300 ${answer.isSelected ? 'text-white' : `text-black`}`}>{answer.label}</p>

                      <span className={` py-1 px-3 rounded-full text-xs w-fit ${answer.isSelected ? 'bg-sky-600 text-sky-200' : `bg-sky-200 text-sky-600`}`}>{answer.point}</span>
                    </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
