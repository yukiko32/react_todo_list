import { useState } from 'react'
import { Button } from './atoms/Button';
import { Input } from './atoms/Input';
import { DeleteDialog } from './DeleteDialog';

/**
 * Todo リストを表示するコンポーネント
 * @param {{ 
 *   todoItems: TodoItem[], 
 *   onChangeTodo: (todoItem: TodoItem) => void, 
 *   onDeleteTodo: (todoItem: TodoItem) => void 
 * }} props
 * @param {TodoItem[]} props.todoItems - 表示する Todo の配列
 * @param {(todoItem: TodoItem) => void} props.onChangeTodo - Todo 更新用コールバック
 * @param {(todoItem: TodoItem) => void} props.onDeleteTodo - Todo 削除用コールバック
 * @returns {JSX.Element} Todo 一覧と編集・削除 UI
 */
export const TodoList = ({ todoItems, onChangeTodo, onDeleteTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [deleteTodoItem, setDeleteTodoItem] = useState({});

  /**
   * 編集開始
   * @param {TodoItem} todoItem 
   */
  const handleStartEdit = (todoItem) => {
    setEditingId(todoItem.id);
    setEditText(todoItem.title);
  }

  /**
   * 編集内容を保存
   * @param {TodoItem} todoItem 
   */
  const handleSave = (todoItem) => {
    setEditingId(null);
    onChangeTodo({
      ...todoItem,
      title: editText
    })
  }

  /**
   * 削除ダイアログを開く
   * @param {TodoItem} todoItem 
   */
  const handleDelete = (todoItem) => {
    setIsOpen(true);
    setDeleteTodoItem(todoItem);
  }

  return (
    <>
      <DeleteDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        deleteTodoItem={deleteTodoItem}
        onDeleteTodo={onDeleteTodo}
      />
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
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <div className="todo-right">
                      <Button
                        className="primary-button"
                        onClick={() => handleSave(todoItem)}
                        disabled={editText === ""}
                      >保存</Button>
                      <Button
                        className="secondary-button"
                        onClick={() => setEditingId(null)}
                      >戻る</Button>
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
                      <Button
                        className="primary-button"
                        onClick={() => handleStartEdit(todoItem)}
                        disabled={editingId !== null}
                      >編集</Button>
                      <Button
                        className="secondary-button"
                        onClick={() => handleDelete(todoItem)}
                        disabled={editingId !== null}
                      >削除</Button>
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
          background-color: #778899;
          color: #fff;
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
