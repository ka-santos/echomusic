import './App.css'
import './index.css'
import Topo from './components/Topo'
import HomePage from "./components/HomePage"
import Footer from './components/Footer'

function App() {
 

  return (
    <>
      <header>
        <Topo/>
      </header>
      
      <HomePage />
      <Footer />

    </>
  )
}

export default App

