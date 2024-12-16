import React, {useState} from 'react';
import { View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity, 
    Alert } from 'react-native';

const Formu = ({onSearchs, onclear}) => {
    const [input, setInput] = useState('');

    const handleSearchs = () => {
        if(input.trim()){
            onSearchs(pokemon);
            setInput('');   
        }
    };

  return (
    <View style={FOStyle.container}>
        <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Buscar Pokemon..."
            placeholderTextColor="#666"
            style={FOStyle.input}
        />
        <TouchableOpacity style={FOStyle.button} onPress={handleSearchs}>
            <Text style={FOStyle.buttonText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[FOStyle.button, FOStyle.clearButton]} onPress={onclear}>
            <Text style={FOStyle.buttonText}>Limpiar</Text>
        </TouchableOpacity>
    </View>
  );
};
const FOStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 16,
      },
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
      },
      clearButton: {
        backgroundColor: '#dc3545',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});
export default Formu;
