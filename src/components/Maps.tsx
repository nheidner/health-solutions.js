import React, { FC } from 'react';

const Maps = () => {
    return (
        <div className='container map'>
            <iframe
                className='map_iframe'
                title='Google Maps Embed'
                frameBorder='0'
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyw9Yv8lRqEcROlWIrlxpItQ&key=${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`}
                allowFullScreen></iframe>
        </div>
    );
};

export default Maps;
