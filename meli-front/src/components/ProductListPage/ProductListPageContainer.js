import ProductListPage from "./ProductListPage";
import { fetchProduct, fetchProductList } from "../../state/actions";
import { StoreService } from "../../state/StoreService.js";

export const mapStateToProps = (state) => ({
  productList: state.products.productList,
  isFetchingProductList: state.products.isFetchingProductList,
  hasSearch: state.products.hasSearch
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: (search) => {
      dispatch(fetchProductList(search));
    },
    getProduct: (id) => {
      dispatch(fetchProduct(id));
    }
  };
};

const ProductListPageContainer = StoreService.connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListPage);
export default ProductListPageContainer;
