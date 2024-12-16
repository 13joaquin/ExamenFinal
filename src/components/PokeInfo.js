import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


const For = ({data}) => {
    const PokemonInfo = ({data}) => {
        const getColor = (type) => {
            const color = {
              fire: '#F7786B',
              water: '#76BEFE',
              grass: '#4CAF50',
              electric: '#FFEB3B',
              rock: '#BDB76B',
              ground: '#DEB887',
              psychic: '#F06292',
              ice: '#81D4FA',
              dragon: '#673AB7',
              dark: '#757575',
              fairy: '#F8BBD0',
              normal: '#B0BEC5',
              poison: '#AB47BC',
              fighting: '#E57373',
              flying: '#7986CB',
              bug: '#9CCC65',
              ghost: '#8E24AA',
              steel: '#B0BEC5',
              default: '#71C9F8',
            };
            return color[type] || color.default;
        };
        
    };

    return (
    <View style={PokeInfoStyless.container}>
        <Text style={PokeInfoStyless.name}>{data.name}</Text>
        <Image 
            source={{uri: data.sprites.other['official-artwork'].front_default}}
            style={PokeInfoStyless.image}
            resizeMode="contain"
        />
        <View style={PokeInfoStyless.typesContainer}>
            {data.types.map((type) => (
                <Text key={type.type.name} style={[PokeInfoStyless.type, {backgroundColor: getColor(type.type.name)}]}>
                    {type.type.name}
                </Text>
            ))}
        </View>
    </View>
  );
}
const PokeInfoStyless = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        marginBottom: 10,
      },
      image: {
        width: 200,
        height: 200,
      },
      typesContainer: {
        flexDirection: 'row',
        marginTop: 10,
      },
      type: {
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        textTransform: 'capitalize',
      },
});
export default For;
