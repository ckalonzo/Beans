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
              <figure className="media">
                <div className="img-wrap">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="img-thumbnail img-sm"
                  />
                </div>
                <figcaption className="media-body">
                  <h6 className="title text-truncate">{item.title} </h6>
                  <dl className="dlist-inline small">
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
                <Link to="/Membership/component/cart">
                  <i
                    className="material-icons"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    arrow_drop_up
                  </i>
                </Link>
                <Link to="/Membership/component/cart">
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
              <div className="price-wrap">
                <var className="price">${item.price}</var>
                <small className="text-muted">(${item.price} each)</small>
              </div>
            </td>
            <td className="text-right">
              <Link
                to=""
                onClick={() => {
                  this.handleRemove(item.id);
                }}
                className="btn btn-outline-danger btn-round"
              >
                {" "}
                × Remove
              </Link>
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
              <Link to="/Membership/Membership" className="back-button">
                &lt; Back to shop
              </Link>
            </div>
          </header>
          <h5>You have ordered:</h5>

          <div className="card">
            <table className="table table-hover shopping-cart-wrap">
              <thead className="text-muted">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col" width="120">
                    Quantity
                  </th>
                  <th scope="col" width="120">
                    Price
                  </th>
                  <th scope="col" width="200" className="text-right">
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
