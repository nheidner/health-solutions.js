import React, { FC, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LocalsToggle from './LocalesToggle';
import Link from '../Link';
// @ts-ignore
import logo from '../../assets/logo.svg';
import useLocales from '../../utils/useLocales';

interface MenuItem {
    item: {
        en: string;
        de: string;
        [locale: string]: string;
    };
    to: string;
    [menuItem: string]: any;
}

interface TData {
    site: {
        siteMetadata: {
            menu: MenuItem[];
        };
    };
}

const Header: FC<{ currentLocale: string; showNavbarShadow: boolean }> = ({
    currentLocale,
    showNavbarShadow,
}) => {
    const { primary: primaryLocale } = useLocales();

    const queryResult = useStaticQuery<TData>(
        graphql`
            query Header {
                site {
                    siteMetadata {
                        menu {
                            item {
                                en
                                de
                            }
                            to
                        }
                    }
                }
            }
        `
    );
    const [mobileMenuToggled, setMobileMenuToggled] = useState(false);
    const { menu: menuItems } = queryResult.site.siteMetadata;
    return (
        <nav
            className={`navbar is-fixed-top ${
                !mobileMenuToggled && showNavbarShadow ? 'has-shadow' : ''
            }`}>
            <div className='container'>
                <div className='navbar-brand px-5'>
                    <Link className='navbar-item' to='/'>
                        <img src={logo} style={{ width: '100px' }} />
                    </Link>
                    <Link
                        role='button'
                        className={`navbar-burger burger ${
                            mobileMenuToggled ? 'is-active' : ''
                        }`}
                        onClick={() =>
                            setMobileMenuToggled(!mobileMenuToggled)
                        }>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </Link>
                </div>
                <div
                    className={`navbar-menu ${
                        mobileMenuToggled ? 'is-active px-5' : 'mr-5'
                    }`}>
                    <div className='navbar-end is-uppercase'>
                        {menuItems.map((menuItem, index) => {
                            const to = primaryLocale
                                ? `${
                                      currentLocale === primaryLocale
                                          ? ''
                                          : '/' + currentLocale
                                  }${menuItem.to}`
                                : '';
                            return (
                                <Link
                                    key={index}
                                    className='navbar-item'
                                    to={to}>
                                    <div
                                        onClick={() =>
                                            setMobileMenuToggled(false)
                                        }>
                                        {menuItem.item[currentLocale]}
                                    </div>
                                </Link>
                            );
                        })}
                        <LocalsToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
