import { FlatList, SafeAreaView } from "react-native";

const pokemonData= [
    {
        name: 'Pikachu',
        type: 'Elétrico'
    },
    {
        name: 'Charmander',
        type: 'Fogo'
    },
    {
        name: 'Psyduck',
        type: 'Psíquico'
    }

]

const ListPage = () => {
    return (
        <SafeAreaView>
            <FlatList 
                data={pokemonData}
                renderItem={({item} => <PokemonItem pokemon>)}
            />
        </SafeAreaView>
    );
}

export default ListPage;