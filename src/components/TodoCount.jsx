export const TodoCount = ({ todoItems }) => {
  const allCount = todoItems.length;
  const completedCount = todoItems.filter(t => t.completed).length;
  const incompleteCount = allCount - completedCount;

  return (
    <div className="count-container">
      <p>全てのタスク：{allCount}</p>
      <p>完了済み：{completedCount}</p>
      <p>未完了：{incompleteCount}</p>
    </div>
  )
};
