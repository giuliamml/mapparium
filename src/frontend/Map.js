import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import React, { useState } from 'react';
import keyDatas from './data/keyDatas.json';
import mapmarker from './images/map-marker.jpg';
import Css from './App.css';


console.log(keyDatas);
export default function Map() {

    //firstState = define the map area

    const [viewport, setViewport] = useState({
        latitude: 41.890251,
        longitude: 12.492373,
        width: '100vw',
        height: '100vh',
        zoom: 12
    })

    //secondState = define a selectedMonument and create a state for it

    const [selectedMonument, setSelectedMonument] = useState(null);

    console.log(process.env)

    return <div>
        <ReactMapGL {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={viewport => { setViewport(viewport); }}
            mapStyle='mapbox://styles/giuliamml/ck1m6bvzo0asc1cp2lsmdw2bw' >

            {keyDatas.datas.map((monument) => (

                /*add info to select the area of the marker within the map 
                and <button> to show it */

                <Marker

                    key={monument.ID}
                    latitude={monument.coordinates[0]}
                    longitude={monument.coordinates[1]}
                >

                    <button class='marker-btn'
                        onClick={(e) => {
                            e.preventDefault();
                            setSelectedMonument(monument);
                        }}
                    >
                        <img src={mapmarker} alt='map-marker' />
                    </button>

                </Marker>
            ))}

               {/* create the event for the secondState of the selectedMonument */}

            {selectedMonument ? (
                <Popup
                    latitude={selectedMonument.coordinates[0]}
                    longitude={selectedMonument.coordinates[1]}>

                    <div>{selectedMonument.ID}</div>

                </Popup>
            ) : null}


        </ReactMapGL>

    </div>

}

