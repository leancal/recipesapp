import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Simulamos un usuario
    const fakeUser = {
      id: 1,
      name: 'Juan Pérez',
      email: email,
    };

    dispatch(login(fakeUser));
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
        value={email}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text style={{ marginTop: 15, color: 'blue', textAlign: 'center' }} onPress={() => navigation.navigate('Register')}>
  ¿No tienes cuenta? Regístrate
</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});
