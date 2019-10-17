import '../styles/cart.less'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cart } from '../state/actions/cart';
import Payment from './Payment';
import Review from './Review';
import Success from './Success';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Checkout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Pass state etc ...
        const cart = this.props.cart();
        console.log(cart.items);
    }

    render() {
        return(
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/review">Review Cart</Link>
                        </li>
                        <li>
                            <Link to="/payment">Payment</Link>
                        </li>
                        <li>
                            <Link to="/success">Success</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/review">
                            <Review/>
                        </Route>
                        <Route path="/payment">
                            <Payment/>
                        </Route>
                        <Route path="/success">
                            <Success/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

Checkout.propTypes = {
    cart: PropTypes.func.isRequired
};

const mapStoreToProps = (store) => {
    return store;
};
const mapDispatchToProps = (dispatch) => {
    return {
        cart: () => dispatch(cart()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Checkout);
