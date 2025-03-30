
# 📱 App de Recetas en React Native

Aplicación móvil de recetas de cocina desarrollada con **React Native + Expo**, usando **Redux Toolkit** para manejo global del estado y **AsyncStorage** para persistencia local.

---

## 🚀 Tecnologías usadas

- React Native (Expo)
- React Navigation
- Redux Toolkit
- AsyncStorage
- JavaScript

---

## 🧰 Requisitos previos

Asegúrate de tener instalado:

- [Node.js LTS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- Expo CLI:

```bash
npm install -g expo-cli
```

- App **Expo Go** en tu celular:
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## 📦 Instalación del proyecto

```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd <recipesapp>

# Instalar dependencias
npm install
```

---

## 📚 Dependencias clave

En caso de necesitar instalar manualmente:

```bash
# React Navigation y dependencias
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/native-stack

# Redux Toolkit y React Redux
npm install @reduxjs/toolkit react-redux

# AsyncStorage
npx expo install @react-native-async-storage/async-storage
```

---

## 🧪 Ejecutar la app

```bash
npm start
```

Esto abrirá **Expo Dev Tools** en el navegador.

Desde ahí podés:
- Escanear el código QR con la app Expo Go (en tu celular)
- Usar emulador (Android/iOS) si lo tenés configurado

---

## 🧠 Funcionalidades actuales

- Login/Registro simulado
- Lista de recetas con categorías
- Vista detallada con ingredientes y pasos
- Agregar/Quitar favoritos
- Crear, editar y eliminar recetas
- Persistencia local con AsyncStorage

---

## 🔜 Próximamente

- Conexión con backend en .NET
- Buscador de recetas
- Subida de imágenes reales
- Comentarios y calificaciones

---

## 🧑 Autor

Este proyecto fue desarrollado como práctica full-stack mobile con backend .NET en proceso.
```

