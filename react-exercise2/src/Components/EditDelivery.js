import React, {Component, useState, useEffect} from 'react';
import { TextField , Button , Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #EE4D47 100%, #EE4D47 100%)',
        border: 0,
        color: 'white',
        height: 48,
        width: 100,
        marginLeft:40,
    },
    label: {
        textTransform: 'capitalize',
    },
    marginBox: {
        borderRadius: 4,
        backgroundColor:"white",
        width: "90%",
        marginBottom: '20px',
        marginLeft:'60px'
    },

});

const EditDelivery = ({ delivery , onSave }) => {
    const classes = useStyles();
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
        <Box display="flex"
             width={300} height={200}
             alignItems="center"
             marginTop="121px"
             justifyContent="center"
             flexDirection="column"
             className="del-form">
                <TextField size="small" className={classes.marginBox} variant="outlined" color="secondary"  value={tmpDelivery.name} onChange={handleNameChanged}/>
                <TextField size="small" className={classes.marginBox} variant="outlined" color="secondary" value={tmpDelivery.city} onChange={handleCityChanged}/>
                <TextField size="small" className={classes.marginBox} variant="outlined" color="secondary" value={tmpDelivery.date} onChange={handleDateChanged}/>
                <Button onClick={onClick} classes={{ root: classes.root, label: classes.label }}>{tmpDelivery.id?"Save":"Add"}</Button>
        </Box>
    );
}
export default EditDelivery;