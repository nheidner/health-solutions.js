import React, { FC, useState } from 'react';

export const ImageCarousel: FC<{ images: string[] }> = ({ images }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

    return (
        <div className='image-carousel'>
            <ul className='image-container'>
                {images.map((image, index) => {
                    return (
                        <li
                            style={{
                                transform: `translate(${
                                    -100 * (selectedImageIndex - index)
                                }%, -50%)`,
                            }}
                            key={index}
                            className={
                                selectedImageIndex === index ? 'selected' : ''
                            }>
                            <figure>
                                <img src={image} alt='Placeholder image' />
                            </figure>
                        </li>
                    );
                })}
            </ul>
            <div className='indicator-container py-5'>
                <div
                    className='image-arrow previous'
                    onClick={() =>
                        setSelectedImageIndex(
                            selectedImageIndex <= 0
                                ? images.length - 1
                                : selectedImageIndex - 1
                        )
                    }>
                    previous
                </div>
                <div className='image-indicators'>
                    <div
                        className='image-indicators-container-absolute'
                        style={{
                            left: `${
                                (100 / (images.length - 1)) * selectedImageIndex
                            }%`,
                        }}>
                        <div className='image-indicators-container-relative'>
                            {images.map((_, index) => {
                                return (
                                    <div
                                        style={{
                                            transform: `translate(${
                                                -100 *
                                                (selectedImageIndex - index)
                                            }%, 0)`,
                                        }}
                                        className={
                                            (selectedImageIndex === index
                                                ? 'selected '
                                                : '') + 'image-indicator'
                                        }
                                        onClick={() =>
                                            setSelectedImageIndex(index)
                                        }
                                        key={index}>
                                        {index + 1}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className='image-arrow next'
                    onClick={() =>
                        setSelectedImageIndex(
                            selectedImageIndex >= images.length - 1
                                ? 0
                                : selectedImageIndex + 1
                        )
                    }>
                    next
                </div>
            </div>
        </div>
    );
};
