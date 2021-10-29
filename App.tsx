import {useState} from 'react';

interface AppState{
    essay : string,
    flavor : string,
    name : string
}

const App = () => {
    const [essay, setEssay] = useState<string>('Écrivez un essai à propos de votre élément du DOM préféré');
    const [flavor, setFlavor] = useState<string>('coconut');
    const [name, setName] = useState<string>('');



    const handleSubmit = (event: any) => {
        console.log(essay);
        console.log(flavor);
        console.log(name);
        event.preventDefault();
    }

    const handleInputChange = (event: any) => {
        const target = event.target;

        switch (target.name){
            case "essay":
                setEssay(target.value);
                break;

            case "flavor":
                setFlavor(target.value);
                break;

            case "name":
                setName(target.value);
                break;
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Essay:
                    <textarea name="essay" value={essay} onChange={handleInputChange} />
                </label>

                <label>
                    Choisissez votre parfum favori :
                    <select name="flavor" value={flavor} onChange={handleInputChange}>
                        <option value="grapefruit">Pamplemousse</option>
                        <option value="lime">Citron vert</option>
                        <option value="coconut">Noix de coco</option>
                        <option value="mango">Mangue</option>
                    </select>
                </label>

                <label>
                    Nom :
                    <input name="name" type="text" value={name} onChange={handleInputChange} />
                </label>

                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}

export default App;