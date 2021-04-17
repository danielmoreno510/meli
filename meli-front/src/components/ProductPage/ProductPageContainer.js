import ProductPage from "./ProductPage";
import { fetchProduct } from "../../state/actions";
import { StoreService } from "../../state/StoreService.js";

export const mapStateToProps = (state) => ({
  selectedProduct: state.products.selectedProduct,
  product: state.products.product,
  isFetchingProduct: state.products.isFetchingProduct
});
export const mapDispatchToProps = (dispatch) => {
  return {
    getProduct: (id) => {
      dispatch(fetchProduct(id));
    }
  };
};
const ProductPageContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPage);
export default ProductPageContainer;
