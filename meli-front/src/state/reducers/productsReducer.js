import produce from "immer";

import {
  FETCH_PRODUCT_LIST,
  PUT_PRODUCT_LIST,
  FETCH_PRODUCT,
  PUT_PRODUCT,
} from "../actions/types";

export const initialState = {
  productList: [],
  breadcrumbs: [],
  isFetchingProductList: false,
  product: {},
  isFetchingProduct: false,
};

const productReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_PRODUCT_LIST:
        draft.productList = [];
        draft.isFetchingProductList = true;
        break;
      case PUT_PRODUCT_LIST:
        draft.breadcrumbs = action.productList.categories
        draft.productList = action.productList.items;
        draft.isFetchingProductList = false;
        break;
      case FETCH_PRODUCT:
        draft.product = {};
        draft.isFetchingProduct = true;
        break;
      case PUT_PRODUCT:
        draft.product = action.product.item;
        draft.isFetchingProduct = false;
        break;
      default:
        break;
    }
  });


  export default productReducer
