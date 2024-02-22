import React, { useState } from 'react'



export type AnswerKeyType = {label: string, point: number};

export default function AnswerKeyDetail({data}: {data: AnswerKeyType[]}) {
  const [answerKeyActive, setAnswerKeyActive] = useState<number | null>(null);
  return (
    <>
      {data.map((answer, answerIndex) => (
        <button 
          key={answerIndex}
          className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300` + (answerKeyActive != answerIndex ? 
            ` border-sky-500 group hover:border-sky-500`
          : ` bg-sky-500 group hover:border-sky-500 hover:bg-transparent`)}
          onClick={() => setAnswerKeyActive(answerIndex)}
        >
          <p className={`text-left font-normal transition-colors duration-300` + (answerKeyActive != answerIndex ? 
          ` group-hover:text-white text-black`
        : ` group-hover:text-black text-white`)}>{answer.label}</p>
        </button>
      ))}
    </>
  )
}
