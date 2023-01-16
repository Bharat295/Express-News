// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom" 

import React, { Component } from 'react'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
        
         <Switch>
            <Route exact path="/"><News pageSize = "20" country = 'in' category = 'general'/></Route>   
            <Route path="/home"><News pageSize = "20" country = 'in' category = 'general'/></Route>   
            <Route path="/entertainment"><News pageSize = "20" country = 'in' category = 'entertainment'/></Route>   
            <Route path="/business"><News pageSize = "20" country = 'in' category = 'business'/></Route>   
            <Route path="/health"><News pageSize = "20" country = 'in' category = 'health'/></Route>   
            <Route path="/science"><News pageSize = "20" country = 'in' category = 'science'/></Route>   
            <Route path="/sports"><News pageSize = "20" country = 'in' category = 'sports'/></Route>   
            <Route path="/technology"><News pageSize = "20" country = 'in' category = 'technology'/></Route>   
              
         </Switch>
        
        </Router>
      </div> 
    )
  }
}
