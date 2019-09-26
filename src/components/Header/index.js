import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../utils/const';

import WithToggle from '../../containers/WithToggle';
import './Header.scss';

const Header = ({ title, toggle, toggleStatus }) => {
    return (
        <div className="header">
            <div className="link"><Link to='/'>{title}</Link></div>
            {toggleStatus ? <div className="link"><Link to={URL.posts}>POSTS</Link></div> : 'No put se'}
            <div className="link" onClick={toggle}>Toggle</div>
        </div>
    )
}

export default WithToggle(Header)