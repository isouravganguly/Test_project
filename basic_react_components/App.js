import React from 'react';
import {Image, Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('Hello');
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View>
      <Text style={styles.text}>React Native</Text>
      <View style={styles.textbox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
        />
      </View>

      <Image style={styles.tinyLogo} source={{uri: "https://cdn-images-1.medium.com/max/1200/1*rSGF7OBUjv3Ac2kP_cSjtA.png"}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    alignItems: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: '700',
    marginTop: 50,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
  },

  textbox: {
    padding: 20,
  },

  tinyLogo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
});

export default App;
