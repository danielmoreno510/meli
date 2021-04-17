import productsReducer, { initialState } from "../productsReducer";
import {
  fetchProductList,
  putProductList,
  fetchProduct,
  putProduct,
} from "../../actions/productsActions";

describe("Products reducer", () => {
  describe("GIVEN the initial state", () => {
    describe("WHEN initialized", () => {
      it("THEN returns the initial state", () => {
        expect(productsReducer(undefined, {})).toEqual(initialState);
      });
    });

    describe("WHEN the fetchProductList action is dispatched", () => {
      it("THEN should return the correct state", () => {
        expect(productsReducer(initialState, fetchProductList())).toEqual({
          ...initialState,
          breadcrumbs: [],
          hasSearch: true,
          product: {},
          isFetchingProduct: false,
          isFetchingProductList: true,
        });
      });
    });

    describe("WHEN the putProductList action is dispatched", () => {
      it("THEN should return the correct state", () => {
        expect(
          productsReducer(
            initialState,
            putProductList({
              categories: ["test"],
              items: [],
            })
          )
        ).toEqual({
          ...initialState,
          breadcrumbs: ["test"],
          product: {},
          isFetchingProduct: false,
          isFetchingProductList: false,
        });
      });
    });

    describe("WHEN the fetchProduct action is dispatched", () => {
      it("THEN should return the correct state", () => {
        expect(productsReducer(initialState, fetchProduct())).toEqual({
          ...initialState,
          breadcrumbs: [],
          selectedProduct: true,
          product: {},
          isFetchingProduct: true,
          isFetchingProductList: false,
        });
      });
    });

    describe("WHEN the putProduct action is dispatched", () => {
      it("THEN should return the correct state", () => {
        expect(
          productsReducer(
            initialState,
            putProduct({ item: {}})
          )
        ).toEqual({
          ...initialState,
          breadcrumbs: [],
          product: {},
          isFetchingProduct: false,
          isFetchingProductList: false,
        });
      });
    });
  });
});
