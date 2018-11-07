import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class App extends React.Component {
  state = {
    text: '',
    todo: []
  };
  addTodo = () => {
    let newToDo = this.state.text;
    let arr = this.state.todo;
    arr.push(newToDo);
    this.setState({ todo: arr, text: '' });
  };
  deleteTodo = t => {
    let arr = this.state.todo.filter(todo => {
      if (todo !== t) return t;
    });
    this.setState({ todo: arr });
  };
  renderTodos = () => {
    return this.state.todo.map(t => {
      return (
        <Text
          key={t}
          onPress={() => {
            this.deleteTodo(t);
          }}
        >
          {t}
        </Text>
      );
    });
  };
  render() {
    return (
      <View style={styles.viewStyles}>
        <Text>Hello world, this app is great</Text>
        <TextInput
          style={styles.inputStyles}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Button title="Add todo" color="green" onPress={this.addTodo} />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyles: {
    height: 40,
    width: 300,
    borderColor: 'green',
    borderWidth: 1
  }
};

export default App;
