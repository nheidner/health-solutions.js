import React, { FC, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import LocalsToggle from './LocalesToggle';
import '../../styles/all.sass';
import '@fortawesome/fontawesome-free/css/all.css';
import Link from '../Link';
import { useLocation } from '@reach/router';
import usePath from '../../utils/usePath';
import useLocales from '../../utils/useLocales';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout: FC<{ pageTitle: string }> = ({ children }) => {
    const { locales, primary: primaryLocale } = useLocales();
    const { pathname } = useLocation();
    const { locale: currentLocale, pathWithoutLocale } = usePath(
        pathname,
        locales,
        primaryLocale
    );

    // AOS
    useEffect(() => {
        AOS.init({ once: true, disable: window.innerWidth < 768 });
    });

    // smooth-scroll
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]');
    }

    const [showScrollToTop, setShowScrollToTop] = useState(false);
    const [showNavbarShadow, setShowNavbarShadow] = useState(false);

    // scroll position
    useScrollPosition(
        ({ currPos }) => {
            const isShowScrollToTop = currPos.y < -200;
            if (isShowScrollToTop !== showScrollToTop)
                setShowScrollToTop(isShowScrollToTop);

            const isShowNavbarShadow = currPos.y < 0;
            if (isShowNavbarShadow !== showNavbarShadow)
                setShowNavbarShadow(isShowNavbarShadow);
        },
        [showScrollToTop, showNavbarShadow],
        undefined,
        undefined
    );

    return (
        <div className='pt-6' id='top'>
            <Helmet></Helmet>
            <Link className='to-top-button' to='#top'>
                <span />
            </Link>
            <Header
                currentLocale={currentLocale}
                showNavbarShadow={showNavbarShadow}
            />
            <div>{children}</div>
            <Footer currentLocale={currentLocale} />
        </div>
    );
};

export default Layout;
