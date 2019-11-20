import React, { useState, useEffect } from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";
/**Components */
import HierachyItem from './components/HierachyItem';
/**Styles */
import './hierachy.scss';

const Hierachy = ({ data, intl }) => {
    let checkboxesArray = [];

    const [itemChecked, setItemChecked] = useState([]);
    const [checkboxTree, setCheckboxTree] = useState([]);

    useEffect(() => {
        fillCheckboxTree(data.children);
    }, [])


    const fillCheckboxTree = (dataHierachy) => {
        const checkboxTree = createCheckboxTree(dataHierachy);
        setCheckboxTree(checkboxTree);
    }

    const createCheckboxTree = (dataHierachy) => {
        return dataHierachy.map((item) => {
            item = { ...item, checked: false }
            if (item.children && item.children.length) {
                item.children = createCheckboxTree(item.children);
            }
            return item;
        })
    }

    const checkItem = (data) => {
        debugger;
        Object.keys(data).forEach((item) => {
            if (item.children && item.children.length) {
                checkItem(item.children)
            } else {
                if (item.id === data.id) {
                    item.checked = !item.checked
                }
            }
        })
    }

    const showHierachy = (dataHierachy) => {

        return dataHierachy.map((item) => {

            if (!item.children.length) {
                return (
                    <li key={item.id}>
                        <HierachyItem
                            dataInfo={item}
                            icon={''}
                            style={'withoutChildren'}
                            onCheckItem={(data) => checkItem(data)}
                            id={item.id}
                            checked={item.checked}
                        />
                    </li>
                )
            }

            return (
                <li key={item.id}>
                    <ul>
                        <HierachyItem
                            dataInfo={item}
                            icon={'fa fa-chevron-down'}
                            style={'withChildren'}
                            onCheckItem={(data) => checkItem(data)}
                            id={item.id}
                            checked={item.checked}

                        />
                        {showHierachy(item.children)}
                    </ul>
                </li>

            );
        })
    }

    return (

        <div className="hierachy">
            <ul>
                {showHierachy(checkboxTree ? checkboxTree : [])}
            </ul>
        </div>
    )
}

Hierachy.propTypes = {
    intl: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default injectIntl(Hierachy);