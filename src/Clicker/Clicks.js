import React from "react";
import PropTypes from "prop-types";

const styles = {
  h1: {
    fontSize: "60px",
    outline: "none",
    userSelect: "none",
  },
};

function Clicks({ clicks, addClick }) {
  return (
    <h1 onClick={addClick} style={styles.h1}>
      {clicks}
    </h1>
  );
}

Clicks.propTypes = {
  clicks: PropTypes.number,
  addClick: PropTypes.func.isRequired,
};

export default Clicks;
