import { Subject , Student ,ClassData } from './types';
import classdataJson from '../MyData/data.json';


const data : ClassData = classdataJson as ClassData;

export const printClassName = () => {
    return {class:data.name}
}

export const  printTeachersName =()=> {
    return {Name:data.teachersName}
}

export const studentNames = () => {
    return data.students.map(student => student.name);
};
  
export const studentId = () => {
    return data.students.map(student => student.id );
}

export const studentmark = () => {
    // return data.students.map((subject,index) => subject.marks);
}