import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import LocalsToggle from './LocalesToggle';

const Layout: FC = ({ children }) => {
    return (
        <div>
            <Helmet></Helmet>
            <header>
                <LocalsToggle />
            </header>
            <div>{children}</div>
        </div>
    );
};

export default Layout;
