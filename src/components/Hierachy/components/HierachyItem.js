import React from 'react';
/**Components */
// import Icon from '../../Icon';
/**Styles */
import './hierachyItem.scss';


const HierachyItem = ({ dataInfo, icon, style, onCheckItem, id, checked }) => {
    return (
        <div className={`${style}`}>
            <i className={`${icon}`} />
            <input type="checkbox" onChange={() => onCheckItem(id, dataInfo)} checked={checked} />
            <span>{dataInfo.label}</span>
        </div>
    )
}

export default HierachyItem