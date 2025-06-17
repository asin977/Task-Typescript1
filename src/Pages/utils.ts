import { Subject , Student ,ClassData } from './types';
import classdataJson from '../MyData/data.json';


const data : ClassData = classdataJson as ClassData;

export function PrintClassName() {
    return {class:data.name}
}

export function PrintTeachersName() {
    return {Name:data.teachersName}
}

export function StudentNames() {
    return {
        
    }
   
}

