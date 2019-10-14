import React from 'react';


export default class HeaderBottomItem extends React.Component{
    render(){
        return(
            <li><a href="shop-grid-3-columns-sidebar.html">{this.props.name}<svg className="menu__arrow" width="6px" height="9px">
            {this.props.sub.length!==1?  <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>:null}
            
          </svg></a>
          {this.props.sub.length!==1?    
          <div className="menu__submenu">
          {/* .menu */}
          <ul className="menu menu--layout--classic">
          {this.props.sub.map((ss,i)=>{
              return(
                <li><a href="shop-grid-3-columns-sidebar.html">{ss.name}</a></li>
              )
          })}
          </ul>{/* .menu / end */}
        </div>:<div></div>}
    
      </li>
        )
    }
}