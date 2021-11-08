import { ChangeEvent } from 'react';

interface TodoItemProps {
  todo: ITodo,
  arrayKey: number,
  handleEdit(isDone: boolean, indexTodo: number): void,
  handleDelete(indexTodo: number) : void
}

interface ITodo {
  id: number,
  title: string,
  isCompleted: boolean,
  isEditing: boolean
};

const TodoItem = (props: TodoItemProps): JSX.Element => {
  //const [editedTodo, setEditedTodo] = useState<ITodo>(props.todo);

  const arrayKey = props.arrayKey;

  const handleEdit = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.handleEdit(event.target.checked, arrayKey);
  }

  const handleDelete = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleDelete(arrayKey)
  }

  const checkCompleted = () => {
    return props.todo.isCompleted ? {textDecoration: "line-through"} : {};
  }


  return (
    <div>
      <form onSubmit={handleDelete}>
        <label style={checkCompleted()}> {props.todo.title}
          <input type="checkbox" checked={props.todo.isCompleted} onChange={handleEdit} />
        </label>
        <input disabled={!props.todo.isCompleted} type="submit" value="Supprimer de la liste" />
      </form>
    </div>
  )
}

export default TodoItem;