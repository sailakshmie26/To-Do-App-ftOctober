import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, togglePriority } from '../features/todo/todoSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0'}}>
        <table 
        style={{ width: '50%', borderCollapse: 'collapse', background:'transparent'}}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Task</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Due</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Important</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id} style={{ border: '1px solid black', textAlign:'center' }}>
            <td 
              onClick={() => dispatch(toggleComplete(todo.id))} 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            >
              {todo.text}
            </td>
            <td>{new Date(todo.dueDate).toLocaleString()}</td>
            <td>
              <FontAwesomeIcon 
                icon={faStar} 
                onClick={() => dispatch(togglePriority(todo.id))} 
                style={{ 
                  color: todo.priority ? 'red' : 'gray', 
                  cursor: 'pointer',
                  textAlign: 'center'
                }}
              />
            </td>
            <td>
              <button onClick={() => dispatch(deleteTodo(todo.id))} style={{ backgroundColor:'#990000', color: 'white', border: 'none', padding: '5px' }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default TodoList;
