import React from 'react'
import classDataJson from '../MyData/data.json';
import { Subject , Student ,ClassData } from '../Pages/types'
const data : ClassData = classDataJson;

export function Header() {
  return (
    <div className='main-container'>
          <h1 className='class'><h1 className='class'>
            CLASS: <span className='red-text'>{data.name}</span>
          </h1>
          <h2 className='teacher'>
              TEACHER: <span className='red-text'>{data.teachersName}</span>
          </h2>
         </h1>
    </div>
   
  )
}

export default Header
