import React, { Fragment, Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Navbar.scss";
import { connect } from "react-redux";
import {
  addToCart,
  removeItem,
  addQuantity,
  subtractQuantity
} from "../../../../Redux/Store/actions/cartActions";

class shoppingCartHeader extends Component {
  render() {
    let addedItems = this.props.items.addedItems.length ? (
      this.props.items.addedItems.map(item => {
        return (
          <div key={item.id} class="cart_product">
            <div class="product__info">
              <div class="thumbn">
                <img
                  src={item.img}
                  alt={item.img}
                  className="img-thumbnail img-sm"
                />
              </div>

              <div class="info">
                <h6 className="ta-brand-blue">{item.title}</h6>
                <div class="cat">
                  <p className="ta-brand-blue">
                    <b>Quantity: {item.quantity}</b>
                  </p>
                </div>
              </div>
            </div>

            <div class="product__action">
              <Link
                to="#"
                onClick={() => {
                  this.handleRemove(item.id);
                }}
                className="btn btn-outline-danger btn-round"
              >
                <span class="fas fa-trash-alt"></span>
              </Link>

              <p>{item.price}</p>
            </div>
          </div>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    const props = this.props;
    return (
      <Fragment>
        <li className="has_dropdown">
          <div className="icon_wrap">
            <span className="fas fa-shopping-cart"></span>
            <span className="notification_count purch">{props.counter}</span>
          </div>

          <div className="dropdown dropdown--cart">
            <div className="cart_area">
              <div className="cart_list">{addedItems}</div>
              <div className="total">
                <p>
                  <span className="ta-brand-blue">Total :</span>$
                  {this.props.total.toFixed(2)}
                </p>
              </div>
              <div className="cart_action">
                <Link
                  className="btn btn-primary"
                  to="/Membership/component/cart"
                >
                  View Cart
                </Link>
                <Link className="btn btn-secondary" to="checkout.html">
                  Checkout
                </Link>
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
    authError: state.auth,
    items: state.items,
    total: state.items.total
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    },
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(shoppingCartHeader);
