import React from "react";

export default class HeaderDepartmentItem extends React.Component{
  constructor(props){
    super(props);
  }


    render(){
        return   (  
      
            <li className="departments__item"><a href="#">Categories
            <svg className="departments__link-arrow" width="6px" height="9px">
            <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9">
            </use>
          </svg></a>
        <div className="departments__megamenu departments__megamenu--xl">
          {/* .megamenu */}
          <div className="megamenu megamenu--departments" style={{
          background:"white"}}>
            <div className="row">
   
            {this.props.categories.map((category,i)=>{
              
              return (   
                <div className= {category.sub.length===1?null:"col-3"}>
                {category.sub.length===1?null:     
                  
                <ul className="megamenu__links megamenu__links--level--0">
                  <li className="megamenu__item megamenu__item--with-submenu">
                    <a href="#">{category.name}</a>
                    <ul className="megamenu__links megamenu__links--level--1">
                
                    {category.sub.length===1? <li className="megamenu__item"><a href="#">{category.sub[0].name}</a></li>: category.sub.map((subcategory)=>{
                      return(  <li className="megamenu__item"><a href="#">{subcategory.name}</a></li>)
                    })}            
                    </ul>
                  </li>
             
                </ul>
            }  
          
              </div>)
            })}
            </div>
          </div>
          {/* .megamenu / end */}
        </div>
          {/* <li className="megamenu__item"><a href="#">Workbenches</a></li>
                  <li className="megamenu__item"><a href="#">Presses</a></li>
                  <li className="megamenu__item"><a href="#">Spray
                      Guns</a></li>
                  <li className="megamenu__item"><a href="#">Riveters</a></li> */}
      </li>
   
      


        
        )
    }
}
