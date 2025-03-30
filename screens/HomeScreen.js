import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipes } from '../store/recipesSlice';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation(); 
  const recipes = useSelector((state) => state.recipes.list);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('http://192.168.0.118:5089/api/recipes'); // 👈 tu IP + puerto
        const data = await res.json();
        dispatch(setRecipes(data));
      } catch (e) {
        console.error('Error al obtener recetas del backend:', e);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recetas del backend:</Text>

      {/* ✅ Botón para ir a la pantalla de creación */}
      <View style={{ marginBottom: 20 }}>
        <Button
          title="Crear nueva receta"
          onPress={() => navigation.navigate('CreateRecipe')}
        />
      </View>

      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', { recipeId: item.id })}>
            <Text style={styles.item}>🍽 {item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  item: { fontSize: 16, marginVertical: 5 },
});
