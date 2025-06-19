import React from 'react';
import classDataJson from '../MyData/data.json';
import { Subject , Student ,ClassData } from '../Pages/types'
const studentdata : ClassData = classDataJson;

export function StudentManagementData() {
  return (
    <div style={{backgroundColor:'black',color:'white'}}>
      <h3 style={{fontFamily:'sansarif',lineHeight:2,marginTop:'0',fontSize:'25px'}}>Student's names and marks obtained:
        <ul style={{padding:'25px',marginTop:'0',textAlign:'justify',fontSize:'20px'}}>
            {studentdata.students.map((student) => (
          <li key={student.id} style={{border:'1px solid white',maxWidth:'800px',margin:'0 auto',listStyle:'none'}}>
            <span style={{color:'yellow',fontSize:'20px'}}><strong>{student.name}:</strong></span>
            <ul style={{border:'1px solid white',padding:'10px'}}>
              {student.marks.map((subject, index) => (
                <li key={index} style={{listStyle:'none'}}>
                  ‣ {subject.subject}: {subject.mark}
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

export default StudentManagementData
