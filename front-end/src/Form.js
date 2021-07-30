import React, { useState } from 'react';
import './Form.css';
import FormLogin from './FormLogin'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';
import Aboutus from './Aboutus';
import Lform from './Lform'


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log("Form");
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
    <Aboutus />
      <div>
         
         {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Lform />
          

        )} 
        
      </div>
    </>
  );
};

export default Form;