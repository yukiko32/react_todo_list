import { useState } from 'react'
import { AddTodo } from './components/AddTodo';
import { TodoCount } from './components/TodoCount';
import { TodoList } from './components/TodoList';

/**
* Todo アイテムの型
* @typedef {Object} TodoItem
* @property {number} id - Todo の一意の ID
* @property {string} title - Todo のタイトル
* @property {boolean} completed - 完了済みかどうか
*/

// Todoのid管理
let nextId = 0;

/**
 * Todo コンポーネント
 * @component
 * @returns {JSX.Element} TodoアプリのUI
 */
export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);

  /**
   * 新しい Todo を追加する
   * @param {string} todoText - 追加する Todo のタイトル
   */
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

  /**
   * Todo を更新する
   * @param {TodoItem} todoItem - 更新する Todo オブジェクト
   */
  const handleChangeTodo = (todoItem) => {
    const newTodoItems = todoItems.map((t) => {
      return t.id === todoItem.id ? todoItem : t;
    });
    setTodoItems(newTodoItems);
  }

  /**
   * Todo を削除する
   * @param {number} todoId - 削除する Todo の ID
   */
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
      <style jsx="true">{`
        * {
          box-sizing: border-box;
          list-style: none;
        }

        body {
          background-color: #F5F5F5;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          font-size: 36px;
          font-weight: bold;
          padding: 20px;
        }
      `}</style>
    </>
  )
}


