import React from "react";
import PropTypes from 'prop-types';
import "./spinner.scss";

const Spinner = ({message, size}) => {
  return (
    <div className="spinner">
      <div className={`spinner_three-bounce ${size ? 'spinner_three-bounce--'+size : '' }`}>
        {[...Array(3)].map((_, idx) => (
          <div key={idx} />
        ))}
      </div>
      {message && <div className="spinner_message">{message}</div>}
    </div>
  );
};

Spinner.propTypes = {
    message: PropTypes.string,
    size: PropTypes.string,
};

export default Spinner;
