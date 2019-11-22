import React from 'react';
/**Components */

/**Styles */
import './hierachyItem.scss';


const HierachyItem = ({ dataInfo, icon, style, onCheckItem, onDisplayChildren, id, checked }) => {
    return (

        <div className="hierarchy-item">
            {icon && <i className={`${icon}`} onClick={() => onDisplayChildren(id)} />}
            <input type="checkbox" onChange={() => onCheckItem(id)} checked={checked} />
            <span>{dataInfo.label}</span>
        </div>
    )
}

export default HierachyItem