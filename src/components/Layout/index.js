import React from 'react';
import Footer from '../Footer'
import Header from '../Header';
import './Layout.scss'

const Layout = ({ children }) => {
    return (
        <div className="page">
            <Header title="TITLE" />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )

}
export default Layout