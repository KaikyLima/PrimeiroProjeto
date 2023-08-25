import { useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Text, SafeAreaView } from "react-native";
import axios from "axios";

const style = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#ccc",
    marginTop: 300
  },
  cardTitle: {
    color: "#000",
  },
});

const CardFacts = () => {
  // Usar um objeto como estado
  const [cardData, setCardData] = useState({ fact: "", length: 0 });

  const fetchCardFact = async () => {
    try {
      const { data } = await axios.get("https://catfact.ninja/fact");
      // Atualizar o estado com o fato e o comprimento
      setCardData({ fact: data.fact, length: data.length });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCardFact();
  }, []);

  const MyCard = ({ onTouchCard }) => {
    return (
      <SafeAreaView>0
        <TouchableOpacity onPress={onTouchCard}>
          <View style={style.cardContainer}>
            {/* Mostrar o fato e o comprimento no texto */}
            <Text style={style.cardTitle}>
              {cardData.fact ? `${cardData.fact} (${cardData.length} caracteres)` : ""}
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return <MyCard onTouchCard={fetchCardFact} />;
};

export default CardFacts;
