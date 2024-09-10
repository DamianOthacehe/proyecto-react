import './App.css'
import MiCarrito from './componentes/MiCarrito'
import MiNavbar from './componentes/MiNavbar'

function App() {

  return (
    <>
    <header>
      <nav>
      <a href="" className="logo"><img src="./src/assets/logo-30-sf.png" alt="logo" /></a>
        <ul>
        <MiNavbar texto = "Productos"/>
        <MiNavbar texto = "Distribuidores"/>
        <MiNavbar texto = "Manuales"/>
        <MiNavbar texto = "Preguntas frecuentes"/>
        <MiNavbar texto = "Ingresar/Registrarse"/>
        </ul>
      <MiCarrito numero = {0}/>
      </nav>
    </header>
    <main>
      <h1>Explorando nuevos horizontes</h1>
    </main>
    <footer></footer>
    </>
  )
}

export default App