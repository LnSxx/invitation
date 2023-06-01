import React from 'react';

const YandexTaxiButton = () => {
    const openYandexGo = () => {
        const latitude = 42.816544;
        const longitude = 74.637783;
        const url = `https://3.redirect.appmetrica.yandex.com/route?end-lat=${latitude}&end-lon=${longitude}&level=50&ref=yoursiteru&appmetrica_tracking_id=1178268795219780156`;
        window.open(url);
    };

    return (
        <div className="w-max h-max p-6" onClick={ openYandexGo }>
            <div className='flex'>
                <p>Заказать такси</p>
            </div>
        </div>
    );
};

export default YandexTaxiButton;