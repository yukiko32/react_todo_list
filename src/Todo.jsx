import { useState } from 'react'
import { AddTodo } from './components/AddTodo';
import { TodoCount } from './components/TodoCount';
import { TodoList } from './components/TodoList';

// id管理
let nextId = 0;

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = (todoText) => {
    const newTodoItems = [
      ...todoItems,
      {
        id: nextId++,
        title: todoText,
        completed: false
      }
    ];
    setTodoItems(newTodoItems);
  }

  const handleChangeTodo = (todoItem) => {
    const newTodoItems = todoItems.map((t) => {
      return t.id === todoItem.id ? todoItem : t;
    });
    setTodoItems(newTodoItems);
  }

  const handleDeleteTodo = (todoId) => {
    const newTodoItems = todoItems.filter((t) => {
      return t.id !== todoId;
    });
    setTodoItems(newTodoItems);
  }

  return (
    <>
      <h1>Todo List</h1>
      <TodoCount todoItems={todoItems} />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todoItems={todoItems}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}


