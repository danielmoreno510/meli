import ProductListPage from "./ProductListPage";
import { StoreService } from "../../state/StoreService.js";

export const mapStateToProps = (state) => ({
  productList: state.products.productList,
  isFetchingProductList: state.products.isFetchingProductList,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//   };
// };

const ProductListPageContainer = StoreService.connect(
  mapStateToProps,
  // mapDispatchToProps
)(ProductListPage);
export default ProductListPageContainer;
