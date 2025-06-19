import React from 'react';
import { questions } from '../MyData/questions';

export function QuestionContainer() {
  return (
    <div>
        <ul style={{padding:'0px'}}>
        {questions.map((q, index) => (
          <li style={{padding:'22px',backgroundColor:'black',color:'#fff',borderBottom:'1px solid #fff',fontSize:'18px'}} key={index}>
            <p>{q.question}</p>
            <div style={{ color: 'yellow', fontWeight: 'bold', marginTop: '5px' }}>
              {q.answer}
            </div>
          </li>
        ))} 
        </ul>
    </div>
  ) 
}

export default QuestionContainer
