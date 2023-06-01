import React from 'react';

const GoogleMapsLink = () => {
    const openGoogleMaps = () => {
        const latitude = "42.8165261";
        const longitude = "74.6383285";
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        window.open(url);
    };

    return (
        <div className="w-max h-max p-6 " onClick={ openGoogleMaps }>
            <div className='flex'>
                <p>Открыть в Google Maps</p>
            </div>
        </div>
    );
};

export default GoogleMapsLink;