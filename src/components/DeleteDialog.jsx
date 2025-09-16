import { Button, Dialog, Portal } from "@chakra-ui/react"

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
