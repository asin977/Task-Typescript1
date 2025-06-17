import React from 'react'
import { questions } from '../MyData/questions';
import { Link } from 'react-router-dom';
import "../Pages/Home.css";


export const QuestionsDisplay =() =>{
 
  return (
    <div>
       <h1 className='head'>Question Container</h1>
       <ul className='quest-cont'>
         {questions.map((q,index)=> (
         <li className='question-bank' key={index}>{q}</li>
        ))}
      </ul>
      <Link to='/main'>Question Container</Link> 
    </div>
   
  )
  
}
export default QuestionsDisplay;

