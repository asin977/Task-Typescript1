import { Subject , Student ,ClassData } from './types';
import classdataJson from '../MyData/data.json';


const data : ClassData = classdataJson as ClassData;

export const PrintClassName = () => {
    return {class:data.name}
}

export const  PrintTeachersName =()=> {
    return {Name:data.teachersName}
}

export const StudentNames = () => {
    return {}
   
}

