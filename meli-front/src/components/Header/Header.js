import { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import logo from "../../assets/images/logo.png";
import magnifying_glass from "../../assets/images/magnifying_glass.png";
import "./styles.scss";

const Header = ({ getProductList }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");

  const goToHome = () => history.push(`/`);
  const goToProductList = () => {
    history.push(`/items?search=${search}`);
    getProductList(search);
  };

  return (
    <div className="header-container">
      <img
        className="header-logo"
        src={logo}
        alt="logo"
        data-testid="header-logo"
        onClick={goToHome}
      />
      <div className="header-form">
        <input
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          className="header-input"
          type="text"
          placeholder="Buscar productos, marcas y más…"
          data-testid="header-input"
        />
        <button
          data-testid="search-button"
          className="header-button"
          type="submit"
          onClick={goToProductList}
        >
          <img
            className="header-icon"
            src={magnifying_glass}
            alt="magnifying glass"
          />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  getProductList: PropTypes.func,
};

export default Header;
