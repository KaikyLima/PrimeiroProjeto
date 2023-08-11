// Importar o React e o React Native
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

// Criar o componente que usa a API
const Tde3 = () => {
  // Usar o useState para armazenar os dados do usuário
  const [user, setUser] = useState(null);

  // Usar o useEffect para buscar os dados quando o componente for montado ou quando o botão for clicado
  useEffect(() => {
    // Definir uma função assíncrona para fazer a requisição
    const fetchUser = async () => {
      try {
        // Usar o fetch para obter os dados da API
        const response = await fetch("https://randomuser.me/api/");
        // Converter a resposta em JSON
        const data = await response.json();
        // Pegar o primeiro resultado do array de resultados
        const user = data.results[0];
        // Atualizar o estado com o usuário obtido
        setUser(user);
      } catch (error) {
        // Mostrar o erro no console em caso de falha
        console.log(error);
      }
    };
    // Invocar a função assíncrona
    fetchUser();
  }, []);

  // Renderizar uma View com os dados do usuário ou um texto de carregamento
  return (
    <View style={styles.container}>
      {user ? (
        <>
          {/* Mostrar os dados do usuário em elementos de texto */}
          <Text style={styles.text}>Nome: {user.name.first} {user.name.last}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Telefone: {user.phone}</Text>
          <Text style={styles.text}>Idade: {user.dob.age}</Text>
          <Text style={styles.text}>Gênero: {user.gender}</Text>
          <Text style={styles.text}>País: {user.location.country}</Text>
          {/* Mostrar um botão que atualiza os dados ao ser clicado */}
          <Button title="Atualizar" onPress={() => setUser(null)} />
        </>
      ) : (
        // Mostrar um texto de carregamento enquanto os dados não são obtidos
        <Text style={styles.text}>Carregando...</Text>
      )}
    </View>
  );
};

// Definir os estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});

// Exportar o componente como padrão
export default Tde3;
