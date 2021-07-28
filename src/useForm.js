import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const message = '';

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    fetch('/api/signup',{
     method: 'POST',
     body : JSON.stringify({
       content:values
     }) ,headers: {
       "Content-type":"application/json; charset=UTF-8"
      
    }
    }).then(response => response.json())
      .then(message => console.log(message))
      // if(message==='True') {
      //   setIsSubmitting(true)
      //  }
      //  else{console.log("not signed it")} 
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;