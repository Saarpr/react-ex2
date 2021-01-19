import React, {Component, useState, useEffect} from 'react';
import { TextField,FormControl,InputLabel } from '@material-ui/core';

const EditDelivery = ({ delivery , onSave }) => {

    const [tmpDelivery, setTmpDelivery ] = useState({...delivery});

    useEffect(() => {
        setTmpDelivery({...delivery});
    }, [delivery]);

    function handleNameChanged(event) {
        setTmpDelivery({...tmpDelivery,name:event.target.value})
    }
    function handleCityChanged(event) {
        setTmpDelivery({...tmpDelivery,city:event.target.value})
    }
    function handleDateChanged(event) {
        setTmpDelivery({...tmpDelivery,date:event.target.value})
    }
    function onClick(){
        onSave(tmpDelivery);
    }

    return (
        <div className="del-form">
            <FormControl>
                <input value={tmpDelivery.name} onChange={handleNameChanged}/>
                <input value={tmpDelivery.city} onChange={handleCityChanged}/>
                <input value={tmpDelivery.date} onChange={handleDateChanged}/>
                <button onClick={onClick}>{tmpDelivery.id?"Save":"Add"}</button>
            </FormControl>

        </div>
    );
}
export default EditDelivery;

