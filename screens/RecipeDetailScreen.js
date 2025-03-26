import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/recipesSlice';

export default function RecipeDetailScreen({ route, navigation }) {
  const { recipeId } = route.params;
  const dispatch = useDispatch();

  const recipe = useSelector((state) =>
    state.recipes.list.find((r) => r.id === recipeId)
  );
  const category = useSelector((state) =>
    state.recipes.categories.find((c) => c.id === recipe.categoryId)
  );
  const favorites = useSelector((state) => state.recipes.favorites);
  const isFavorite = favorites.includes(recipeId);

  const user = useSelector((state) => state.user.user);
  const isOwner = user && recipe.createdBy === user.id;

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(recipeId));
  };

  const handleDelete = () => {
    Alert.alert(
      'Eliminar receta',
      '¿Estás seguro de que quieres eliminar esta receta?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => {
            // Acá podrías hacer dispatch a un action tipo deleteRecipe
            console.log('Receta eliminada (simulado)');
            navigation.goBack();
          },
        },
      ]
    );
  };

  const handleEdit = () => {
    navigation.navigate('EditRecipe', { recipeId });
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Receta no encontrada.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{recipe.title}</Text>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <Text style={styles.category}>Categoría: {category?.name}</Text>
      <Text style={styles.description}>{recipe.description}</Text>

      <Text style={styles.sectionTitle}>Ingredientes:</Text>
      {recipe.ingredients.map((item, idx) => (
        <Text key={idx} style={styles.listItem}>• {item}</Text>
      ))}

      <Text style={styles.sectionTitle}>Pasos:</Text>
      {recipe.steps.map((step, idx) => (
        <Text key={idx} style={styles.listItem}>{idx + 1}. {step}</Text>
      ))}

      <Button
        title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
        onPress={handleFavoriteToggle}
      />

      {isOwner && (
        <View style={{ marginTop: 20 }}>
          <Button title="Editar receta" onPress={handleEdit} />
          <View style={{ height: 10 }} />
          <Button title="Eliminar receta" color="red" onPress={handleDelete} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 15 },
  category: { fontSize: 16, fontStyle: 'italic', marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 22, marginBottom: 15 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15 },
  listItem: { fontSize: 16, marginVertical: 4 },
});
