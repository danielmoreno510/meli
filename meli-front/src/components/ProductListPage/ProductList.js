import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { formatCurrency } from "../../utils/currencyUtils";

const ProductList = ({ productList, getProduct }) => {
  const history = useHistory();
  const goToProduct = (product) => () => {
    history.push(`/items/${product.id}`);
    getProduct(product.id);
  };

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
            onClick={goToProduct(product)}
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
    <div />
  );
};

ProductList.propTypes = {
    productList: PropTypes.array,
    getProduct: PropTypes.func
  };

export default ProductList;
