import React, { Component, useEffect } from 'react';
import '../Style/DeliveryList.css';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 113,
        width: "100%",
        maxWidth: "30%",
        minHeight:430,
        maxHeight: 430,
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        overflow: "auto",
        borderRadius: 10
    },
    listSection: {
        maxHeight: 50,
        backgroundColor: "inherit",
    },
    ul: {
        backgroundColor: "inherit",
        padding: 0
    }
}));

const DeliveryList = ({ deliveries, onDelete,onSelect }) => {
    const classes = useStyles();
    return (
        <List className={classes.root} >
            {deliveries.map((currDelivery, index) => (
                <li key={`section-${currDelivery}`} className={classes.listSection}>
                    <div  className="delivery-preview" display="flex" bgcolor="background.paper">
                        {index+1} &nbsp; {currDelivery.date} &nbsp; {currDelivery.name} &nbsp;{currDelivery.city }  &nbsp;
                        <div className="delivery-buttons">
                            <Fab size="small" color="secondary" aria-label="edit"onClick={() => onSelect(currDelivery.id)}><EditIcon /></Fab>
                            <Fab size="small" color="secondary" aria-label="delete"onClick={() => onDelete(currDelivery.id)}><DeleteIcon /></Fab>
                        </div>
                    </div>
                </li>
            ))}
        </List>
    );

    // return (
    //     <div className="delivery-list">
    //         {deliveries.map((currDelivery, index) => (
    //             <div  key={currDelivery.id} >
    //                 <Box  className="delivery-preview" display="flex" p={1} bgcolor="background.paper">
    //                     {index+1} &nbsp; {currDelivery.date} &nbsp; {currDelivery.name} &nbsp;{currDelivery.city }  &nbsp;
    //                     <div className="delivery-buttons" className={classes.root}  >
    //                         <Fab size="small" color="secondary" aria-label="edit"onClick={() => onSelect(currDelivery.id)}><EditIcon /></Fab>
    //                         <Fab size="small" color="secondary" aria-label="delete"onClick={() => onDelete(currDelivery.id)}><DeleteIcon /></Fab>
    //                     </div>
    //                 </Box>
    //             </div>
    //         ))}
    //     </div>
    // );
}

export default DeliveryList;









// import React, { Component, useEffect } from 'react';
// import Box from '@material-ui/core/Box';
// import '../Style/DeliveryList.css';
// import { makeStyles } from '@material-ui/core/styles';
// import Fab from '@material-ui/core/Fab';
// import EditIcon from '@material-ui/icons/Edit';
// import DeleteIcon from '@material-ui/icons/Delete';
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//         },
//     },
//     extendedIcon: {
//         marginRight: theme.spacing(1),
//     },
// }));
//
// const DeliveryList = ({ deliveries, onDelete,onSelect }) => {
//     const classes = useStyles();
//     return (
//         <div className="delivery-list">
//             {deliveries.map((currDelivery, index) => (
//                 <div  key={currDelivery.id} >
//                     <Box  className="delivery-preview" display="flex" p={1} bgcolor="background.paper">
//                         {index+1} &nbsp; {currDelivery.date} &nbsp; {currDelivery.name} &nbsp;{currDelivery.city }  &nbsp;
//                         <div className="delivery-buttons" className={classes.root}  >
//                             <Fab size="small" color="secondary" aria-label="edit"onClick={() => onSelect(currDelivery.id)}><EditIcon /></Fab>
//                             <Fab size="small" color="secondary" aria-label="delete"onClick={() => onDelete(currDelivery.id)}><DeleteIcon /></Fab>
//                         </div>
//                     </Box>
//                 </div>
//             ))}
//         </div>
//     );
// }
//
// export default DeliveryList;