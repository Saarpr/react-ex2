import React, { Component, useEffect } from 'react';

const DeliveryList = ({ deliveries, onDelete,onSelect }) => {
    return (
        <div className="delivery-list">
            {deliveries.map((currDelivery, index) => (
                <div className="delivery-preview" key={currDelivery.id} >
                    <h1>{index+1}</h1>
                    <h2>{ currDelivery.name }</h2>
                    <h2>{ currDelivery.city }</h2>
                    <h2>{ currDelivery.date }</h2>
                    <button onClick={() => onDelete(currDelivery.id)}>delete blog</button>
                    <button onClick={() => onSelect(currDelivery.id)}>update blog</button>
                </div>
            ))}
        </div>
    );
}

export default DeliveryList;