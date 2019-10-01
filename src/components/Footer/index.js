import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from '../LanguageSelector'
import './Footer.scss';

const Footer = ({ title }) => {
    return (
        <div className="footer">
            <div className="link"><Link to='/'>{title}</Link></div>
            <LanguageSelector />

        </div>
    )
}

export default Footer