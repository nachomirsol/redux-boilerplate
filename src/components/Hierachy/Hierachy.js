import React from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";
/**Styles */
import './hierachy.scss';

const Hierachy = ({ data, intl }) => {

    const showHierachy = (data) => {

        return data.map((item) => {
            if (item.children) {
                return (
                    <ul key={item.id}>
                        <li key={item.id}>
                            <input type="checkbox" />
                            <span>{item.label}</span>
                            {showHierachy(item.children)}
                        </li>
                    </ul>);
            }
            return (
                <li key={item.id}>
                    <span>{item.label}</span>
                </li>
            )

        })
    }

    return (
        <div className="hierachy">
            <ul>
                {showHierachy(data ? data.children : [])}
            </ul>
        </div>
    )
}

Hierachy.propTypes = {
    intl: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default injectIntl(Hierachy);