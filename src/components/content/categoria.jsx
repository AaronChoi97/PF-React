import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarProd } from '../../utils/funciones';


const Categoria = () => {
    const [prod, setProd] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarProd('../json/data.json').then(prod => {
            const prodCat = prod.filter(producto => producto.idCat == id)
            console.log (prod)
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
    
            setProd(cardProd)
        })
        
    }, [id]);
    
    return (
        <>
        <div className='row'>
            {prod}
        </div>
        </>
    );
}

export default Categoria;
