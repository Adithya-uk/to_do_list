import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import FormLogin from './FormLogin'


const FormSignup = ({ submitForm }) => {
  console.log("signup")
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
     
    <div className='split right'>
     <div className='centered'>
       
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1 className="heading">
          Get started with us today! 
              Create account .
        </h1>
        <br></br>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <br></br>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div><br></br>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div><br></br>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <br></br><br></br>
        <span>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        </span>
        <br></br><br></br>
        {/* <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
          
        </span> */}
      </form>
      <span className='form-input-login'>
          Already have an account? Login <Link to="/formlogin">here</Link>
          
        </span>
    </div>
    
  
    
   
    
    </div>
  );
};

//<List />

export default FormSignup;