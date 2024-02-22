import React, { Dispatch, SetStateAction } from 'react';
import { AnswerKeyType, QuestionType } from './question.type';

export default function QuestionsSelect({data, setData}: {data: QuestionType[], setData: Dispatch<SetStateAction<QuestionType[]>>}) {

  return (
    <div className="grid grid-cols-1 gap-5 divide-y">
      {data.length == 0 && (
        <h4 className='text-center'>Questions Not Found</h4>
      )}
      {data.map((question, questionIndex) => (
        <Question key={questionIndex} question={question} questionIndex={questionIndex} data={data} setData={setData} />
      ))}
    </div>
  )
}


function Question({question, questionIndex, data, setData}: {question: QuestionType, questionIndex: number, data: QuestionType[], setData: Dispatch<SetStateAction<QuestionType[]>>}){
  return (
    <div className={`pt-4 ${question.answerKeys.length > 0 && `pb-2`} group/question`}>
      <div className={`flex items-center justify-between ${question.answerKeys.length > 0 && `pb-4`} gap-3`}>
        <div className="w-full">
          <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
          <p className="w-full border-transparent focus:mt-2">{question.question}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {question.answerKeys.map((answer, answerIndex) => (
        <AnswerKey key={answerIndex} answer={answer} answerIndex={answerIndex} questionIndex={questionIndex} data={data} setData={setData} />
        ))}
      </div>
    </div>
  )
}


function AnswerKey({answer, answerIndex, questionIndex, data, setData}: {answer: AnswerKeyType, answerIndex: number, questionIndex: number, data: QuestionType[], setData: Dispatch<SetStateAction<QuestionType[]>>}){

  return (
    <div className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 flex items-center justify-between gap-4` + (answer.status ? 
      ` bg-sky-500 group hover:bg-sky-300`
    : ` border-sky-500 group hover:bg-sky-500`)} onClick={() => {
      const onData = [...data];
      onData[questionIndex].answerKeys = onData[questionIndex].answerKeys.map((v, i) => ({...v, status: i == answerIndex}));
      setData(onData);
    }}>
      <p className={`w-full !p-0 transition-none border-0 focus:!shadow-none` + (answer.status ? 
          ` text-white`
        : ` group-hover:text-white text-black`)}>{answer.label}</p>

      <span className='flex justify-between items-center gap-2'>
        <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
          {answer.point}
        </span>
      </span>
    </div>
  )
}