import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements'
import localdict from './localdic'



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
      definition: '',
      type: ''
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#1b2021'}
          centerComponent={{
            text: 'Dictionary',
            style: {color: '#ffd9da'}
          }}
        />
        <Image source={require('./assets/dictionaryIMG.png')} style={{width: 200, height: 200}}/>

        <TextInput
          style = {styles.inputBox}
          placeholder = {'Enter word here.'}
          onChangeText={text => {
            this.setState({ text: text})
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toLowerCase().trim()
            localdict[word]? (
            this.setState({ definition: localdict[word].definition }),
            this.setState({ type: localdict[word].type })
            ):
            alert("This word is not in the dictionary yet, please check back later.")
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

