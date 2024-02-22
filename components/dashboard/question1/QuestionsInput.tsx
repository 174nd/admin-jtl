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


export default function QuestionsInput({data: questions, setData: setQuestions}: {data: QuestionType[], setData: React.Dispatch<React.SetStateAction<QuestionType[]>>}) {
  // const [questions, setQuestions] = useState(questions);

  const handleDragDrop = (results: DropResult) => {
    const {source, destination, type} = results;
    if(!destination || (source.droppableId == destination.droppableId && source.index == destination.index)) return;


    if(type == "group"){
        const reorderQuestions = [...questions];
        const [removeQuestion] = reorderQuestions.splice(source.index, 1);
        reorderQuestions.splice(destination.index, 0, removeQuestion);

        setQuestions(reorderQuestions);
    }else{
      const sourceIndex = questions.findIndex(question => question.id == source.droppableId);
      const destinationIndex = questions.findIndex(question => question.id == destination.droppableId);
      const newSourceAnswerKeys = [...questions[sourceIndex].answerKeys];
      const newDestinationAnswerKeys = source.droppableId != destination.droppableId ? [...questions[destinationIndex].answerKeys] : newSourceAnswerKeys;
      
      const [removeAnswerKey] = newSourceAnswerKeys.splice(source.index, 1);
      newDestinationAnswerKeys.splice(destination.index, 0, removeAnswerKey);

      const newQuestions = [...questions];
      newQuestions[sourceIndex] = {...questions[sourceIndex], answerKeys: newSourceAnswerKeys};
      newQuestions[destinationIndex] = {...questions[destinationIndex], answerKeys: newDestinationAnswerKeys};

      setQuestions(newQuestions);
    }
  }

    return (
        <DragDropContext onDragEnd={handleDragDrop}>
          <Droppable droppableId="root" type="group">
            {dropProv => (
              <div className="grid grid-cols-1 gap-5 divide-y" {...dropProv.droppableProps} ref={dropProv.innerRef}>
                {questions.length == 0 && (
                  <h4 className='text-center'>Questions Not Found</h4>
                )}
                {questions.map((question, questionIndex) => (
                  <Question key={questionIndex} question={question} questionIndex={questionIndex} questions={questions} setQuestions={setQuestions} />
                ))}
              {dropProv.placeholder}
            </div>
          )}
        </Droppable>
    </DragDropContext>
  )
}


function Question({question, questionIndex, setQuestions, questions}: {question: QuestionType, questionIndex: number, questions: QuestionType[], setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>}){


  const deleteQuestions = (questionIndex: number) => {
    const onQuestion = [...questions];
    onQuestion.splice(questionIndex, 1);
    setQuestions(onQuestion);
  }


  const addAnswerKeys = (questionIndex: number) => {
    const onQuestion = [...questions];
    onQuestion[questionIndex].answerKeys.push({id: uuidv4(), label : "", point : 0});
    setQuestions(onQuestion);
  }

  return (
    <Draggable draggableId={question.id} key={question.id} index={questionIndex} >
      {dragProv => (
        <div {...dragProv.draggableProps} ref={dragProv.innerRef}>
          <Droppable droppableId={question.id}>
            {dropProv => (
              <div className={`pt-4 ${question.answerKeys.length > 0 && `pb-2`} group/question`} {...dropProv.droppableProps} ref={dropProv.innerRef}>
                <div className={`flex items-center justify-between ${question.answerKeys.length > 0 && `pb-4`} gap-3`}>
                  <div className="w-full">
                    <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
                    <TextareaAutoHeight className='w-full border-transparent focus:mt-2' value={question.question} onChange={e => {
                      const onQuestion = [...questions];
                      onQuestion[questionIndex].question = e.target.value;
                      setQuestions(onQuestion);
                    }}/>
                  </div>
                  <div className="flex">
                    <span className='w-6 cursor-pointer' onClick={() => deleteQuestions(questionIndex)}>
                      <FaRegTrashAlt className='group-hover/question:opacity-100 opacity-0 duration-200'/>
                    </span>
                    <span className='w-6 cursor-pointer' onClick={() => addAnswerKeys(questionIndex)}>
                      <FaRegPlusSquare className='group-hover/question:opacity-100 opacity-0 duration-200'/>
                    </span>
                    <span {...dragProv.dragHandleProps} className='w-6 cursor-grab'>
                      <MdDragIndicator className='group-hover/question:opacity-100 opacity-0 duration-200'/>
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {question.answerKeys.map((answer, answerIndex) => (
                  <AnswerKey key={answerIndex} answer={answer} answerIndex={answerIndex} questionIndex={questionIndex} questions={questions} setQuestions={setQuestions} />
                  ))}
                  {dropProv.placeholder}  
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  )
}


function AnswerKey({questionIndex, answer, answerIndex, setQuestions, questions}: {answer: AnswerKeyType, answerIndex: number, questionIndex: number, questions: QuestionType[], setQuestions: React.Dispatch<React.SetStateAction<QuestionType[]>>}){
  const deleteAnswerKeys = (questionIndex: number, answerKeyIndex: number) => {
    const onQuestion = [...questions];
    onQuestion[questionIndex].answerKeys.splice(answerKeyIndex, 1);
    setQuestions(onQuestion);
  }

  return (
    <Draggable draggableId={answer.id} key={answer.id} index={answerIndex} >
      {dragProv => (
        <div  {...dragProv.draggableProps}  ref={dragProv.innerRef} className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 border-sky-500 group/answer flex items-center justify-between gap-4`} key={answerIndex}>
          
          <TextareaAutoHeight className='w-full !p-0 transition-none border-0 focus:!shadow-none' value={answer.label} onChange={e => {
            const onQuestion = [...questions];
            onQuestion[questionIndex].answerKeys[answerIndex].label = e.target.value;
            setQuestions(onQuestion);
          }}/>

          <span className='flex justify-between items-center gap-2'>
            <span className='cursor-pointer' onClick={() => deleteAnswerKeys(questionIndex, answerIndex)}>
              <FaRegTrashAlt className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
            </span>
            <span className='cursor-grab' {...dragProv.dragHandleProps}>
              <MdDragIndicator className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
            </span>
            <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
              <input type="text" className='focus:ring-0 focus:outline-none bg-transparent text-gray-700 focus:border-blue-500 text-center' value={answer.point} size={answer.point.toString().length >= 0 ? answer.point.toString().length : 1} 
                onChange={e => {
                  console.log(e)
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.size = e.target.value.length >= 1 ? e.target.value.length : 1;
                  const onQuestion = [...questions];
                  onQuestion[questionIndex].answerKeys[answerIndex].point = e.target.value.length >= 1 ? parseInt(e.target.value) : 0;
                  setQuestions(onQuestion);
                }}
              />
              </span>
          </span>
        </div>
      )}
    </Draggable>
  )
}