import { AnswerKeyType, QuestionGroupType, QuestionType } from './question.type';

export default function QuestionGroups({data}: {data: QuestionGroupType[]}) {
  return (
    <div className="flex flex-col w-full gap-4">
      {data.length == 0 && (
        <div className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8">
          <h4 className='text-center'>Questions Not Found</h4>
        </div>
      )}
      {data.map((questionGroup, questionGroupIndex) => (
        <QuestionGroup key={questionGroupIndex} questionGroup={questionGroup} questionGroupIndex={questionGroupIndex} />
      ))}
    </div>
  )
}


function QuestionGroup({questionGroup, questionGroupIndex}: {questionGroup: QuestionGroupType, questionGroupIndex: number}){
  return (
    <div className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8">

      <div className="flex gap-2 group/questionGroup">
        <p className="w-full !p-0 transition-none border-0 focus:!shadow-none text-xl text-gray-900 font-bold">{questionGroup.title}</p>
      </div>

      {questionGroup.questions.map((question, questionIndex) => (
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
        <div className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 flex items-center justify-between gap-4` + (answer.status ? ` bg-sky-500 group` : ` border-sky-500 group`)}>
          <p className={`w-full !p-0 transition-none border-0 focus:!shadow-none` + (answer.status ? ` text-white` : ` text-black`)}>{answer.label}</p>

          <span className='flex justify-between items-center gap-2'>
            <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
              {answer.point}
            </span>
          </span>
        </div>
  )
}