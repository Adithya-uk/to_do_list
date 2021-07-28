import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { AppProvider } from './context';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
<React.StrictMode>
    <AppProvider>
  <Router>
    
    <App />
    </Router>
    </AppProvider>
    </React.StrictMode>,
  document.getElementById('root')
);

