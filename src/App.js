import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Sports from './component/Sports';
import {BrowserRouter,Route,Routes,link}from "react-router-dom";
import Business from './component/Business';
import Health from './component/Health';
import Science from './component/Science';
import Technology from './component/Technology';
import About from './component/About';
import Home from './component/Home';

// rcc for creating class base component
export default class App extends Component {
  // rendere is react ;ife cycle method  render comple jsx in html then render everything wriiten in html
  render() {
    
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes><Route  exact path="/home"element={<Home/>}/></Routes>
          <Routes><Route  exact path="/"element={<News/>}/></Routes>
          <Routes><Route  exact path="/About"element={<About/>}/></Routes>
           <Routes><Route  exact path="/business"element={<Business/>}/></Routes>
          <Routes><Route  exact path="/sport"element={<Sports/>}/> </Routes>
          <Routes><Route  exact path="/health"element={<Health/>}/></Routes>
          <Routes><Route  exact path="/science"element={<Science/>}/></Routes>
          <Routes>
         <Route  exact path="/technology"element={<Technology/>}/></Routes>
         
      
       </BrowserRouter>
      </div>
    )
  }
}
