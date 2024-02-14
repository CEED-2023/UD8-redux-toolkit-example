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

  function onIncrementarAsincrono(){
    console.log('onIncrementarAsincrono')
  }
  function onDecrementarAsincrono(){
    console.log('onDecrementarAsincrono')
  }

  return (
    <>
      <h1>Contador: {valor}</h1>
      <br/>
      Incrementar en: &nbsp;
      <input type="text"
        value={incremento}
        onChange={onIncremento}
      />
      <br/><br/>

      <button onClick={() => dispatch(incrementar(incremento))}>
        Incrementar
      </button>
      <button onClick={() => dispatch(decrementar(incremento))}>
        Decrementar
      </button>

      <p/>

      <button onClick={onIncrementarAsincrono}>
        Incrementar asíncrono
      </button>
      <button onClick={onDecrementarAsincrono}>
        Decrementar asíncrono
      </button>

    </>
  )
}

export default App
