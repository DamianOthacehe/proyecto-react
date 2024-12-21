import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './componentes/HomePage/HomePage'
import DistributorsPage from './componentes/DistributorsPage/DistributorsPage'
import ManualsPage from './componentes/ManualsPage/ManualsPage'
import FAQPage from './componentes/FAQPage/FAQPage'
import LoginPage from './componentes/LoginPage/LoginPage'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import { CartProvider } from './context/CartContext'
import CartComponent from './componentes/CartComponent/CartComponent'
import Checkout from './componentes/Checkout/Checkout'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/products' element={<ItemListContainer />} />
          <Route exact path='/distributors' element={<DistributorsPage />} />
          <Route exact path='/manuals' element={<ManualsPage />} />
          <Route exact path='/faq' element={<FAQPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/category/:categoryId' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartComponent />} />
          <Route exact path='/checkout' element={<Checkout/>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App