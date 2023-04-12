import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/details' element={<Details/>}/>
          <Route path='/' element={<Home/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
