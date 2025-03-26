import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'loggedInUser';
const RECIPES_KEY = 'savedRecipes';
const FAVORITES_KEY = 'savedFavorites';

export const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (e) {
    console.error('Error al guardar usuario', e);
  }
};

export const getUser = async () => {
  try {
    const json = await AsyncStorage.getItem(USER_KEY);
    return json != null ? JSON.parse(json) : null;
  } catch (e) {
    console.error('Error al leer usuario', e);
    return null;
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (e) {
    console.error('Error al eliminar usuario', e);
  }
};

export const saveRecipes = async (recipes) => {
    try {
      await AsyncStorage.setItem(RECIPES_KEY, JSON.stringify(recipes));
    } catch (e) {
      console.error('Error al guardar recetas:', e);
    }
  };
  
  export const loadRecipes = async () => {
    try {
      const json = await AsyncStorage.getItem(RECIPES_KEY);
      return json != null ? JSON.parse(json) : null;
    } catch (e) {
      console.error('Error al leer recetas:', e);
      return null;
    }
  };
  
  export const saveFavorites = async (favorites) => {
    try {
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Error al guardar favoritos:', e);
    }
  };
  
  export const loadFavorites = async () => {
    try {
      const json = await AsyncStorage.getItem(FAVORITES_KEY);
      return json != null ? JSON.parse(json) : [];
    } catch (e) {
      console.error('Error al leer favoritos:', e);
      return [];
    }
  };
