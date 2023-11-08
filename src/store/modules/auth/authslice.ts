import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type {RootState} from '../../index'

export interface authInterface {
  authState: boolean
}

const initialState: authInterface = {
  authState: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.authState = true
    },
    logout: state => {
      state.authState = false
    },
  }
})

export const { login, logout } = authSlice.actions


export default authSlice.reducer