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
// @ts-ignore
import modalBackgroundImg from '../../assets/modal-background.png';

const Layout: FC<{ pageTitle: string }> = ({ children, pageTitle }) => {
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
    console.log(pageTitle);
    return (
        <div className='pt-6' id='top'>
            <Helmet>
                <link rel='preload' href={modalBackgroundImg} as='image' />
                <title>{pageTitle}</title>
                <meta name='description' content='' />
                <meta http-equiv='language' content={currentLocale}></meta>
                <link
                    rel='apple-touch-icon'
                    sizes='57x57'
                    href='/favicons/apple-icon-57x57.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='60x60'
                    href='/favicons/apple-icon-60x60.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='72x72'
                    href='/favicons/apple-icon-72x72.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='76x76'
                    href='/favicons/apple-icon-76x76.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='114x114'
                    href='/favicons/apple-icon-114x114.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='120x120'
                    href='/favicons/apple-icon-120x120.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='144x144'
                    href='/favicons/apple-icon-144x144.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='152x152'
                    href='/favicons/apple-icon-152x152.png'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/favicons/apple-icon-180x180.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='192x192'
                    href='/favicons/android-icon-192x192.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicons/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='96x96'
                    href='/favicons/favicon-96x96.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicons/favicon-16x16.png'
                />
                <link rel='manifest' href='/manifest.json' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta
                    name='msapplication-TileImage'
                    content='/ms-icon-144x144.png'
                />
                <meta name='theme-color' content='#ffffff' />
            </Helmet>
            <Link className='to-top-button' to='#top' sameSite>
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
