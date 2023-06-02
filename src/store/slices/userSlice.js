import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id: '',
  token: null,
  isAuth: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    userLogin: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isAuth = true
    },
    userLogout: (state) => {
      state.email = '';
      state.id = '';
      state.token = null
      state.isAuth = false
    }
  }
})

export const { setToken ,userLogin, userLogout } = userSlice.actions
export default userSlice.reducer