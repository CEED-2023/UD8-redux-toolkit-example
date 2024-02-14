import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor,
  selectIncremento,

  incrementar,
  decrementar,
  cambiarIncremento
} from './contadorSlice'

import accionAsincrona from './accion_asincrona'

function App() {

  const valor = useSelector(selectValor)
  const incremento = useSelector(selectIncremento)
  const dispatch = useDispatch()

  function onIncremento(event){
    dispatch(cambiarIncremento(event.target.value))
  }

  async function onDuplicarAsincrono(){
    console.log('onDuplicarAsincrono')
  }
  function onDemediarAsincrono(){
    console.log('onDemediarAsincrono')
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

      <button onClick={onDuplicarAsincrono}>
        Duplicar asíncrono
      </button>
      <button onClick={onDemediarAsincrono}>
        Demediar asíncrono
      </button>

    </>
  )
}

export default App
