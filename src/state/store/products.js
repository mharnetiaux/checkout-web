import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import cart from '../reducers/index';

const productsStore = createStore(
    cart,
    applyMiddleware((thunk)));

export default productsStore;
