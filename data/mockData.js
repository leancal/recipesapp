export const categories = [
    { id: 1, name: 'Postres' },
    { id: 2, name: 'Pastas' },
    { id: 3, name: 'Veganas' },
    { id: 4, name: 'Carnes' },
  ];
  
  export const recipes = [
    {
      id: 'r1',
      title: 'Tarta de manzana',
      description: 'Deliciosa tarta con manzanas frescas y canela.',
      categoryId: 1,
      image: 'https://www.recetasgratis.net/files/receta/40118-tarta-de-manzana.jpg',
      ingredients: ['3 manzanas', '1 taza de harina', '1 huevo', 'Canela', 'Azúcar'],
      steps: ['Pelar las manzanas', 'Preparar la masa', 'Hornear por 45 minutos'],
      createdBy: 1,
    },
    {
      id: 'r2',
      title: 'Pasta al pesto',
      description: 'Espaguetis con salsa pesto casera.',
      categoryId: 2,
      image: 'https://cdn7.kiwilimon.com/recetaimagen/37777/19060.jpg',
      ingredients: ['200g de pasta', '2 cucharadas de pesto', 'Queso parmesano'],
      steps: ['Cocer la pasta', 'Mezclar con el pesto', 'Servir con queso'],
      createdBy: 2,
    },
    {
      id: 'r3',
      title: 'Ensalada de frutas',
      description: 'Ensalada con frutas frescas y jugo de naranja.',
      categoryId: 1,
      image: 'https://www.recetasgratis.net/files/receta/40118-tarta-de-manzana.jpg',
      ingredients: ['1 taza de frutas', '1 naranja', 'Jugo de naranja'],
      steps: ['Lavar y cortar las frutas', 'Colocar en una taza', 'Anadir el jugo de naranja'],
      createdBy: 1,
    },
    {
      id: 'r4',
      title: 'Hamburguesa de carne',
      description: 'Hamburguesa de carne con lechuga y tomate.',
      categoryId: 4,
      image: 'https://www.recetasgratis.net/files/receta/40118-tarta-de-manzana.jpg',
      ingredients: ['300g de carne', 'Lechuga', 'Tomate', 'Queso'],
      steps: ['Cocer la carne', 'Preparar la hamburguesa', 'Servir con lechuga y tomate'],
      createdBy: 1,
    },
  ];
  