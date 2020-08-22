import React, { FC, useState } from 'react';
import GatsbyImg, { FluidObject } from 'gatsby-image';

const Img: FC<{ source: any; alt: string; [props: string]: any }> = ({
    source,
    alt,
    ...props
}) => {
    if (!source) return <img />;
    if (!source.childImageSharp && source.extension === 'svg') {
        return <img src={source.publicURL} alt={alt} {...props} />;
    }
    if (source.childImageSharp) {
        return (
            <GatsbyImg
                fluid={source.childImageSharp.fluid}
                alt={alt}
                {...props}
            />
        );
    }
    return <img src={source} alt={alt} {...props} />;
};

export default Img;
