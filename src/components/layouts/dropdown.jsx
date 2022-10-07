import React from 'react';
import {Link} from 'react-router-dom';

const Dropdown = () => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categoria</a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="#">Cervezas</a>
          <a className="dropdown-item" href="#">Vinos</a>
          <a className="dropdown-item" href="#">Fernet</a>
          <a className="dropdown-item" href="#">Whiskys</a>
        </div>
      </li>  
    </>
  );
}

export default Dropdown;
