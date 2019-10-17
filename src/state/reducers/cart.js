import {
    TEST_PRODUCTS,
} from "../actions/types";

const initialState = [
    { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 },
    { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 },
    { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
    ];

export function cart(store = initialState, action) {
    switch (action.type) {
        case TEST_PRODUCTS:
            console.log(store);
            return store;
        default:
            return store;
    }
}
