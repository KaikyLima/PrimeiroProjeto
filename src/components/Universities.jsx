// Importar o React e o React Native
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// Criar o componente que usa a API
const Universities = () => {
  // Usar o useState para armazenar os dados das universidades
  const [universities, setUniversities] = useState([]);

  // Usar o useEffect para buscar os dados quando o componente for montado
  useEffect(() => {
    // Definir uma função assíncrona para fazer a requisição
    const fetchUniversities = async () => {
      try {
        // Usar o fetch para obter os dados da API
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=Brazil"
        );
        // Converter a resposta em JSON
        const data = await response.json();
        // Atualizar o estado com os dados obtidos
        setUniversities(data);
      } catch (error) {
        // Mostrar o erro no console em caso de falha
        console.log(error);
      }
    };
    // Invocar a função assíncrona
    fetchUniversities();
  }, []);

  // Renderizar uma FlatList com os dados das universidades
  return (
    <View style={styles.container}>
      <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          // Mostrar o nome da universidade e a URL para seu site em elementos de texto
          <View style={styles.item}>
            <Text style={styles.text}>Nome: {item.name}</Text>
            <Text style={styles.text}>URL: {item.web_pages[0]}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Definir os estilos do componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});

// Exportar o componente como padrão
export default Universities;
