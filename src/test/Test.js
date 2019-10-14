import  React  from "react";
import TestChild from "./TestChild"
import axios from "axios";

import style from "./test.css";

const host="http://farroapi.gpos.co.nz:800/api/branches";


class Test extends React.Component{
state={
    m:1,
    json:[],
    select:null
}

render(){
    let d=[];
    const _this=this;
    
axios.get(host)
.then(function (res) {
    d=res.data;

    _this.setState({
        json:d
    })
 
    
})
.catch(function (error) {
    console.log(error);
})


return(
    <div>
    <select value={this.state.select}
    onChange={(e)=>this.setState({
        select:e.target.value,
        m:parseInt(e.target.value)
    })}>
      {
          this.state.json.map(function(i,b){
              
              return(<option value={b}>{i.name}</option>)
          })
      }  
      </select>  
<div className="test">{this.state.m}</div>
<button onClick={()=>this.setState({
    m:this.state.m+1,
    select:this.state.m%7
})

}><TestChild gg={this.state.m}></TestChild></button>

            <div>{this.props.goubi}</div>
              
            </div>
        )
    }

}
export default Test;


