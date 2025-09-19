import { Button, Dialog, Portal } from "@chakra-ui/react"

/**
 * 削除確認ダイアログコンポーネント
 * @param {{ 
 *   isOpen: boolean, 
 *   onOpenChange: (open: boolean) => void, 
 *   deleteTodoItem: TodoItem, 
 *   onDeleteTodo: (id: number) => void 
 * }} props
 * @param {boolean} props.isOpen - ダイアログの開閉状態
 * @param {(open: boolean) => void} props.onOpenChange - ダイアログ開閉状態を変更するコールバック
 * @param {TodoItem} props.deleteTodoItem - 削除対象の Todo
 * @param {(id: number) => void} props.onDeleteTodo - Todo 削除処理を実行するコールバック
 * @returns {JSX.Element} 削除確認ダイアログ
 */
export const DeleteDialog = ({ isOpen, onOpenChange, deleteTodoItem, onDeleteTodo }) => {
  return (
    <Dialog.Root size={"xs"} open={isOpen}>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>確認</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>『{deleteTodoItem.title}』を削除してもよろしいですか？</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
              >キャンセル</Button>
              <Button onClick={() => {
                onOpenChange(false);
                onDeleteTodo(deleteTodoItem.id);
              }}>削除</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  )
};
