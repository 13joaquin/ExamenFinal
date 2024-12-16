import React, {useState, useEffect} from 'react';
import Fomulario from './src/components/Fomulario';
import Chiste from './src/components/Chiste';

import { StyleSheet, 
  View, 
  Alert, 
  Keyboard, 
  TouchableWithoutFeedback,
  FlatList,
  Text,
  Image,
  TouchableOpacity } from 'react-native';

const App = () => {
  const [chiste, setChiste] = useState('');
  const [categeoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [cateogira, setCateogira] = useState([]);

  //Consultar las Cateogira al iniciar la app
  useEffect(() => {
    const obtenerCateogria = async () => {
      try{
        const respuesta = await fetch('https://api.chucknorris.io/jokes/categories');
        const resultado = await respuesta.json();
        setCateogira(resultado);
      } catch(error){
        Alert.alert('Error', 'Hubo un problema al cargar las categoria',[
          {text: 'OK'}]);
      }
    };
    obtenerCateogria();
  }, []);

  //Consultar un chiste de la categoria seleccionada
  useEffect(() => {
    const obtenerChiste = async () => {
      if(categeoriaSeleccionada){
        try {
          const url = `https://api.chucknorris.io/jokes/random?category=${categeoriaSeleccionada}`;
          const response = await fetch(url);
          const resultado = await response.json();
          setChiste(resultado.value);
        }catch(error){
          Alert.alert('Error', 'No se pudo cargar el chiste');
        }
      }
    };
    obtenerChiste();
  }, [categeoriaSeleccionada]);


  return (
      <View style={style.contenedor}>
        {/* Mostrar Cateogria o un chiste dependiendo del estado */}
        {categeoriaSeleccionada ?(
          <Chiste
            categoria={categeoriaSeleccionada}
            chiste={chiste}
            setCategoriaSeleccionada={setCategoriaSeleccionada}
            />
        ):(
          <Fomulario cateogorias={cateogira} setCategoriaSeleccionada={setCategoriaSeleccionada}/>
        )}
      </View>
    );
}
const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});
export default App;
