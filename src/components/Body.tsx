import React from 'react';
import classDataJson from '../MyData/data.json';
import { Subject , Student ,ClassData } from '../Pages/types'
const data : ClassData = classDataJson;

export function Body() {
  return (
    <div>
      <h3 className='students'>Student's names and marks obtained:
        <ul className='data'>
            {data.students.map((student) => (
          <li key={student.id} className='stud-list'>
            <span className='red-text'><strong>{student.name}:</strong></span>
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
  )
}

export default Body
