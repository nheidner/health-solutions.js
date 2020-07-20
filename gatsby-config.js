const locales = require('./locales');

module.exports = {
    siteMetadata: {
        title: 'Renergy',
        description: 'Renergy description',
        localesSettings: locales,
        menu: [
            {
                item: {
                    en: 'Home',
                    de: 'Start',
                },
                to: '/#home',
            },
            {
                item: {
                    en: 'Our Story',
                    de: 'Über Uns',
                },
                to: '/#about',
            },
            {
                item: {
                    en: 'Philosophie',
                    de: 'Philosophie',
                },
                to: '/#philosophy',
            },
            {
                item: {
                    en: 'Verfahren',
                    de: 'Verfahren',
                },
                to: '/#verfahren',
            },
            {
                item: {
                    en: 'Praxis',
                    de: 'Praxis',
                },
                to: '/#praxis',
            },
            {
                item: {
                    en: 'Team',
                    de: 'Team',
                },
                to: '/#team',
            },
            {
                item: {
                    en: 'contact',
                    de: 'Kontakt',
                },
                to: '/#contact',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-typescript`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-fontawesome-css`,
        {
            resolve: `gatsby-plugin-modal-routing`,
            options: {
                // A selector to set react-modal's app root to, default is `#___gatsby`
                // See http://reactcommunity.org/react-modal/accessibility/#app-element
                // appElement: '#___gatsby',

                // Object of props that will be passed to the react-modal container
                // See http://reactcommunity.org/react-modal/#usage
                modalProps: {
                    closeTimeoutMS: 500,
                },
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/assets`,
                name: 'assets',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/markdown`,
                name: 'pages',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-graphql-codegen`,
            options: {
                fileName: `./gatsby-graphql.ts`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-relative-images',
                        options: {
                            name: 'uploads',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: 'gatsby-remark-copy-linked-files',
                        options: {
                            destinationDir: 'static',
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-netlify-cms',
        },
        {
            resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
            options: {
                develop: false, // Activates purging in npm run develop
                purgeOnly: ['/all.sass'], // applies purging only on the bulma css file
            },
        }, // must be after other CSS plugins
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
                enableIdentityWidget: `true`,
                publicPath: `admin`,
                htmlTitle: `Editor`,
            },
        },
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
