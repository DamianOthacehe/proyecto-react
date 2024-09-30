import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import NavBar from './componentes/NavBar'


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}/>
      <Route exact path='/avances' element={<ItemListContainer/>}/>
      <Route exact path='/cocinas' element={<ItemListContainer/>}/>
      <Route exact path='/explorers' element={<ItemListContainer/>}/>
      <Route exact path='/product/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App