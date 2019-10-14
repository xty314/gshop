import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import MobileMenu from "./components/Menu/MobileMenu";
import Footer from "./components/Footer/Foot";
import Home from  "./pages/home";
// import Body from "./Body";
import Test from "./test/Test";
import { homedir } from 'os';

// const getNewList=()=>{
//   return axios.get(host)
//       .then( (response)=> d=response.data.data)
//       .catch(function (error) {
//           console.log(error);
//       })
//     }

function App() {
 
  return (
    <div className="site">


 
{/* <Test></Test> */}
     <Header></Header>
<Home></Home>
       {/* site__footer */}
<Footer></Footer>
  {/* site__footer / end */}

  </div>
  );
}
const list=[1,2];
export default App;
