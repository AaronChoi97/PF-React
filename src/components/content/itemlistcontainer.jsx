import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Itemdetailcontainer from './itemdetailcontainer';

const Itemlistcontainer = () => {
    const [prod, setprod] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        fetch('../json/data.json')
        .then(resp => resp.json())
        .then(producto => {
            const prod1 = producto.find(proArray => proArray.id == id)
            setprod(prod1)
        })
    }, [])
    return (
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <Itemdetailcontainer prod={prod}/>
            </div>
        </div>
    );
}

export default Itemlistcontainer;
