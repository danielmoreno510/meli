import {FETCH_PRODUCT_LIST, PUT_PRODUCT_LIST, FETCH_PRODUCT, PUT_PRODUCT } from './types'

export const fetchProductList = (search) => ({
    type: FETCH_PRODUCT_LIST,
    search
})

export const putProductList = (productList) => ({
    type: PUT_PRODUCT_LIST,
    productList
})

export const fetchProduct = (id) => ({
  type: FETCH_PRODUCT,
  id,
});

export const putProduct = (product) => ({
  type: PUT_PRODUCT,
  product,
});
