import React from 'react';
import './Form.css';
import Navbar from './Navbar'
import './Todo.css'
// import Hero from './Hero';
import Submenu from './Submenu';
import { useGlobalContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './Week'

const ViewWeek = () => {
    const { closeSubmenu } = useGlobalContext();
    return(
        <section className = "bg">
        <>
        <div >
        <div >
        <Navbar />
        <Submenu />
        <Week />
        </div>
        </div>
        <div className="bg-red" onMouseOver={closeSubmenu}>
        <div className='todo-app' onMouseOver={closeSubmenu}>
      
       
      </div>
       </div>
        
</>
</section>
 
    


        
    )
}
export default ViewWeek