import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import WithLoadingIndicator from "../WithLoading";
import Product from "./Product"
import "./styles.scss";

const ProductWithLoadingIndicator = WithLoadingIndicator(Product);

const ProductPage = ({ selectedProduct, product, isFetchingProduct, getProduct }) => {
  const { pathname } = useLocation();
  const id = pathname.replace("/items/", "");

  useEffect(() => {
    !selectedProduct && getProduct(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, getProduct]);

  return (
    <ProductWithLoadingIndicator
      product={product}
      isFetching={isFetchingProduct || !product.id}
    />
  );
};

ProductPage.propTypes = {
  selectedProduct: PropTypes.bool,
  product: PropTypes.object,
  isFetchingProduct: PropTypes.bool,
  getProduct: PropTypes.func
};

export default ProductPage;
