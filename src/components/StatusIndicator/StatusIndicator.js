import React from 'react';
import "./statusIndicator.scss";

const StatusIndicator = ({ alarms }) => {
    return (
        <div class="status">
            <ul class="status__indicator">
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
                <li>
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default StatusIndicator;