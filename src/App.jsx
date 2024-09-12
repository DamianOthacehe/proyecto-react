import './App.css'
import CartWidget from './componentes/CartWidget'
import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'


function App() {

  return (
    <>
    <header>
      <nav>
        <a href=""><img src="./src/assets/logo.jpg" alt="logo" /></a>
        <ul>
          <NavBar links = "Productos"/>
          <NavBar links = "Manuales"/>
          <NavBar links = "Distribuidores"/>
          <NavBar links = "Preguntas Frecuentes"/>
          <NavBar links = "Ingresar/Registrarse"/>
        </ul>
        <CartWidget numero = {0}/>
      </nav>
    </header>
    <main>
      <ItemListContainer greeting = "Leinwand camping"/>
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App