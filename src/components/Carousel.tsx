import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { FC } from 'react';

export const ImageCarousel: FC<{
    images: string[];
    [props: string]: any;
}> = ({ images, ...props }) => {
    return (
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
                        <img src={image} alt='Placeholder image' />
                    </figure>
                );
            })}
        </Carousel>
    );
};
