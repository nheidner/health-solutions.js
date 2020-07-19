import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { IndexQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Link from '../components/Link';
// @ts-ignore
import myImg from '../../static/img/apple-touch-icon.png';

type IIndexTemplate = DeepExtractType<
    IndexQuery,
    ['markdownRemark', 'frontmatter']
>;

export const IndexTemplate: FC<IIndexTemplate> = ({ pageTitle }) => (
    <div>
        <section className='hero'>
            <div className='hero-body'>
                <div className='container'>
                    <figure className='image center'>
                        <img src={myImg} style={{ maxWidth: '100px' }} />
                    </figure>
                </div>
            </div>
        </section>

        <section className='section has-background-light'>
            <div className='container'>
                <div className='columns is-multiline'>
                    <div className='column is-one-third'>
                        <article className='media notification is-info'>
                            <figure className='media-left'>
                                <span className='icon is-medium'>
                                    <i className='fab fa-2x fa-css3-alt'></i>
                                </span>
                            </figure>
                            <div className='media-content'>
                                <div className='content'>
                                    <h1 className='title is-size-4'>Bulma?</h1>
                                    <p className='is-size-5'>
                                        Bulma is a modern CSS framework from
                                        @jgthms, based on Flexbox. Using Bulma,
                                        we can describe our website's design
                                        using just classes. ᕕ( ᐛ )ᕗ
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='column is-one-third'>
                        <article className='media notification is-primary'>
                            <figure className='media-left'>
                                <span className='icon is-medium'>
                                    <i className='fas fa-2x fa-align-justify'></i>
                                </span>
                            </figure>
                            <div className='media-content'>
                                <div className='content'>
                                    <h1 className='title is-size-4'>
                                        …Flexbox?
                                    </h1>
                                    <p className='is-size-5'>
                                        Flexbox is a CSS spec that makes
                                        sectioning and aligning more natural. We
                                        don't need to know Flexbox but it's how
                                        Bulma works behind-the-scenes.{' '}
                                        <span className='emoticon'>
                                            ⦤(^ー^)⦥
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className='column is-one-third'>
                        <article className='media notification is-warning'>
                            <figure className='media-left'>
                                <span className='icon is-medium'>
                                    <i className='fas fa-2x fa-shield-alt'></i>
                                </span>
                            </figure>
                            <div className='media-content'>
                                <div className='content'>
                                    <h1 className='title is-size-4'>
                                        …Classes?
                                    </h1>
                                    <p className='is-size-5'>
                                        Instead of writing our CSS per-element,
                                        we can use predefined classes. With
                                        enough classes, we can describe our
                                        website design using semantics.{' '}
                                        <span className='emoticon'>
                                            ٩(^ᴗ^)۶
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const Index: FC<{ data: IndexQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout pageTitle={frontmatter?.pageTitle as string}>
            <IndexTemplate pageTitle={frontmatter?.pageTitle} />
        </Layout>
    );
};

export const pageQuery = graphql`
    query Index2($id: String!) {
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
