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
            item = { ...item, checked: false, displayed: false }
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
        let itemFounded = data.find(item => item.id === id);
        if (!itemFounded) {
            const flattenArray = data.reduce((arr, item) => {
                return arr.concat(item.children);
            }, [])
            itemFounded = flattenArray.find(item => item.id === id);
            if (!itemFounded) {
                return searchHierachyElement(flattenArray);
            }
        }
        return itemFounded
    }

    /** This function is to change the checked status from the searched element, if it has children, all the children will be changed the checked status */
    const checkHierachyElement = (id) => {
        const stateClone = [...checkboxTree];

        const itemFounded = searchHierachyElement(stateClone, id);
        itemFounded.checked = !itemFounded.checked;

        if (itemFounded.children && itemFounded.children.length) {
            itemFounded.children = itemFounded.children.map(child => {
                child.checked = itemFounded.checked;
                return child;
            });
        }
        setCheckboxTree(stateClone);
    }

    /** This function is to change the displayed status from the searched element, if it has children, all the children will be changed the display status */
    const displayChildren = (id) => {
        const stateClone = [...checkboxTree];

        const itemsDisplayed = searchHierachyElement(stateClone, id);
        itemsDisplayed.displayed = !itemsDisplayed.displayed;

        if (itemsDisplayed.children && itemsDisplayed.children.length) {
            itemsDisplayed.children = itemsDisplayed.children.map(child => {
                child.displayed = !child.displayed;
                return child;
            })
        }
        setCheckboxTree(stateClone);
    }

    /** This function prints the hierachy tree in render */
    const showHierachyTree = (dataHierachy) => {

        return dataHierachy.map((item) => {

            if (!item.children.length) {
                return (
                    <li key={item.id} className={item.displayed === true ? `expanded` : ``}>
                        <HierachyItem
                            dataInfo={item}
                            onCheckItem={(id) => checkHierachyElement(id)}
                            id={item.id}
                            checked={item.checked}
                            onDisplayChildren={(id) => displayChildren(id)}
                            displayed={item.displayed}
                        />
                    </li>
                )
            }

            return (
                <li key={item.id}>
                    <HierachyItem
                        dataInfo={item}
                        icon={item.displayed === true ? `fa fa-chevron-right` : `fa fa-chevron-down`}
                        onCheckItem={(id) => checkHierachyElement(id)}
                        id={item.id}
                        checked={item.checked}
                        onDisplayChildren={(id) => displayChildren(id)}
                        displayed={item.displayed}
                    />
                    <ul>
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