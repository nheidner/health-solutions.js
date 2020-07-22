import React, { FC, useState } from 'react';
import { graphql } from 'gatsby';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
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

export const ContactPopupTemplate: FC<IContactPopupTemplate> = ({
    header,
    form,
    image,
    preview,
}) => {
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
                    ) : preview ? null : (
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
                        max_number_characters
                        messages {
                            required
                            character_maximum
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
                    send_button {
                        button_text
                        messages {
                            is_sent
                        }
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
