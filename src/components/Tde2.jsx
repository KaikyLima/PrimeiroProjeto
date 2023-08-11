// Importar o React e o React Native
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Definir o array de itens que será passado para a Lista
const array = [
  { name: "Fulano", idade: 20 },
  { name: "Beltrano", idade: 22 },
  { name: "Ciclano", idade: 19 },
  { name: "Jhon Doe", idade: 30 },
];

// Criar o componente Lista que recebe o array por props
const Lista = (props) => {
  // Usar o método map para renderizar cada item do array em uma View com Text
  return (
    <View style={styles.lista}>
      {props.array.map((item) => (
        <View style={styles.item} key={item.name}>
          <Text style={styles.texto}>
            nome: {item.name} idade: {item.idade}
          </Text>
        </View>
      ))}
    </View>
  );
};

// Criar o componente Header que recebe um título por props
const Header = (props) => {
  // Renderizar uma View com um Text com o título em negrito e centralizado
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{props.titulo}</Text>
    </View>
  );
};

// Criar a página que vai usar os dois componentes e passar os props para eles
const Tde2 = () => {
  return (
    <View style={styles.container}>
      {/* Passar o título "Meu App" para o Header */}
      <Header titulo="Meu App" />
      {/* Passar o array de itens para a Lista */}
      <Lista array={array} />
    </View>
  );
};

// Definir os estilos dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lista: {
    flex: 1,
    padding: 10,
  },
  item: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  texto: {
    fontSize: 16,
  },
});

// Exportar o App como padrão
export default Tde2;
