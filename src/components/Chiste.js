import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Chiste = ({categoria, chiste, setCategoriaSeleccionada}) => {
  return (
    <View style={ChisteSty.contenedor}>
        <Text style={ChisteSty.titulo}>{categoria}</Text>
        <Text style={ChisteSty.chiste}>{chiste}</Text>
        <Button
            title="Volver"
            onPress={() => setCategoriaSeleccionada(null)}
            color="#ff5722"
            />
    </View>
  )
}
const ChisteSty = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
      titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textTransform: 'capitalize',
      },
      chiste: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 40,
        color: '#333',
      },
});
export default Chiste
