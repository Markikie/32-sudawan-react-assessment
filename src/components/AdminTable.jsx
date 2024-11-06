import React from 'react'

const AdminTable = ({ users}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
        <tbody>
            {users.map(user =>(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.lastName}</td>
                    <td>{user.position}</td>
                    <td>
                        <button>
                            Edit
                        </button>
                        <button>
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </div>
  );
};


export default AdminTable