import PropTypes from "prop-types";

import "./styles.scss";

const Breadcrumbs = ({ breadcrumbs }) =>
  breadcrumbs.length > 0 ? (
    <div className="breadcrumbs">
      {breadcrumbs.map((breadcrumb, index) => (
        <div className="breadcrumbContainer" key={breadcrumb}>
          <div>{breadcrumb}</div>
          {breadcrumbs.length - 1 !== index && (
            <div>&nbsp;&nbsp;&nbsp;&#62;</div>
          )}
        </div>
      ))}
    </div>
  ) : (
    <div />
  );

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.array,
};

export default Breadcrumbs;
