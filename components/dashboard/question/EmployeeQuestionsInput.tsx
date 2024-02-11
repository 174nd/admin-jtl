import React, { useEffect, useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from '@hello-pangea/dnd';
import { MdDragIndicator } from 'react-icons/md';
import { TextareaAutoHeight } from '@/components/ui/Textarea';

export type EmployeeQuestionType = {
  id: string;
  title: string;
  questions: Question[];
};

type Question = {
  id: string;
  question: string;
  questionPoint: number;
  answerKeys: AnswerKey[];
}

type AnswerKey = {id: string, label: string, point: number, isSelected?: boolean};

export default function EmployeeQuestionsInput({data: questions, setData: setQuestions}: {data: EmployeeQuestionType[], setData: React.Dispatch<React.SetStateAction<any>>}) {
  // const [questions, setQuestions] = useState(data);

  const handleDragDrop = (results: DropResult) => {
    const {source, destination, type} = results;
    if(!destination || (source.droppableId == destination.droppableId && source.index == destination.index)) return;



    if(type == "group"){
      console.log(source.index, destination.index);
      const reorderQuestionGroups = [...questions];
      const [removeQuestionGroup] = reorderQuestionGroups.splice(source.index, 1);
      reorderQuestionGroups.splice(destination.index, 0, removeQuestionGroup);

      console.log(questions, reorderQuestionGroups);
      setQuestions(reorderQuestionGroups);
    }else if(type == "question"){
      const sourceGroupIndex = questions.findIndex((v, i) => v.title == source.droppableId),
      sourceQuestionIndex = source.index;
    
      const destinationGroupIndex = questions.findIndex((v, i) => v.title == destination.droppableId),
      destinationQuestionIndex = destination.index;

      const newSource = [...questions[sourceGroupIndex].questions];
      const newDestination = sourceGroupIndex == destinationGroupIndex ? newSource : [...questions[destinationGroupIndex].questions];
      
      const [removeAnswerKey] = newSource.splice(sourceQuestionIndex, 1);
      newDestination.splice(destinationQuestionIndex, 0, removeAnswerKey);

      console.log(sourceGroupIndex == destinationGroupIndex, source.droppableId,
        destination.droppableId, sourceGroupIndex, sourceQuestionIndex, destinationGroupIndex, destinationQuestionIndex, newSource, newDestination);

      const newQuestions = [...questions];
      newQuestions[sourceGroupIndex] = {...questions[sourceGroupIndex], questions: newSource};
      newQuestions[destinationGroupIndex] = {...questions[destinationGroupIndex], questions: newDestination};

      console.log(newQuestions);

      setQuestions(newQuestions);
    }else{
      const [sourceGroup, sourceQuestion, sourceAnswer] = source.droppableId.split('||'),
      sourceGroupIndex = questions.findIndex(group => group.id == sourceGroup),
      sourceQuestionIndex = questions[sourceGroupIndex].questions.findIndex(que => que.id == sourceQuestion),
      sourceAnswerIndex = questions[sourceGroupIndex].questions[sourceQuestionIndex].answerKeys.findIndex(ans => ans.id == sourceAnswer);


      const [destinationGroup, destinationQuestion, destinationAnswer] = destination.droppableId.split('||'),
      destinationGroupIndex = questions.findIndex(group => group.id == destinationGroup),
      destinationQuestionIndex = questions[destinationGroupIndex].questions.findIndex(que => que.id == destinationQuestion),
      destinationAnswerIndex = questions[destinationGroupIndex].questions[destinationQuestionIndex].answerKeys.findIndex(ans => ans.id == destinationAnswer);


      const newSource = [...questions[sourceGroupIndex].questions[sourceQuestionIndex].answerKeys];
      const newDestination = sourceGroup != destinationGroup && sourceQuestion != destinationQuestion ? [...questions[destinationGroupIndex].questions[destinationQuestionIndex].answerKeys] : newSource;
      
      const [removeAnswerKey] = newSource.splice(sourceAnswerIndex, 1);
      newDestination.splice(destinationAnswerIndex, 0, removeAnswerKey);

      const newQuestions = [...questions];
      newQuestions[sourceGroupIndex].questions[sourceAnswerIndex] = {...newQuestions[sourceGroupIndex].questions[sourceAnswerIndex], answerKeys: {...newSource}};

      newQuestions[destinationGroupIndex].questions[destinationQuestionIndex] = {...questions[destinationGroupIndex].questions[destinationQuestionIndex], answerKeys: {...newDestination}};

      setQuestions(newQuestions);
    }
  }


  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      <Droppable droppableId="root" type="group">
        {dropProv => (
          <div {...dropProv.droppableProps} className='flex flex-col w-full gap-4' ref={dropProv.innerRef}>
            {questions.map((questionGroup, questionGroupIndex) => (
              <QuestionGroup key={questionGroupIndex} data={questionGroup} index={questionGroupIndex} />
            ))}
            {dropProv.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}




function QuestionGroup(props: {index: number; data: EmployeeQuestionType}) {
  const draggableId = props.data.id;
  return (
    <Draggable draggableId={draggableId} key={props.data.id} index={props.index} >
    {dragProv => (
      <div {...dragProv.draggableProps} {...dragProv.dragHandleProps} className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8" key={props.data.id} ref={dragProv.innerRef}>
        <Droppable droppableId={draggableId} type='question'>
          {dropProv => (
            <div ref={dropProv.innerRef}>
              {/* <h4 className="text-xl text-gray-900 font-bold">{props.data.title}</h4> */}
              <TextareaAutoHeight className='w-full !p-0 transition-none border-0 focus:!shadow-none text-xl text-gray-900 font-bold' value={props.data.title}/>
    
              {props.data.questions.map((question, questionIndex) => (
                <Question key={questionIndex} data={question} index={questionIndex} questionGroupId={props.data.id} />
              ))}
              {dropProv.placeholder}  
            </div>
          )}
        </Droppable>
      </div>
    )}
  </Draggable>
  )
}


function Question(props: {index: number; questionGroupId: string; data: Question}) {
  const draggableId = props.questionGroupId + '||' + props.data.id;
  return (
    <Draggable draggableId={draggableId} index={props.index} >
    {dragProv => (
      <div {...dragProv.draggableProps} ref={dragProv.innerRef}>
        <Droppable droppableId={draggableId} type='AnswerKey'>
          {dropProv => (
            <div className={`pt-4 ${props.data.answerKeys.length > 0 && `pb-2`} group/question`} {...dropProv.droppableProps} ref={dropProv.innerRef}>
              <div className={`flex items-center justify-between ${props.data.answerKeys.length > 0 && `pb-4`} gap-3`}>
                <div className="w-full">
                  <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {props.index + 1}</p>
                  <TextareaAutoHeight className='w-full border-transparent focus:mt-2' value={props.data.question}/>
                </div>
                
                <span {...dragProv.dragHandleProps} className='w-6'>
                  <MdDragIndicator className='group-hover/question:opacity-100 opacity-0 duration-200'/>
                </span>
              </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {props.data.answerKeys.map((answer, answerIndex) => (
                    <AnswerKey key={answerIndex} data={answer} index={answerIndex} questionGroupId={props.questionGroupId} questionId={props.data.id} />
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


function AnswerKey(props: {index: number; questionGroupId: string; questionId: string; data: AnswerKey}) {
  const draggableId = props.questionGroupId + '||' + props.questionId + '||' + props.data.id;
  return (
    <Draggable draggableId={draggableId} index={props.index}>
    {dragProv => (
      <div {...dragProv.draggableProps} ref={dragProv.innerRef} className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 border-sky-500 group/answer flex items-center justify-between gap-4`}>
        
        <TextareaAutoHeight className='w-full !p-0 transition-none border-0 focus:!shadow-none' value={props.data.label}/>

        <span className='flex justify-between items-center gap-2'>
          <span {...dragProv.dragHandleProps}>
            <MdDragIndicator className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
          </span>
          <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
            <input type="text" className='focus:ring-0 focus:outline-none bg-transparent text-gray-700 focus:border-blue-500 text-center' defaultValue={props.data.point} size={1} 
              onChange={e => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                e.target.size = e.target.value.length >= 1 ? e.target.value.length : 1;
              }}
            />
            </span>
        </span>
      </div>
    )}
    </Draggable>
  )

}