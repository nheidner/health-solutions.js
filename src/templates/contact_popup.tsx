import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Layout from '../components/layout';
import { ContactPopupQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import Link from '../components/Link';
import { popupColumnImage, SVGImage } from '../utils/fragments';
import Img from '../components/Img';
import LocalizedLink from '../components/LocalizedLink';
import Content from '../components/Content';

type IContactPopupTemplate = DeepExtractType<
    ContactPopupQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

export const ContactPopupTemplate: FC<IContactPopupTemplate> = ({
    header,
    form,
    image,
    preview,
}) => {
    console.log(form);
    return (
        <ModalRoutingContext.Consumer>
            {({ modal, closeTo }) => (
                <div className='contact-popup'>
                    {modal ? (
                        <Link
                            className='close-link'
                            to={closeTo}
                            state={{
                                noScroll: true,
                            }}
                        />
                    ) : (
                        <LocalizedLink
                            className='go-back-to-home-link'
                            to='/'
                            state={{
                                noScroll: true,
                            }}>
                            Go Back to Home
                        </LocalizedLink>
                    )}
                    <section className='section header-section is-paddingless mb-4'>
                        <figure className='image mb-4'>
                            <Img
                                source={header?.logo_image?.source}
                                alt={header?.logo_image?.alt as string}
                            />
                        </figure>
                        <h1 className='title is-4 mb-4'>{header?.heading}</h1>
                        <div className='content is-normal'>
                            <Content
                                markdown={header?.markdown_text as string}
                            />
                        </div>
                    </section>
                    <section className='section form-section is-paddingless'>
                        <div className='columns form-column'>
                            <div className='column'>
                                <form>
                                    <div className='field'>
                                        <label className='label'>
                                            {form?.name_field?.label}
                                        </label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                            />
                                        </div>
                                        <div className='error-message'>
                                            too long
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label'>
                                            {
                                                form?.telephone_number_field
                                                    ?.label
                                            }
                                        </label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                            />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <label className='label'>
                                            {form?.email_address_field?.label}
                                        </label>
                                        <div className='control'>
                                            <input
                                                className='input'
                                                type='text'
                                            />
                                        </div>
                                    </div>
                                    <div className='field'>
                                        <div className='control'>
                                            <button className='button is-primary'>
                                                {form?.send_button?.button_text}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='column image-column'>
                                <figure className='image'>
                                    <Img
                                        source={image?.source}
                                        alt={image?.alt as string}
                                    />
                                </figure>
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </ModalRoutingContext.Consumer>
    );
};

const ContactPopup: FC<{ data: ContactPopupQuery }> = ({ data }) => {
    console.log(data);
    const { frontmatter } = data.markdownRemark || {};

    return (
        <ContactPopupTemplate
            header={frontmatter?.header}
            form={frontmatter?.form}
            image={frontmatter?.image}
        />
    );
};

export const pageQuery = graphql`
    query ContactPopup($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                locale
                header {
                    logo_image {
                        source {
                            ...SVGImage
                        }
                        alt
                    }
                    heading
                    markdown_text
                }
                form {
                    name_field {
                        label
                    }
                    telephone_number_field {
                        label
                    }
                    email_address_field {
                        label
                    }
                    send_button {
                        button_text
                    }
                }
                image {
                    source {
                        ...popupColumnImage
                    }
                    alt
                }
            }
        }
    }
`;

export default ContactPopup;
