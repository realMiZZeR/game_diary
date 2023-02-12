import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    isForgot: false,
    isRegister: false,
  },
  reducers: {
    setLogin(state, action) {
      state.isLogin = action.payload;
    },
    setForgot()
  }
});

export {} = authSlice.actions;

export default authSlice.reducer;