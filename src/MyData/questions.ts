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
  lowestScorerInSubject,
  highestTotalScorer,
  lowestTotalScorer,
  subjectWithHighestAverage,
  subjectWithLowestAverage,
  classAverage,
  classTotal,
  averagePerSubject,
  totalPerSubject
  
} from '../Pages/utils';

import { QuestionDisplay, QuestionData} from  '../Pages/types';

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
  {
    question: "Write a function to find and print the student with the highest total marks.",
    answer: highestTotalScorer()
  },
  {
    question: "Write a function to find and print the student with the lowest total marks.",
    answer: lowestTotalScorer()
  },
  {
    question: "Write a function to find and print the subject with the highest average marks.",
    answer: subjectWithHighestAverage()
  },
  {
    question: "Write a function to find and print the subject with the lowest average marks.",
    answer: subjectWithLowestAverage()
  },
  {
    question: "Write a function to calculate and print the overall average marks for the class.",
    answer: classAverage ()
  },
  {
    question: "Write a function to calculate and print the overall total marks for the class.",
    answer: classTotal()
  },
  {
    question: "Write a function to calculate and print the average marks for each subject.",
    answer: averagePerSubject()
  },
  {
    question: "Write a function to calculate and print the total marks for each subject.",
    answer: totalPerSubject()
  },
];


