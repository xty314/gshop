import React from "react";

export default class HeaderDepartmentItem extends React.Component{
    render(){
        return   ( <div>          {this.props.categories.map(function(a){
          return(        <li className="departments__item"><a href="#">Power Tools <svg className="departments__link-arrow" width="6px" height="9px">
          <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9">
          </use>
        </svg></a>
      <div className="departments__megamenu departments__megamenu--xl">
        {/* .megamenu */}
        <div className="megamenu megamenu--departments" style={{backgroundImage: 'url("images/megamenu/megamenu-1.jpg")'}}>
          <div className="row">
            <div className="col-3">
              <ul className="megamenu__links megamenu__links--level--0">
                <li className="megamenu__item megamenu__item--with-submenu">
                  <a href="#">Power Tools</a>
                  <ul className="megamenu__links megamenu__links--level--1">
                    <li className="megamenu__item"><a href="#">Engravers</a></li>
                    <li className="megamenu__item"><a href="#">Drills</a></li>
                    <li className="megamenu__item"><a href="#">Wrenches</a></li>
                    <li className="megamenu__item"><a href="#">Plumbing</a></li>
                    <li className="megamenu__item"><a href="#">Wall Chaser</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Pneumatic Tools</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Milling Cutters</a>
                    </li>
                  </ul>
                </li>
                <li className="megamenu__item"><a href="#">Workbenches</a></li>
                <li className="megamenu__item"><a href="#">Presses</a></li>
                <li className="megamenu__item"><a href="#">Spray
                    Guns</a></li>
                <li className="megamenu__item"><a href="#">Riveters</a></li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="megamenu__links megamenu__links--level--0">
                <li className="megamenu__item megamenu__item--with-submenu">
                  <a href="#">Hand Tools</a>
                  <ul className="megamenu__links megamenu__links--level--1">
                    <li className="megamenu__item"><a href="#">Screwdrivers</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Handsaws</a></li>
                    <li className="megamenu__item"><a href="#">Knives</a></li>
                    <li className="megamenu__item"><a href="#">Axes</a></li>
                    <li className="megamenu__item"><a href="#">Multitools</a></li>
                    <li className="megamenu__item"><a href="#">Paint Tools</a>
                    </li>
                  </ul>
                </li>
                <li className="megamenu__item megamenu__item--with-submenu">
                  <a href="#">Garden Equipment</a>
                  <ul className="megamenu__links megamenu__links--level--1">
                    <li className="megamenu__item"><a href="#">Motor Pumps</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Chainsaws</a></li>
                    <li className="megamenu__item"><a href="#">Electric Saws</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Brush Cutters</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="megamenu__links megamenu__links--level--0">
                <li className="megamenu__item megamenu__item--with-submenu">
                  <a href="#">Machine Tools</a>
                  <ul className="megamenu__links megamenu__links--level--1">
                    <li className="megamenu__item"><a href="#">Thread Cutting</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Chip Blowers</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Sharpening
                        Machines</a></li>
                    <li className="megamenu__item"><a href="#">Pipe Cutters</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Slotting
                        machines</a></li>
                    <li className="megamenu__item"><a href="#">Lathes</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="megamenu__links megamenu__links--level--0">
                <li className="megamenu__item megamenu__item--with-submenu">
                  <a href="#">Instruments</a>
                  <ul className="megamenu__links megamenu__links--level--1">
                    <li className="megamenu__item"><a href="#">Welding
                        Equipment</a></li>
                    <li className="megamenu__item"><a href="#">Power Tools</a>
                    </li>
                    <li className="megamenu__item"><a href="#">Hand Tools</a></li>
                    <li className="megamenu__item"><a href="#">Measuring Tool</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* .megamenu / end */}
      </div>
    </li>)
         
        })
        }</div>


        
        )
    }
}
