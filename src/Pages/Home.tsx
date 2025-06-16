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
        <h1 className='class'>CLASS:{data.name}</h1>
        <h2 className='teacher'>TEACHER: {data.teachersName}</h2>
        <h3 className='students'>Students:
      <ul className='stud-data'>
         <li className='details'>
            
         </li>
      </ul>
    </h3>
  </div> 
    </div>
    
  );
};


