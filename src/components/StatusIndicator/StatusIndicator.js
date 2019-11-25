import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Components */
import Icon from "components/Icon";
/**Styles */
import "./statusIndicator.scss";

const StatusIndicator = ({ alarms, status }) => {
    return (
        <div class="status__wrapper">
            <div className="status__content">
                <span className="status__text">Normal</span>
                <ul class="status__indicator">
                    <li className="ok highlighted">
                        <span></span>
                    </li>
                    <li className="warning">
                        <span></span>
                    </li>
                    <li className="critical">
                        <span></span>
                    </li>

                </ul>
                <div className="status__pointer">
                    <span className="pointer__circle">.</span>
                    <span className="pointer__bar"></span>
                </div>
                <div className="status__info">
                    <span className="alerts"><Icon name="bell" /> 3</span>
                    <span className="warns"><Icon name="bell" />10</span>
                </div>
            </div>
        </div>
    )
}

StatusIndicator.propTypes = {
    alarms: PropTypes.object
}

export default StatusIndicator;