import { useState } from 'react'
import { Button } from './Button';
import { Input } from './Input';

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
    <>
      {todoItems.length > 0 && (
        <ul>
          {todoItems.map((todoItem, i) => (
            <div key={todoItem.id}>
              <li>
                {editingId === todoItem.id
                  ?
                  <>
                    <Input
                      className="edit-box"
                      value={todoItem.title}
                      onChange={(e) => onChangeTodo({
                        ...todoItem,
                        title: e.target.value
                      })}
                    />
                    <div className="todo-right">
                      <Button className="primary-button" onClick={handleEndEdit}>保存</Button>
                      <Button className="secondary-button" onClick={() => handleCancel(todoItem)}>戻る</Button>
                    </div>
                  </>
                  :
                  <>
                    <input
                      className="checkbox"
                      type="checkbox"
                      checked={todoItem.completed}
                      onChange={(e) => onChangeTodo({
                        ...todoItem,
                        completed: e.target.checked
                      })}
                    />
                    <p className={`todoTitle ${todoItem.completed ? "strikethrough" : ""}`}>
                      {todoItem.title}
                    </p>
                    <div className="todo-right">
                      <Button className="primary-button" onClick={() => handleStartEdit(todoItem)}>編集</Button>
                      <Button className="secondary-button" onClick={() => onDeleteTodo(todoItem.id)}>削除</Button>
                    </div>
                  </>
                }
              </li>
              {todoItems.length - 1 > i && <hr />}
            </div>
          ))}
        </ul >
      )}
      <style jsx="true">{`
        ul {
          max-width: 420px;
          padding: 0;
          margin: 20px auto;
          background-color: #fff;
          padding: 5px 10px;
          border-radius: 10px;
          box-shadow: 2px 2px 6px gray;
        }

        li {
          display: flex;
          align-items: center;
          margin-top: 3px;
          margin-bottom: 3px;
        }
        
        .checkbox {
          margin-right: 8px;
          transform: scale(1.2)
        }

        .todoTitle {
          margin: 6px 0;
          width: 240px;
          text-align: left;
        }

        .strikethrough {
          text-decoration: line-through;
        }
        
        .edit-box {
          width: 265px;
          border: 1px solid #A9D3D4;
        }

        .todo-right {
          display: flex;
          gap: 4px;
          margin-left: auto;
        }

        .primary-button {
          background-color: #A9D3D4;
        }

        .secondary-button {
          background-color: #BBB;
        }

        hr {
          margin: 0;
          border:none;
          border-top:dashed 1px #CCC;
        }
        
      `}</style>
    </>
  )
};
