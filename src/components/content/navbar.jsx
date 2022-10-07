import React from 'react';
import {Link} from 'react-router-dom';
import Cartwidget from './cartwidget';
import Secciones from '../layouts/secciones';
import Dropdown from '../layouts/dropdown';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                            <Dropdown/>
                        </ul>
                        <Link className="nav-link btn btn-secondary" to={'/carrito'}><i className="bi bi-cart2"></i></Link>
                    </div>
                </div>
            </nav>  
        </>
    );
}

export default Navbar;
