import { readProducts, readProduct } from "../productsService";

describe("readProducts", () => {
  const search = "iphone 12";

  describe("WHEN is called", () => {
    it("THEN should send a patch request", async () => {
      const result = await readProducts(search);

      expect(result.items.length).toEqual(4);
    });
  });
});

describe("readProduct", () => {
    const id = "MLA916044386";
  
    describe("WHEN is called", () => {
      it("THEN should send a patch request", async () => {
        const result = await readProduct(id);
  
        expect(result.item.id).toEqual(id);
      });
    });
  });
