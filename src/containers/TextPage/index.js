
import React from 'react';
import Layout from '../../components/Layout';
import { injectIntl } from 'react-intl';
import './TextPage.scss';

const TextPage = ({ intl }) => {
    return (
        <Layout>
            <div className="row">
                <div className="col-md-6">
                    <h4>Texts</h4>
                    <p>{intl.formatMessage({ id: 'TEXT' })}</p>
                </div>
            </div>
        </Layout>
    )
}
export default injectIntl(TextPage)