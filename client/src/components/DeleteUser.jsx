import React from 'react'
import { useState} from 'react';

export default function DeleteUser ({ handleDeleteUser } ) {
const [deleteID, setDeletedId] = useState("");

return (
    <div>
 <h3>Delete User</h3>
                <form id="delete-user" 
                action="#" 
                onSubmit={(ev) => {
                    ev.preventDefault();
                    handleDeleteUser(deleteID);
                    setDeletedId("");
                }}
                >
                    <fieldset>
                        <label>User ID</label>
                        <input 
                        type="text" 
                        id="delete-user-id"
                        placeholder="Enter ID"
                        value={deleteID}
                        onChange={(e) =>setDeletedId(e.target.value)}/>
                    </fieldset>
                    <input type="submit" />
                </form>
    </div>
  )
}

//<button onClick={() => deleteUser(deleteID)} />