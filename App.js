import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default class App extends React.Component {
  state = {
    userInput: ''
  }

  handleInput = (text) => {
    this.setState({ userInput: text }, () => {
      if (text.length === 2) {
        console.log('hey');
        this.setState({ userInput: ''})
      }
    });

  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        ref={component => this._textInput = component}
        style={styles.input}
        value={this.state.userInput}
        onChangeText={(text) => this.handleInput(text)}
      />
      <Text>{this.state.userInput}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5
  }
});
