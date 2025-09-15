import { useState } from 'react'
import './Todo.css'

// id管理
let nextId = 0;

export default function Todo() {
  const [todoItems, setTodoItems] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [editingId, setEditingId] = useState(null);

  // Todoアイテムのカウント数
  const allTodoCount = todoItems.length;
  const completedTodoCount = todoItems.filter(t => t.completed).length;
  const incompleteTodoCount = allTodoCount - completedTodoCount;

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  }

  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newTodoItems = [
      ...todoItems,
      {
        id: nextId++,
        title: todoText,
        completed: false
      }
    ];
    setTodoItems(newTodoItems);
    setTodoText("");
  }

  const onClickDeleteTodo = (todoId) => {
    const newTodoItems = todoItems.filter((t) => {
      return t.id !== todoId;
    });
    setTodoItems(newTodoItems);
  }

  const onChangeTodo = (todoItem) => {
    const newTodoItems = todoItems.map((t) => {
      return t.id === todoItem.id ? todoItem : t;
    });
    setTodoItems(newTodoItems);
  }

  const onClickEditTodo = (todoId) => {
    setEditingId(todoId);
  }

  const onClickSaveTodo = () => {
    setEditingId(null);
  }

  return (
    <>
      <h1>TODO List</h1>

      <div className="count-container">
        <p>全てのタスク：{allTodoCount}</p>
        <p>完了済み：{completedTodoCount}</p>
        <p>未完了：{incompleteTodoCount}</p>
      </div>

      <div>
        <input type="text" placeholder="Todoを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAddTodo}>保存</button>
      </div>

      <ul>
        {todoItems.map((todoItem) => (
          <li className="todo-item" key={todoItem.id}>
            <input type="checkbox"
              checked={todoItem.completed}
              onChange={(e) => onChangeTodo({
                ...todoItem,
                completed: e.target.checked
              })}
            />
            {editingId === todoItem.id
              ?
              <>
                <input type="text" value={todoItem.title} onChange={(e) => onChangeTodo({
                  ...todoItem,
                  title: e.target.value
                })} />
                <button onClick={() => onClickSaveTodo(todoItem.id)}>保存</button>
              </>
              :
              <>
                <p>{todoItem.title}</p>
                <button onClick={() => onClickEditTodo(todoItem.id)}>編集</button>
                <button onClick={() => onClickDeleteTodo(todoItem.id)}>削除</button>
              </>
            }
          </li>
        ))}
      </ul>
    </>
  )
}


