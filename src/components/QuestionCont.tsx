import React from 'react';
import { questions } from '../MyData/questions';
import '../Pages/Home.css';

export function QuestionCont() {
  return (
    <div>
        <ul className='quest-cont'>
        {questions.map((q, index) => (
          <li className='question-bank' key={index}>
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

export default QuestionCont
