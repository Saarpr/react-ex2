import React, { Component } from 'react';

const DelList = ({ dels, onDelete,onSelect }) => {
    return (
        <div className="del-list">
            {dels.map((del,index) => (
                <div className="del-preview" key={del.id} >
                    <h1>{index+1}</h1>
                    <h2>{ del.name }</h2>
                    <h2>{ del.city }</h2>
                    <h2>{ del.date }</h2>
                    <button onClick={() => onDelete(del.id)}>delete blog</button>
                    <button onClick={() => onSelect(del.id)}>update blog</button>
                </div>
            ))}
        </div>
    );
}

export default DelList;
