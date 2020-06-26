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
                to: '#home',
            },
            {
                item: {
                    en: 'Our Story',
                    de: 'Über Uns',
                },
                to: '#about',
            },
        ],
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-typescript`,
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/static/img`,
                name: 'uploads',
            },
        },
        // {
        //     // keep as first gatsby-source-filesystem plugin for gatsby image support
        //     resolve: 'gatsby-source-filesystem',
        //     options: {
        //         path: `${__dirname}/src/assets`,
        //         name: 'assets',
        //     },
        // },
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
        'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
};
