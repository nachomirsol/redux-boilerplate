import React from 'react';
/*Librarys*/
import PropTypes from "prop-types";
/* Components */
import Icons from "./Icons";
import './overallInfoWidgetContent.scss';

const OverallInfoWidgetContent = ({ data, icons, minRange, maxRange, highlighted }) => (
    <div className="overallInfoWidgetContent overallInfoWidgetContent__alarms-container">

        <div className="total-alarms">
            <span className="high-severity-alarm">3</span>
            <span>-</span>
            <span className="mid-severity-alarm">2</span>
        </div>

        <div className="alarm-range">
            <span>{minRange}</span>
            <span>{minRange ? "-" : ""}</span>
            <span>{maxRange}</span>
        </div>

        <div className="warning-icons">
            {
                icons.map((icon, index) => (
                    <div className="icon-item" key={index}>
                        <Icons iconName={icon.name} />
                        <span className="icon-text">{icon.text}</span>
                    </div>
                ))
            }
        </div>
    </div>
)

OverallInfoWidgetContent.propTypes = {
    data: PropTypes.array.isRequired,
    highlighted: PropTypes.bool.isRequired,
    icons: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        text: PropTypes.string
    }))
}
export default OverallInfoWidgetContent;