
import React from 'react';

import { injectIntl } from 'react-intl';
import './TextPage.scss';

// This case we use the layout in the route instead of the component directly
const TextPage = ({ intl }) => {
    return (
        <div className="row">
            <div className="col-md-6">
                <h4>Texts</h4>
                <p>{intl.formatMessage({ id: 'TEXT' })}</p>
            </div>
        </div>
    )
}
export default injectIntl(TextPage)