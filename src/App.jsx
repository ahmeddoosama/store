import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { axios } from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';

//Import Components

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <React.Fragment>
        <ToastContainer />
        {/* Add Navbar */}
        <Navbar />
      </React.Fragment>
     );
  }
}
 
export default App;