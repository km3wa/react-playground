import { useState, useEffect } from 'react';
import ITodo from './ITodo';
import TodoFilter from './TodoFilter';
import TodoInput from "./TodoInput";
import TodoList from './TodoList';

// TODOAPP : gère les données du tableau de Todos dans un état

const TodoApp = (): JSX.Element => {

  const [entryCount, setEntryCount] = useState<number>(0);
  const [todoArray, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>("")

  const [input, setInput] = useState<string>("")

  useEffect(() => {
    console.log({ entryCount, filter, todoArray });
  }, [entryCount, filter, todoArray])

  const addTodo = (input: string) => {
    const todoItem: ITodo = {
      id: entryCount+1,
      title: input,
      isCompleted: false,
      isEditing: false
    }

    setTodoList(previousState => ([...previousState, todoItem]));
    setEntryCount(entryCount+1);
  }

  const changeInput = (input: string) => {
    setInput(input);
  }

  const modifyTodoArray = (array: ITodo[]) => {
    setTodoList(array);
    console.log("successful");
  }

  const changeFilterMode = (f: string) => {
    setFilter(f);
  }


  return (
    <div>
      <TodoInput input={input} modifier={changeInput} submitter={addTodo} />
      <TodoFilter filter={filter} changeFilterMode={changeFilterMode} />
      <TodoList data={todoArray} modifier={modifyTodoArray} filter={filter} />
    </div>
  )
}

export default TodoApp;