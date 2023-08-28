import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sales from './pages/sales'
import Sale_detail from './pages/sale_detai'
import Create_sale from './pages/Create_sale'
import SaleForm from './pages/sub_Csale/saleForm'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <h1 class='bg-blue-500'>Informe</h1> } />
        <Route path='/user' element={<h1>Usuarios</h1>} />
        <Route path='/add-user' element={<h1>Nuevo Usuario</h1>} />
        <Route path='/user/:id' element={<h1>Actualizar Usuario</h1>} />
        <Route path='/produt' element={<h1>Productos</h1>} />
        <Route path='/add-produt' element={<h1>Nuevo Producto</h1>} />
        <Route path='/produt/:id' element={<h1>Actualizar Producto</h1>} />
        <Route path='/recipe' element={<h1>Recetas</h1>} />
        <Route path='/add-recipe' element={<h1>Nueva Receta</h1>} />
        <Route path='/recipe/:id' element={<h1>Actualizar Receta</h1>} />
        <Route path='/sales' element={<Sales />}/>
        <Route path='/sale_detail/:id' element={<Sale_detail/>}/>
        <Route path='/create_sale' element={<Create_sale/>}/>
        <Route path='/sale_form' element={<SaleForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
