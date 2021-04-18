import React from "react";
import { shallow } from "enzyme";

import ProductPage from "../ProductPage";

jest.mock("react-router-dom", () => {
  return {
    useLocation: jest.fn().mockReturnValue({ pathname: "/" }),
    useHistory: () => ({
      push: jest.fn(),
    }),
  };
});

describe("ProductPage component", () => {
  const testProps = {
    isFetchingProduct: false,
    product: {
      id: "MLA916044386",
      thumbnail: "image.png",
      title: "iPhone 11 64 Gb Blanco",
      price: { currency: "ARS", amount: "123456" },
    },
    getProduct: jest.fn(),
  };

  describe("WHEN the ProductPage component is render", () => {
    const wrapper = shallow(<ProductPage {...testProps} />);

    it("THEN should display ProductPage component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    const product = wrapper
      .find("ComponentWithLoadingIndicator")
      .dive()
      .find("Product");

    it("THEN should exist the ProductPage component", () => {
      expect(product.exists()).toBeTruthy();
    });
  });
});
