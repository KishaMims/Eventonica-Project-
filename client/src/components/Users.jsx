import React from 'react';
import { useState } from 'react';
import DeleteUser from './DeleteUser';


export default function Users() {
    //dummy data 

    const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
    const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
    const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

    const handleDeleteUser = (deleteId) => {
        const newUsers = users.filter((i) => i.id !== deleteId);
        setUsers(newUsers);
      };
    

    const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: id, name: name, email: email };
    setUsers([...users, newUser]);
  };

//   function EmptyFields() {}
//   const handleSubmitChange = (e) => {
//     setUsers(e.target.value);
//   };

    const [users, setUsers] = useState([marlin, nemo, dory]);
    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [id, setID] = useState(" ");

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
                        onChange={(e) =>setName(e.target.value)}
                        />
                    
                    {/* Add more form fields here */}
                    <label>Email</label>
                    <input 
                    type="text"
                    id="add-user-email"
                    placeholder="Enter Email"
                    value={email} 
                    onChange={(e) =>setEmail(e.target.value)}
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
            <DeleteUser handleDeleteUser={handleDeleteUser}/>
            </div>
        </section>
    )
};
