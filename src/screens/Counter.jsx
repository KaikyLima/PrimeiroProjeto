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

  useEffect(() => {
    console.log('montagem')
  },[])

  useEffect(() => {
    console.log('Atualizado')
  },[contador])
  
  const onPressButton = () =>{
    setContador(contador + 2)
  }

  const onPressButtonMenos = () => {
    setContador(contador-3)
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.text}>{contador}</Text>
      
      <Button title='SOMADOR +2' onPress={onPressButton} />
      <Button title='DECREMENTADOR -3' onPress={onPressButtonMenos} />

    </SafeAreaView>
  );

}

export default Counter;