import { IndexQuery } from '../../gatsby-graphql';
import React, { FC } from 'react';
import { DeepExtractType } from 'ts-deep-extract-types';

export type INewsletterContent = DeepExtractType<
    IndexQuery,
    [
        'markdownRemark',
        'frontmatter',
        'contact_section',
        'right_column',
        'newsletter'
    ]
>;

const Newsletter: FC<{
    newsletterContent: INewsletterContent;
    showNewsletter: boolean;
}> = ({ showNewsletter, newsletterContent }) => {
    return showNewsletter ? (
        <div className='newsletter'>
            <h1 className='title is-6'>{newsletterContent?.heading}</h1>
            <form className='newsletter-form'>
                <div className='control'>
                    <input
                        className='input'
                        type='text'
                        placeholder={newsletterContent?.placeholder as string}
                    />
                    <button className='button is-small'>
                        {newsletterContent?.button_text}
                    </button>
                </div>
            </form>
        </div>
    ) : null;
};

export default Newsletter;
