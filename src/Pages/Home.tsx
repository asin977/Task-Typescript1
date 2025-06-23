import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import StudentManagementData from '../components/StudentManagementData';


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


