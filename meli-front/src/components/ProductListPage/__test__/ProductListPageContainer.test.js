import { mapDispatchToProps, mapStateToProps  } from "../ProductListPageContainer";

describe("Header container mapStateToProps() tests", () => {
  const mockState = {
    products: {productList: ["test", "test"], isFetchingProductList: false},
  };

  it("should return needed props", () => {
    const props = {productList: ["test", "test"], isFetchingProductList: false};

    expect(mapStateToProps(mockState)).toEqual(props);
  });

  it("THEN fetchProductList action should be called", () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).getProductList();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: "FETCH_PRODUCT_LIST" });
  });

  it("THEN fetchProduct action should be called", () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).getProduct();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: "FETCH_PRODUCT" });
  });
});
