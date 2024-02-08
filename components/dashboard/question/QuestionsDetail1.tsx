import React from 'react'
import AnswerKey, { AnswerKeyType } from './AnswerKey';
import AnswerKeyDetail from './AnswerKeyDetail';

export type QuestionType = {
  question: string;
  questionPoint: number;
  answerKeys: AnswerKeyType[]
};

export default function QuestionsDetail({data}: {data: QuestionType[]}) {
  return (
    <div className="grid grid-cols-1 gap-5 divide-y">
    {data.map((question,questionIndex) => (
      <div key={questionIndex} className="pt-4 pb-2">
        <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
        <p className="mb-4">{question.question}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AnswerKeyDetail data={question.answerKeys}/>
        </div>
      </div>
    ))}
  </div>
  )
}
