# 📱 Recipe App – React Native + .NET Backend

A mobile app for cooking recipes developed using **React Native + Expo**, with **Redux Toolkit** for global state management and **AsyncStorage** for local persistence. Includes a **.NET Web API backend** located in the `/RecipesApi` folder.

---

## 🚀 Technologies Used

### Frontend (React Native)
- React Native (Expo)
- React Navigation
- Redux Toolkit
- AsyncStorage
- JavaScript

### Backend (in `/RecipesApi`)
- ASP.NET Core Web API
- C#
- In-memory storage (no database)

---

## 🧰 Prerequisites

Make sure you have the following installed:

- [Node.js LTS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
- [.NET SDK (version 7 or 8)](https://dotnet.microsoft.com/en-us/download)
- Expo CLI:

```bash
npm install -g expo-cli
```

- **Expo Go** mobile app:
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

## 📦 Project Setup

```bash
# Clone the repository
git clone 
cd recipesapp

# Install frontend dependencies
npm install

# Navigate into backend folder
cd RecipesApi

# Run backend API
dotnet run
```

### 🔁 Backend Notes
- Make sure the backend is listening on your IP using:

```csharp
builder.WebHost.UseUrls("http://0.0.0.0:5089");
```

- Endpoint examples:
  - `GET http://<your_ip>:5089/api/recipes`
  - `POST http://<your_ip>:5089/api/recipes`
  - `PUT http://<your_ip>:5089/api/recipes/{id}`
  - `DELETE http://<your_ip>:5089/api/recipes/{id}`

- Backend is accessible over local network. Your mobile must be on the same Wi-Fi.

---

## 📚 Key Frontend Dependencies

```bash
# React Navigation and dependencies
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
npm install @react-navigation/native-stack

# Redux Toolkit and React Redux
npm install @reduxjs/toolkit react-redux

# AsyncStorage
npx expo install @react-native-async-storage/async-storage
```

---

## 🧪 Run the App

```bash
npm start
```

This will launch the **Expo Dev Tools** in your browser.

From there, you can:
- Scan the QR code with the Expo Go app
- Open in emulator or simulator (if configured)

---

## 🧠 Features

- Simulated login and registration
- List recipes by category
- Recipe detail view with ingredients, steps, and image
- Add/remove favorites (with local persistence)
- Create, edit and delete recipes (connected to backend)

---

## 🔜 Coming Soon

- Authentication with JWT
- Real image upload
- Search and filtering
- Deploy backend to cloud (e.g., Render, Railway)

---

## 👨‍💻 Author

This project was created as a full-stack mobile development practice using React Native and ASP.NET Core Web API.

