import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { MdDragIndicator } from 'react-icons/md';
import { TextareaAutoHeight } from '@/components/ui/Textarea';
import { FaRegPlusSquare, FaRegTrashAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

export type AnswerKeyType = {id: string, label: string, point: number};
export type QuestionType = {
  id: string;
  question: string;
  answerKeys: AnswerKeyType[]
};


export default function Questions({data: questions}: {data: QuestionType[]}) {

  return (
    <div className="grid grid-cols-1 gap-5 divide-y">
      {questions.length == 0 && (
        <h4 className='text-center'>Questions Not Found</h4>
      )}
      {questions.map((question, questionIndex) => (
        <Question key={questionIndex} question={question} questionIndex={questionIndex} />
      ))}
    </div>
  )
}


function Question({question, questionIndex}: {question: QuestionType, questionIndex: number}){
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
          <AnswerKey key={answerIndex} answer={answer} answerIndex={answerIndex} />
          ))}
        </div>
      </div>
  )
}


function AnswerKey({answer, answerIndex}: {answer: AnswerKeyType, answerIndex: number}){

  return (
        <div className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 border-sky-500 group/answer flex items-center justify-between gap-4`}>
          <p className='w-full !p-0 transition-none border-0 focus:!shadow-none'>{answer.label}</p>

          <span className='flex justify-between items-center gap-2'>
            <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
              {answer.point}
              </span>
          </span>
        </div>
  )
}