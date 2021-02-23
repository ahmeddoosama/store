import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Navbar from './components/navbar/Navbar';

//Import Components

class App extends Component {
  state = { 
    products: []
   };

   //Call Data from API
   async componentDidMount() {
     //Call Back-end
     const { data } = await axios.get("http://localhost:3000/ProductsDetails/")
    //  console.log(data)

    //Set State
    this.setState({products: data})
   }

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