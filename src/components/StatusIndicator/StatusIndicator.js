import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
/**Components */
import Icon from "components/Icon";
/**Services */
import { searchHierarchyItem } from 'services/hierachyService';
/**Styles */
import "./statusIndicator.scss";

const StatusIndicator = ({ iconAssets, hierarchy, intl }) => {

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
            return intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Normal" });
        } else if (numberOfAssetsWithAlerts === 1) {
            return intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Warning" });
        } else {
            return intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Critical" });
        }
    }

    return (
        <div className="status__wrapper">
            <div className="status__content">
                <span className="status__text">{defineAlertLevel()}</span>
                <ul className="status__indicator">
                    <li className={`normal ${defineAlertLevel() === intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Normal" }) ? 'highlighted' : ''}`}>
                        <span></span>
                    </li>
                    <li className={`warning ${defineAlertLevel() === intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Warning" }) ? 'highlighted' : ''}`}>
                        <span></span>
                    </li>
                    <li className={`critical ${defineAlertLevel() === intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Critical" }) ? 'highlighted' : ''}`}>
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

export default connect(mapStateToProps)(injectIntl(StatusIndicator));