import React from 'react';
import { Link } from 'react-router-dom';
import QuestionContainer from './QuestionContainer';

export const QuestionsDisplay = () => {
  return (
    <div>
       <Link to="/" className="link" style={{color:'black',position:'absolute',textDecoration:'none',right:'4%',fontWeight:'400'}}> ⬅️ Go to Home Page</Link>
      <h1 style={{fontFamily:'sansarif',fontSize:35}}>Question Container</h1>
       <QuestionContainer />
    </div>
  );
  
};

export default QuestionsDisplay;

