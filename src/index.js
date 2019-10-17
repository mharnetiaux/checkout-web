import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import productsStore from './state/store/products';
import Products from './components/Checkout';

render(
    <Provider store={ productsStore }>
        <Products />
    </Provider>,
    document.getElementById('cart'));

