import React from 'react';
import { ClassData } from './types';
import { Link } from 'react-router-dom';
import classdataJson from '../MyData/data.json';
import {
  printClassName,
  printTeachersName,
  studentId,
  studentmark,
  studentNames,
} from './utils';

const data: ClassData = classdataJson;

export function Main() {
  const classInfo = printClassName();
  const teachersInfo = printTeachersName();
  const studentsInfo = studentNames();
  const studentsid = studentId();
  const specificStudentMarks = studentmark('Aju'); 

  return (
    <div className='cont'>
      <Link to='/home' className='link'>Home</Link>
      <div className='questions'>
        <h1 className='head'>Question Container</h1>

        <ul>
          <li className='quest-1'>Write a function to print the name of the class: <strong>"Class A"</strong></li>
          <span style={{ color: 'yellow', fontWeight: 'bold' }}>{classInfo.class}</span>
        </ul>

        <ul>
          <li className='quest-1'>Write a function to print the teacher's name: <strong>"Mary"</strong></li>
          <span style={{ color: 'yellow', fontWeight: '900' }}>{teachersInfo.Name}</span>
        </ul>

        <ul>
          <li className='quest-1'>Write a function to print the names of all students in the class.</li>
          <ul className='information'>
            {studentsInfo.map((name, index) => (
              <li key={index} style={{ color: 'yellow', fontWeight: '900' }} className='info'>
                {name}
              </li>
            ))}
          </ul>
        </ul>

        <ul>
          <li className='quest-1'>Write a function to print the IDs of all the students in the class.</li>
          <ul>
            {studentsid.map((id, index) => (
              <li key={index} style={{ color: 'yellow', fontWeight: '900' }}>{id}</li>
            ))}
          </ul>
        </ul>
        <ul>
          <li className='quest-1'>Write a function to print the Subject names for a specific student.</li>
          <pre style={{color:'yellow',fontWeight:'bold'}}></pre>
          {specificStudentMarks ? JSON.stringify(specificStudentMarks,null,2): 'student not found'}
        </ul>
      </div>
    </div>
  );
}

export default Main;


