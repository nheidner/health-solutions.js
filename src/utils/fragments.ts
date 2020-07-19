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

export const logo = graphql`
    fragment logo on File {
        childImageSharp {
            fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
            }
        }
        extension
        publicURL
    }
`;
