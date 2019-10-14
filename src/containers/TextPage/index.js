import React from 'react';

import { injectIntl } from 'react-intl';
import './TextPage.scss';

// This case we use the layout in the route instead of the component directly
const TextPage = ({ intl }) => {
    return (
        <div className="grid-container">
            <div className="element">
                <h4>Text 1</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
            <div className="element">
                <h4>Text 2</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
            <div className="element">
                <h4>Text 3</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
            <div className="element">
                <h4>Text 4</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
            <div className="element">
                <h4>Text 5</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
            <div className="element">
                <h4>Text 6</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
        </div>
    )
}
export default injectIntl(TextPage)