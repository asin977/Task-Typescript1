import { ClassData } from './types';
import classdataJson from '../MyData/data.json';
import React from 'react'


type Names = {
    Name : string
}

const studentdata: ClassData = classdataJson;

export const printClassName = () => studentdata.name;

export const printTeachersName = () => studentdata.teachersName;

export const studentNames = () => studentdata.students.map(s => s.name).join(', ');

export const studentId = () => studentdata.students.map(s => s.id).join(', ');

export const studentsubjectname = (studentName:string)=> {
  const student = studentdata.students.find(s => s.name === studentName);
  if (!student) return 'Student not found';
  return student.marks.map(m=> `${m.subject}` ).join(',');
}

export const getStudentMarks = (studentName:string) : string => {
   const student = studentdata.students.find(s=> s.name === studentName);
   return student 
   ? student.marks.map(m => `${m.subject} ${m.mark}`).join(' ,')
   : 'Student name not found to get the marks.'
}

export const getStudentTotalmark = (studentName:string) : string => {
   const student = studentdata.students.find(s => s.name === studentName);
   if (!student) return "Student not found";
   const total = student.marks.reduce((sum,m)=> sum + m.mark,0);
   return total.toFixed(2);
}

export const getStudentAverageMark = (studentName:string): string => {
  const student = studentdata.students.find(s => s.name === studentName);
  if (!student) return "Student not found";
  const average = student.marks.reduce((sum,m)=> sum + m.mark,0) / student.marks.length;
  return average.toFixed(2);
}

export const getAverageInSubject = (subject:string): string => {
  const subjectMarks = studentdata.students.map(s=> {
    const mark = s.marks.find(m => m.subject === subject);
    return mark?.mark ?? 0;
  });
  const avg = subjectMarks.reduce((a,b)=> a+b,0)/studentdata.students.length;
  return avg.toFixed(2);
}

export const getTotalInSubject = () => {

}

