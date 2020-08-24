import React, { FC } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { OneColumnPageQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Content from '../components/Content';

type IOneColumnPageTemplate = DeepExtractType<
    OneColumnPageQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

export const OneColumnPageTemplate: FC<IOneColumnPageTemplate> = ({
    markdown_text,
    heading,
}) => {
    return (
        <div>
            <section className='section'>
                <div className='container'>
                    <h1 className='title is-1 pt-5'>{heading}</h1>
                    <div className='content is-normal'>
                        <Content markdown={markdown_text as string} />
                    </div>
                </div>
            </section>
        </div>
    );
};

const OneColumnPage: FC<{ data: OneColumnPageQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout
            pageTitle={data.markdownRemark?.frontmatter?.pageTitle as string}>
            <OneColumnPageTemplate
                heading={frontmatter?.heading}
                markdown_text={frontmatter?.markdown_text}
            />
        </Layout>
    );
};

export default OneColumnPage;

export const pageQuery = graphql`
    query OneColumnPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                pageTitle
                heading
                markdown_text
            }
        }
    }
`;
