import React, { useState, useEffect } from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { injectIntl } from "react-intl";
/**Components */
import HierachyItem from './components/HierachyItem';
/**Styles */
import './hierachy.scss';

const Hierachy = ({ data, intl }) => {

    const [isChecked, setIsChecked] = useState([]);
    const [checkboxTree, setCheckboxTree] = useState([]);

    useEffect(() => {
        fillCheckboxTree(data.children);
    }, [])


    const fillCheckboxTree = (data) => {
        let checkboxesArray = [];
        data.forEach((item) => {
            if (!item.children.length > 0) {
                checkboxesArray.push(item)
            }
            checkboxesArray.push(item)
            fillCheckboxTree(item.children)
            console.log(checkboxesArray)
        })
        setCheckboxTree(checkboxTree.concat(...checkboxTree, checkboxesArray))
    }

    const selectHierachy = (info, id) => {
        alert(id)
        console.log(info)

        if (info.children.length > 0) {
            info.children.forEach((child) => {
                console.log(child)
                if (child.parentId === id) {
                    setIsChecked(!isChecked)
                }
            })
        }
    }

    const showHierachy = (data) => {

        return data.map((item) => {

            if (!item.children.length > 0) {

                return (
                    <li key={item.id}>
                        <HierachyItem
                            dataInfo={item}
                            icon={''}
                            style={'withoutChildren'}
                            onCheckItem={(info, id) => selectHierachy(info, id)}
                            isChecked={isChecked}
                            id={item.id}

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
                            onCheckItem={(info, id) => selectHierachy(info, id)}
                            isChecked={isChecked}
                            id={item.id}

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