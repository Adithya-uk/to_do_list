import React from 'react';
import { BrowserRouter as Router,Link, Route, Switch } from "react-router-dom";
import './App.css';
import Form from './Form';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';
import AddTask from './AddTask'
import Aboutus from './Aboutus'
import Routes from './Routes'



function App() {
//  const App = () => {
  return (
  <div className="App">
    <Routes />
  </div>
  
  // <Aboutus />
  //  <Form />
  
  
  
  
  

  

  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import pages
// import Home from "./pages/Home";
// import About from "./pages/About";
// import SingleCocktail from "./pages/SingleCocktail";
// import Error from "./pages/Error";
// import components
// import Navbar from "./components/Navbar";
// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/about">
//           <About />
//         </Route>
//         <Route path="/cocktail/:id">
//           <SingleCocktail />
//         </Route>
//         <Route path="*">
//           <Error />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;