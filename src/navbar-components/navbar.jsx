import React from 'react';
import Cartwidget from './cartwidget';
import Home from './home';
import Secciones from './secciones';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Home/>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <Secciones/>
                        </ul>
                        <Cartwidget/>
                    </div>
                </div>
            </nav>  
        </>
    );
}

export default Navbar;
