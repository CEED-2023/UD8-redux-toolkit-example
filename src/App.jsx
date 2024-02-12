import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor
} from './contadorSlice'

function App() {

  const valor = useSelector(selectValor)
  const dispatch = useDispatch()

  function incrementar() {
    const action = {
      type: 'contador/incrementar'
    }
    dispatch(action)
  }

  function decrementar(){
    const action = {
      type: 'contador/decrementar'
    }
    dispatch(action)
  }

  return (
    <>
      <h1>Contador: {valor}</h1>
      <button onClick={incrementar}>
        Incrementar
      </button>
      <p/>
      <button onClick={decrementar}>
        Decrementar
      </button>
    </>
  )
}

export default App
