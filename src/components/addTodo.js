import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [dueDate, setDueDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      
      dispatch(addTodo({ text, dueDate }));
      setText('');
      setDueDate(new Date());
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new to-do"
      />
      <DatePicker 
        selected={dueDate} 
        onChange={(date) => setDueDate(date)} 
        showTimeSelect
        dateFormat="Pp"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
