import React from "react";
import { shallow } from "enzyme";

import ProductListPage, { ProductList } from "../ProductListPage";

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

  describe("WHEN the ProductList component is render", () => {
    const wrapper = shallow(<ProductList {...testProps} />);

    it("THEN should display ProductList component", () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe("WHEN the Image is pressed", () => {
      it(`THEN push location should be called /items/${testProps.productList[0].id}`, () => {
        wrapper.find(`[data-testid="result-image"]`).simulate("click");
        expect(mockHistoryPush).toHaveBeenCalledWith(
          `/items/${testProps.productList[0].id}`
        );
      });
    });
  });

  describe("WHEN the ProductList component is render without props", () => {
    const wrapper = shallow(<ProductList />);

    it("THEN should display ProductList component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
