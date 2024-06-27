import React from 'react'
import './Admin.scss'
import { useGetUsersQuery , useDeleteUsersMutation } from '../../context/api/ProductApi'
const Admin = () => {

    const {data} = useGetUsersQuery()
    const [deleteUser] = useDeleteUsersMutation()

    let role =  JSON.parse(localStorage.getItem("user-data"))

    console.log(data);

    const handleDeleteUser = user =>{
      deleteUser(user)
    }

    const users = data?.data?.users?.map(user => (
       <div key={user.id} className='user__item'>
                 <span>
                    <h1>{user.id}</h1>
                    <h2>{user.FirstName}</h2>
                 </span>
                <h3>{user.LastName}</h3>
                <p>{user.phones[0]}</p>
                {
                  role?.role === "owner" ? 
                   <button onClick={() => handleDeleteUser(user)} >Delete</button> : 
                   <></>
                }
       </div>
    ))
    
  return (
    <>
        <div className="admin">
             <div className="container">
                 <h1>Admin Page</h1>
                 <div className="users">
                  <div className="users__title">
                     <span>
                      <p>User Id</p>
                      <p>Name</p>
                     </span>
                     <div className="w100">
                      <p>LastName</p>
                     </div>
                    <p>Tel</p>
                  </div>
                     {users}
                 </div>
             </div>
        </div>
    </>
  )
}

export default Admin