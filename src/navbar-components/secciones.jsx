import React from 'react';
import Cartwidget from './cartwidget';

const Secciones = () => {
    return (
        <>
            <li className="nav-item">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Preguntas Frecuentes</a>
            </li>  
        </>
    );
}

export default Secciones;
