import React from "react";
import { shallow } from "enzyme";

import HomePage from "../HomePage";

describe("HomePage component", () => {
  describe("WHEN the component is render", () => {
    const wrapper = shallow(<HomePage />);

    it("THEN should display HomePage component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
