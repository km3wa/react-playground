import { useState } from "react";

interface GreetingProps{
    isLoggedIn : boolean
}

function UserGreeting(): JSX.Element {
    return <h1>Bienvenue !</h1>;
}

function GuestGreeting(): JSX.Element {
    return <h1>Veuillez vous inscrire.</h1>;
}
function Greeting(props : GreetingProps) : JSX.Element{
    const [ isConnected, setIsConnected ] = useState(props.isLoggedIn)

    return (
        <div>
            {isConnected ? <UserGreeting/> : <GuestGreeting/>}
            <button onClick={() => setIsConnected(isConnected ? false : true)}>{isConnected ? "log out" : "log in"}</button>
        </div>
    );
}

export default Greeting;
