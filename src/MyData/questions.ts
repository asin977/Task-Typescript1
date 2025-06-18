import {
  printClassName,
  printTeachersName,
  studentNames,
  studentId,
  studentsubjectname,
  getStudentMarks,
  getStudentTotalmark,
  getStudentAverageMark,
  getAverageInSubject,
  getTotalInSubject,
  highestScorerInSubject,
  lowestScorerInSubject
  
} from '../Pages/utils';
import questionDataJson from '../MyData/questions.json';
import { QuestionDisplay, QuestionData} from  '../Pages/types';

// const  :  QuestionData = questionDataJson;

export const questions: QuestionDisplay[] = [
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
    answer: studentsubjectname("Ravi")
  },
  {
    question: "Write a function to print the marks of a specific student in all subjects.",
    answer: getStudentMarks("Aju")
  },
  {
    question: "Write a function to calculate and print the total marks for a specific student.",
    answer: getStudentTotalmark("Binu")
  },
  {
    question: "Write a function to calculate and print the average marks for a specific student.",
    answer: getStudentAverageMark("Mini SS")
  },
  {
    question: "Write a function to calculate and print the average marks for all students in a specific subject.",
    answer:getAverageInSubject("English")
  },
  {
    question: "Write a function to calculate and print the total marks for all students in a specific subject.",
    answer:  getTotalInSubject("English")
  },
  {
    question: "Write a function to find and print the student with the highest marks in a specific subject.",
    answer:  highestScorerInSubject("English")
  },
  {
    question: "Write a function to find and print the student with the lowest marks in a specific subject.",
    answer: lowestScorerInSubject("English")
  },
];

