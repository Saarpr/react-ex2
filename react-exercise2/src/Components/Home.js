import { useState } from "react";
import DeliveryList from "./DeliveryList";
import EditDelivery from "./EditDelivery";
import DelData from '../Data/tasks.json';

const Home = () => {
    const [deliveries, setDeliveries] = useState(DelData)
    const [selected, setSelected] = useState(null)

    function deleteDelivery(id){
        setDeliveries(deliveries.filter(del => del.id !== id));
    }

    function saveDelivery(delivery){
        if (delivery.id) {
            updateDelivery(delivery);
        }
        else {
            addDelivery(delivery);
        }
        setSelected({id:"",name: "",city:"",date:""});
    }

    function addDelivery(delivery){
        delivery.id = nextId(deliveries);
        deliveries.push(delivery)
        setDeliveries([...deliveries])
        console.log(delivery);
    }

    function updateDelivery (delivery){
        console.log("Update" , delivery)
        let d = deliveries.find(d => d.id === delivery.id);
        deliveries[deliveries.indexOf(d)] = delivery;
        setDeliveries([...deliveries]);
    }

    function selectDelivery (id){
        const delivery = deliveries.find(del => del.id === id);
        console.log(delivery)
        setSelected(delivery);
    }

    function  nextId(deliveries) {
        let max = Math.max(...deliveries.map((curr) => curr.id));
        if (max>0)
            return ++max;
        else
            return 1;
    }

    return (
        <div className="home">
            <DeliveryList className="DeliveryList" deliveries={deliveries} onDelete={deleteDelivery} onSelect={selectDelivery} />
            <EditDelivery className="EditDelivery" delivery={selected} onSave={saveDelivery} />
        </div>
    );
}

export default Home;