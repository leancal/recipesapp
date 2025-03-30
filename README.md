
# 📱 Recipe App – React Native

A mobile app for cooking recipes developed using **React Native + Expo**, with **Redux Toolkit** for global state management and **AsyncStorage** for local persistence.

---

## 🚀 Technologies Used

- React Native (Expo)
- React Navigation
- Redux Toolkit
- AsyncStorage
- JavaScript

---

## 🧰 Prerequisites

Make sure you have the following installed:

- [Node.js LTS](https://nodejs.org/)
- [Git](https://git-scm.com/downloads)
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
git clone <REPOSITORY_URL>
cd <project-name>

# Install dependencies
npm install
```

---

## 📚 Key Dependencies

In case you need to install them manually:

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
- Scan the QR code with the Expo Go app (on your phone)
- Launch an emulator (Android/iOS) if configured

---

## 🧠 Current Features

- Simulated login and registration
- Recipe list with category filtering
- Recipe detail view with ingredients and steps
- Add/remove favorites
- Create, edit, and delete recipes
- Local data persistence with AsyncStorage

---

## 🔜 Coming Soon

- Integration with .NET backend
- Recipe search
- Real image uploads
- Comments and ratings

---

## 👨‍💻 Author

This project was created as a full-stack mobile development practice. Backend in .NET is currently in progress.
```
