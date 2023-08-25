import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const RepositoryList = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    fetchBeers();
  }, []);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        'https://random-data-api.com/api/v2/beers?size=10'
      );
      setBeers(response.data);
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  };

  return (
    <View style={styles.container}>
      {beers.map((beer, index) => (
        <View key={index} style={styles.beerContainer}>
          <Text style={styles.beerName}>{beer.name}</Text>
          <Text style={styles.beerBrand}>Marca: {beer.brand}</Text>
          <Text style={styles.beerStyle}>Estilo: {beer.style}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#red',
  },
  beerContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 12,
    borderRadius: 20,
  },
  beerName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  beerBrand: {
    fontSize: 14,
  },
  beerStyle: {
    fontSize: 14,
  },
});

export default RepositoryList;