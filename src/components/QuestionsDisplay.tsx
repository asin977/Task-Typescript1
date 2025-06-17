import React from 'react'
import { questions } from '../MyData/questions';
import { Link } from 'react-router-dom';


export const QuestionsDisplay =() =>{
 
  return (
    <div>
       <h1>Question Container</h1>
       <ul>
         {questions.map((q,index)=> (
         <li key={index}>{q}</li>
        ))}
      </ul>
      <Link to='/main'>Question Container</Link> 
    </div>
   
  )
  
}
export default QuestionsDisplay;

