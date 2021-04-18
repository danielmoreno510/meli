import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/currencyUtils";
import "./styles.scss";

const Product = ({ product }) => (
  <div className="product-container">
    <div className="product-content">
      <img
        className="product-image product-responsive"
        src={product.picture}
        alt={product.title}
      />
      <div className="product-section product-responsive">
        <div className="product-condition">
          {product.condition} - {product.sold_quantity} vendidos
        </div>
        <h1 className="product-title">{product.title}</h1>
        <div className="product-amount">
          {formatCurrency(product.price.currency, product.price.amount)}
        </div>
        <div className="product-button">
          <div className="product-button-content">Comprar</div>
          </div>
      </div>
    </div>
    <h2 className="product-description-title">Descripcion del producto</h2>
    <div className="product-description product-responsive">{product.description}</div>
  </div>
);

Product.propTypes = {
    product: PropTypes.object,
  };

  export default Product