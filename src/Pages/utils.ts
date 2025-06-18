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

export const getTotalInSubject = (subject:string) : string => {
  const subjectMarks = studentdata.students.map(s => {
    const mark = s.marks.find(m => m.subject === subject);
    return mark?.mark ?? 0;
  });
  const total = subjectMarks.reduce((a,b)=> a + b,0 );
  return total.toFixed(2);
}

export const highestScorerInSubject = (subject: string): string => {
  let topStudent = '';
  let topMark = 0;
  for (const s of studentdata.students) {
    const m = s.marks.find(m => m.subject === subject);
    if (m && m.mark > topMark) {
      topMark = m.mark;
      topStudent = s.name;
    }
  }
  return topStudent || 'No data';
};

export const lowestScorerInSubject = (subject:string) : string => {
  let lowestAcheiver = '';
  let lowMark = Infinity;
  for (const s of studentdata.students) {
    const m = s.marks.find(m => m.subject === subject);
    if (m && m.mark < lowMark) {
      lowMark = m.mark;
      lowestAcheiver  = s.name;
    }
  }
  return lowestAcheiver  || 'No data';
};

export const highestTotalScorer = (): string => {
  let topStudent = '';
  let topTotal = 0;
  for (const s of studentdata.students) {  
    const total = s.marks.reduce((sum, m) => sum + m.mark, 0);
    if (total > topTotal) {
      topTotal = total;
      topStudent = s.name;
    }
  }
  return topStudent;
};

export const lowestTotalScorer = ():string => {
    let lowestStudent = '';
    let lowestTotal = Infinity;
    for (const s of studentdata.students) {
      const total = s.marks.reduce((sum,m)=> sum + m.mark,0 );
      if (total < lowestTotal) {
        lowestTotal = total;
        lowestStudent = s.name;
      }
    }
    return lowestStudent
}

export const subjectWithHighestAverage = (): string => {
  const subjectAverages: Record<string, number> = {};

  for (const student of studentdata.students) {
    for (const mark of student.marks) {
      subjectAverages[mark.subject] = (subjectAverages[mark.subject] ?? 0) + mark.mark;
    }
  }

  for (const subject in subjectAverages) {
    subjectAverages[subject] /= studentdata.students.length;
  }

  const topSubject = Object.entries(subjectAverages).reduce((top, curr) =>
    curr[1] > top[1] ? curr : top
  );

  return topSubject[0];
};

export const subjectWithLowestAverage = (): string => {
  const subjectAverages: Record<string, number> = {};

  for (const student of studentdata.students) {
    for (const mark of student.marks) {
      subjectAverages[mark.subject] = (subjectAverages[mark.subject] ?? 0) + mark.mark;
    }
  }

  for (const subject in subjectAverages) {
    subjectAverages[subject] /= studentdata.students.length;
  }

  const lowSubject = Object.entries(subjectAverages).reduce((low, curr) =>
    curr[1] < low[1] ? curr : low
  );

  return lowSubject[0];
};

export const classAverage = (): string => {
  const totalMarks = studentdata.students.flatMap(s => s.marks).reduce((sum, m) => sum + m.mark, 0);
  const count = studentdata.students.reduce((acc, s) => acc + s.marks.length, 0);
  return (totalMarks / count).toFixed(2);
};

export const classTotal = (): string => {
  const total = studentdata.students.flatMap(s => s.marks).reduce((sum, m) => sum + m.mark, 0);
  return total.toString();
};

export const averagePerSubject = (): string => {
  const subjectSums: Record<string, number> = {};
  const subjectCounts: Record<string, number> = {};

  for (const s of studentdata.students) {
    for (const m of s.marks) {
      subjectSums[m.subject] = (subjectSums[m.subject] ?? 0) + m.mark;
      subjectCounts[m.subject] = (subjectCounts[m.subject] ?? 0) + 1;
    }
  }

  return Object.entries(subjectSums)
    .map(([subj, total]) => `${subj}: ${(total / subjectCounts[subj]).toFixed(2)}`)
    .join(', ');
};

export const totalPerSubject = (): string => {
  const subjectTotals: Record<string, number> = {};

  for (const s of studentdata.students) {
    for (const m of s.marks) {
      subjectTotals[m.subject] = (subjectTotals[m.subject] ?? 0) + m.mark;
    }
  }

  return Object.entries(subjectTotals)
    .map(([subj, total]) => `${subj}: ${total}`)
    .join(', ');
};
