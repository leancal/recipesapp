import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, ScrollView, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipe } from '../store/recipesSlice';

export default function EditRecipeScreen({ route, navigation }) {
  const { recipeId } = route.params;
  const dispatch = useDispatch();

  const recipe = useSelector((state) =>
    state.recipes.list.find((r) => r.id === recipeId)
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [stepsText, setStepsText] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setCategoryId(recipe.categoryId.toString());
      setIngredientsText(recipe.ingredients.join('\n'));
      setStepsText(recipe.steps.join('\n'));
      setImage(recipe.image);
    }
  }, [recipe]);

  const handleUpdate = () => {
    if (!title || !description || !categoryId) {
      Alert.alert('Error', 'Todos los campos obligatorios deben completarse.');
      return;
    }

    const updatedRecipe = {
      ...recipe,
      title,
      description,
      image,
      categoryId: parseInt(categoryId),
      ingredients: ingredientsText.split('\n').filter(Boolean),
      steps: stepsText.split('\n').filter(Boolean),
    };

    dispatch(updateRecipe(updatedRecipe));
    Alert.alert('Receta actualizada', 'Tu receta fue modificada con éxito.');
    navigation.navigate('Home');
  };

  if (!recipe) {
    return (
      <View style={styles.container}>
        <Text>Receta no encontrada</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Editar Receta</Text>

      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Título" />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Descripción" />
      <TextInput style={styles.input} value={categoryId} onChangeText={setCategoryId} placeholder="ID Categoría" keyboardType="numeric" />
      <TextInput style={styles.input} value={image} onChangeText={setImage} placeholder="URL Imagen" />

      <Text style={styles.label}>Ingredientes:</Text>
      <TextInput
        style={styles.textArea}
        value={ingredientsText}
        onChangeText={setIngredientsText}
        multiline
      />

      <Text style={styles.label}>Pasos:</Text>
      <TextInput
        style={styles.textArea}
        value={stepsText}
        onChangeText={setStepsText}
        multiline
      />

      <Button title="Guardar cambios" onPress={handleUpdate} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  textArea: { borderWidth: 1, borderColor: '#ccc', padding: 10, height: 100, marginBottom: 15, borderRadius: 5 },
  label: { fontWeight: 'bold', marginBottom: 5 },
});
