import React, { useState } from 'react';
import {
  View, Text, TextInput, Button, StyleSheet, ScrollView, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../store/recipesSlice';

export default function CreateRecipeScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [ingredientsText, setIngredientsText] = useState('');
  const [stepsText, setStepsText] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    if (!title || !description || !categoryId) {
      Alert.alert('Faltan datos', 'Completá título, descripción y categoría');
      return;
    }

    const newRecipe = {
      title,
      description,
      image: image || 'https://via.placeholder.com/300x200.png?text=Receta',
      categoryId: parseInt(categoryId),
      ingredients: ingredientsText.split('\n').filter(Boolean),
      steps: stepsText.split('\n').filter(Boolean),
      createdBy: user?.id || 0,
    };

    try {
      const res = await fetch('http://192.168.0.118:5089/api/recipes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe),
      });

      const data = await res.json();

      dispatch(addRecipe(data));
      Alert.alert('Receta creada', 'Tu receta fue enviada al servidor');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al crear receta:', error);
      Alert.alert('Error', 'No se pudo enviar la receta al servidor.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Receta</Text>

      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} placeholder="Descripción" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="ID Categoría (1-4)" value={categoryId} onChangeText={setCategoryId} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="URL de Imagen (opcional)" value={image} onChangeText={setImage} />

      <Text style={styles.label}>Ingredientes (uno por línea):</Text>
      <TextInput style={styles.textArea} multiline numberOfLines={4} value={ingredientsText} onChangeText={setIngredientsText} />

      <Text style={styles.label}>Pasos (uno por línea):</Text>
      <TextInput style={styles.textArea} multiline numberOfLines={4} value={stepsText} onChangeText={setStepsText} />

      <Button title="Crear receta" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5,
  },
  textArea: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, height: 100, marginBottom: 15, borderRadius: 5,
  },
  label: { fontWeight: 'bold', marginBottom: 5 },
});
