import React from 'react';
import {Link} from 'react-router-dom';
import { consultarProd } from '../../utils/funciones';

const Dropdown = ({lista}) => {
  return (
    <>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categoria</a>
        <div className="dropdown-menu">
        
          <Link className='dropdown-item' to={'/categoria/cervezas'}>{lista[0]}</Link>
          <Link className='dropdown-item' to={'/categoria/vinos'}>{lista[1]}</Link>
          <Link className='dropdown-item' to={'/categoria/fernet'}>{lista[2]}</Link>
          <Link className='dropdown-item' to={'/categoria/whiskys'}>{lista[3]}</Link>

        </div>
      </li>  
    </>
  );
}

export default Dropdown;
