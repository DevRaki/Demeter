import { BrowserRoutes, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRoutes>
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
      </Routes>
    </BrowserRoutes>
  )
}

export default App