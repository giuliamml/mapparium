import React, { Component } from 'react';
import Header from './Header';
import globe from './images/globe.gif';
import Css from './App.css';

class Homepage extends Component {
    render() {
        return (
            <div className='homepage'>

                <div className='homepage-body-right'>
                    <ul>
                        <li><a href="./Rome.js">ROMA</a></li>
                        <li><a href="./Pompeii.js">POMPEII</a></li>
                        <li><a hrf="./Aquileia.js"></a>AQUILEIA</li>
                    </ul>
                </div>
                <div className='homepage-body-left'>

                    <img src={globe} alt='mapparium' />
                </div>

            </div>












        );

    }
}



export default Homepage;

