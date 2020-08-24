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
import {
    columnImageMedium,
    columnImageLarge,
    cardHeaderImage,
    galleryImage,
    SVGImage,
    fullWidthImage,
} from '../utils/fragments';
import Content from '../components/Content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Newsletter, { INewsletterContent } from '../components/Newsletter';
import Maps from '../components/Maps';

const OneColumnTemplate: FC = () => {
    return <div>Hello world</div>;
};
const OneColumn: FC<{ data: ContactQuery }> = ({}) => {
    // const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout pageTitle=''>
            <OneColumnTemplate />
        </Layout>
    );
};

export default OneColumn;
