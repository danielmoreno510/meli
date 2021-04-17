import { mapStateToProps } from "../BreadcrumbsContainer";

describe("Header container mapStateToProps() tests", () => {
  const mockState = {
    products: {breadcrumbs: ["test", "test"]},
  };

  it("should return needed props", () => {
    const props = {breadcrumbs: ["test", "test"]};

    expect(mapStateToProps(mockState)).toEqual(props);
  });
});
