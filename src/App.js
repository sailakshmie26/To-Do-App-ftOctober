import React from 'react';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';

const App = () => {
  return (
    <div>
      <h1 style={{color:'#133926'}}>To-Do App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
