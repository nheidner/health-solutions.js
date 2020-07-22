/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { ContactQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Img from '../components/Img';
import Link from '../components/Link';
import '../styles/all.sass';
// @ts-ignore
import myImg from '../../static/img/apple-touch-icon.png';
import { ImageCarousel, GalleryImage } from '../components/Carousel';
import {
    columnImageMedium,
    columnImageLarge,
    cardHeaderImage,
    galleryImage,
    SVGImage,
} from '../utils/fragments';
import Content from '../components/Content';

type IContactTemplate = DeepExtractType<
    ContactQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

const aosSettings = {
    duration: { fast: 600, slow: 1800 },
    delay: { short: 400, medium: 600, long: 1800, none: 0 },
};

export const ContactTemplate: FC<IContactTemplate> = ({ preview }) => {
    // const praxisGalleryImages = praxis_section?.image_gallery?.map(
    //     (imageElem) => {
    //         return {
    //             alt: imageElem?.alt as string,
    //             source: imageElem?.source as any,
    //         };
    //     }
    // );
    return (
        <div
            css={
                // for cms preview because layout component is not loaded and opacity: 0 according to aos.css
                preview
                    ? css`
                          [data-aos='fade'] {
                              opacity: 1 !important;
                          }
                      `
                    : null
            }>
            <section
                className='section has-background-dark-blue'
                id='contact__header'>
                <div className='container'>
                    <h1 className='title is-1 has-text-white has-text-centered'>
                        Schieb mal Nummer rüber, Alder!
                    </h1>
                    <div className='content has-text-white has-text-centered'>
                        Ich bin ein Fließtext und das ist gut so. Was hier
                        stehen soll, dass weiß leider noch keiner, aber das ist
                        auch noch lange kein Problem. Was verschiebe steht auf
                        morgen, das bereitet keine Sorgen. Ich bin ein Fließtext
                        und das ist gut so. Was hier stehen soll, dass weiß
                        leider noch keiner, aber das ist auch noch lange kein
                        Problem. Was verschiebe steht auf morgen, das bereitet
                        keine Sorgen. Ich bin ein Fließtext und das ist gut so.
                        Was hier stehen soll, dass weiß leider noch keiner, aber
                        das ist auch noch lange kein Problem
                    </div>
                    <figure className='image'>
                        <img src='https://via.placeholder.com/150' />
                    </figure>
                </div>
            </section>
            <section className='section py-0' id='contact__contact'>
                <div className='container has-background-yellow pt-6 pb-5 px-5'>
                    <h1 className='title section-heading'>KONTAKT</h1>
                    <div className='columns'>
                        <div className='column image-column'>
                            <figure className='image'>
                                <img src='https://via.placeholder.com/150' />
                            </figure>
                        </div>
                        <div className='column'>
                            <h1 className='title is-2'>
                                Ich bin ein Subheader. Willkommen auf Unserer
                                Seite!
                            </h1>
                            <div className='content'>
                                Termine erfolgen nach Absprache. Sie können auch
                                problemlos online einen Termin direkt ausmachen.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Contact: FC<{ data: ContactQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout pageTitle={frontmatter?.pageTitle as string}>
            <ContactTemplate />
        </Layout>
    );
};

export const pageQuery = graphql`
    query Contact($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                locale
                pageTitle
                path
            }
        }
    }
`;

export default Contact;
