import { mapDispatchToProps, mapStateToProps } from "../HeaderContainer";

describe("Header container mapStateToProps() and mapDispatchToProps() tests", () => {
  const mockState = {};

  it("should return needed props", () => {
    const props = {};

    expect(mapStateToProps(mockState)).toEqual(props);
  });
  it('should roll the dice again when button is clicked', () => {
    const dispatch = jest.fn();

    // For the `mapDispatchToProps`, call it directly but pass in
    // a mock function and check the arguments passed in are as expected
    mapDispatchToProps(dispatch).getProductList();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'FETCH_PRODUCT_LIST'});
});
});
