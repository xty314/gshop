import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MobileMenu from "./components/Menu/MobileMenu";
import Footer from "./components/Footer/Foot";
import Body from "./Body";
import Test from "./test/Test";

// const getNewList=()=>{
//   return axios.get(host)
//       .then( (response)=> d=response.data.data)
//       .catch(function (error) {
//           console.log(error);
//       })
//     }

function App() {
 
  return (
    <div className="App">


 
{/* <Test></Test> */}
     <Header></Header>

       {/* site__footer */}

  {/* site__footer / end */}

  </div>
  );
}
const list=[1,2];
export default App;
