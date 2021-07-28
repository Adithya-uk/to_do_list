import React, { useState, useEffect } from 'react';


const UseLoginform = (callback, validate) => {console.log("empty string")
  const [values, setValues] = useState({
    username: '',
    
    password: ''
    
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting1, setIsSubmitting1] = useState(false);
  const [login,setLogin] = useState({});
  // const response = 'False';

  const handleChange1 = e => {console.log("empty string222")
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit1 = e => {console.log("empty string3333")
    e.preventDefault();
    
    
    setErrors(validate(values));
    
    console.log("empty string444")
    console.log(values)
    
    
    fetch('/api/login',{
      method: 'POST',
      body : JSON.stringify({
      content:values
    }) ,headers: {
      "Content-type":"application/json; charset=UTF-8"
     
   }
   }).then(response => response.json())
   .then(message => setLogin((message)),
    console.log(login)
);
  
    //  .then(message => setLogininfo({message:logininfo}))
   
  //  .then(response => {
  //    setLogininfo(response.data.logininfo)
  //  })
   console.log(login)
  //.then(response => response.json()) 
  //    .then(message => setLogininfo(message["content"].logininfo))
      
    //  .then(message => setLogininfo(message.logininfo)
    //  response(content)==='login success' ? console.log("heyyyyy") : console.log("no hey")
     
  
  console.log(login)
   if(login['content']==='login success')  
   {
     console.log("hellohello")
   }
    //  if(response==='True') {
    //   setIsSubmitting1(true)
    //  }
    //  else{console.log("not signed it")} 
     
    //  const isLogged = message;
    //  <div>
    //  { isLogged? (
    //    setIsSubmitting1(true)
    //  ) : (console.log("not logged in"))}
     
    //  setIsSubmitting1(true);
    //  </div>
    setIsSubmitting1(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting1) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange1, handleSubmit1, values, errors };
};

export default UseLoginform;