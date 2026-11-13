import { useState } from 'react'

import './App.css'
import Header from './assets/componentes/Header'
import Producto2 from './assets/componentes/Producto2'
import Producto from './assets/componentes/Producto'
import Saludo from './assets/componentes/Saludo'
import BarraProgreso from './assets/componentes/BarraProgreso'

function App() {

  return (
    <>
      <Header/>
      <Saludo usuario={"Carmen"}></Saludo>
      <Producto nombre = "Kinder" precio = "81" disponible = {true}/>
      <Producto2 nombre = "Coche"/>
      <BarraProgreso porcentaje={50}/>
    </>
  )
}

export default App
