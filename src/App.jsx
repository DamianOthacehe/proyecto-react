import './App.css'
import MiCarrito from './componentes/MiCarrito'
import MiNavbar from './componentes/MiNavbar'

function App() {

  return (
    <>
    <header>
      <a href="" className="logo"><img src="./src/assets/logo.jpg" alt="logo" /></a>
      <nav>
        
      <MiNavbar texto = "Productos"/>
      <MiNavbar texto = "Distribuidores"/>
      <MiNavbar texto = "Manuales"/>
      <MiNavbar texto = "Preguntas frecuentes"/>
      <MiNavbar texto = "Ingresar/Registrarse"/>
      </nav>
      <MiCarrito numero = {0}/>
    </header>
    <main></main>
    <footer></footer>
    </>
  )
}

export default App