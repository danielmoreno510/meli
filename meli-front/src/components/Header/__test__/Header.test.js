import React from "react";
import { shallow } from "enzyme";

import Header from "../Header";

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useLocation: jest
      .fn()
      .mockReturnValue({ pathname: "/items", search: "?search=iphone%2012" }),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  };
});

describe("Header component", () => {
  const testProps = {
    getProductList: jest.fn(),
  };

  describe("WHEN the component is render", () => {
    const wrapper = shallow(<Header {...testProps} />);

    it("THEN should display Header component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("WHEN the Button is pressed", () => {
    const wrapper = shallow(<Header {...testProps} />);

    it("THEN getProductList should be called", () => {
      wrapper.find(`[data-testid="search-button"]`).simulate("click");
      expect(testProps.getProductList).toBeCalledTimes(1);
    });
  });

  describe("WHEN the Image is pressed", () => {
    const wrapper = shallow(<Header {...testProps} />);

    it("THEN push location should be called /", () => {
      wrapper.find(`[data-testid="header-logo"]`).simulate("click");
      expect(mockHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
