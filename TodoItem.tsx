import { Fragment, ChangeEvent, CSSProperties } from 'react';
import ITodo from './ITodo';

interface TodoItemProps {
  item: ITodo,
  itemKeyInArray: number,
  setIsCompleted(isDone: boolean, indexTodo: number): void,
  handleDelete(indexTodo: number): void
}


const TodoItem = (props: TodoItemProps): JSX.Element => {

  const itemKeyInArray = props.itemKeyInArray;

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    props.setIsCompleted(event.target.checked, itemKeyInArray);
  }


  const handleDelete = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.handleDelete(itemKeyInArray)
  }

  const checkCompleted = (): CSSProperties => {
    return props.item.isCompleted ? { textDecoration: "line-through" } : {};
  }


  return (
    <Fragment>
      <form onSubmit={handleDelete}>
        <label style={checkCompleted()}> {props.item.title}
          <input type="checkbox" checked={props.item.isCompleted} onChange={handleCheckboxChange} />
        </label>
        <input disabled={!props.item.isCompleted || props.item.isEditing} type="submit" value="Supprimer de la liste" />
      </form>
    </Fragment>
  )
}

export default TodoItem;