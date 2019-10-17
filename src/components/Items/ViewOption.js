import React from 'react';
class ViewOption extends React.Component{


    render(){
        return(
<div className="products-view__options">
  <div className="view-options">
    <div className="view-options__layout">
      <div className="layout-switcher">
        <div className="layout-switcher__list"><button data-layout="grid-4-full" data-with-features="false" title="Grid" type="button" className="layout-switcher__button layout-switcher__button--active"><svg width="16px" height="16px">
              <use xlinkHref="images/sprite.svg#layout-grid-16x16" />
            </svg></button> <button data-layout="grid-4-full" data-with-features="true" title="Grid With Features" type="button" className="layout-switcher__button"><svg width="16px" height="16px">
              <use xlinkHref="images/sprite.svg#layout-grid-with-details-16x16">
              </use>
            </svg></button> <button data-layout="list" data-with-features="false" title="List" type="button" className="layout-switcher__button"><svg width="16px" height="16px">
              <use xlinkHref="images/sprite.svg#layout-list-16x16" />
            </svg></button></div>
      </div>
    </div>
    <div className="view-options__legend">Showing 6 of 98 products</div>
    <div className="view-options__divider" />
    <div className="view-options__control"><label htmlFor>Sort By</label>
      <div><select className="form-control form-control-sm" name id>
          <option value>Default</option>
          <option value>Name (A-Z)</option>
        </select></div>
    </div>
    <div className="view-options__control"><label htmlFor>Show</label>
      <div><select className="form-control form-control-sm" name id>
          <option value>12</option>
          <option value>24</option>
        </select></div>
    </div>
  </div>
</div>

        )
    }
}