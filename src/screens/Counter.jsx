import {SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';
import { useEffect, useState } from 'react';

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5e8fa'
  },
  text: {
    fontSize: 50,
    color: '#a1a',
    fontWeight: 'bold'
  }
})

const Counter = () => {

    const [contador, setContador] = useState(0)

  
    const onPressButton = () =>{
      setContador(contador => contador + 1) 
    }
    
    const onPressButtonMenos = () => {
      setContador(contador => contador - 1) 
    }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
      
      <Button title='Decrementar +1' onPress={onPressButton} />
      <Button title='Incrementar -1' onPress={onPressButtonMenos} />

    </SafeAreaView>
  );

}

export default Counter;