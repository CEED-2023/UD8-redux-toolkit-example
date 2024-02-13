import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valor: 0,
  incremento: 1
}

export const contadorSlice = createSlice({
  name: 'contador',
  initialState,
  reducers: {

    incrementar(state, action) {
      const incremento = action.payload
      state.valor += incremento
    },

    decrementar(state, action) {
      const incremento = action.payload
      if(state.valor - incremento < 0) return
      state.valor -= incremento
    },

    cambiarIncremento(state, action) {
      state.incremento = Number(action.payload)
    }

  }
})

export const {
  incrementar,
  decrementar,
  cambiarIncremento
} = contadorSlice.actions

export const selectValor = state => state.contador.valor
export const selectIncremento = state => state.contador.incremento

export default contadorSlice.reducer
