import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  valor: 0
}

export const contadorSlice = createSlice({
  name: 'contador',
  initialState,
  reducers: {

    incrementar(state, _action) {
      state.valor += 1
    },

    decrementar(state, _action) {
      state.valor -= 1
    }

  }
})

export const selectValor = state => state.contador.valor

export default contadorSlice.reducer
