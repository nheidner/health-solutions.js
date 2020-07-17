import React, { FC, useState } from 'react';
import GatsbyImg, { FluidObject } from 'gatsby-image';

const Img: FC<{ source: any; alt: string; [props: string]: any }> = ({
    source,
    alt,
    ...props
}) => {
    return source.childImageSharp ? (
        <GatsbyImg fluid={source.childImageSharp.fluid} alt={alt} {...props} />
    ) : (
        <img src={source} alt={alt} {...props} />
    );
};

export default Img;
