import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/currencyUtils";
import "./styles.scss";

const Product = ({ product }) => (
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

Product.propTypes = {
    product: PropTypes.object,
  };

  export default Product