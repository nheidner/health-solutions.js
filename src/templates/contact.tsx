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

type IContactTemplate = DeepExtractType<
    ContactQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

type IFormContent = DeepExtractType<
    IContactTemplate,
    ['contact_section', 'right_column', 'form']
>;

const aosSettings = {
    duration: { fast: 600, slow: 1800 },
    delay: { short: 400, medium: 600, long: 1800, none: 0 },
};

const encode = (data: {
    'form-name': string;
    name: string;
    telephone: string;
    email: string;
    [props: string]: string | number;
}) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&');
};

const Form: FC<{ formContent: IFormContent }> = ({ formContent }) => {
    const [submitted, setSubmitted] = useState(false);
    const formik = useFormik({
        initialValues: {
            name: '',
            telephone: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(
                    formContent.name_field?.max_number_characters,
                    formContent.name_field?.messages?.character_maximum
                )
                .required(formContent.name_field?.messages?.required),
            telephone: Yup.string()
                .max(
                    formContent.telephone_number_field?.max_number_characters,
                    formContent.telephone_number_field?.messages
                        ?.character_maximum
                )
                .required(
                    formContent.telephone_number_field?.messages?.required
                ),
            email: Yup.string()
                .email(formContent.email_address_field?.messages?.is_email)
                .required(formContent.email_address_field?.messages?.required),
            message: Yup.string()
                .max(
                    formContent.message_field?.max_number_characters,
                    formContent.message_field?.messages?.character_maximum
                )
                .required(formContent.message_field?.messages?.required),
        }),
        onSubmit: (values) => {
            fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: encode({ 'form-name': 'contact', ...values }),
            })
                .then(() => setSubmitted(true))
                .then(() => formik.resetForm())
                .catch((error) => alert(error));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} name='Contact Form 2'>
            {/* name field */}
            <div className='field'>
                <label className='label'>{formContent.name_field?.label}</label>
                <div className='control'>
                    <input
                        className={`input ${
                            formik.touched.name && formik.errors.name
                                ? 'is-danger'
                                : ''
                        }`}
                        type='text'
                        {...formik.getFieldProps('name')}
                    />
                </div>
                <p className='help is-danger'>
                    {formik.touched.name && formik.errors.name
                        ? formik.errors.name
                        : null}
                </p>
            </div>
            {/* telephone field */}
            <div className='field'>
                <label className='label'>
                    {formContent?.telephone_number_field?.label}
                </label>
                <div className='control'>
                    <input
                        className={`input ${
                            formik.touched.telephone && formik.errors.telephone
                                ? 'is-danger'
                                : ''
                        }`}
                        type='text'
                        {...formik.getFieldProps('telephone')}
                    />
                </div>
                <p className='help is-danger'>
                    {formik.touched.telephone && formik.errors.telephone
                        ? formik.errors.telephone
                        : null}
                </p>
            </div>
            {/* email field */}
            <div className='field'>
                <label className='label'>
                    {formContent?.email_address_field?.label}
                </label>
                <div className='control'>
                    <input
                        className={`input ${
                            formik.touched.email && formik.errors.email
                                ? 'is-danger'
                                : ''
                        }`}
                        type='text'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <p className='help is-danger'>
                    {formik.touched.email && formik.errors.email
                        ? formik.errors.email
                        : null}
                </p>
            </div>
            {/* message field */}
            <div className='field message-field'>
                <label className='label'>
                    {formContent.message_field?.label}
                </label>
                <div className='control'>
                    <textarea
                        className={`textarea ${
                            formik.touched.message && formik.errors.message
                                ? 'is-danger'
                                : ''
                        }`}
                        {...formik.getFieldProps('message')}
                    />
                </div>
                <p className='help is-danger'>
                    {formik.touched.message && formik.errors.message
                        ? formik.errors.message
                        : null}
                </p>
            </div>
            {/* submit button */}
            <div className='field'>
                <div className='control'>
                    {submitted ? (
                        <button
                            type='submit'
                            className='button is-primary'
                            title='Disabled button'
                            disabled>
                            {formContent?.send_button?.button_text}
                        </button>
                    ) : (
                        <button type='submit' className='button is-primary'>
                            {formContent?.send_button?.button_text}
                        </button>
                    )}
                </div>
                <p className='help is-success'>
                    {submitted
                        ? formContent.send_button?.messages?.is_sent
                        : null}
                </p>
            </div>
        </form>
    );
};

export const ContactTemplate: FC<IContactTemplate> = ({
    header_section,
    contact_section,
    preview,
}) => {
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
                        {header_section?.heading}
                    </h1>
                    <div className='content has-text-white has-text-centered'>
                        <Content
                            markdown={header_section?.markdown_text as string}
                        />
                    </div>
                    <figure className='image'>
                        <Img
                            source={header_section?.image?.source}
                            alt={header_section?.image?.alt as string}
                        />
                    </figure>
                </div>
            </section>
            <section
                className='section py-0 contact-section'
                id='contact__contact'>
                <div className='container has-background-yellow pt-6 pb-5 px-5'>
                    <h1 className='title section-heading'>
                        {contact_section?.section_heading}
                    </h1>
                    <div className='columns'>
                        <div className='column image-column'>
                            <figure className='image'>
                                <Img
                                    source={
                                        contact_section?.image_column?.image
                                            ?.source
                                    }
                                    alt={
                                        contact_section?.image_column?.image
                                            ?.alt as string
                                    }
                                />
                            </figure>
                        </div>
                        <div className='column right-column'>
                            <h1 className='title is-2 pt-5'>
                                {contact_section?.right_column?.heading}
                            </h1>
                            <div className='content'>
                                <Content
                                    markdown={
                                        contact_section?.right_column
                                            ?.markdown_text as string
                                    }
                                />
                            </div>
                            <Form
                                formContent={
                                    contact_section?.right_column
                                        ?.form as IFormContent
                                }
                            />
                            <div className='content is-medium'>
                                <Content
                                    markdown={
                                        contact_section?.right_column
                                            ?.address_markdown as string
                                    }
                                />
                            </div>
                            <Newsletter
                                newsletterContent={
                                    contact_section?.right_column
                                        ?.newsletter as INewsletterContent
                                }
                                showNewsletter={
                                    contact_section?.right_column
                                        ?.show_newsletter as boolean
                                }
                            />
                        </div>
                    </div>
                </div>

                <Maps />
            </section>
        </div>
    );
};

const Contact: FC<{ data: ContactQuery }> = ({ data }) => {
    const { frontmatter } = data.markdownRemark || {};

    return (
        <Layout pageTitle={frontmatter?.pageTitle as string}>
            <ContactTemplate
                header_section={frontmatter?.header_section}
                contact_section={frontmatter?.contact_section}
            />
        </Layout>
    );
};

export const pageQuery = graphql`
    query Contact($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                pageTitle
                header_section {
                    heading
                    markdown_text
                    image {
                        source {
                            ...fullWidthImage
                        }
                        alt
                    }
                }
                contact_section {
                    section_heading
                    heading
                    image_column {
                        image {
                            source {
                                ...columnImageMedium
                            }
                            alt
                        }
                    }
                    right_column {
                        heading
                        markdown_text
                        form {
                            name_field {
                                label
                                max_number_characters
                                messages {
                                    character_maximum
                                    required
                                }
                            }
                            telephone_number_field {
                                label
                                max_number_characters
                                messages {
                                    character_maximum
                                    required
                                }
                            }
                            email_address_field {
                                label
                                messages {
                                    is_email
                                    required
                                }
                            }
                            message_field {
                                label
                                max_number_characters
                                messages {
                                    character_maximum
                                    required
                                }
                            }
                            send_button {
                                button_text
                                messages {
                                    is_sent
                                }
                            }
                        }
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

export default Contact;
