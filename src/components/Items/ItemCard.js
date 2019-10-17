import React from 'react';
class ItemCard extends React.Component{


    render(){
        return(
      <div className="products-list__item">
  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
        <use xlinkHref="images/sprite.svg#quickview-16" />
      </svg> <span className="fake-svg-icon" /></button>
    {/* <div className="product-card__badges-list">
      <div className="product-card__badge product-card__badge--new">New</div>
    </div> */}
    <div className="product-card__image">
    <a href="product.html"><img src={this.props.imgurl} alt /></a>
    </div>
    <div className="product-card__info">
      <div className="product-card__name"><a href="product.html">{this.props.itemName}</a></div>
</div>
    <div className="product-card__actions">
      <div className="product-card__prices">{this.props.price}</div>
      <div className="product-card__buttons"><button className="btn btn-primary product-card__addtocart" type="button">Add To Cart</button> <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button">Add To Cart</button> <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button"><svg width="16px" height="16px">
            <use xlinkHref="images/sprite.svg#wishlist-16" />
          </svg> <span className="fake-svg-icon fake-svg-icon--wishlist-16" /></button>
        <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button"><svg width="16px" height="16px">
            <use xlinkHref="images/sprite.svg#compare-16" />
          </svg> <span className="fake-svg-icon fake-svg-icon--compare-16" /></button>
      </div>
    </div>
  </div>
</div>

        )
    }
}