import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';
import AboutUs from './Aboutus';

const Lform = () => {
  const [isSubmitted1, setIsSubmitted1] = useState(false);
  console.log("lForm");
  function submitForm1() {
    setIsSubmitted1(true);
  }
  return (
   
    <>
    <AboutUs />
      <div>
         
         {!isSubmitted1 ? (
          <FormLogin submitForm1={submitForm1} />
        ) : (
          <AddTask />
          

        )} 
        
      </div>
    </>
  );
};

export default Lform;