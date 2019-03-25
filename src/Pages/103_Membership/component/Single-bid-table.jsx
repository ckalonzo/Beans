import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../Redux/Store/actions/cartActions'
import "../Css/single-pricing-cards.css";


class SingleBid extends Component {

    handleClick = (id) => {
        this.props.addToCart(id);
        console.log(id);
    }


    render() {
        let itemList = this.props.items.items.map(item => {
            return (
                <div class="row justify-content-center" key={item.id}>
                    <div class="col-3 mx-auto mb-3">
                        <div class="card-width colorch-btn" id="hover4">
                            <a href="#" onClick={() => { this.handleClick(item.id) }} >
                                <div class="card-body text-center">
                                    <h2 class="card-title">{item.title}</h2>
                                    <h3 class="card-subtitle mb-2 text-muted">Price: ${item.price}</h3>
                                    <p class="card-text">{item.desc}</p>
                                    <button type="button" class="btn btn-success">Buy Now</button>

                                </div>
                            </a>

                        </div>
                    </div>
                </div>

            )
        })

        return (
            <section className="sp-sectioncolor mt-5 " >
                <div className="container  mt-3">
                    <div className="row ">
                        <div className="mx-auto mb-5">
                            <h1 className="sb-title">individual Bids </h1>
                        </div>
                    </div>
                    {itemList}
                </div>
            </section >
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        items: state.items
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBid)



