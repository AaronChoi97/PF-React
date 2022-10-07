import React, {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarProd } from '../../utils/funciones';


const Categoria = () => {
    const [prod, setprod] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        consultarProd('../json/data.json').then(prod => {
            const prodCat = prod.filter(producto => producto.idCat == id)
            console.log(prodCat)
            const cardProd = prodCat.map(producto =>
            <div className="card cardProducto" key={producto.id} style={{width: '18rem'}}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Precio: {producto.precio}</p>
                    <p className="card-text">Contenido Neto: {producto.contenido} mL</p>
                    <p className='card-text'>Stock: {producto.stock}</p>
                    <button className='btn btn-dark'><Link className='nav-link' to={'/producto/'+producto.id}>Ver Producto</Link></button>
                </div>
            </div>
            )
            
            setprod(cardProd)})
        }, []);
    
    return (
        <>
            {prod}
        </>
    );
}

export default Categoria;
