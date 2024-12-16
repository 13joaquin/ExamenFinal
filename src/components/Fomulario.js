import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

const Fomulario = ({cateogorias, setCategoriaSeleccionada}) => {
 const renderItem = ({item}) => (
    <TouchableOpacity
    style={FSMstyle.categoria}
    onPress={() => setCategoriaSeleccionada(item)}>
        <Text style={FSMstyle.texto}>{item}</Text>
    </TouchableOpacity>
 );
    return (
    <FlatList 
        data={cateogorias}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={FSMstyle.lista}
    />
  );
}
const FSMstyle = StyleSheet.create({
    lista: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      categoria: {
        backgroundColor: '#ffcc00',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'capitalize',
      },
});
export default Fomulario;
