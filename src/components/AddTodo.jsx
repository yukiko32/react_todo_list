import { useState } from 'react'

export const AddTodo = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Todoを入力"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
      />
      <button onClick={() => {
        setTodoText("");
        onAddTodo(todoText);
      }}>保存</button>
    </div>
  )
};
