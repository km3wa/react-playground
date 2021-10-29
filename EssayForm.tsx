import {useState} from 'react';

const EssayForm = () => {
  const [value, setValue] = useState<string>('Écrivez un essai à propos de votre élément du DOM préféré');
  
  const handleChange = (event : any) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event : any) => {
    alert('Un essai a été envoyé : ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={value} onChange={handleChange} />
      </label>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default EssayForm;
