import React from 'react';
import Series from './Series';
import getGallery from './Gallery-get';


export default function Gallery() {
    return (
        <div>
            <div className='Title'>
                <h1>Welcome to Kodflix.</h1>
            </div>
            <div className='container'>
                {
                    getGallery().map(series => (
                        <Series
                            key={series.id}
                            id={series.id}
                            name={series.name}
                            image={series.image} />

                    ))

                }
            </div>
        </div>
    )

}
