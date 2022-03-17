//import res from 'express/lib/response';
import React from 'react';
import { useEffect, useState } from 'react';
//import { response } from '../../../server/app';
import DeleteUser from './DeleteUser';
// import { Buffer } from 'buffer';
// global.Buffer = Buffer;

export default function Users() {
    //dummy data 

    // const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    // const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    // const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    const handleDeleteUser = (deleteId) => {
        const newUsers = users.filter((i) => i.id !== deleteId);
        setUsers(newUsers);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { id: id, name: name, email: email };
        addUsers(newUser);
        setUsers([...users, newUser]);
    };

    //marlin, nemo, dory]
    const [users, setUsers] = useState([]);
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [id, setID] = useState(" ");

    const getUsers = () => {
        fetch(`http://localhost:4000/users`)
            .then((res) => res.json())
            .then((res) => setUsers(res.users));
    };


    useEffect(() => {
        // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
        getUsers();
    }, []);

    // POST request using fetch inside useEffect React hook
    //     const addUsers = () => {
    //         method: 'POST',
    //         body: JSON.stringify(setUsers)
    //     },[])
    //     fetch(`http://localhost:4000/users`)
    //         .then(response => response.json())
    //         .then((res) => setUsers(res.users));
    //         console.log('new user added');

    //   useEffect(() => {
    //     addUsers();
    //   }, []);
    const addUsers = (newUser) => {
        fetch(`http://localhost:4000/users`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUser)
    }).then(() => {
            console.log('new user added');
        })
    };

    useEffect(() => {
            
          }, []);
    // useEffect(() => {
    //     // POST request using fetch inside useEffect React hook
    //     const addUsers = {
    //         method: 'POST',
    //         body: JSON.stringify(setUsers)
    //     };
    //     fetch('http://localhost:4000/users', addUsers)
    //         .then((res) => res.json())
    //         .then((res) => setUsers(res.users));

    //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, []);



    return (
        <section className="user-management">
            <h2>User Management</h2>

            <ul id="users-list">
                {/* display all existing Users here */}
                {users.map(user =>
                    <li key={user.id}> {user.name} {user.email}</li>
                )}
            </ul>
            <div>
                <h3>Add User</h3>
                <form id="add-user" onSubmit={handleSubmit}>
                    <fieldset>
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            id="add-user-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        {/* Add more form fields here */}
                        <label>Email</label>
                        <input
                            type="text"
                            id="add-user-email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Id:</label>
                        <input
                            type="text"
                            id="add-user-id"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setID(e.target.value)}
                        />
                    </fieldset>
                    <button type="submit">Add</button>
                </form>
            </div>
            <div>
                <DeleteUser handleDeleteUser={handleDeleteUser} />
            </div>
        </section>
    )
};
