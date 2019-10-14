import React from "react"
export default class MobilMenu extends React.Component{
    render(){
        return(
            <div>   
              {/* quickview-modal */}
  <div id="quickview-modal" className="modal fade" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content" />
    </div>
  </div>{/* quickview-modal / end */}
  {/* mobilemenu */}
  <div className="mobilemenu">
    <div className="mobilemenu__backdrop" />
    <div className="mobilemenu__body">
      <div className="mobilemenu__header">
        <div className="mobilemenu__title">Menu</div><button type="button" className="mobilemenu__close"><svg width="20px" height="20px">
            <use xlinkHref="images/sprite.svg#cross-20" />
          </svg></button>
      </div>
      <div className="mobilemenu__content">
        <ul className="mobile-links mobile-links--level--0" data-collapse data-collapse-opened-class="mobile-links__item--open">
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a href="index.html" className="mobile-links__item-link">Home</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="index.html" className="mobile-links__item-link">Home 1</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="index-2.html" className="mobile-links__item-link">Home 2</a></div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Categories</a>
              <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Power Tools</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                      </svg></button></div>
                  <div className="mobile-links__item-sub-links" data-collapse-content>
                    <ul className="mobile-links mobile-links--level--2">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Engravers</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Wrenches</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Wall Chaser</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Pneumatic Tools</a></div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Machine Tools</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                      </svg></button></div>
                  <div className="mobile-links__item-sub-links" data-collapse-content>
                    <ul className="mobile-links mobile-links--level--2">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Thread Cutting</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Chip Blowers</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Sharpening Machines</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Pipe Cutters</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Slotting machines</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Lathes</a></div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">Shop Grid</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                      </svg></button></div>
                  <div className="mobile-links__item-sub-links" data-collapse-content>
                    <ul className="mobile-links mobile-links--level--2">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="shop-grid-3-columns-sidebar.html" className="mobile-links__item-link">3 Columns Sidebar</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="shop-grid-4-columns-full.html" className="mobile-links__item-link">4 Columns Full</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="shop-grid-5-columns-full.html" className="mobile-links__item-link">5 Columns Full</a></div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="shop-list.html" className="mobile-links__item-link">Shop List</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="shop-right-sidebar.html" className="mobile-links__item-link">Shop Right Sidebar</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="product.html" className="mobile-links__item-link">Product</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                      </svg></button></div>
                  <div className="mobile-links__item-sub-links" data-collapse-content>
                    <ul className="mobile-links mobile-links--level--2">
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="product.html" className="mobile-links__item-link">Product</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="product-alt.html" className="mobile-links__item-link">Product Alt</a></div>
                      </li>
                      <li className="mobile-links__item" data-collapse-item>
                        <div className="mobile-links__item-title"><a href="product-sidebar.html" className="mobile-links__item-link">Product Sidebar</a></div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="cart.html" className="mobile-links__item-link">Cart</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="checkout.html" className="mobile-links__item-link">Checkout</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="wishlist.html" className="mobile-links__item-link">Wishlist</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="compare.html" className="mobile-links__item-link">Compare</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="account.html" className="mobile-links__item-link">My Account</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="track-order.html" className="mobile-links__item-link">Track Order</a></div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a href="blog-classic.html" className="mobile-links__item-link">Blog</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="blog-classic.html" className="mobile-links__item-link">Blog Classic</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="blog-grid.html" className="mobile-links__item-link">Blog Grid</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="blog-list.html" className="mobile-links__item-link">Blog List</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="blog-left-sidebar.html" className="mobile-links__item-link">Blog Left Sidebar</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="post.html" className="mobile-links__item-link">Post Page</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="post-without-sidebar.html" className="mobile-links__item-link">Post Without Sidebar</a></div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Pages</a>
              <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="about-us.html" className="mobile-links__item-link">About Us</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="contact-us.html" className="mobile-links__item-link">Contact Us</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="contact-us-alt.html" className="mobile-links__item-link">Contact Us Alt</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="404.html" className="mobile-links__item-link">404</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="terms-and-conditions.html" className="mobile-links__item-link">Terms And Conditions</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="faq.html" className="mobile-links__item-link">FAQ</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="components.html" className="mobile-links__item-link">Components</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="typography.html" className="mobile-links__item-link">Typography</a></div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a data-collapse-trigger className="mobile-links__item-link">Currency</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">€
                      Euro</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">£
                      Pound Sterling</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">$
                      US Dollar</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">₽
                      Russian Ruble</a></div>
                </li>
              </ul>
            </div>
          </li>
          <li className="mobile-links__item" data-collapse-item>
            <div className="mobile-links__item-title"><a data-collapse-trigger className="mobile-links__item-link">Language</a> <button className="mobile-links__item-toggle" type="button" data-collapse-trigger><svg className="mobile-links__item-arrow" width="12px" height="7px">
                  <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                </svg></button></div>
            <div className="mobile-links__item-sub-links" data-collapse-content>
              <ul className="mobile-links mobile-links--level--1">
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">English</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">French</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">German</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Russian</a></div>
                </li>
                <li className="mobile-links__item" data-collapse-item>
                  <div className="mobile-links__item-title"><a href="#" className="mobile-links__item-link">Italian</a></div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  {/* mobilemenu / end */}
  </div>
        )
    }
}