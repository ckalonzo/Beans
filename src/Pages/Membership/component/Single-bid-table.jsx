import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, totalBids } from "../../Redux/Store/actions/cartActions";
import "../Css/single-pricing-cards.scss";
import { Link } from "react-router-dom";

class SingleBid extends Component {
  handleClick = (id, counter, numOfBids) => {
    this.props.addToCart(id, counter, numOfBids);

    console.log(id);
    console.log("counter" + counter);
    console.log("numofbids" + numOfBids);
  };

  render() {
    let itemList = this.props.items.items.map(item => {
      return (
        <div className="col-md-4 mb-3 " key={item.id}>
          <div className="card-width colorch-btn" id="hover4">
            <a
              href="#"
              onClick={() => {
                this.handleClick(
                  item.id,
                  this.props.counter,
                  this.props.totalBids
                );
              }}
            >
              <div className="card-body text-center">
                <h2 className="card-title">
                  {item.numOfBids}
                  {item.title}
                </h2>
                <h3 className="card-subtitle mb-2 text-muted">
                  Price: ${item.price}
                </h3>
                <p className="card-text">{item.desc}</p>
                <button type="button" className="btn btn-success">
                  Buy Now
                </button>
              </div>
            </a>
          </div>
        </div>
      );
    });

    return (
      <section className="sp-sectioncolor mt-5 ">
        <div className="container  mt-3">
          <div className="row ">
            <div className="col-12 mx-auto mb-5">
              <h1 className="sb-title">individual Bids </h1>
            </div>
          </div>
          <div className="card-group">{itemList}</div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    items: state.cartReducer,
    counter: state.counterReducer,
    numOfBids: state.cartReducer.items.numOfBids
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, counter, numOfBids) => {
      dispatch(addToCart(id, counter, numOfBids));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleBid);
