import React from 'react'
import { Subject , Student ,ClassData } from './types';
import classdataJson from '../MyData/data.json';
import { printClassName,printTeachersName ,studentId,studentNames } from './utils';

const data : ClassData = classdataJson as ClassData;

export function Main() {
   const classInfo = printClassName();
   const teachersInfo = printTeachersName();
   const studentsInfo = studentNames();
   const studentsid = studentId(); 
   
  return (
    <div className='cont'>
        <div className='questions'>
            <h1 className='head'>Question Container</h1>
            <ul>
               <li className='quest-1'>Write a function to print the name of the class:<strong>"Class A"</strong></li>
               <span style = {{color:'yellow',fontWeight:'bold'}}>{classInfo.class}</span>
            </ul>
            <ul>
               <li className='quest-1'>Write a function to print the teacher's name:<strong>"Mary"</strong></li>
               <span style={{color:'yellow',fontWeight:'900'}}>{teachersInfo.Name}</span>
            </ul>
            <ul>
              <li className='quest-1'>Write a function to print the names of all students in the class.</li>
             <ul className='information'>
               <li style={{color:'yellow',fontWeight:'900'}} className='info'>{studentsInfo}</li>
             </ul>
            </ul>
            <ul>
               <li className='quest-1'>Write a function to print the IDs of all the students in the class.</li>
               <span>{studentsid}</span>
            </ul>
            <ul>
               <li className='quest-1'>Write a function to print the marks of a specific student in all subjects.</li>
               <span></span>
            </ul>
        </div>
    </div>
  )
}

export default Main
