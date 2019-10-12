import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../Redux/Store/actions/cartActions";
import "../Css/single-pricing-cards.scss";

class SingleBid extends Component {
  handleClick = (id, counter) => {
    this.props.addToCart(id, counter);
    console.log(id);
    console.log("counter" + counter);
  };

  render() {
    let itemList = this.props.items.items.map(item => {
      return (
        <div className="col-md-4 mb-3 " key={item.id}>
          <div className="card-width colorch-btn" id="hover4">
            <a
              href="#"
              onClick={() => {
                this.handleClick(item.id, this.props.counter);
              }}
            >
              <div className="card-body text-center">
                <h2 className="card-title">{item.title}</h2>
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
    items: state.items,
    counter: state.counter.counter
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addToCart: (id, counter) => {
      dispatch(addToCart(id, counter));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBid);
