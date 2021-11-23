import { ChangeEvent, KeyboardEvent } from 'react';

interface TodoInputProps {
  input: string,
  modifier(input: string): void,
  submitter(input: string): void
}

const TodoInput = (props: TodoInputProps): JSX.Element => {



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.modifier(e.target.value);
  }

  const handleKey = (e: KeyboardEvent<HTMLInputElement>) => {
    (e.key === "Escape" || e.key === "Enter") && props.modifier("");
    (e.key === "Enter" && props.input) && props.submitter(props.input);
  }


  return (
    <fieldset>
      <legend>Saisissez un titre de todo :</legend>
      <input value={props.input}
        onChange={handleChange}
        onKeyUp={handleKey}
      />
    </fieldset>
  )
}

export default TodoInput;