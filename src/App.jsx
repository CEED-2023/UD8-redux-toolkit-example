import { useSelector, useDispatch } from 'react-redux'
import './App.css'

import {
  selectValor,
  selectIncremento,
  selectCargando,
  selectError,

  incrementar,
  decrementar,
  cambiarIncremento,

  multiplicarPending,
  multiplicarResolved,
  multiplicarRejected
} from './contadorSlice'

import accionAsincrona from './accion_asincrona'

function App() {

  const valor = useSelector(selectValor)
  const incremento = useSelector(selectIncremento)
  const cargando = useSelector(selectCargando)
  const error = useSelector(selectError)

  const dispatch = useDispatch()

  function onIncremento(event){
    dispatch(cambiarIncremento(event.target.value))
  }

  async function onMultiplicarAsincrono(){
    try {
      dispatch(multiplicarPending())
      const res = await accionAsincrona(incremento, true)
      dispatch(multiplicarResolved(res))
    }catch(e){
      dispatch(multiplicarRejected('Ha fallado'))
    }
  }
  function onDividirAsincrono(){
    console.log('onDividirAsincrono')
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

      <button onClick={onMultiplicarAsincrono}>
        Multiplicar asíncrono
      </button>
      <button onClick={onDividirAsincrono}>
        Dividir asíncrono
      </button>
      <br/>
      {cargando && <p>Cargando...</p>}
      {error && <h1>Terrible error: {error}</h1>}
    </>
  )
}

export default App
