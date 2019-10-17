import React from "react";

class Products extends React.Component{
    render(){
        return(  <div className="site__body">
  <div className="page-header">
    <div className="page-header__container container">
      <div className="page-header__breadcrumb">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item"><a href="#">Breadcrumb</a> <svg className="breadcrumb-arrow" width="6px" height="9px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9" />
              </svg></li>
            <li className="breadcrumb-item active" aria-current="page">Screwdrivers</li>
          </ol>
        </nav>
      </div>
      <div className="page-header__title">
        <h1>Screwdrivers</h1>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="block">
          <div className="products-view">
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
            <div className="products-view__list products-list" data-layout="grid-4-full" data-with-features="false">
              <div className="products-list__body">
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__badges-list">
                      <div className="product-card__badge product-card__badge--new">New</div>
                    </div>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-1.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Electric
                          Planer Brandix KL370090G 300 Watts</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">9 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$749.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__badges-list">
                      <div className="product-card__badge product-card__badge--hot">Hot</div>
                    </div>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-2.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Undefined
                          Tool IRadix DPS3000SY 2700 Watts</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">11 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$1,019.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-3.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Drill
                          Screwdriver Brandix ALX7054 200 Watts</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">9 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$850.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__badges-list">
                      <div className="product-card__badge product-card__badge--sale">Sale
                      </div>
                    </div>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-4.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Drill Series
                          3 Brandix KSR4590PQS 1500 Watts</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">7 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices"><span className="product-card__new-price">$949.00</span> <span className="product-card__old-price">$1189.00</span></div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-5.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix
                          Router Power Tool 2017ERXPK</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">9 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$1,700.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-6.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix
                          Drilling Machine DM2019KW4 4kW</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">7 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$3,199.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-7.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix
                          Pliers</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">4 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$24.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-8.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Water Hose
                          40cm</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">4 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$15.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-9.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Spanner
                          Wrench</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">9 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$19.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-10.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Water Tap</a>
                      </div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">11 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$15.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-11.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Hand Tool
                          Kit</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">9 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$149.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-12.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Ash's
                          Chainsaw 3.5kW</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">11 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$666.99</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-13.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix Angle
                          Grinder KZX3890PQW</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">4 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$649.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-14.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix Air
                          Compressor DELTAKX500</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">7 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$1,800.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-15.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix
                          Electric Jigsaw JIG7000BQ</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">4 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$290.00</div>
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
                <div className="products-list__item">
                  <div className="product-card"><button className="product-card__quickview" type="button"><svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#quickview-16" />
                      </svg> <span className="fake-svg-icon" /></button>
                    <div className="product-card__image"><a href="product.html"><img src="images/products/product-16.jpg" alt /></a></div>
                    <div className="product-card__info">
                      <div className="product-card__name"><a href="product.html">Brandix
                          Screwdriver SCREW1500ACC</a></div>
                      <div className="product-card__rating">
                        <div className="rating">
                          <div className="rating__body"><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div><svg className="rating__star rating__star--active" width="13px" height="12px">
                              <g className="rating__fill">
                                <use xlinkHref="images/sprite.svg#star-normal">
                                </use>
                              </g>
                              <g className="rating__stroke">
                                <use xlinkHref="images/sprite.svg#star-normal-stroke">
                                </use>
                              </g>
                            </svg>
                            <div className="rating__star rating__star--only-edge rating__star--active">
                              <div className="rating__fill">
                                <div className="fake-svg-icon" />
                              </div>
                              <div className="rating__stroke">
                                <div className="fake-svg-icon" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="product-card__rating-legend">11 Reviews</div>
                      </div>
                      <ul className="product-card__features-list">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                    </div>
                    <div className="product-card__actions">
                      <div className="product-card__availability">Availability: <span className="text-success">In Stock</span></div>
                      <div className="product-card__prices">$1,499.00</div>
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
              </div>
            </div>
            <div className="products-view__pagination">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled"><a className="page-link page-link--with-arrow" href="#" aria-label="Previous"><svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" width="8px" height="13px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13" />
                    </svg></a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item active"><a className="page-link" href="#">2 <span className="sr-only">(current)</span></a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link page-link--with-arrow" href="#" aria-label="Next"><svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" width="8px" height="13px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-right-8x13" />
                    </svg></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
    }
}
export default Products;