import React from 'react';
import {Link} from 'react-router-dom';


export default class HeaderBottomItem extends React.Component{
    render(){
        return(
            <li><Link to={'/test?cat='+this.props.name}  key='dd' className="ddd">{this.props.name}<svg className="menu__arrow" width="6px" height="9px">
            {this.props.sub.length!==1?  <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>:null}
            
          </svg></Link>
          {this.props.sub.length!==1?    
          <div className="menu__submenu">
          {/* .menu */}
          <ul className="menu menu--layout--classic">
          {this.props.sub.map((ss,i)=>{
              return(
                <li> <Link to={'/test?cat='+this.props.name+"&scat="+ss.name}  key='dd' className="ddd">{ss.name}</Link></li>
              )
          })}
          </ul>{/* .menu / end */}
        </div>:<div></div>}
    
      </li>
        )
    }
}