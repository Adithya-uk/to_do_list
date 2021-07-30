import React from 'react';
import './Form.css';
import Navbar from './Navbar'
import './Todo.css'
// import Hero from './Hero';
import Submenu from './Submenu';
import { useGlobalContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Due from './Due'

const ViewDue = () => {
    const { closeSubmenu } = useGlobalContext();
    
    return(
        <section className = "bg">
        <>
        <div >
        <div >
        <Navbar />
        <Submenu />
        <Due />
        </div>
        </div>
        
      
       
      
</>
</section>
 
    


        
    )
}
export default ViewDue