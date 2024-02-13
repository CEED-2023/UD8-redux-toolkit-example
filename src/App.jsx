import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor,
  selectIncremento,

  incrementar,
  decrementar,
  cambiarIncremento
} from './contadorSlice'


function App() {

  const valor = useSelector(selectValor)
  const incremento = useSelector(selectIncremento)
  const dispatch = useDispatch()

  function onIncremento(event){
    dispatch(cambiarIncremento(event.target.value))
  }

  return (
    <>
      <h1>Contador: {valor}</h1>
      <br/>
      Incrementar en:
      <input type="text"
        value={incremento}
        onChange={onIncremento}
      />
      <br/>
      <button onClick={() => dispatch(incrementar(incremento))}>
        Incrementar
      </button>
      <p/>
      <button onClick={() => dispatch(decrementar(incremento))}>
        Decrementar
      </button>
    </>
  )
}

export default App
