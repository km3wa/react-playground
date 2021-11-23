import { Fragment } from 'react';
import ITodo from './ITodo';
import TodoItem from './TodoItem';

interface TodoListProps {
  data: ITodo[],
  filter: string,
  modifier(array: ITodo[]): void
}

const TodoList = (props: TodoListProps): JSX.Element => {


  const setIsCompleted = (isDone: boolean, indexTodo: number) => {
    const tempTodos = props.data;
    tempTodos[indexTodo].isCompleted = isDone;
    console.log(tempTodos);
    props.modifier(tempTodos);
  }

  const handleDelete = (indexTodo: number) => {
    const tempTodos = props.data;
    tempTodos.splice(indexTodo, 1);
    props.modifier(tempTodos);
  }

  const isFiltered = (isCompleted: boolean): boolean => {
    switch (props.filter) {
      case "complete":
        return isCompleted;

      case "incomplete":
        return !isCompleted;
    }

    return true;
  }

  return (
    <Fragment>
      {(props.data != null) && props.data.map((todo, indexTodo) => (
        isFiltered(todo.isCompleted) && (
          <ul key={todo.id}>
            <li><TodoItem item={todo} itemKeyInArray={indexTodo} setIsCompleted={setIsCompleted} handleDelete={handleDelete} /></li>
          </ul>)
      )
      )}
    </Fragment>
  )
}

export default TodoList;