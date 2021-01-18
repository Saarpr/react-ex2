import React, {Component, useState} from 'react';
import { TextField,FormControl,InputLabel } from '@material-ui/core';

const DelForm = ({ delivery , onSave }) => {

    const [tmpDelivery, setTmpDelivery ] = useState({...delivery});

    function handleNameChanged(event) {
        setTmpDelivery({...tmpDelivery,name:event.target.value})
    }
    function handleCityChanged(event) {
        setTmpDelivery({...tmpDelivery,city:event.target.value})
    }
    function handleDateChanged(event) {
        setTmpDelivery({...tmpDelivery,date:event.target.value})
    }


    return (
        <div className="del-form">
            <FormControl>
                <input defaultValue={tmpDelivery.name} onChange={handleNameChanged}/>
                <input defaultValue={tmpDelivery.city} onChange={handleCityChanged}/>
                <input defaultValue={tmpDelivery.date} onChange={handleDateChanged}/>
            <button onClick={() => {
                onSave(tmpDelivery);
                setTmpDelivery({id:"",name: "",city:"",date:""});
            }}>{tmpDelivery.id?"Save":"Add"}</button>
            </FormControl>

        </div>
    );
}
export default DelForm;

