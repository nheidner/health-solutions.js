/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { IndexQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Img, { FluidObject } from 'gatsby-image';
import Link from '../components/Link';
import '../styles/all.sass';
// @ts-ignore
import myImg from '../../static/img/apple-touch-icon.png';
import { ImageCarousel } from '../components/Carousel';

type IIndexTemplate = DeepExtractType<
    IndexQuery,
    ['markdownRemark', 'frontmatter']
>;

const aosSettings = {
    duration: { fast: 600, slow: 1800 },
    delay: { short: 400, medium: 600, long: 1800, none: 0 },
};

export const IndexTemplate: FC<IIndexTemplate> = ({ pageTitle }) => (
    <React.Fragment>
        <section className='section' id='home'>
            <div className='container'>
                <div className='columns flex-direction-reverse'>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.medium}>
                        <h1 className='title is-1'>Title</h1>
                        <div className='content is-medium'>Blabla</div>
                        <button className='button is-primary'>
                            Informieren Sie sich hier!
                        </button>
                    </div>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}>
                        <figure className='image'>
                            <img src='https://bulma.io/images/placeholders/128x128.png' />
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
                <h1 className='title section-heading'>Über</h1>
                <div className='container has-background-white has-text-centered'>
                    <h1 className='title is-2'>
                        Willkommen bei Health Solutions
                    </h1>
                    <div className='content is-medium'>Blabla</div>
                    <figure className='image'>
                        <img
                            className='is-centered-horizontal'
                            src='https://bulma.io/images/placeholders/128x128.png'
                            style={{ width: '100px' }}
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
                    Philosophie
                </h1>
                <div className='columns touch-is-block flex-wrap'>
                    <div
                        className='column my-card-component is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                    <div
                        className='column my-card-component my-card-is-row-reverse is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={2 * aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                    <div
                        className='column my-card-component is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={3 * aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section' id='verfahren'>
            <div className='container'>
                <h1
                    className='title section-heading'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}>
                    Verfahren
                </h1>
                <div className='columns'>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={2 * aosSettings.delay.short}>
                        <h1 className='title is-1'>
                            Ich bin ein Header. Willkommen auf Unserer
                        </h1>
                        <div className='content'>
                            Health Solutions kombiniert ein Naturheilverfahren
                            mit neuster Technologie, sogenannte Frequency
                            Therapie um Krankheiten, Viren und Entzündungs-herde
                            frühzeitig zu erkennen und diese durch ihren
                            natürlichen Gegenspieler in Form von Frequenzen
                            messbar zu machen und im Folgeschritt, den Prozess
                            der Selbstheilung zu aktivieren und Schaderreger
                            auszuschalten.
                        </div>
                        <button className='button is-primary'>
                            Erfahre mehr
                        </button>
                    </div>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.short}>
                        <figure className='image'>
                            <img src='https://bulma.io/images/placeholders/256x256.png' />
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
                            <img src='https://bulma.io/images/placeholders/256x256.png' />
                        </figure>
                    </div>
                    <div className='column'>
                        <h1 className='title is-2'>
                            Ich bin ein Header. Willkommen auf Unserer
                        </h1>
                        <div className='content'>
                            - Was hier stehen soll, dass weiß - aber das ist
                            auch noch lange kein Problem. - verschiebe steht auf
                            morgen, das bereitet keine - Sorgen. Ich bin ein
                            Fließtext - hier stehen soll, dass - das ist auch
                            noch lange kein Problem. Was - verschiebe steht auf
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
                    Möchten Sie eine Termin in unserer Praxis buchen?
                </h1>
                <h1 className='subtitle has-text-white'>
                    Kontaktieren Sie uns jetzt telefonisch unter 030
                    0938345827352
                </h1>
                <button className='button'>Termin vereinbaren</button>
            </div>
        </section>
        <section className='section' id='praxis'>
            <div className='container'>
                <h1
                    className='title section-heading'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}>
                    Praxis
                </h1>
                <div className='columns'>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.short}>
                        <figure className='image'>
                            <img src='https://bulma.io/images/placeholders/256x256.png' />
                        </figure>
                    </div>
                    <div
                        className='column'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={2 * aosSettings.delay.short}>
                        <h1 className='title is-1'>
                            Ich bin ein Header. Willkommen
                        </h1>
                        <div className='content'>
                            Ich bin ein Fließtext und das ist gut so. Was hier
                            stehen soll, dass weiß leider noch keiner, aber das
                            ist auch noch lange kein Problem. Was verschiebe
                            steht auf morgen, das bereitet keine Sorgen. Ich bin
                            ein Fließtext und das ist gut so. Was hier stehen
                            soll, dass weiß leider noch keiner, aber das ist
                            auch noch lange kein Problem. Was verschiebe steht
                        </div>
                        <button className='button is-primary'>
                            Termin vereinbaren
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
                    images={[
                        'https://via.placeholder.com/350x200.png?',
                        'https://via.placeholder.com/350x200.png?',
                        'https://via.placeholder.com/350x200.png?',
                    ]}
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
                    Labor Labor Labor
                </h1>
                <div
                    className='content is-normal has-text-centered'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}
                    data-aos-delay={aosSettings.delay.short}>
                    Blabla
                </div>
            </div>
        </section>
        <section className='section' id='team'>
            <div className='container'>
                <h1
                    className='title section-heading'
                    data-aos='fade'
                    data-aos-duration={aosSettings.duration.fast}>
                    Team
                </h1>
                <div className='columns touch-is-block flex-wrap'>
                    <div
                        className='column my-card-component my-card-is-row-reverse is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                    <div
                        className='column my-card-component is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={2 * aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                    <div
                        className='column my-card-component my-card-is-row-reverse is-one-third-desktop'
                        data-aos='fade'
                        data-aos-duration={aosSettings.duration.fast}
                        data-aos-delay={3 * aosSettings.delay.short}>
                        <div className='my-card-image'>
                            <figure className='image'>
                                <img src='https://bulma.io/images/placeholders/256x256.png' />
                            </figure>
                        </div>
                        <div className='my-card-content'>
                            <h1 className='title is-2'>Menschlich</h1>
                            <div className='content is-normal'>
                                Ich bin ein Fließtext und das ist gut so. Was
                                hier stehen soll, dass weiß leider noch keiner,
                                aber das ist auch noch lange kein Problem. Was
                                verschiebe
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className='section contact-section pb-0' id='contact'>
            <div
                className='container has-background-yellow py-6 px-3'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}>
                <h1 className='title section-heading'>Kontakt</h1>
                <h1 className='title is-2 has-text-centered'>
                    Bei Interesse, Fragen oder einer Terminabsprache, stehen wir
                    Ihnen jederzeit zur Verfügung.
                </h1>
                <div className='columns is-centered-horizontal'>
                    <div className='column left-column'>
                        <div className='content is-medium'>
                            Termine erfolgen nach Absprache. Rufen Sie uns an
                            oder machen Sie problemlos direkt online einen
                            Termin aus.
                        </div>
                        <button className='button is-primary'>
                            Termin vereinbaren
                        </button>
                    </div>
                    <div className='column right-column'>
                        <div className='content is-medium'>
                            <p>address line</p>
                            <p>address line</p>
                        </div>
                        <div className='newsletter'>
                            <h1 className='title is-6'>
                                Subscribe to our newsletter
                            </h1>
                            <form className='newsletter-form'>
                                <div className='control'>
                                    <input
                                        className='input'
                                        type='text'
                                        placeholder='Email Address'
                                    />
                                    <button className='button is-small'>
                                        OK
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className='container map'
                data-aos='fade'
                data-aos-duration={aosSettings.duration.fast}
                data-aos-delay={aosSettings.delay.short}></div>
        </section>
    </React.Fragment>
);

const Index: FC<{ data: IndexQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout>
            <IndexTemplate pageTitle={frontmatter?.pageTitle} />
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
            }
        }
    }
`;

export default Index;
