import React from 'react'

import loading from "../../assets/images/loading.gif";
import "./styles.scss";

const withLoadingIndicator = (WrappedComponent) =>
  function ComponentWithLoadingIndicator ({ isFetching, ...props }) {
    if (isFetching) {
      return (
        <div className="loading"><img src={loading} alt="loading"/></div>
      )
    }
    return <WrappedComponent {...props} />
  }

export default withLoadingIndicator