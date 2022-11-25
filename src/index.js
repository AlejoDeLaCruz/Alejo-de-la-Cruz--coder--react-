import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App'
//import App from './App'
import './Style.scss';                                    //ESTo se importa de otra manera (Sin el from)
import 'bootstrap/dist/css/bootstrap.min.css';

const elemento_del_dom = document.getElementById("root");               //con esta constante llamo al div "root" que es en donde se crea todo el html de mi app
const root = ReactDOM.createRoot(elemento_del_dom);         
root.render(
    <App/>                                                             //Esta manera es la nueva manera de llamar una funcion <App/>
);

