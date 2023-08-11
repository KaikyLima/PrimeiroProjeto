import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, SafeAreaView, Button, StyleSheet } from "react-native";
import Counter from './Counter'
import axios from "axios";


const style = StyleSheet.create({
    titleFont:{
        fontSize: 50,
        margin: 18,
        textAlign:"center",
        color:"#0f0",
    },
    conteiner: {
        backgroundColor: "#222",
        height: 2222
    },
    text:{
        color:"#fff",
        fontStyle:"italic",
        margin:20
    },
    buttonfat:{
        padding: 100
    }
})

const CatFacts = () => {

    const [catFact, setCatFact] = useState()
    const [twoCatFact, setTwoCatFact] = useState()
    const [twoCatFactTow, setTwoCatFactTow] = useState()

    const fetchCatFact = async () => {
        try{
            const {data} = await axios.get('https://catfact.ninja/fact')
            setCatFact(data.fact)
        }catch(error){
            console.log(error)
        }
    }
    const twoFetchCatFact = async () => {
        try{
            const {data} = await axios.get('https://catfact.ninja/fact')
            const {data: dataTwo} = await axios.get('https://catfact.ninja/fact')
            setTwoCatFact(data.fact)
            setTwoCatFactTow(dataTwo.fact)
        }catch(error){
            console.log(error)
        }
    }

    return (
        <SafeAreaView style={style.conteiner}>
            <StatusBar/>
            <View>
                <Text style={style.titleFont}> Cats Facts </Text>
                <View style={style.buttonfat}>
                    <Button title="Fato aleatório sobre gatos" onPress={fetchCatFact} style={style.buttonfat}/>
                    <Text style={style.text}> { catFact? catFact: "" } </Text>

                    <Button title="DOIS Fatos aleatórios sobre gatos" onPress={twoFetchCatFact} style={style.buttonfat}/>
                    <Text style={style.text}> { twoCatFact? twoCatFact: "" } </Text>
                    <Text style={style.text}> { twoCatFactTow? twoCatFactTow: "" } </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default CatFacts;