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

const StatusIndicator = ({ iconAssets, hierarchy }) => {

    const iconsSelected = () => {
        return iconAssets.filter(item => {
            const element = searchHierarchyItem(hierarchy, item.dmaId);
            if (element && element.checked && item.selected) {
                return element;
            }
            return null;
        })
    }

    const calculateNumberOfAssetsWithAlerts = (status) => {
        let assets = iconsSelected();
        assets = assets.filter(item => item.selected && item.state === status)
        return assets.length;
    }

    const defineAlertLevel = () => {
        const numberOfAssetsWithAlerts = calculateNumberOfAssetsWithAlerts('critical');

        if (numberOfAssetsWithAlerts === 0) {
            return 'normal';
        } else if (numberOfAssetsWithAlerts === 1) {
            return 'warning';
        } else {
            return 'critical';
        }
    }

    return (
        <div className="status__wrapper">
            <div className="status__content">
                <span className="status__text">{defineAlertLevel()}</span>
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
                    <span className={`pointer__bar ${defineAlertLevel()}`}></span>
                </div>
                <div className="status__info">
                    <span className="alerts"><Icon name="bell" /> {calculateNumberOfAssetsWithAlerts("critical")}</span>
                    <span className="warns"><Icon name="bell" />{calculateNumberOfAssetsWithAlerts("warning")}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    iconAssets: state.hierarchy.iconAssets,
    hierarchy: state.hierarchy.hierarchy
})

StatusIndicator.propTypes = {
    alarms: PropTypes.object
}

export default connect(mapStateToProps)(StatusIndicator);