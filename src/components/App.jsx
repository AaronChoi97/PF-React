import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../style/App.css'
import Contador from './layouts/contador';
import Itemlistcontainer from './content/itemlistcontainer';
import Navbar from './content/navbar';
import Home from './content/home';
import Cartwidget from './content/cartwidget';
import Contacto from './content/contacto';
import Categoria from './content/categoria';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Itemlistcontainer/>} path='/producto/:id'/>
          <Route element={<Contacto/>} path='/contacto'/>
          <Route element={<Cartwidget/>} path='/carrito'/>
          <Route element={<Categoria/>} path='/categoria/:id'/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
