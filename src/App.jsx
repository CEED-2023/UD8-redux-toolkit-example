import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor,

  incrementar,
  decrementar
} from './contadorSlice'


function App() {

  const valor = useSelector(selectValor)
  const dispatch = useDispatch()

  function onIncrementar() {
    dispatch(incrementar())
  }

  function onDecrementar(){
    dispatch(decrementar())
  }

  return (
    <>
      <h1>Contador: {valor}</h1>
      <button onClick={onIncrementar}>
        Incrementar
      </button>
      <p/>
      <button onClick={onDecrementar}>
        Decrementar
      </button>
    </>
  )
}

export default App
