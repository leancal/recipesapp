import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
import userReducer from './userSlice';
import { saveRecipes, saveFavorites } from '../utils/storage';

const customMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const state = storeAPI.getState();
  const { recipes } = state;

  if (
    ['recipes/addRecipe', 'recipes/updateRecipe', 'recipes/toggleFavorite'].includes(action.type)
  ) {
    saveRecipes(recipes.list);
    saveFavorites(recipes.favorites);
  }

  return result;
};

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customMiddleware),
});
