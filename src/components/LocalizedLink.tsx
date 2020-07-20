import useLocales from '../utils/useLocales';
import { useLocation } from '@reach/router';
import usePath from '../utils/usePath';
import React, { FC } from 'react';
import Link from './Link';

const LocalizedLink: FC<{ to: string; [props: string]: any }> = ({
    to,
    children,
    ...other
}) => {
    const { locales, primary: primaryLocale } = useLocales();
    const { pathname } = useLocation();
    const { locale: currentLocale } = usePath(pathname, locales, primaryLocale);

    const localizedLink = `${
        currentLocale === primaryLocale ? '' : '/' + currentLocale
    }${to}`;
    return (
        <Link to={localizedLink} {...other}>
            {children}
        </Link>
    );
};

export default LocalizedLink;
