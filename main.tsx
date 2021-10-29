import { useEffect, useState, Fragment } from "react";
import User from './User';

interface ListDataProps{
    users: User[];
}




function UserList() : JSX.Element{
const [usersData, setUsersData] = useState<User[]>()
    
    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
    }, [usersData]);

    const fetchData = () => {
        return(fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((json : User[]) => setUsersData(json) ));
    }
    
    

    return (
        <Fragment>
            {(usersData != null) && usersData.map((user) => (
                <ul key={user.id}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>{user.company.name}</li>
                    <li>{user.phone}</li>
                    <li>{user.website}</li>
                </ul>
            )
            )}
        </Fragment>
    );
}


export default UserList;
