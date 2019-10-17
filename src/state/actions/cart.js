import {
    CART,
} from "../actions/types";

export function cart() {
    return {
        type: CART,
        items: "Product name ..."
    }
}
