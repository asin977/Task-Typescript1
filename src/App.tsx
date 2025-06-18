import React from 'react';
import './App.css';
import { Home } from './Pages/Home';
// import { Main } from './Pages/Main';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import {QuestionsDisplay} from './components/QuestionsDisplay';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Home />}/>
          {/* <Route path='/main' element={<Main />}/> */}
          <Route path='/page3' element={ <QuestionsDisplay />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
