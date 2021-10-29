import {useState} from 'react';

const FlavorForm = () => {
  const [value, setValue] = useState<string>('coconut')

  const handleChange = (event : any) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event : any) => {
    alert('Votre parfum favori est : ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez votre parfum favori :
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Pamplemousse</option>
          <option value="lime">Citron vert</option>
          <option value="coconut">Noix de coco</option>
          <option value="mango">Mangue</option>
        </select>
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
}