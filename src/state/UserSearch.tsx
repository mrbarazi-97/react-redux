import {useState} from 'react';

const users = [
    {name : 'Sarah' , age : 20},
    {name : 'Ali' , age : 24},
    {name : 'Nasir' , age : 70}
];

const UserSearch : React.FC=()=> {
    const [name,setName] = useState('');
    const [user,setUser] = useState<{name : string , age :number} | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => {
            return (
                user.name === name
                );
        });

        setUser(foundUser);
    };


    return(
        <div>
            <h1>UserSearch</h1>
            <input value = {name} onChange={e=>setName(e.target.value)}/>
            <button onClick={onClick}>Find!</button>
            <div>
                {user && user.name}
                {user && user.age}  
            </div>
        </div>
    );
};

export default UserSearch