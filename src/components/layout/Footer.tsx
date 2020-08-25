import React, { FC, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import LocalsToggle from './LocalesToggle';
import Link from '../Link';
import LocalizedLink from '../LocalizedLink';
import { SVGImage } from '../../utils/fragments';
import { FooterQuery } from '../../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Img from '../Img';

type IFooterContent = DeepExtractType<
    FooterQuery,
    ['en', 'frontmatter', 'footer']
>;

export const FooterTemplate: FC<{
    footerContent: IFooterContent;
    preview?: boolean;
}> = ({ footerContent, preview }) => {
    return (
        <footer className='footer has-background-dark-blue has-text-white'>
            <div className='container'>
                <div className='columns '>
                    <div className='column logo-column'>
                        {preview ? (
                            <LocalizedLink className='logo' to='/'>
                                <Img
                                    source={footerContent.logo_img?.source}
                                    alt={footerContent.logo_img?.alt as string}
                                />
                            </LocalizedLink>
                        ) : (
                            <LocalizedLink className='logo' to='/'>
                                <Img
                                    source={footerContent.logo_img?.source}
                                    alt={footerContent.logo_img?.alt as string}
                                />
                            </LocalizedLink>
                        )}
                    </div>
                    <div className='column footer-menu'>
                        <ul>
                            {footerContent.links?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        {preview ? (
                                            <Link to={item?.href as string}>
                                                {item?.text}
                                            </Link>
                                        ) : (
                                            <LocalizedLink
                                                to={item?.href as string}>
                                                {item?.text}
                                            </LocalizedLink>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className='copyright'>{footerContent.copyright}</div>
            </div>
        </footer>
    );
};

const Footer: FC<{ currentLocale: string }> = ({ currentLocale }) => {
    const queryResult = useStaticQuery(
        graphql`
            query Footer {
                en: markdownRemark(
                    frontmatter: {
                        locale: { eq: "en" }
                        templateKey: { eq: "settings" }
                    }
                ) {
                    frontmatter {
                        footer {
                            copyright
                            links {
                                href
                                text
                            }
                            logo_img {
                                alt
                                source {
                                    ...SVGImage
                                }
                            }
                        }
                    }
                }
                de: markdownRemark(
                    frontmatter: {
                        locale: { eq: "de" }
                        templateKey: { eq: "settings" }
                    }
                ) {
                    frontmatter {
                        footer {
                            copyright
                            links {
                                href
                                text
                            }
                            logo_img {
                                alt
                                source {
                                    ...SVGImage
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    return (
        <FooterTemplate
            footerContent={queryResult[currentLocale].frontmatter?.footer}
        />
    );
};

export default Footer;
