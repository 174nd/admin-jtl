export type AnswerKeyType = {id: string, label: string, point: number, status?: boolean};

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