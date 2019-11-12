import React from "react";
import Icon from "components/Icon";
import PropTypes from 'prop-types';


const Icons = ({ gradient, iconName }) => {
    return (
        <span className={`icon-wrapper ${gradient ? 'gradient' : ''}`}>
            <Icon name={iconName} size="lg"></Icon>
        </span>
    );
};

Icons.propTypes = {
    gradient: PropTypes.bool,
    iconName: PropTypes.string.isRequired,
}

export default Icons;
