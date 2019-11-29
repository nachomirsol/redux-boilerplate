import React from 'react';
/**Libraries */
import { injectIntl } from 'react-intl';
/**Styles */
import "./statusLegend.scss";

const StatusLegend = ({ intl }) => {
    return (
        <div className="status__legend">
            <ul>
                <li>
                    <span>1</span>
                    <span>{intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Critical" })}</span>
                    <span className="color red"></span>
                </li>
                <li>
                    <span>2</span>
                    <span>{intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Warning" })}</span>
                    <span className="color yellow"></span>
                </li>
                <li>
                    <span>3</span>
                    <span>{intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Normal" })}</span>
                    <span className="color green"></span>
                </li>
            </ul>
        </div>
    )
}

export default injectIntl(StatusLegend);