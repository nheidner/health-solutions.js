import React, { FC } from 'react';

const Maps = () => {
    // const API_KEY = 'AIzaSyBn-Rc7e7VVjc_bwEi2AW0y1AN_sev1OGw';
    console.log(process.env.GOOGLE_MAPS_API_KEY);
    return (
        <div className='container map'>
            <iframe
                className='map_iframe'
                title='Google Maps Embed'
                frameBorder='0'
                src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJpYVM1O90q0cRPSQCBWM37Nw&key=${process.env.GOOGLE_MAPS_API_KEY}`}
                allowFullScreen></iframe>
        </div>
    );
};

export default Maps;
