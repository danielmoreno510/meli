import React from "react";
import { shallow } from "enzyme";

import ProductPage, { Product } from "../ProductPage";

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
      price: "123456",
      currency_id: "ARS",
    },
    getProduct: jest.fn()
  };

  describe("WHEN the ProductPage component is render", () => {
    const wrapper = shallow(<ProductPage {...testProps} />);

    it("THEN should display ProductPage component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    const product = wrapper.find("ComponentWithLoadingIndicator").dive().find("Product")

    it("THEN should exist the ProductPage component", () => {
      expect(product.exists()).toBeTruthy();
    });
  });

  describe("WHEN the Product component is render", () => {
    const wrapper = shallow(<Product {...testProps} />);

    it("THEN should display Product component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
