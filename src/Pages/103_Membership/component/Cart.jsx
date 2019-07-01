import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../../Redux/Store/actions/cartActions";
import Recipe from "./Recipe";
import "../Css/cart.css";

class Cart extends Component {
  //to remove the item completely
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };

  render() {
    let addedItems = this.props.items.addedItems.length ? (
      this.props.items.addedItems.map(item => {
        return (
          <tr key={item.id}>
            <td>
              <figure class="media">
                <div class="img-wrap">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="img-thumbnail img-sm"
                  />
                </div>
                <figcaption class="media-body">
                  <h6 class="title text-truncate">{item.title} </h6>
                  <dl class="dlist-inline small">
                    <dt>Description: </dt>
                    <dd>{item.desc}</dd>
                  </dl>
                </figcaption>
              </figure>
            </td>
            <td>
              <p>
                <b>Quantity: {item.quantity}</b>
              </p>
              <div className="add-remove">
                <Link to="/103_Membership/component/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/103_Membership/component/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    arrow_drop_down
                  </i>
                </Link>
              </div>
            </td>
            <td>
              <div class="price-wrap">
                <var class="price">${item.price}</var>
                <small class="text-muted">(${item.price} each)</small>
              </div>
            </td>
            <td class="text-right">
              <a
                href=""
                onClick={() => {
                  this.handleRemove(item.id);
                }}
                class="btn btn-outline-danger btn-round"
              >
                {" "}
                × Remove
              </a>
            </td>
          </tr>
        );
      })
    ) : (
      <p>Nothing.</p>
    );
    return (
      <div className="container">
        <div className="cart">
          <header className="header">
            <div className="header-contents">
              <Link to="/" className="back-button">
                &lt; Back to shop
              </Link>
            </div>
          </header>
          <h5>You have ordered:</h5>

          <div class="card">
            <table class="table table-hover shopping-cart-wrap">
              <thead class="text-muted">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col" width="120">
                    Quantity
                  </th>
                  <th scope="col" width="120">
                    Price
                  </th>
                  <th scope="col" width="200" class="text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>{addedItems}</tbody>
            </table>
          </div>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.items
  };
};
const mapDispatchToProps = dispatch => {
  return {
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
