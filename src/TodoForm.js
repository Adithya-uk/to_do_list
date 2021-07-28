import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  //const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [input, setInput] = useState({time:"",text:""})

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    //setInput(e.target.value);
    setInput({[e.target.name]:e.target.value})
    console.log("jjjjjj",e.target.value);
  };

  const handleSubmit = e => {
    //setInput(e.target.value);
    //setInput({[e.target.name]:e.target.value})
    //console.log("lllll",e.target.value);
    // setInput(e.target.value);
    e.preventDefault();

    props.onSubmit({
      
      id: Math.floor(Math.random() * 10000),
      text: input,
      time: input
      
    });
    
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {/* {props.edit ? (
        <>
        <div>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          </div>
          <div>
          <input
            placeholder='Update your time'
            value={input}
            onChange={handleChange}
            name='time'
            ref={inputRef}
            className='todo-input edit'
          />
          </div>
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : 
      ( */}
        <>
          <input
            placeholder='Add a todo'
            value={input.task}
            //onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <input
            placeholder='Enter time (eg.: 00:00:00)'
            value={input.time}
            onChange={handleChange}
            name='time'
            className='todo-input'
            ref={inputRef}
          />
          <div>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
          </div>
        </>
      )
      {/* } */}
    </form>
  );
}

export default TodoForm;