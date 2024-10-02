import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route exact path='/category/:categoryId' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App