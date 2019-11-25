import React from 'react';

/**Styles */
import "./statusLegend.scss";

const StatusLegend = () => {
    return (
        <div className="status__legend">
            <ul>
                <li>
                    <span>1</span>
                    <span>Critical</span>
                    <span className="color red"></span>
                </li>
                <li>
                    <span>2</span>
                    <span>Warning</span>
                    <span className="color yellow"></span>
                </li>
                <li>
                    <span>3</span>
                    <span>Normal</span>
                    <span className="color green"></span>
                </li>
            </ul>
        </div>
    )
}

export default StatusLegend;