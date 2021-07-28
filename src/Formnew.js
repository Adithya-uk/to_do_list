import React,{ Component } from 'react';
import validate from './validatelogin';
import useForm from './useLoginform';
import './Form.css';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import AddTask from './AddTask';
import Aboutus from './Aboutus';
import Loginnew from './Loginnew';


export default class Formnew extends Component {
    constructor(props) {
      super(props);
  
      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }
  
    handleSuccessfulAuth(data) {
      this.props.handleLogin(data);
    }
  
   
  
    render() {
      return (
        <div>
          
          
          <Loginnew handleSuccessfulAuth={this.handleSuccessfulAuth} />
        </div>
      );
    }
  }