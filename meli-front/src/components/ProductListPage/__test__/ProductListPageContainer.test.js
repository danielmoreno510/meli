import { mapStateToProps } from "../ProductListPageContainer";

describe("Header container mapStateToProps() tests", () => {
  const mockState = {
    products: {productList: ["test", "test"], isFetchingProductList: false},
  };

  it("should return needed props", () => {
    const props = {productList: ["test", "test"], isFetchingProductList: false};

    expect(mapStateToProps(mockState)).toEqual(props);
  });
});
