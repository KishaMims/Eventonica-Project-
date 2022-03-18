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

    // old submit new user funct
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const newUser = { id: id, name: name, email: email };
    //     addUsers(newUser);
    //     setUsers([...users, newUser]);
    // };

    // old delete user function
    // const handleDeleteUser = (deleteId) => {
    //     const newUsers = users.filter((i) => i.id !== deleteId);
    //     setUsers(newUsers);
    // };

    //previous fetch and post with no db
    // const getUsers = () => {
    //     fetch(`http://localhost:4000/users`)
    //         .then((res) => res.json())
    //         .then((res) => setUsers(res.users));
    // };
    // useEffect(() => {
    //     // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered.
    //     getUsers();
    // }, []);

    // const addUsers = (newUser) => {
    //     fetch(`http://localhost:4000/users`, {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(newUser)
    // }).then(() => {
    //         console.log('new user added');
    //     })
    // };

    // useEffect(() => {

    //       }, []);
    // client/src/components/Users.js

    // const deleteUser = (deleteId) => {
    //     const newUsers = users.filter((i) => i.id !== deleteId);
    //     setUsers(newUsers);
    // };

    // const handleDeleteUser = (deleteId) => {
    //     const newUsers = users.filter((i) => i.id !== deleteId);
    //     setUsers(newUsers);
    // };


    // var requestOptions = {
    //     method: 'DELETE',
    //     redirect: 'follow'
    //   };

    //   fetch("http://localhost:4000/users", requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));

    const handleDeleteUser = async (deleteUser) => {

        const response = await fetch(`http://localhost:4000/users${deleteUser}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },

        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);

            const deleteUsers = users.filter((user) => user.id !== deleteUser);
            console.log(deleteUsers);
            setUsers(deleteUsers);
        })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const [users, setUsers] = useState([]);
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [id, setID] = useState(" ");


    //get request to db
    const getUsers = async () => {
        const response = await fetch('http://localhost:4000/users');
        const user = await response.json();
        setUsers(user);
    };

    useEffect(() => {
        getUsers();
    }, []);

    // add user with db
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = { id: id, name: name, email: email };

        const rawResponse = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        });
        const content = await rawResponse.json();

        setUsers([...users, content]);
    };



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
