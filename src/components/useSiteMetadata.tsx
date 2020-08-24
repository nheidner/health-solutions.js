import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetadataQuery } from '../../gatsby-graphql';

const useSiteMetadata = () => {
    const siteMetadata = useStaticQuery<SiteMetadataQuery>(
        graphql`
            query SiteMetadata {
                en: markdownRemark(
                    frontmatter: {
                        locale: { eq: "en" }
                        templateKey: { eq: "settings" }
                    }
                ) {
                    frontmatter {
                        meta_description
                    }
                }
                de: markdownRemark(
                    frontmatter: {
                        locale: { eq: "de" }
                        templateKey: { eq: "settings" }
                    }
                ) {
                    frontmatter {
                        meta_description
                    }
                }
            }
        `
    );
    return siteMetadata;
};

export default useSiteMetadata;
