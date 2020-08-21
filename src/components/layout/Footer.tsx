import React, { FC, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LocalsToggle from './LocalesToggle';
import Link from '../Link';
// @ts-ignore
import logo from '../../assets/logo.svg';
import useLocales from '../../utils/useLocales';
import isHash from '../../utils/isHash';

export const FooterTemplate: FC = () => {
    return (
        <footer className='footer has-background-dark-blue has-text-white'>
            <div className='container'>
                <div className='columns'>
                    <div className='column'>
                        <Link className='logo' to='/'>
                            <img src={logo} style={{ width: '100px' }} />
                        </Link>
                    </div>
                    <div className='column footer-menu'>
                        <ul>
                            <li>
                                <Link to='/'>About us</Link>
                            </li>
                            <li>
                                <Link to='/'>Contact</Link>
                            </li>
                            <li>
                                <Link to='/'>Terms and Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='copyright'>© Health Solutions 2020</div>
            </div>
        </footer>
    );
};

const Footer: FC = () => {
    return <FooterTemplate />;
};

export default Footer;
