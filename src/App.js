import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Foot";
import Home from  "./pages/home";
import Products from "./pages/products";
import { BrowserRouter as Router, Route,Link,Switch } from "react-router-dom";



function App() {
 
  return (
    
    <div className="site">

     <Header></Header>
     <Link to={'/test?c=3'}  key='dd' className="ddd">ddd</Link>
     <Switch>
      <Route exact path='/' component={Home}/>
      {/* <Route path='/test' component={Products}/> */}
      <Route path='/test' component={Products}/>
    </Switch>

    <Footer></Footer>
  </div>
 
  );
}

export default App;
