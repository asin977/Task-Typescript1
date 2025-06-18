import React from 'react';
import { questions } from '../MyData/questions';

import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import {QuestionCont} from './QuestionCont';

export const QuestionsDisplay = () => {
  return (
    <div>
       <Link to="/" className="link"> ⬅️ Go to Main</Link>
      <h1 className='head'>Question Container</h1>
       <QuestionCont />
    </div>
  );
  
};

export default QuestionsDisplay;

