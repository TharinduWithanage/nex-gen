import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import CreateInterestRateComponent from './components/CreateInterestRateComponent';
import Sidebar from './components/Sidebar';
import test from './components/test';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className='web_page'>
        <Router>
              <HeaderComponent />
              
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/add-interest-details/:id" component = {CreateInterestRateComponent}></Route>
                          <Route path = "/view-interest-details/:id" component = {CreateInterestRateComponent}></Route>
                          <Route path = "/update-interest-details/:id" component = {UpdateEmployeeComponent}></Route>
                          <Route path = "/info" component = {test}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> 

                    </Switch>
                </div>
             
        </Router>
        </div>
        <FooterComponent />
    </div>
    
  );
}

export default App;
