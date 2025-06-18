  export type Subject = {
    subject: string;
    mark: number;
  };
  
  export type Student = {
    name: string;
    id: string;
    marks: Subject[];
  };
  
  export type ClassData = {
    name: string;
    teachersName: string;
    students: Student[];
  };
  
  export type QuestionData = {
    question :String
  }
  
  export type QuestionDisplay = {
    question: string;
    answer: string | number;
  };