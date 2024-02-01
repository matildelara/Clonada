import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías agregar la lógica de autenticación, por ejemplo, mediante una API o servicios de autenticación.
    // Puedes usar la información de username y password para realizar la autenticación.

    // Ejemplo básico de validación (esto debe mejorarse según tus necesidades):
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Error en los datos');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Facebook</Text>
      </View>
      <View style={styles.body}>
        {/* Formulario de inicio de sesión */}
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico o número de teléfono"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>¿Olvidaste tu contraseña?</Text>
        <Text style={styles.footerText}>Registrarte en Facebook</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#f0f2f5', // Color de fondo similar al de Facebook
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1877f2', // Color azul de Facebook
  },
  body: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#1877f2',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#1877f2',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
