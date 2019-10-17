import '../styles/cart.less'
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { test } from '../state/actions/cart';


class Cart extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.test();
        console.log('mounted');
    }

    render() {
        return(
            <div>i'm here</div>
        )
    }
}

/*Cart.propTypes = {};*/

const mapStoreToProps = (store) => {
    return store;
};
const mapDispatchToProps = (dispatch) => {
    return {
        test: () => dispatch(test()),
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);
