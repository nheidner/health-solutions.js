import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { FC } from 'react';
import Img from './Img';

export interface GalleryImage {
    alt: string;
    source: any;
}

export const ImageCarousel: FC<{
    images?: GalleryImage[];
    [props: string]: any;
}> = ({ images, ...props }) => {
    return images ? (
        <Carousel
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            dynamicHeight={false}
            useKeyboardArrows={true}
            showArrows={true}
            swipeable={true}
            {...props}>
            {images.map((image, index) => {
                return (
                    <figure key={index}>
                        {image.source ? (
                            <Img source={image.source} alt={image.alt} />
                        ) : null}
                    </figure>
                );
            })}
        </Carousel>
    ) : (
        <div></div>
    );
};
