import React from 'react';
import { questions } from '../MyData/questions';
import { Link } from 'react-router-dom';
import '../Pages/Home.css';
import {QuestionCont} from './QuestionCont';

export const QuestionsDisplay = () => {
  return (
    <div>
      <h1 className='head'>Question Container</h1>
       <QuestionCont />
      <Link to="/" className="link">Go to Main</Link>
    </div>
  );
};

export default QuestionsDisplay;

