import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import { addToCart } from "../../../../Redux/Store/actions/cartActions";

class shoppingCartHeader extends Component {
  render() {
    const props = this.props;
    return (
      <Fragment>
        <li class="has_dropdown">
          <div class="icon_wrap">
            <span class="fas fa-shopping-cart"></span>
            <span class="notification_count purch">{props.counter}</span>
          </div>

          <div class="dropdown dropdown--cart">
            <div class="cart_area">
              <div class="cart_list">
                <div class="cart_product">
                  <div class="product__info">
                    <div class="thumbn">
                      <img src="img/capro1.jpg" alt="cart product thumbnail" />
                    </div>

                    <div class="info">
                      <a class="title" href="single-product.html">
                        Finance and Consulting Business Theme
                      </a>
                      <div class="cat">
                        <a href="#">
                          <img src="img/catword.png" alt="" />
                          Wordpress
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="product__action">
                    <a href="#">
                      <span class="icon-trash"></span>
                    </a>
                    <p>$60</p>
                  </div>
                </div>
                <div class="cart_product">
                  <div class="product__info">
                    <div class="thumbn">
                      <img src="img/capro2.jpg" alt="cart product thumbnail" />
                    </div>

                    <div class="info">
                      <a class="title" href="single-product.html">
                        Flounce - Multipurpose OpenCart Theme
                      </a>
                      <div class="cat">
                        <a href="#">
                          <img src="img/catword.png" alt="" />
                          Wordpress
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="product__action">
                    <a href="#">
                      <span class="icon-trash"></span>
                    </a>
                    <p>$60</p>
                  </div>
                </div>
              </div>
              <div class="total">
                <p>
                  <span>Total :</span>$80
                </p>
              </div>
              <div class="cart_action">
                <a class="btn btn-primary" href="cart.html">
                  View Cart
                </a>
                <a class="btn btn-secondary" href="checkout.html">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </li>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    counter: state.cart.counter,
    auth: state.firebase.auth,
    authError: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCartHeader);
