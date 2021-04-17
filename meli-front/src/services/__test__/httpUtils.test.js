import { handleHttpError } from "../httpUtils";

describe("httpUtils", () => {
  describe("handleHttpError", () => {
    it("Then the handleHttpError should be ('', '', '')", () => {
        handleHttpError("", "", "");
    });
  });
});
