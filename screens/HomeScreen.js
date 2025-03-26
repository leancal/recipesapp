import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  loadRecipesAndCategories,
  setActiveCategory,
} from "../store/recipesSlice";
import { Button } from 'react-native';


export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const { list, categories, activeCategoryId } = useSelector(
    (state) => state.recipes
  );

  useEffect(() => {
    dispatch(loadRecipesAndCategories());
  }, []);

  const filteredRecipes = activeCategoryId
    ? list.filter((recipe) => recipe.categoryId === activeCategoryId)
    : list;

  const handleCategoryPress = (id) => {
    dispatch(setActiveCategory(id === activeCategoryId ? null : id)); // toggle
  };

  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn || false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías:</Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
            <Text
              style={[
                styles.category,
                item.id === activeCategoryId && styles.categoryActive,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        style={{ marginBottom: 20 }}
      />

      {isLoggedIn && (
        <View style={{ marginBottom: 20 }}>
          <Button
            title="Crear nueva receta"
            onPress={() => navigation.navigate("CreateRecipe")}
          />
        </View>
      )}

      <Text style={styles.title}>Recetas:</Text>
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RecipeDetail", { recipeId: item.id })
            }
          >
            <Text style={styles.recipe}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  recipe: { fontSize: 16, paddingVertical: 8 },
  category: {
    backgroundColor: "#ddd",
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
  categoryActive: {
    backgroundColor: "#aaa",
    color: "white",
  },
});
