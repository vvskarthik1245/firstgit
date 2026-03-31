import { useEffect, useState } from "react";

function FetchData() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())  
            .then(data => setUsers(data))
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.phone}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchData;