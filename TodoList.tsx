import { useState, useEffect, ChangeEvent } from 'react';
import TodoItem from './TodoItem'

let newTodo = {
  id: 1,
  title: 'ma super tâche',
  isCompleted: false,
  isEditing: false
}

interface ITodo {
  id: number,
  title: string,
  isCompleted: boolean,
  isEditing: boolean
};

const TodoList = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [input, setInput] = useState<string>("");
  const [nextId, setNextId] = useState<number>(0)

  useEffect(() => {
    console.log(todos);
    setInput("");
  }, [todos])


  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(previousState => ([...previousState, {
      id: nextId,
      title: input,
      isCompleted: false,
      isEditing: false
    }]))
    setNextId(previousState => (previousState + 1));
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }

  const handleEdit = (isDone : boolean, indexTodo : number) => {
    const tempTodo = todos;

    tempTodo[indexTodo].isCompleted = isDone;
    setTodos(tempTodo);
  }

  const handleDelete = (indexTodo : number) => {
    const tempTodo = todos;

    tempTodo.splice(indexTodo, 1);
    setTodos(tempTodo);
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input type="text" name="title" value={input} onChange={handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>

      {(todos != null) && todos.map((todo, indexTodo) => (
        <ul key={todo.id}>
          <li><TodoItem todo={todo} arrayKey={indexTodo} handleEdit={handleEdit} handleDelete={handleDelete}/></li>
        </ul>
      )
      )}
    </div>
  )
}

export default TodoList;