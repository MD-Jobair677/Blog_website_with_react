
import authReducer from './AuthSlice/authSlice';
import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';

 export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,

    auth: authReducer,
    // themeSetting: themeSettingSlice,
    // sidebarSlice: sidebarSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// export default store;