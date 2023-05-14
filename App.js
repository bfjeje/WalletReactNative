import React from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  return (
    <View style={{padding: 10}}>
      <Text style={{marginBottom: 20}}>Carteira Digital</Text>
      <View style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}>
        <View style={styles.view1}>
          <Text>Seu saldo</Text>
          <Switch />
        </View>

        <Text style={styles.saldo}>R$ 500,00</Text>

        <TextInput style={{backgroundColor: 'white', marginVertical: 10}} />

        <View style={styles.view2}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Adicionar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Remover
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saldo: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginTop: 10,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default App;
