import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import React, { useState } from 'react';
import keyDatas from './data/keyDatas.json';
import mapmarker from './images/map-marker.jpg';
import Css from './App.css';
import Header from './Header';



console.log(keyDatas);
export default function Rome() {

    //firstState = define the map area

    const [viewport, setViewport] = useState({
        latitude: 41.879040,
        longitude: 12.492439,
        width: '100vw',
        height: '100vh',
        zoom: 17
    })

    //secondState = define a selectedMonument and create a state for it

    const [selectedMonument, setSelectedMonument] = useState(null);

    console.log(process.env)

    return <div>
        <div className='header'>
            <Header/>
        </div>
       
        
        <ReactMapGL {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => { setViewport(viewport); }}
            mapStyle='mapbox://styles/giuliamml/ck1yus3fc2sn01cqvafzo6b8t' >

            {keyDatas.datas.map((monument) => (

                /*add info to select the area of the marker within the map 
                and <button> to show it */
                

                <Marker

                    key={monument.ID}
                    latitude={monument.coordinates[0]}
                    longitude={monument.coordinates[1]}
                >

                    <button className='marker-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedMonument(monument);
                        }}
                    >
                        
                    </button>

                </Marker>
            ))}

            {/* create the event for the secondState of the selectedMonument */}

            {selectedMonument ? (
                <Popup
                    latitude={selectedMonument.coordinates[0]}
                    longitude={selectedMonument.coordinates[1]}
                    onClose={() => {setSelectedMonument(null);}}

                >
                    <div className='popup'>
                        <h2>{selectedMonument.ID}</h2>
                        <p>{selectedMonument.description}</p>
                    </div>


                </Popup>
            ) : null}


        </ReactMapGL>

    </div>

}

