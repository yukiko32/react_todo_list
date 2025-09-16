/**
 * Todo の件数を表示するコンポーネント
 * @param {{ todoItems: TodoItem[] }} props
 * @param {TodoItem[]} props.todoItems - 表示する Todo の配列
 * @returns {JSX.Element} Todo 件数表示の UI
 */
export const TodoCount = ({ todoItems }) => {
  const allCount = todoItems.length;
  const completedCount = todoItems.filter(t => t.completed).length;
  const incompleteCount = allCount - completedCount;

  return (
    <>
      <div className="count-container">
        <p className="count">全て<br />{allCount}</p>
        <p className="count">完了済み<br />{completedCount}</p>
        <p className="count">未完了<br />{incompleteCount}</p>
      </div>

      <style jsx="true">{`
      .count-container {
        display: flex;
        justify-content: center;
        margin: 0 auto;
      }
      
      .count {
        display: inline-block;
        width: 100px;
        margin: 0 6px;
        font-size: 15px;
        padding: 4px 8px;
        border-radius: 10px;
        background-color: #fff;
        border: 3px solid #A9D3D4;
        box-shadow: 2px 2px 6px gray;
      }
    `}</style>
    </>
  )
};


