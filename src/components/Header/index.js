import React from 'react';
import { Link } from 'react-router-dom';
import { URL } from '../../utils/const';

import WithToggle from '../../containers/WithToggle';
import './Header.scss';

const Header = ({ toggle, toggleStatus, title }) => {
    return (
        <div className="header">
            <div className="link"><Link to='/'>{title}</Link></div>
            {toggleStatus ? <div className="link"><Link to={URL.posts}>POSTS</Link></div> : <div className="link"><Link to={"/"}>TODO</Link></div>}
            <div className="link" onClick={toggle}>Toggle</div>
        </div>
    )
}

export default WithToggle(Header)