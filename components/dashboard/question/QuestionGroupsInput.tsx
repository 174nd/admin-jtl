import React, { SetStateAction, useState } from 'react';
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

export type QuestionGroupType = {
  id: string;
  title: string;
  questions: QuestionType[];
};


export default function QuestionGroupsInput({data, setData}: {data: QuestionGroupType[], setData: React.Dispatch<SetStateAction<QuestionGroupType[]>>}) {
  // const [data, setData] = useState<QuestionGroupType[]>([]);

  const handleDragDrop = (results: DropResult) => {
    const {source, destination, type} = results;
    if(!destination || (source.droppableId == destination.droppableId && source.index == destination.index)) return;


    if(type == "group"){
      const reorderData = [...data];
      const [removeQuestionGroup] = reorderData.splice(source.index, 1);
      reorderData.splice(destination.index, 0, removeQuestionGroup);
      console.log('group', source.index, destination.index, reorderData);

      setData(reorderData);
      console.log('ret', data);
    }else if(type == "question"){
      const sourceGroupIndex = data.findIndex((v, i) => v.id == source.droppableId),
      sourceQuestionIndex = source.index;
    
      const destinationGroupIndex = data.findIndex((v, i) => v.id == destination.droppableId),
      destinationQuestionIndex = destination.index;

      console.log(sourceGroupIndex, source.droppableId, sourceQuestionIndex, destination.droppableId, destinationGroupIndex, destinationQuestionIndex);

      const newSource = [...data[sourceGroupIndex].questions];
      const newDestination = sourceGroupIndex == destinationGroupIndex ? newSource : [...data[destinationGroupIndex].questions];
      
      const [removeAnswerKey] = newSource.splice(sourceQuestionIndex, 1);
      newDestination.splice(destinationQuestionIndex, 0, removeAnswerKey);


      const reorderData = [...data];
      reorderData[sourceGroupIndex] = {...data[sourceGroupIndex], questions: newSource};
      reorderData[destinationGroupIndex] = {...data[destinationGroupIndex], questions: newDestination};

      setData(reorderData);
    }else{
      const [sourceGroupIndex, sourceQuestionId] = source.droppableId.split('||'),
      sourceQuestionIndex = data[parseInt(sourceGroupIndex)].questions.findIndex(q => q.id == sourceQuestionId),
      sourceAnswerIndex = source.index;

      
      const [destinationGroupIndex, destinationQuestionId] = destination.droppableId.split('||'),
      destinationQuestionIndex = data[parseInt(destinationGroupIndex)].questions.findIndex(q => q.id == destinationQuestionId),
      destinationAnswerIndex = destination.index;



      const newSource = [...data[parseInt(sourceGroupIndex)].questions[sourceQuestionIndex].answerKeys];
      const newDestination = sourceGroupIndex != destinationGroupIndex && sourceQuestionIndex != destinationQuestionIndex ? [...data[parseInt(destinationGroupIndex)].questions[destinationQuestionIndex].answerKeys] : newSource;

      console.log('xxx', newSource, newDestination);

      const [removeAnswerKey] = newSource.splice(sourceAnswerIndex, 1);
      newDestination.splice(destinationAnswerIndex, 0, removeAnswerKey);

      const reorderData = [...data];
      reorderData[parseInt(sourceGroupIndex)].questions[sourceQuestionIndex] = {...reorderData[parseInt(sourceGroupIndex)].questions[sourceQuestionIndex], answerKeys: [...newSource]};
      console.log("hihih", sourceGroupIndex, sourceQuestionIndex, sourceAnswerIndex, destinationGroupIndex, destinationQuestionIndex, destinationAnswerIndex, removeAnswerKey, reorderData);
      reorderData[parseInt(destinationGroupIndex)].questions[destinationQuestionIndex] = {...reorderData[parseInt(destinationGroupIndex)].questions[destinationQuestionIndex], answerKeys: [...newDestination]};
      console.log("set", data, reorderData);
      setData(reorderData);

    }
  }

    return (
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="root" type="group">
          {dropProv => (
            <div className="flex flex-col w-full gap-4" {...dropProv.droppableProps} ref={dropProv.innerRef}>
              {data.length == 0 && (
                <div className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8">
                  <h4 className='text-center'>Questions Not Found</h4>
                </div>
              )}
              {data.map((questionGroup, questionGroupIndex) => (
                <QuestionGroup key={questionGroupIndex} questionGroup={questionGroup} questionGroupIndex={questionGroupIndex} data={data} setData={setData} />
              ))}
              {dropProv.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
}


function QuestionGroup({questionGroup, questionGroupIndex, data, setData}: {questionGroup: QuestionGroupType, questionGroupIndex: number, data: QuestionGroupType[], setData: React.Dispatch<React.SetStateAction<QuestionGroupType[]>>}){
  const setupId = questionGroup.id;

  const deleteQuestionGroup = () => {
    const onData = [...data];
    onData.splice(questionGroupIndex, 1);
    setData(onData);
  }

  const addQuestion = () => {
    const onData = [...data];
    onData[questionGroupIndex].questions.push({id: uuidv4(), question: "", answerKeys: []});
    setData(onData);

  }

  return (
    <Draggable draggableId={setupId} key={setupId} index={questionGroupIndex}>
      {dragProv => (
        <div {...dragProv.draggableProps} className="bg-white rounded-lg shadow-xl block overflow-x-auto md:mt-0 p-8" ref={dragProv.innerRef}>
          <Droppable droppableId={setupId} type='question'>
            {dropProv => (
              <div ref={dropProv.innerRef}>
                <div className="flex gap-2 group/questionGroup">
                  <TextareaAutoHeight className='w-full !p-0 transition-none border-0 focus:!shadow-none text-xl text-gray-900 font-bold' value={questionGroup.title} placeholder='Nama Group Pertanyaan' onChange={e => {
                    const onData = [...data];
                    onData[questionGroupIndex].title = e.target.value;
                    setData(onData);
                  }}/>
                  <div className="flex">
                    <span className='w-6 cursor-pointer' onClick={() => deleteQuestionGroup()}>
                      <FaRegTrashAlt className='group-hover/questionGroup:opacity-100 opacity-0 duration-200'/>
                    </span>
                    <span className='w-6 cursor-pointer' onClick={() => addQuestion()}>
                      <FaRegPlusSquare className='group-hover/questionGroup:opacity-100 opacity-0 duration-200'/>
                    </span>
                    <span {...dragProv.dragHandleProps} className='w-6 cursor-grab'>
                      <MdDragIndicator className='group-hover/questionGroup:opacity-100 opacity-0 duration-200'/>
                    </span>
                  </div>
                </div>

                {questionGroup.questions.map((question, questionIndex) => (
                  <Question key={questionIndex} question={question} questionIndex={questionIndex} questionGroupIndex={questionGroupIndex} data={data} setData={setData} />
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


function Question({question, questionIndex, questionGroupIndex, data, setData}: {question: QuestionType, questionIndex: number, questionGroupIndex: number, data: QuestionGroupType[], setData: React.Dispatch<React.SetStateAction<QuestionGroupType[]>>}){
  const setupId = questionGroupIndex + '||' + question.id;

  const deleteQuestion = (questionIndex: number) => {
    const onData = [...data];
    onData[questionGroupIndex].questions.splice(questionIndex, 1);
    setData(onData);
  }


  const addAnswerKeys = (questionIndex: number) => {
    const onData = [...data];
    onData[questionGroupIndex].questions[questionIndex].answerKeys.push({id: uuidv4(), label : "", point : 0});
    setData(onData);
  }

  return (
    <Draggable draggableId={setupId} key={setupId} index={questionIndex}>
      {dragProv => (
        <div {...dragProv.draggableProps} ref={dragProv.innerRef}>
          <Droppable droppableId={setupId} type='AnswerKey'>
            {dropProv => (
              <div className={`pt-4 ${question.answerKeys.length > 0 && `pb-2`} group/question`} {...dropProv.droppableProps} ref={dropProv.innerRef}>
                <div className={`flex items-center justify-between ${question.answerKeys.length > 0 && `pb-4`} gap-3`}>
                  <div className="w-full">
                    <p className="mb-0 text-base font-semibold text-gray-500">Pertanyaan {questionIndex + 1}</p>
                    <TextareaAutoHeight className='w-full border-transparent focus:mt-2' value={question.question} placeholder='Pertanyaan' onChange={e => {
                      const onData = [...data];
                      onData[questionGroupIndex].questions[questionIndex].question = e.target.value ?? "";
                      setData(onData);
                    }}/>
                  </div>
                  <div className="flex">
                    <span className='w-6 cursor-pointer' onClick={() => deleteQuestion(questionIndex)}>
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
                  {question.answerKeys.map((answerKey, answerKeyIndex) => (
                  <AnswerKey key={answerKeyIndex} answerKey={answerKey} answerKeyIndex={answerKeyIndex} questionIndex={questionIndex} questionGroupIndex={questionGroupIndex} data={data} setData={setData} />
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


function AnswerKey({answerKey, answerKeyIndex, questionIndex, questionGroupIndex, data, setData}: {answerKey: AnswerKeyType, answerKeyIndex: number, questionIndex: number, questionGroupIndex: number, data: QuestionGroupType[], setData: React.Dispatch<React.SetStateAction<QuestionGroupType[]>>}){
  const setupId = questionGroupIndex + '||' + questionIndex + '||' + answerKey.id;

  const deleteAnswerKeys = (answerKeyIndex: number) => {
    const onData = [...data];
    onData[questionGroupIndex].questions[questionIndex].answerKeys.splice(answerKeyIndex, 1);
    setData(onData);
  }

  return (
    <Draggable draggableId={setupId} key={setupId} index={answerKeyIndex} >
      {dragProv => (
        <div  {...dragProv.draggableProps}  ref={dragProv.innerRef} className={`px-4 py-2 rounded-lg border-solid w-full border-2 transition-all duration-300 border-sky-500 group/answer flex items-center justify-between gap-4`} key={answerKeyIndex}>
          
          <TextareaAutoHeight className='w-full !p-0 transition-none border-0 focus:!shadow-none' value={answerKey.label} placeholder='Jawaban' onChange={e => {
            const onData = [...data];
            onData[questionGroupIndex].questions[questionIndex].answerKeys[answerKeyIndex].label = e.target.value;
            setData(onData);
          }}/>

          <span className='flex justify-between items-center gap-2'>
            <span className='cursor-pointer' onClick={() => deleteAnswerKeys(answerKeyIndex)}>
              <FaRegTrashAlt className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
            </span>
            <span className='cursor-grab' {...dragProv.dragHandleProps}>
              <MdDragIndicator className='group-hover/answer:opacity-100 opacity-0 duration-200 text-black'/>
            </span>
            <span className="bg-sky-200 text-sky-600 py-1 px-3 w-full rounded-full text-xs">
              <input type="text" className='focus:ring-0 focus:outline-none bg-transparent text-gray-700 focus:border-blue-500 text-center' value={answerKey.point} size={answerKey.point.toString().length >= 0 ? answerKey.point.toString().length : 1} 
                onChange={e => {
                  console.log(e)
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.size = e.target.value.length >= 1 ? e.target.value.length : 1;
                  const onData = [...data];
                  onData[questionGroupIndex].questions[questionIndex].answerKeys[answerKeyIndex].point = e.target.value.length >= 1 ? parseInt(e.target.value) : 0;
                  setData(onData);
                }}
              />
              </span>
          </span>
        </div>
      )}
    </Draggable>
  )
}