import React from 'react';
import classDataJson from '../MyData/data.json';
import "./Home.css";
import {Subject,Student,ClassData} from './types'
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Body } from '../components/Body';

const data : ClassData = classDataJson;

export function Home(){
  return (
    <div>
    <h1 className='heading '>Students List Panel</h1>
    <Link to='/questions'>Questions Container ➡️</Link>
      <Header />
      <Body />
      
    </div>    
  );
};

