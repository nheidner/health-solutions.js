import { graphql } from 'gatsby';

export const columnImageMedium = graphql`
    fragment columnImageMedium on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const columnImageLarge = graphql`
    fragment columnImageLarge on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const cardHeaderImage = graphql`
    fragment cardHeaderImage on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const galleryImage = graphql`
    fragment galleryImage on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const SVGImage = graphql`
    fragment SVGImage on File {
        extension
        publicURL
    }
`;

export const popupColumnImage = graphql`
    fragment popupColumnImage on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;
