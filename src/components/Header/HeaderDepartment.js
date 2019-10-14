import React from "react";
import HeadedDepartmentItem from "./HeaderDepartmentItem";
import axios from "axios";
const host="https://localhost:44349/api/category";

export default class HeaderDepartment extends React.Component{
  
  state={
categories:[]
  }
  componentDidMount(){
    let d=[];
      const _this=this;
      axios.get(host)
      .then(function (res) {
      
        
        let temp=[];
          for( var i in res.data){
            if(temp.indexOf(res.data[i].cat)===-1){
              temp.push(res.data[i].cat)
            }
          }
        
          let temp2=[];
          for( var k in res.data){
            if(temp2.indexOf(res.data[k].cat+","+res.data[k].sCat)===-1){
              temp2.push(res.data[k].cat+","+res.data[k].sCat)
            }
          }
  
            let result=[];
          for(var i in temp){
            let tempo={};
            tempo["name"]=temp[i];
            let templist=[];
            for(var j in temp2){
              let tempo2={};
              let a=temp2[j].split(',');
    
              
              if(a[0]==temp[i]){
                tempo2["name"]=a[1];
                let templist2=[];
                for(var k in res.data){ 
               
                                 
                  if((res.data[k].cat+","+res.data[k].sCat)==temp2[j]){
                if(templist2.indexOf(res.data[k].ssCat)==-1){
                  templist2.push(res.data[k].ssCat)
                }
                    
                   
                  }
                }
       
                
                tempo2["sub"]=templist2;
               
              }
             
              if(JSON.stringify(tempo2)!=="{}"){
                templist.push(tempo2)
              }
              
            }
            tempo["sub"]=templist;
            result.push(tempo)
          }


console.log(result);

          return result         
      })
      .then(function (res) {
        d=res;
   
      _this.setState(
        { categories:d}
       )
    
      })
      .catch(function (error) {
          console.log(error);
      })
  
  }
  
    render(){
      


     

        return   ( 
          <div className="nav-panel__departments">
          {/* .departments */}
        
          <div className="departments departments--opened departments--fixed" data-departments-fixed-by=".block-slideshow">
            <div className="departments__body">
              <div className="departments__links-wrapper">
                <ul className="departments__links">
            
                <HeadedDepartmentItem categories={this.state.categories} dd="ddd"></HeadedDepartmentItem>
        
                <li className="departments__item"><a href="#">Power Machinery</a></li>
                 </ul>
              </div>
            </div>
            <button className="departments__button">
            <svg className="departments__button-icon" width="18px" height="14px">
                <use xlinkHref="images/sprite.svg#menu-18x14" />
            </svg> 
            Shop By Category 
            <svg className="departments__button-arrow" width="9px" height="6px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-down-9x6" />
            </svg>
              </button>
          </div>
          {/* .departments / end */}
        </div>
     
        )
    }
}
