import React,{ Component } from 'react';
import validate from './validatelogin';
import useForm from './UseLoginform';
import './Form.css';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';
import Aboutus from './Aboutus';

// import axios from "axios";

export default class Loginnew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loginErrors: "",
      logininfo:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) { console.log("empty string3333")
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) { console.log("empty string3333")
  
    const { username, password } = this.state;
    
    
    // axios
    //   .post(
    //     "http://localhost:3001/sessions",
    //     {
    //       user: {
    //         email: email,
    //         password: password
    //       }
    //     },
    //     { withCredentials: true }
    //   )
    //   .then(response => {
    //     if (response.data.logged_in) {
    //       this.props.handleSuccessfulAuth(response.data);
    //     }
    //   })
    //   .catch(error => {
    //     console.log("login error", error);
    //   });
    event.preventDefault();
    console.log("empty string4444")
    fetch('/api/login',{
        method: 'POST',
        body : JSON.stringify({
        content:{
                    username: username,
                    password: password
                  }
      }) ,headers: {
        "Content-type":"application/json; charset=UTF-8"
       
     }
     }).then(response => response.json())
       .then(message => console.log(message))
     
      //  console.log(this.state.logininfo)
  }
  

  render() {
    return (
        
        <div className='split right'>
         <div className='centered'>
             
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit"><Link to="/addtask">Log In</Link> </button>
        </form>
      </div>
      </div>
      </div>
      
    );
  }
}