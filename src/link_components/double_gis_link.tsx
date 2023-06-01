import React from 'react';

const DoubleGisLink = () => {
    const open2GIS = () => {
        const url = `https://go.2gis.com/wn9s1q`;
        window.open(url);
    };

    return (
        <div className="w-max h-max p-6 " onClick={ open2GIS }>
            <div className='flex'>
                <p>Открыть в 2ГИС</p>
            </div>
        </div>
    );
};

export default DoubleGisLink;
