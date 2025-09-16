import { useState } from 'react'

export const AddTodo = ({ onAddTodo }) => {
  const [todoText, setTodoText] = useState("");

  return (
    <>
      <div className="container">
        <input
          className="todo-text"
          type="text"
          placeholder="Todoを入力"
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
        />
        <button className="save-button"
          onClick={() => {
            setTodoText("");
            onAddTodo(todoText);
          }}>保存</button>
      </div>

      <style jsx="true">{`
        .container {
          max-width: 420px;
          margin: 20px auto;
          display: flex;
          justify-content: space-around;
          background-color: #F5F5F5;
          border-radius: 10px;
          box-shadow: 2px 2px 6px gray;
          padding: 10px;
        }

        .todo-text {
          width: 310px;
          max-width: 310px;
        }

        .save-button {
          background-color: #5F9EA0;
          color: #fff;
        }
      `}</style>
    </>
  )
};
