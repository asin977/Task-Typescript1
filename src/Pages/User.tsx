import React from 'react';
import classDataJson from '../MyData/data.json'; 


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


const data: ClassData = classDataJson as ClassData;

function Home() {
  return (
    <div>
      <h1>Class: {data.name}</h1>
      <h2>Teacher: {data.teachersName}</h2>
      <h3>Students:</h3>
      <ul>
        {data.students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong>
            <ul>
              {student.marks.map((subject, index) => (
                <li key={index}>
                  {subject.subject}: {subject.mark}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
