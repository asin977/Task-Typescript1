import React from 'react';
import classDataJson from '../MyData/data.json';
import {Subject,Student,ClassData} from './types'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import StudentManagementData from '../components/StudentManagementData';

const data : ClassData = classDataJson;

export function Home(){
  return (
    <div>
    <Link to='/questions' style={{color:'black',position:'absolute',textDecoration:'none',right:'4%',fontWeight:'400'}}>Go to Questions List ➡️</Link>
    <h1>Students List Panel</h1>
      <Header />
      <StudentManagementData />
    </div>    
  );
};


