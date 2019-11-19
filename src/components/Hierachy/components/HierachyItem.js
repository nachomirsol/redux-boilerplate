import React from 'react';
/**Components */
// import Icon from '../../Icon';
/**Styles */
import './hierachyItem.scss';


const HierachyItem = ({ dataInfo, icon, style, onCheckItem, isChecked, id }) => {
    return (
        <div className={`${style}`}>
            <i className={`${icon}`} />
            <input type="checkbox" onChange={() => onCheckItem(dataInfo, id)} checked={isChecked} />
            <span>{dataInfo.label}</span>
        </div>
    )
}

export default HierachyItem