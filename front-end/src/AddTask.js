import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero';
import './Form.css'
import Submenu from './Submenu';
const AddTask = ({}) => {
   


return(
    <>
    <div className = 'bg'>
    <Navbar />
    
      <Hero />
      <Submenu />
      </div>
    </>
);
}
export default AddTask

