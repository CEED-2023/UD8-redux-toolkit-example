import { useSelector } from 'react-redux'
import './App.css'

import {
  selectValor
} from './contadorSlice'

function App() {

  const valor = useSelector(selectValor)

  return (
    <>
      <h1>Contador: {valor}</h1>
      <button>Incrementar</button>
      <p/>
      <button>Decrementar</button>
    </>
  )
}

export default App
