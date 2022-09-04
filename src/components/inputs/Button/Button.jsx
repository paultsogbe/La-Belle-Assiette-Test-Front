import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * input type=text component
 * @param {function} onClick
 * @param {JSX.ElementChildrenAttribute} children
 * @returns {JSX.Element}
 * @constructor
 */
function Button({onClick, children}) {
    return (<button class="primary-button" onClick={onClick}>{children}</button>);
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default Button;