import React from 'react';
import ReactDOM from 'react-dom'
import PrimeraApp from './PrimeraApp';
import './index.css';


//1
const saludo = <h1>hola, esto esta en componente de index</h1>;
const divRoot = document.getElementById('root')//document.querySelector('#root');
ReactDOM.render(saludo,divRoot);

//2     
ReactDOM.render( <PrimeraApp saludo="saludo desde props"  />  , divRoot )







console.log(divRoot)
