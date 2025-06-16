import React from 'react';
import classDatajson from '../MyData/data.json';
import "./Home.css";

type Subject = {
    subject : string,
    mark : number
}

type Student = {
    name : string,
    id : number,
    marks : Subject[]
}

type ClassData = {
    teacherName : string,
    name : string,
    students : Student[]
}

export const Home = () => {
  return (
    <div>
      <h1 className='heading'>School List Panel</h1>
    </div>
  );
};


