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
    </div>
  )
}

export default AdminTable