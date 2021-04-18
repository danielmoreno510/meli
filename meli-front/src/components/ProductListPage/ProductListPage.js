import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import PropTypes from "prop-types";

import WithLoadingIndicator from "../WithLoading";
import ProductList from "./ProductList"
import "./styles.scss";

const ProductsWithLoadingIndicator = WithLoadingIndicator(ProductList);

const ProductListPage = ({
  hasSearch,
  productList,
  isFetchingProductList,
  getProductList,
  getProduct,
}) => {
  const location = useLocation();
  const value = queryString.parse(location.search);

  useEffect(() => {
    !hasSearch && getProductList(value.search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value.search, getProductList]);

  return (
    <ProductsWithLoadingIndicator
      productList={productList}
      isFetching={isFetchingProductList}
      getProduct={getProduct}
    />
  );
};

ProductListPage.propTypes = {
  hasSearch: PropTypes.bool,
  productList: PropTypes.array,
  isFetchingProductList: PropTypes.bool,
  getProductList: PropTypes.func,
  getProduct: PropTypes.func
};

export default ProductListPage;
