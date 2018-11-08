import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

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
        <TouchableOpacity key={t}>
          <Text
            style={styles.todo}
            onPress={() => {
              this.deleteTodo(t);
            }}
          >
            {t}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    return (
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyles}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputStyles}
            onChangeText={text => {
              this.setState({ text });
            }}
            value={this.state.text}
          />
          <Button title="Add todo" color="#2286c3" onPress={this.addTodo} />
        </View>
        <View style={{ marginTop: 100 }} />
        <View style={styles.outputarea}>{this.renderTodos()}</View>
      </View>
    );
  }
}

const styles = {
  wholeStyle: {
    flex: 1,
    backgroundColor: '#E1E2E1'
  },
  viewStyles: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64b5f6',
    padding: 10
  },
  inputStyles: {
    height: 40,
    width: 300,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10
  },
  header: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold'
  },
  outputarea: {
    backgroundColor: '#E1E2E1',
    alignItems: 'center',
    padding: 10,
    fontSize: 15
  },
  todo: {
    fontSize: 18
  }
};

export default App;
