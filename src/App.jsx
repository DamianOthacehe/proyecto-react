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
      <Route exact path='/category/:id' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App