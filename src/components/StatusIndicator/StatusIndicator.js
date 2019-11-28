import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
import { connect } from 'react-redux';
/**Components */
import Icon from "components/Icon";
/**Services */
import { searchHierarchyItem } from 'services/hierachyService';
/**Styles */
import "./statusIndicator.scss";
import Hierarchy from 'components/Hierarchy';

const StatusIndicator = ({ iconAssets }) => {

    const calculateNumberOfAssetsWithAlerts = (data) => {
        let assets = [...data];
        assets = assets.filter(item => item.selected && item.state === "critical")
        return assets.length;
    }

    return (
        <div className="status__wrapper">
            <div className="status__content">
                <span className="status__text">Normal</span>
                <ul className="status__indicator">
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
                    <span className="alerts"><Icon name="bell" /> {calculateNumberOfAssetsWithAlerts(iconAssets)}</span>
                    <span className="warns"><Icon name="bell" />10</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    iconAssets: state.hierarchy.iconAssets
})

StatusIndicator.propTypes = {
    alarms: PropTypes.object
}

export default connect(mapStateToProps)(StatusIndicator);