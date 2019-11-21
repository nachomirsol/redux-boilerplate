import React, { useState, useEffect } from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";
/**Components */
import HierachyItem from './components/HierachyItem';
/**Styles */
import './hierachy.scss';

const Hierachy = ({ data, intl }) => {

    const [checkboxTree, setCheckboxTree] = useState([]);

    useEffect(() => {
        fillCheckboxTree(data.children);
    }, [])


    /** This function reproduces the hierachy list tree recived by API or by json file and adds 2 elements, checked and displayed .but it is not in the state yet */
    const createCheckboxTree = (hierachyList) => {
        return hierachyList.map((item) => {
            item = { ...item, checked: false, displayed: true }
            if (item.children && item.children.length) {
                item.children = createCheckboxTree(item.children);
            }
            return item;
        })
    }

    /** This function is to fill the react state with the createdCheckboxTree */
    const fillCheckboxTree = (hierachyList) => {
        const checkboxTree = createCheckboxTree(hierachyList);
        setCheckboxTree(checkboxTree);
    }

    /** This function search the id recursively over the hierachy tree and returns the item searched over the data we pass it by param*/
    const searchHierachyElement = (data, id) => {
        let itemChecked = data.find(item => item.id === id);
        if (!itemChecked) {
            const flattenArray = data.reduce((arr, item) => {
                return arr.concat(item.children);
            }, [])
            itemChecked = flattenArray.find(item => item.id === id);
            if (!itemChecked) {
                return searchHierachyElement(flattenArray);
            }
        }
        return itemChecked
    }

    const checkHierachyElement = (id) => {
        const nextState = [...checkboxTree];

        const itemChecked = searchHierachyElement(nextState, id);
        itemChecked.checked = !itemChecked.checked;
        if (itemChecked.children && itemChecked.children.length) {
            itemChecked.children = itemChecked.children.map(child => {
                child.checked = itemChecked.checked;
                return child;
            });
        }
        setCheckboxTree(nextState);
    }



    /** This function prints the hierachy tree in render */
    const showHierachyTree = (dataHierachy) => {

        return dataHierachy.map((item) => {

            if (!item.children.length) {
                return (
                    <li key={item.id}>
                        <HierachyItem
                            dataInfo={item}
                            icon={''}
                            style={'withoutChildren'}
                            onCheckItem={(id) => checkHierachyElement(id)}
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
                            onCheckItem={(id) => checkHierachyElement(id)}
                            id={item.id}
                            checked={item.checked}

                        />
                        {showHierachyTree(item.children)}
                    </ul>
                </li>

            );
        })
    }

    return (

        <div className="hierachy">
            <ul>
                {showHierachyTree(checkboxTree ? checkboxTree : [])}
            </ul>
        </div>
    )
}

Hierachy.propTypes = {
    intl: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
}

export default injectIntl(Hierachy);