import React from 'react';
import { localQuestions } from '../MyData/questions';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';

export function QuestionCont() {
  return (
    <div>
        <ul className='quest-cont'>
        {localQuestions.map((q, index) => (
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
