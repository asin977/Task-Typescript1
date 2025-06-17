import React from 'react'
import { Subject , Student ,ClassData } from './types';
import classdataJson from '../MyData/data.json';
import { PrintClassName } from './utils';

const data : ClassData = classdataJson as ClassData;

export function Main() {
  return (
    <div className='cont'>
       <div className='questions'>
          <h1 className='head'>Question Container</h1>
          <ul>
            <li className='quest-1'>Write a function to print the name of the class:<strong>"Class A"</strong></li>
             <span>{data.name}</span>
          </ul>
          <ul>
            <li className='quest-1'>Write a function to print the teacher's name:<strong>"Mary"</strong></li>
             <span>{data.teachersName}</span>
          </ul>
          <ul>
            <li className='quest-1'>Write a function to print the name of the class:<strong>"Class A"</strong></li>
             <span>{data.name}</span>
          </ul>
          <ul>
            <li className='quest-1'>Write a function to print the name of the class:<strong>"Class A"</strong></li>
             <span>{data.name}</span>
          </ul>
          <ul>
            <li className='quest-1'>Write a function to print the name of the class:<strong>"Class A"</strong></li>
             <span>{data.name}</span>
          </ul>
       </div>
    </div>
  )
}

export default Main
