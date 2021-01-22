import React, { Component, useEffect } from 'react';
import  pic from '../Images/mobel.svg'

const Truck = () => {
    return (
        <div className="truck">
            <img src={pic} className="truck-img" alt="truck" />
        </div>
    );
}

export default Truck;