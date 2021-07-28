import React from 'react';
import './Form.css';
import Navbar from './Navbar'
import './Todo.css'
// import Hero from './Hero';
import Submenu from './Submenu';
// import TodoList from './TodoList';
import { useGlobalContext } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tododo from './Tododo'

const DailyTask = () => {
    const { closeSubmenu } = useGlobalContext();
    return(
       <section className = "bg">
        <>
        <div className = "bg-black">
        <div className = "bg-color">
        <Navbar />
        <Submenu />
        </div>
        </div>
        <div className="bg-red" onMouseOver={closeSubmenu}>
        <div className='todo-app' onMouseOver={closeSubmenu}>
      <Tododo />
       
      </div>
       </div>
        
</>
</section>
 
    )

}
export default DailyTask