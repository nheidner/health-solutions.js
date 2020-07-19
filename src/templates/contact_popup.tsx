import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Layout from '../components/layout';
import { ContactPopupQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Link from '../components/Link';
// @ts-ignore
import myImg from '../../static/img/apple-touch-icon.png';

const ContactPopupTemplate: FC<{ data: ContactPopupQuery }> = ({ data }) => {
    return (
        <ModalRoutingContext.Consumer>
            {({ modal, closeTo }) => (
                <div className='contact-popup'>
                    {modal ? (
                        <Link
                            to={closeTo}
                            state={{
                                noScroll: true,
                            }}>
                            x
                        </Link>
                    ) : null}
                </div>
            )}
        </ModalRoutingContext.Consumer>
    );
};

export const pageQuery = graphql`
    query ContactPopup($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                locale
                path
            }
        }
    }
`;

export default ContactPopupTemplate;
