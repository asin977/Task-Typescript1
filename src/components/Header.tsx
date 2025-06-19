import React from 'react'
import classDataJson from '../MyData/data.json';
import { Subject , Student ,ClassData } from '../Pages/types'
const Studentdata : ClassData = classDataJson;

export function Header() {
  return (
    <div style={{backgroundColor:'black',color:'#fff',margin:'0'}}>
          <h1 style={{fontSize:'20px',margin:'0'}}><h1>
            CLASS: <span style={{color:'yellow',fontSize:'35px',margin:'0'}}>{Studentdata.name}</span>
          </h1>
          <h2 className='teacher'style={{margin:'0'}}>
              TEACHER: <span style={{color:'yellow',fontSize:'30px',margin:'0'}}>{Studentdata.teachersName}</span>
          </h2>
         </h1>
    </div>  
  
  )
}

export default Header
