import React, { useState } from 'react';
import AnswerKeyDetail from './AnswerKeyDetail';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { MdDragIndicator } from 'react-icons/md';

export type QuestionType = {
  id: string;
  question: string;
  questionPoint: number;
  answerKeys: AnswerKeyType[]
};
type AnswerKeyType = {id: string, label: string, point: number};
export default function QuestionsInput({data}: {data: QuestionType[]}) {
  const [questions, setQuestions] = useState(data);

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
              {questions.map((question, questionIndex) => (
                <Draggable draggableId={question.id} key={question.id} index={questionIndex} >
                  {dragProv => (
                    <div {...dragProv.draggableProps} ref={dragProv.innerRef}>
                      <Droppable droppableId={question.id}>
                        {dropProv => (
                          <div className="pt-4 pb-2 group/question" {...dropProv.droppableProps} ref={dropProv.innerRef}>
                            <div className="flex items-center justify-between mb-4">
                              <div className="">
                                <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
                                <p className="">{question.question}</p>
                              </div>
                              
                              <span {...dragProv.dragHandleProps} className='w-6'>
                                <MdDragIndicator className='group-hover/question:opacity-100 opacity-0 duration-200'/>
                              </span>
                            </div>
                              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                                {question.answerKeys.map((answer, answerIndex) => (
                                  <Draggable draggableId={answer.id} key={answer.id} index={answerIndex} >
                                    {dragProv => (
                                      <div  {...dragProv.draggableProps}  ref={dragProv.innerRef} className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 border-sky-500 group/answer flex items-center justify-between gap-4`} key={answerIndex}>
                                        <p className={`text-left font-normal transition-colors duration-300  text-black`}>{answer.label}</p>

                                        <span className='flex justify-between items-center gap-2'>
                                          <span {...dragProv.dragHandleProps}>
                                            <MdDragIndicator className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
                                          </span>
                                          <span className="bg-sky-200 text-sky-600 py-1 px-3 rounded-full text-xs">{answer.point}</span>
                                        </span>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {dropProv.placeholder}  
                              </div>
                          </div>
                        )}
                      </Droppable>
                    </div>
                  )}
                </Draggable>
              ))}
              {dropProv.placeholder}
            </div>
          )}
        </Droppable>
    </DragDropContext>
  )
}
