import React from "react";
import PropTypes from 'prop-types';

export const Btn = ({ addPages }) => {
    return <button className="Button" onClick={addPages}>Load more</button>
};

Btn.propTypes = {
    addPages: PropTypes.func.isRequired
}