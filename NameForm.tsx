import {useState} from 'react';


const NameForm = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event : any) => {
        setValue(event.target.value);
    }


    return (
        <label>
            Nom :
            <input name="name" type="text" value={value} onChange={handleChange} />
        </label>
    );
}

export default NameForm;