import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import AppNavigator from './navigation/AppNavigator';
import { loadUserFromStorage } from './store/userSlice';
import { loadFromStorage } from './store/recipesSlice';

function InitApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFromStorage());
    dispatch(loadUserFromStorage());
  }, []);

  return <AppNavigator />;
}

export default function App() {
  return (
    <Provider store={store}>
      <InitApp />
    </Provider>
  );
}
