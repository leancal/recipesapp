import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, saveUser, removeUser } from '../utils/storage';
import { loadFromStorage } from './recipesSlice';

const initialState = {
  isLoggedIn: false,
  user: null,
};

// Cargar usuario desde AsyncStorage al iniciar la app
export const loadUserFromStorage = createAsyncThunk('user/loadUser', async () => {
  const user = await getUser();
  return user;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveUser(action.payload); // guardar en almacenamiento local
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      removeUser(); // eliminar de almacenamiento local
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFromStorage.fulfilled, (state, action) => {
        if (action.payload.recipes) {
          state.list = action.payload.recipes;
        }
        if (action.payload.favorites) {
          state.favorites = action.payload.favorites;
        }
      });
      
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
