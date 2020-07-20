import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Layout from '../components/layout';
import { ContactPopupQuery } from '../../gatsby-graphql';
import { DeepExtractType } from 'ts-deep-extract-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from '../components/Link';
import { popupColumnImage, SVGImage } from '../utils/fragments';
import Img from '../components/Img';
import LocalizedLink from '../components/LocalizedLink';
import Content from '../components/Content';

type IContactPopupTemplate = DeepExtractType<
    ContactPopupQuery,
    ['markdownRemark', 'frontmatter']
> & { preview?: boolean };

type IFormContent = DeepExtractType<IContactPopupTemplate, ['form']>;

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
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(80, 'Must be 80 characters or less')
                .required('Required'),
            telephone: Yup.string()
                .max(80, 'Must be 80 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
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
        <form onSubmit={formik.handleSubmit} name='Contact Form'>
            <div className='field'>
                <label className='label'>{formContent.name_field?.label}</label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        {...formik.getFieldProps('name')}
                    />
                </div>
                {formik.touched.name && formik.errors.name ? (
                    <p className='help is-danger'>{formik.errors.name}</p>
                ) : null}
            </div>

            <div className='field'>
                <label className='label'>
                    {formContent?.telephone_number_field?.label}
                </label>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        {...formik.getFieldProps('telephone')}
                    />
                </div>
                {formik.touched.telephone && formik.errors.telephone ? (
                    <p className='help is-danger'>{formik.errors.telephone}</p>
                ) : null}
            </div>

            <div className='field'>
                <label className='label'>
                    {formContent?.email_address_field?.label}
                </label>
                <div className='control'>
                    <input
                        className='input is-danger'
                        type='text'
                        {...formik.getFieldProps('email')}
                    />
                </div>
                {formik.touched.email && formik.errors.email ? (
                    <p className='help is-danger'>{formik.errors.email}</p>
                ) : null}
            </div>

            <div className='field'>
                <div className='control'>
                    <button type='submit' className='button is-primary'>
                        {formContent?.send_button?.button_text}
                    </button>
                </div>
                {submitted ? (
                    <p className='help is-success'>Your message was sent</p>
                ) : null}
            </div>
        </form>
    );
};

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
                                <Form formContent={form as IFormContent} />
                            </div>
                            <div className='column image-column has-child-centered-v-h'>
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
