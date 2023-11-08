import { createSlice } from '@reduxjs/toolkit'

export interface themeInterface {
  mode:boolean
}

const initialState :themeInterface = {
  mode:true
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    dark: state => {
      state.mode = true
    },
    light: state => {
      state.mode = false
    }
  }
})

export const { dark,light } = themeSlice.actions

export default themeSlice.reducer