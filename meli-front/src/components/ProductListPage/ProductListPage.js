import React, {useEffect} from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "query-string";
import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/currencyUtils";
import WithLoadingIndicator from "../WithLoading";
import "./styles.scss";

export const ProductList = ({ productList, getProduct }) => {
  const history = useHistory();

  return productList ? (
    productList.map((product) => (
      <div
        key={product.id}
        className="result-product"
        data-testid="result-product"
      >
        <div>
          <img
            className="result-image"
            src={product.picture}
            alt={product.title}
            onClick={() => {
              history.push(`/items/${product.id}`);
              getProduct(product.id);
            }}
            data-testid="result-image"
          />
        </div>
        <div className="container-result">
          <h1 className="result-title">{product.title}</h1>
          <div className="content-result">
            <div className="result-amount">
              {formatCurrency(product.price.currency, product.price.amount)}
            </div>
            <div>{product.city_name}</div>
          </div>
          <div className="result-condition">{product.condition}</div>
        </div>
      </div>
    ))
  ) : (
    <div></div>
  );
};
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
  }, [value.search]);

  return (
    <ProductsWithLoadingIndicator
      productList={productList}
      isFetching={isFetchingProductList}
      getProduct={getProduct}
    />
  );
};

ProductListPage.propTypes = {
  productList: PropTypes.array,
};

export default ProductListPage;
