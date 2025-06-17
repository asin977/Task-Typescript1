import React from 'react';
import classDataJson from '../MyData/data.json';
import "./Home.css";


type Subject = {
  subject: string;
  mark: number;
};

type Student = {
  name: string;
  id: string;
  marks: Subject[];
};

type ClassData = {
  name: string;
  teachersName: string;
  students: Student[];
};

const data : ClassData = classDataJson as ClassData;

export function Home(){
  return (
    <div>
      <h1 className='heading'>Students Panel List</h1>
        <div className='main-container'>
          <h1 className='class'><h1 className='class'>
            CLASS: <span className='red-text'>{data.name}</span>
          </h1>
          <h2 className='teacher'>
              TEACHER: <span className='red-text'>{data.teachersName}</span>
          </h2>
      </h1>
      <h3 className='students'>Student's names and marks obtained:
        <ul className='data'>
        {data.students.map((student) => (
          <li key={student.id} className='stud-list'>
            <span className='name'><strong>{student.name}:</strong></span>
            <ul className='marks'>
              {student.marks.map((subject, index) => (
                <li key={index} className='indi-mark'>
                  {subject.subject}: {subject.mark}
                </li>
              ))}
            </ul>
          </li>
          ))}
        </ul>
      </h3>
    </div> 
  </div>
    
  );
};
