import { createSlice } from "@reduxjs/toolkit";

  const tokenFromStorage = localStorage.getItem("token");
const userFromStorage = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null;


const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: tokenFromStorage,
    userData: userFromStorage ,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.userData = action.payload.userData;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("userData", JSON.stringify(action.payload.userData));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("userData");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;








