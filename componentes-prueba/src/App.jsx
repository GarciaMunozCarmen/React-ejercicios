import { useState } from 'react'

import './App.css'
import Header from './assets/componentes/Header'
import ProductoEventos from './assets/componentes/ProductoEventos'
import Producto from './assets/componentes/Producto'
import TarjetaBienvenida from './assets/componentes/TarjetaBienvenida'
import BarraProgreso from './assets/componentes/BarraProgreso'
import AlertBox from './assets/componentes/AlertBox'

function App() {

  return (
    <>
      <Header/>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 1</h2>
      <TarjetaBienvenida usuario={"Carmen"}></TarjetaBienvenida>
      <TarjetaBienvenida usuario={"Marcos"}></TarjetaBienvenida>
      <TarjetaBienvenida usuario={"Ana"}></TarjetaBienvenida>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 2</h2>
      <Producto nombre = "Kinder" precio = "4" disponible = {true}/>
      <BarraProgreso porcentaje={81}/>
      <hr />
      <AlertBox tipo = {"exito"} ></AlertBox>
      <h2 style={{fontStyle: "italic"}}> Ejercicio 3</h2>
      <ProductoEventos nombre = "Coche" precio={5} cantidad={2}/>
    </>
  )
}

export default App
