import { useState } from 'react'

import './App.css'
import Header from './assets/componentes/Header'
import ProductoEventos from './assets/componentes/ProductoEventos'
import Producto from './assets/componentes/Producto'
import TarjetaBienvenida from './assets/componentes/TarjetaBienvenida'
import BarraProgreso from './assets/componentes/BarraProgreso'
import AlertBox from './assets/componentes/AlertBox'
import ProductoDescuento from './assets/componentes/ProductoDescuento'
import Pedido from './assets/componentes/Pedido'

function App() {

  return (
    <>
      <Header/>
      
      <h2 style={{fontStyle: "italic"}}> Saludo personal</h2>
        <TarjetaBienvenida usuario={"Carmen"}></TarjetaBienvenida>
        <TarjetaBienvenida usuario={"Marcos"}></TarjetaBienvenida>
        <TarjetaBienvenida usuario={"Ana"}></TarjetaBienvenida>

      <h2 style={{fontStyle: "italic"}}> Ejercicio Props</h2>
        <p style={{fontStyle: "italic", fontWeight:"bold"}}>Ejercicio 1</p>
          <Producto nombre = "Kinder" precio = "4" disponible = {true}/>
        <p style={{fontStyle: "italic", fontWeight:"bold"}}>Ejercicio 2</p>
          <BarraProgreso porcentaje={81}/>
        <p style={{fontStyle: "italic", fontWeight:"bold"}}>Ejercicio 3</p>
          <AlertBox tipo = {"exito"} ></AlertBox>
      
      <h2 style={{fontStyle: "italic"}}>Ejercicio Eventos</h2>
      <ProductoEventos nombre = "Coche" precio={5} cantidad={2}/>
      
      <h2 style={{fontStyle: "italic"}}>Ejercicio Funciones</h2>
        <p style={{fontStyle: "italic", fontWeight:"bold"}}>Ejercicio 1</p>
          <ProductoDescuento nombre ={"ordenador"} precio={1200} descuento = {10}/>
        <p style={{fontStyle: "italic", fontWeight:"bold"}}>Ejercicio 2</p>
          <Pedido nombre={"Jamón"} cantidad={2} precio={650}></Pedido>
    </>
  )
}

export default App
