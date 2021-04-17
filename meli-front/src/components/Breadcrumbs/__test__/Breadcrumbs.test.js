import React from "react";
import { shallow } from "enzyme";

import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs component", () => {
  const testProps = (breadcrumbs) => ({
    breadcrumbs,
  })

  describe("WHEN the Breadcrumbs component is render", () => {
    const wrapper = shallow(<Breadcrumbs {...testProps(["test", "test"])} />);

    it("THEN should display Breadcrumbs component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("WHEN the Breadcrumbs component is render without props", () => {
    const wrapper = shallow(<Breadcrumbs {...testProps([])} />);

    it("THEN should display Breadcrumbs component", () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
