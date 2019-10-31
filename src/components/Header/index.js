import React from 'react';
import WithToggle from '../../containers/WithToggle';
import { HeaderWrapper } from './Header';

const Header = ({ toggle, toggleStatus, title }) => {
    return (
        <HeaderWrapper bg="bgGray1">
            <div> Menú hambuerguesa</div>
            <div>GO-AIGUA</div>
            <div>Alarmas y tal</div>
        </HeaderWrapper>
    )
}

export default WithToggle(Header)