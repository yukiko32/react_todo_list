import { useState } from 'react'

export const TodoList = ({ todoItems, onChangeTodo, onDeleteTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [prevText, setPrevText] = useState("");

  const handleStartEdit = (todoItem) => {
    setEditingId(todoItem.id);
    setPrevText(todoItem.title);
  }

  const handleEndEdit = () => {
    setEditingId(null);
  }

  const handleCancel = (todoItem) => {
    setEditingId(null);
    onChangeTodo({
      ...todoItem,
      title: prevText
    });
  }

  return (
    <ul>
      {todoItems.map((todoItem) => (
        <li className="todo-item" key={todoItem.id}>
          <input
            type="checkbox"
            checked={todoItem.completed}
            onChange={(e) => onChangeTodo({
              ...todoItem,
              completed: e.target.checked
            })}
          />
          {editingId === todoItem.id
            ?
            <>
              <input
                type="text"
                value={todoItem.title}
                onChange={(e) => onChangeTodo({
                  ...todoItem,
                  title: e.target.value
                })}
              />
              <button onClick={handleEndEdit}>保存</button>
              <button onClick={() => handleCancel(todoItem)}>戻る</button>
            </>
            :
            <>
              <p>{todoItem.title}</p>
              <button onClick={() => handleStartEdit(todoItem)}>編集</button>
              <button onClick={() => onDeleteTodo(todoItem.id)}>削除</button>
            </>
          }
        </li>
      ))}
    </ul>
  )
};
