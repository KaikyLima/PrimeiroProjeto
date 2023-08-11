import { useState } from "react";

const CardFacts = () => {

    const[cardFact, setCardFact] = useState ()

    const fetchCardFact = async () => {
        try{
            const {data} = await axios.get('https://catfact.ninja/fact')
            setCardFact(data.fact)
        }catch(error){
            console.log(error)
        }
    }

    const MyCard = ({onTouchCard}){
        <TouchableOpacity onPress={onTouchCard}>
            <View style={styles.cardContainer}>
                <Text style={styles.cardTitle}>{ cardFact? cardFact: "" }</Text>
            </View>
        </TouchableOpacity>
        }


    return (
        <MyCard/>
    );
}

export default CardFacts;