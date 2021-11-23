import { ChangeEvent, Fragment } from "react"

interface TodoFilterProps{
  filter: string,
  changeFilterMode(f: string): void
}

const TodoFilter = (props: TodoFilterProps): JSX.Element => {

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    props.changeFilterMode(e.target.value);
  }

  return(
    <Fragment>
      <select name="flavor" value={props.filter} onChange={handleChange}>
        <option value="">pas de filtre</option>
        <option value="complete">tâches finies</option>
        <option value="incomplete">tâches non finies</option>
      </select>
    </Fragment>
  )
}

export default TodoFilter;