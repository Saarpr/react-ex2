import { useState } from "react";
import DelList from "./DelList";
import DelForm from "./DelForm";
import DelData from '../Data/tasks.json';

const Home = () => {
    const [dels, setDel] = useState(DelData)
    const [selected, setSelected] = useState(null)

    function deleteDelivery(id){
        const newDels = dels.filter(del => del.id !== id);
        setDel(newDels);
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
        const ind = nextId(dels);
        delivery.id = ind
        console.log("Add")
        let tmpList= dels;
        tmpList.push(delivery)
        setDel([...tmpList])
        console.log(delivery);
    }

    function updateDelivery (delivery){
        console.log("Update" , delivery)
        setDel([...dels]);
    }

    function selectDelivery (id){
        const delivery = dels.find(del => del.id === id);
        console.log(delivery)
        setSelected(delivery);
    }

    function  nextId(dels) {
        let max = Math.max(...dels.map((curr) => curr.id));
        return ++max;
    }

    return (
        <div className="home">
            <DelList dels={dels} onDelete={deleteDelivery} onSelect={selectDelivery} />
            <DelForm delivery={selected} onSave={saveDelivery} />
        </div>
    );
}

export default Home;