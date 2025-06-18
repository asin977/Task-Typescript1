import { ClassData } from './types';
import classdataJson from '../MyData/data.json';

const data: ClassData = classdataJson;

export const printClassName = (): string => data.name;

export const printTeachersName = (): string => data.teachersName;

export const studentNames = (): string => data.students.map(s => s.name).join(', ');

export const studentId = (): string => data.students.map(s => s.id).join(', ');

export const studentmark = (studentName: string): string => {
  const student = data.students.find(s => s.name === studentName);
  if (!student) return 'Student not found';
  return student.marks.map(m => `${m.subject}`).join(', ');
};
