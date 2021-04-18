import React from "react";
import { shallow } from "enzyme";

import ProductListPage from "../ProductListPage";

jest.mock("react-router-dom", () => {
  return {
    useLocation: jest
      .fn()
      .mockReturnValue({ pathname: "/items", search: "?search=iphone%2012" }),
  };
});

describe("ProductListPage component", () => {
  const testProps = {
    isFetchingProductList: false,
    productList: [
      {
        id: "MLA916044386",
        title: "iPhone 11 64 Gb Blanco",
        installments: { currency_id: "ARS" },
        price: { currency: "ARS", amount: "123456" },
        address: { city_name: "Mar de la plata" },
      },
    ],
    getProduct: jest.fn()
  };

  describe("WHEN the ProductListPage component is render", () => {
    const wrapper = shallow(<ProductListPage {...testProps} />);

    it("THEN should display ProductListPage component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    const productList = wrapper
      .find("ComponentWithLoadingIndicator")
      .dive()
      .find("ProductList");

    it("THEN should exist the productList component", () => {
      expect(productList.exists()).toBeTruthy();
    });
  });
});
