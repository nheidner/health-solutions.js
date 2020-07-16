import React, { ReactNode, ReactElement, FC } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { css } from '@emotion/core';
import isHash from '../utils/isHash';

const Link: FC<{
    children?: ReactNode;
    to?: string;
    className?: string;
    [otherParams: string]: any;
}> = ({ children, to, ...other }) => {
    // This example assumes that any internal link (intended for Gatsby)
    // will start with exactly one slash, and that anything else is external.
    const internal = to ? /^\/(?!\/)/.test(to) : false;
    const hash = to ? isHash(to) : false;
    if (hash) {
        return (
            <GatsbyLink
                to={to as string}
                {...other}
                css={css`
                    cursor: pointer;
                `}>
                {children}
            </GatsbyLink>
        );
    }

    // Use Gatsby Link for internal links, and <a> for others
    if (internal) {
        return (
            <GatsbyLink to={to as string} {...other}>
                {children}
            </GatsbyLink>
        );
    }

    return (
        <a href={to} {...other}>
            {children}
        </a>
    );
};

export default Link;
