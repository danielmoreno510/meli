import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import WithLoadingIndicator from "../WithLoading";
import { formatCurrency } from "../../utils/currencyUtils";
import "./styles.scss";

export const Product = ({ product }) => (
  <div>
    <div className="product-container">
      <img
        className="product-image"
        src={product.picture}
        alt={product.title}
      />
      <div className="product-section">
        <div className="product-condition">
          {product.condition} - {product.sold_quantity} vendidos
        </div>
        <h1 className="product-title">{product.title}</h1>
        <div className="product-amount">
          {formatCurrency(product.price.currency, product.price.amount)}
        </div>
        <div className="product-button">Comprar</div>
      </div>
    </div>
    <h2 className="product-description-title">Descripcion del producto</h2>
    <div className="product-description">{product.description}</div>
  </div>
);

const ProductWithLoadingIndicator = WithLoadingIndicator(Product);

const ProductPage = ({ product, isFetchingProduct, getProduct }) => {
  const { pathname } = useLocation();
  const id = pathname.replace("/items/", "");

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <ProductWithLoadingIndicator
      product={product}
      isFetching={isFetchingProduct || !product.id}
    />
  );
};

ProductPage.propTypes = {
  productList: PropTypes.array,
};

export default ProductPage;
