const { createSlice } = require('@reduxjs/toolkit');
const { register } = require('./operations');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => builder.addCase(register.pending),
});

export const authReducer = authSlice.reducer;
