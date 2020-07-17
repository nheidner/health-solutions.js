/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { IndexQuery } from '../../gatsby-graphql';
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
} from '../utils/fragments';
import Content from '../components/Content';

type IIndexTemplate = DeepExtractType<
    IndexQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

const aosSettings = {
    duration: { fast: 600, slow: 1800 },
    delay: { short: 400, medium: 600, long: 1800, none: 0 },
};

export const IndexTemplate: FC<IIndexTemplate> = ({
    preview,
    home_section,
    about_us_section,
    philosophy_section,
    verfahren_section,
    anonymous_section_1,
    anonymous_section_2,
    praxis_section,
    labor_section,
    team_section,
    contact_section,
}) => {
    const praxisGalleryImages = praxis_section?.image_gallery?.map(
        (imageElem) => {
            return {
                alt: imageElem?.alt as string,
                source: imageElem?.source as any,
            };
        }
    );
    return (
        <div
            css={
                preview
                    ? css`
                          [data-aos='fade'] {
                              opacity: 1 !important;
                          }
                      `
                    : null
            }>
            <section className='section' id='home'>
                <div className='container'>
                    <div className='columns flex-direction-reverse'>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}
                            data-aos-delay={aosSettings.delay.medium}>
                            <h1 className='title is-1'>
                                {home_section?.text_column?.heading}
                            </h1>
                            <div className='content is-medium'>
                                <Content
                                    markdown={
                                        home_section?.text_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                            <button className='button is-primary'>
                                {home_section?.text_column?.button_text}
                            </button>
                        </div>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}>
                            <figure className='image'>
                                <Img
                                    source={
                                        home_section?.image_column?.image
                                            ?.source
                                    }
                                    alt={
                                        home_section?.image_column?.image
                                            ?.alt as string
                                    }
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <hr
                className='line-differentiator py-0 mt-6'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}
            />
            <section
                className='section has-background-yellow pt-5'
                id='about'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}>
                <div className='container'>
                    <h1 className='title section-heading'>
                        {about_us_section?.section_heading}
                    </h1>
                    <div className='container has-background-white has-text-centered'>
                        <h1 className='title is-2'>
                            {about_us_section?.heading}
                        </h1>
                        <div className='content is-medium'>
                            <Content
                                markdown={
                                    about_us_section?.markdown_text as string
                                }
                            />
                        </div>
                        <figure className='image'>
                            <Img
                                source={about_us_section?.image?.source}
                                alt={about_us_section?.image?.alt as string}
                                className='is-centered-horizontal'
                            />
                        </figure>
                    </div>
                </div>
            </section>
            <section className='section philosophy-section' id='philosophy'>
                <div className='container'>
                    <h1
                        className='title section-heading'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        {philosophy_section?.section_heading}
                    </h1>
                    <div className='columns touch-is-block flex-wrap'>
                        {philosophy_section?.cards?.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className='column my-card-component is-one-third-desktop'
                                    data-aos='fade'
                                    data-aos-duration={
                                        aosSettings.duration.fast
                                    }
                                    data-aos-delay={
                                        (index + 1) * aosSettings.delay.short
                                    }>
                                    <div className='my-card-image'>
                                        <figure className='image'>
                                            <Img
                                                source={card?.image?.source}
                                                alt={card?.image?.alt as string}
                                                className='is-centered-horizontal'
                                            />
                                        </figure>
                                    </div>
                                    <div className='my-card-content'>
                                        <h1 className='title is-2'>
                                            {card?.heading}
                                        </h1>
                                        <div className='content is-normal'>
                                            <Content
                                                markdown={
                                                    card?.markdown_text as string
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className='section' id='verfahren'>
                <div className='container'>
                    <h1
                        className='title section-heading'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        {verfahren_section?.section_heading}
                    </h1>
                    <div className='columns'>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}
                            data-aos-delay={2 * aosSettings.delay.short}>
                            <h1 className='title is-1'>
                                {verfahren_section?.text_column?.heading}
                            </h1>
                            <div className='content'>
                                <Content
                                    markdown={
                                        verfahren_section?.text_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                            <button className='button is-primary'>
                                {verfahren_section?.text_column?.button_text}
                            </button>
                        </div>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}
                            data-aos-delay={aosSettings.delay.short}>
                            <figure className='image'>
                                <Img
                                    source={
                                        verfahren_section?.image_column?.image
                                            ?.source
                                    }
                                    alt={
                                        verfahren_section?.image_column?.image
                                            ?.alt as string
                                    }
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className='section has-background-yellow'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}>
                <div className='container'>
                    <div className='columns'>
                        <div className='column is-three-fifths'>
                            <figure className='image'>
                                <Img
                                    source={
                                        anonymous_section_1?.image_column?.image
                                            ?.source
                                    }
                                    alt={
                                        anonymous_section_1?.image_column?.image
                                            ?.alt as string
                                    }
                                />
                            </figure>
                        </div>
                        <div className='column'>
                            <h1 className='title is-2'>
                                {anonymous_section_1?.text_column?.heading}
                            </h1>
                            <div className='content'>
                                <Content
                                    markdown={
                                        anonymous_section_1?.text_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className='section has-background-dark-blue'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}>
                <div className='container has-text-centered '>
                    <h1 className='title is-2 has-text-white'>
                        {anonymous_section_2?.heading}
                    </h1>
                    <h1 className='subtitle has-text-white'>
                        {anonymous_section_2?.subheading}
                    </h1>
                    <button className='button'>
                        {anonymous_section_2?.button_text}
                    </button>
                </div>
            </section>
            <section className='section' id='praxis'>
                <div className='container'>
                    <h1
                        className='title section-heading'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        {praxis_section?.section_heading}
                    </h1>
                    <div className='columns'>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}
                            data-aos-delay={aosSettings.delay.short}>
                            <figure className='image'>
                                <Img
                                    source={
                                        praxis_section?.image_column?.image
                                            ?.source
                                    }
                                    alt={
                                        praxis_section?.image_column?.image
                                            ?.alt as string
                                    }
                                />
                            </figure>
                        </div>
                        <div
                            className='column'
                            data-aos='fade'
                            data-aos-duration={aosSettings.duration.fast}
                            data-aos-delay={2 * aosSettings.delay.short}>
                            <h1 className='title is-1'>
                                {praxis_section?.text_column?.heading}
                            </h1>
                            <div className='content'>
                                <Content
                                    markdown={
                                        praxis_section?.text_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                            <button className='button is-primary'>
                                {praxis_section?.text_column?.button_text}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className='section image-carousel-section'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}>
                <div className='container'>
                    <ImageCarousel
                        images={praxisGalleryImages as GalleryImage[]}
                    />
                </div>
            </section>
            <hr className='line-differentiator py-0 mt-6' />
            <section className='section'>
                <div className='container'>
                    <h1
                        className='title is-2 has-text-centered'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        {labor_section?.heading}
                    </h1>
                    <div
                        className='content is-normal has-text-centered'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.short}>
                        <Content
                            markdown={labor_section?.markdown_text as string}
                        />
                    </div>
                </div>
            </section>
            <section className='section' id='team'>
                <div className='container'>
                    <h1
                        className='title section-heading'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        {team_section?.section_heading}
                    </h1>
                    <div className='columns touch-is-block flex-wrap'>
                        {team_section?.cards?.map((card, index) => {
                            return (
                                <div
                                    key={index}
                                    className='column my-card-component is-one-third-desktop'
                                    data-aos='fade'
                                    data-aos-duration={
                                        aosSettings.duration.fast
                                    }
                                    data-aos-delay={
                                        (index + 1) * aosSettings.delay.short
                                    }>
                                    <div className='my-card-image'>
                                        <figure className='image'>
                                            <Img
                                                source={card?.image?.source}
                                                alt={card?.image?.alt as string}
                                                className='is-centered-horizontal'
                                            />
                                        </figure>
                                    </div>
                                    <div className='my-card-content'>
                                        <h1 className='title is-2'>
                                            {card?.heading}
                                        </h1>
                                        <div className='content is-normal'>
                                            <Content
                                                markdown={
                                                    card?.markdown_text as string
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className='section contact-section pb-0' id='contact'>
                <div
                    className='container has-background-yellow py-6 px-3'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}>
                    <h1 className='title section-heading'>
                        {contact_section?.section_heading}
                    </h1>
                    <h1 className='title is-2 has-text-centered'>
                        {contact_section?.heading}
                    </h1>
                    <div className='columns is-centered-horizontal'>
                        <div className='column left-column'>
                            <div className='content is-medium'>
                                <Content
                                    markdown={
                                        contact_section?.left_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                            <button className='button is-primary'>
                                {contact_section?.left_column?.button_text}
                            </button>
                        </div>
                        <div className='column right-column'>
                            <div className='content is-medium'>
                                <Content
                                    markdown={
                                        contact_section?.right_column
                                            ?.address_markdown as string
                                    }
                                />
                            </div>
                            {contact_section?.right_column?.show_newsletter ? (
                                <div className='newsletter'>
                                    <h1 className='title is-6'>
                                        {
                                            contact_section?.right_column
                                                ?.newsletter?.heading
                                        }
                                    </h1>
                                    <form className='newsletter-form'>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                                placeholder={
                                                    contact_section
                                                        ?.right_column
                                                        ?.newsletter
                                                        ?.placeholder as string
                                                }
                                            />
                                            <button className='button is-small'>
                                                {
                                                    contact_section
                                                        ?.right_column
                                                        ?.newsletter
                                                        ?.button_text
                                                }
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
                <div
                    className='container map'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}
                    data-aos-delay={aosSettings.delay.short}></div>
            </section>
        </div>
    );
};

const Index: FC<{ data: IndexQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout pageTitle={frontmatter?.pageTitle as string}>
            <IndexTemplate
                home_section={frontmatter?.home_section}
                about_us_section={frontmatter?.about_us_section}
                philosophy_section={frontmatter?.philosophy_section}
                verfahren_section={frontmatter?.verfahren_section}
                anonymous_section_1={frontmatter?.anonymous_section_1}
                anonymous_section_2={frontmatter?.anonymous_section_2}
                praxis_section={frontmatter?.praxis_section}
                labor_section={frontmatter?.labor_section}
                team_section={frontmatter?.team_section}
                contact_section={frontmatter?.contact_section}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query Index($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                locale
                pageTitle
                path
                home_section {
                    image_column {
                        image {
                            source {
                                ...columnImageLarge
                            }
                            alt
                        }
                    }
                    text_column {
                        heading
                        markdown_text
                        button_text
                    }
                }
                about_us_section {
                    section_heading
                    heading
                    markdown_text
                    image {
                        source {
                            ...logo
                        }
                        alt
                    }
                }
                philosophy_section {
                    section_heading
                    cards {
                        image {
                            source {
                                ...cardHeaderImage
                            }
                            alt
                        }
                        heading
                        markdown_text
                    }
                }
                verfahren_section {
                    section_heading
                    text_column {
                        heading
                        markdown_text
                        button_text
                    }
                    image_column {
                        image {
                            source {
                                ...columnImageLarge
                            }
                            alt
                        }
                    }
                }

                anonymous_section_1 {
                    image_column {
                        image {
                            source {
                                ...columnImageMedium
                            }
                            alt
                        }
                    }
                    text_column {
                        heading
                        markdown_text
                    }
                }
                anonymous_section_2 {
                    heading
                    subheading
                    button_text
                }
                praxis_section {
                    section_heading
                    image_column {
                        image {
                            source {
                                ...columnImageMedium
                            }
                            alt
                        }
                    }
                    text_column {
                        heading
                        markdown_text
                        button_text
                    }
                    image_gallery {
                        source {
                            ...galleryImage
                        }
                        alt
                    }
                    image {
                        source {
                            ...logo
                        }
                        alt
                    }
                }
                labor_section {
                    heading
                    markdown_text
                }
                team_section {
                    section_heading
                    cards {
                        image {
                            source {
                                ...cardHeaderImage
                            }
                            alt
                        }
                        heading
                        markdown_text
                    }
                }
                contact_section {
                    section_heading
                    heading
                    left_column {
                        markdown_text
                        button_text
                    }
                    right_column {
                        address_markdown
                        show_newsletter
                        newsletter {
                            heading
                            placeholder
                            button_text
                        }
                    }
                }
            }
        }
    }
`;

export default Index;
