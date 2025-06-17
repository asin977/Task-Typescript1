import { ClassData } from './types';
import classdataJson from '../MyData/data.json';

const data: ClassData = classdataJson;

export const printClassName = () => {
  return { class: data.name };
};

export const printTeachersName = () => {
  return { Name: data.teachersName };
};

export const studentNames = () => {
  return data.students.map(student => student.name);
};

export const studentId = () => {
  return data.students.map(student => student.id);
};

export const studentmark = (studentName: string) => {
  const student = data.students.find(s => s.name === studentName);
  return student ? student.marks : null;
}

