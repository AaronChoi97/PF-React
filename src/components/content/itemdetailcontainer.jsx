import React from 'react';

const Itemdetailcontainer = ({prod}) => {
    return (
        <>
            <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{prod.nombre}</h5>
                        <p className="card-text">Precio: {prod.precio}</p>
                        <p className="card-text">Contenido Neto: {prod.contenido} mL</p>
                        <p className="card-text"><small className="text-muted">Stock: {prod.stock}</small></p>
                        <button className='btn btn-dark'>Comprar</button>
                    </div>
                </div>
        </>
    );
}

export default Itemdetailcontainer;
