import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';

const Aboutus = () => {
    //  const App = () => {
      return (
      
       

        <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='split left'>
        <div className='centered1'>
          <p className = "aboutushead" >About Us</p>
          <br></br><br></br>
          <p className ="aboutus">Managing things are</p>
        </div>
        </div>
        </div>
      
    
      
    
      )
    }
    
    export default Aboutus;
      