import React from 'react';
import validate from './validatelogin';
import useForm from './UseLoginform';
import './Form.css';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';
import Aboutus from './Aboutus';


const FormLogin = ({ submitForm1 }) => {
  console.log("FormLogin");
  const { handleChange1, handleSubmit1, values, errors } = useForm(
    submitForm1,
    validate
  );

  return (
    <>
    <Aboutus />
    <div className='split right'>
     <div className='centered'>
       
      <form onSubmit={handleSubmit1} className='form' noValidate>
        
        
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange1}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <br></br>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange1}
          />
          {errors.password && <p>{errors.password}</p>}
        </div><br></br>
        
        <span>
  <button className='form-input-btn' type='submit' >
         Log In
  </button>
    </span>
        
        <br></br><br></br>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
          
        </span> */}
      </form>
      
    
    </div>
    
    
  
  
  
    
    
    </div>
    </>
  );
}

//<List />

export default FormLogin;