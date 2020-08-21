import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const columnImageMedium = graphql`
    fragment columnImageMedium on File {
        childImageSharp {
            fluid(maxWidth: 400) {
                #720
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const columnImageLarge = graphql`
    fragment columnImageLarge on File {
        childImageSharp {
            fluid(maxWidth: 400) {
                #720
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const cardHeaderImage = graphql`
    fragment cardHeaderImage on File {
        childImageSharp {
            fluid(maxWidth: 200) {
                #401
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const galleryImage = graphql`
    fragment galleryImage on File {
        childImageSharp {
            fluid(maxWidth: 200) {
                #350
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
            fluid(maxWidth: 300) {
                #500
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const fullWidthImage = graphql`
    fragment fullWidthImage on File {
        childImageSharp {
            fluid(maxWidth: 1000) {
                #1344
                ...GatsbyImageSharpFluid
            }
        }
    }
`;
