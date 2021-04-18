import React from "react";
import { shallow } from "enzyme";

import Product from "../Product";

describe("ProductPage component", () => {
  const testProps = {
    product: {
      id: "MLA916044386",
      thumbnail: "image.png",
      title: "iPhone 11 64 Gb Blanco",
      price: { currency: "ARS", amount: "123456" },
    },
  };
  describe("WHEN the Product component is render", () => {
    const wrapper = shallow(<Product {...testProps} />);

    it("THEN should display Product component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
