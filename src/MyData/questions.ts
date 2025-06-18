import {
  printClassName,
  printTeachersName,
  studentNames,
  studentId,
  studentmark
} from '../Pages/utils';

type QuestionEntry = {
  question: string;
  answer: string | number;
};

export const localQuestions: QuestionEntry[] = [
  {
    question: "Write a function to print the name of the class: 'Class A'.",
    answer: printClassName() 
  },
  {
    question: "Write a function to print the teacher's name: 'Mary'.",
    answer: printTeachersName() 
  },
  {
    question: "Write a function to print the names of all the students in the class.",
    answer: studentNames() 
  },
  {
    question: "Write a function to print the IDs of all the students in the class.",
    answer: studentId() 
  },
  {
    question: "Write a function to print the subject names for a specific student.",
    answer: studentmark("Ravi")
  },
  {
    question: "Write a function to print the marks of a specific student in all subjects.",
    answer: studentmark("Ravi")
  },
  {
    question: "Write a function to calculate and print the average marks for all students in a specific subject.",
    answer: studentmark("Ravi")
  },
  {
    question: "Write a function to calculate and print the total marks for a specific student.",
    answer: studentmark("Ravi")
  },
  {
    question: "Write a function to calculate and print the average marks for all students in a specific subject.",
    answer: studentmark("Ravi")
  },
  {
    question: "Write a function to calculate and print the total marks for all students in a specific subject.",
    answer: studentmark("Ravi")
  },
  
];
