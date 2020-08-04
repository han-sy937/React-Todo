import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { Card, Header2 } from './components/style'

const todoList = [
  {
    task: '',
    id: '',
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todoList
    }
  }

  addToList = listName => {
    const newList = {
      task: listName,
      id: new Date(),
      completed: false
    };

    this.setState({
      todoList: [...this.state.todoList, newList]
    });
  };

  toggleList = id => {
    this.setState({
      todoList: this.state.todoList.map(list => {
        if(list.id === id) {
          return {
            ...list,
            completed: !list.completed
          };
        } else {
          return list
        }
      })
    });
  };

  removeList = e => {
    e.preventDefault();
    const removeList = this.state.todoList.filter(list => !list.completed);
    this.setState({todoList: removeList})
    
  }

  render() {
    return (
      <Card>
        <Header2>Todo Task</Header2>
        <TodoList 
          todoList={this.state.todoList}
          toggleList={this.toggleList}
        />
        <TodoForm 
          addToList={this.addToList} 
          removeList={this.removeList}
        />
      </Card>
    );
  }
}

export default App;
