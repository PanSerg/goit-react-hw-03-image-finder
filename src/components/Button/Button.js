import React from "react";
import PropTypes from 'prop-types';
import './Button.styled.css'

export const Btn = ({ addPages }) => {
    return <button className="Button" onClick={addPages}>Load more</button>
};

Btn.propTypes = {
    addPages: PropTypes.func.isRequired
}