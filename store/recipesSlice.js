import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  recipes as mockRecipes,
  categories as mockCategories,
} from "../data/mockData";
import {
  loadRecipes,
  loadFavorites,
  saveRecipes,
  saveFavorites,
} from "../utils/storage";

const initialState = {
  list: [],
  categories: [],
  activeCategoryId: null,
  favorites: [],
};

// Simula la carga de datos desde una "API"
export const loadRecipesAndCategories = createAsyncThunk(
  "recipes/loadAll",
  async () => {
    return {
      recipes: mockRecipes,
      categories: mockCategories,
    };
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategoryId = action.payload;
    },
    toggleFavorite: (state, action) => {
      const recipeId = action.payload;
      const exists = state.favorites.includes(recipeId);

      if (exists) {
        state.favorites = state.favorites.filter((id) => id !== recipeId);
      } else {
        state.favorites.push(recipeId);
      }
    },
    addRecipe: (state, action) => {
      state.list.push(action.payload);
    },
    updateRecipe: (state, action) => {
      const updated = action.payload;
      const index = state.list.findIndex((r) => r.id === updated.id);
      if (index !== -1) {
        state.list[index] = updated;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadRecipesAndCategories.fulfilled, (state, action) => {
      state.list = action.payload.recipes;
      state.categories = action.payload.categories;
    });
  },
});

export const loadFromStorage = createAsyncThunk(
  "recipes/loadFromStorage",
  async () => {
    const storedRecipes = await loadRecipes();
    const storedFavorites = await loadFavorites();

    return {
      recipes: storedRecipes,
      favorites: storedFavorites,
    };
  }
);

export const { setActiveCategory, toggleFavorite, addRecipe, updateRecipe } =
  recipesSlice.actions;

export default recipesSlice.reducer;
