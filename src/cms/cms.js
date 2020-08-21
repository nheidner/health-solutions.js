import { IndexTemplate } from '../templates/index';
import { ContactPopupTemplate } from '../templates/contact_popup';
import { ContactTemplate } from '../templates/contact';
import { FooterTemplate } from '../components/layout/Footer';
import { HeaderTemplate } from '../components/layout/Header';
import CMS from 'netlify-cms-app';
import React from 'react';
import withEmotion from './with-emotion';

const IndexPagePreviewEn = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    return (
        <IndexTemplate
            pageTitle={data.pageTitle}
            home_section={data.home_section}
            about_us_section={data.about_us_section}
            philosophy_section={data.philosophy_section}
            verfahren_section={data.verfahren_section}
            anonymous_section_1={data.anonymous_section_1}
            anonymous_section_2={data.anonymous_section_2}
            praxis_section={data.praxis_section}
            labor_section={data.labor_section}
            team_section={data.team_section}
            contact_section={data.contact_section}
            preview={true}
        />
    );
};
CMS.registerPreviewTemplate('index_en', withEmotion(IndexPagePreviewEn));

const ContactPopupPagePreviewEn = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    return (
        <ContactPopupTemplate
            header={data.header}
            form={data.form}
            image={data.image}
            preview={true}
        />
    );
};
CMS.registerPreviewTemplate(
    'contact_popup_en',
    withEmotion(ContactPopupPagePreviewEn)
);

const ContactPagePreviewEn = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    return (
        <ContactTemplate
            header_section={data.header_section}
            contact_section={data.contact_section}
            preview={true}
        />
    );
};
CMS.registerPreviewTemplate('contact_en', withEmotion(ContactPagePreviewEn));

const SettingsPreviewEn = ({ entry }) => {
    const data = entry.getIn(['data']).toJS();
    return (
        <div>
            <FooterTemplate footerContent={data.footer} />
        </div>
    );
};
CMS.registerPreviewTemplate('settings_en', withEmotion(SettingsPreviewEn));
