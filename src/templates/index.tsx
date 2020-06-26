/** @jsx jsx */
import { FC } from 'react';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { IndexQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';

const Heading = styled('h1')`
    font-size: 30px;
    margin-top: 0;
`;

type IIndexTemplate = DeepExtractType<
    IndexQuery,
    ['markdownRemark', 'frontmatter']
>;

export const IndexTemplate: FC<IIndexTemplate> = ({ pageTitle }) => (
    <div
        css={css`
            background-color: #ddd;
        `}>
        <Heading>{pageTitle}</Heading>
        Hello world
    </div>
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
