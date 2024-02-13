"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Userss = () => {
     const [users, setUsers] = useState([]);
     useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
               .then(res => res.json())
               .then(data => setUsers(data))
     }, []);

     return (
          <div>
               <h1>Total Users: {users.length}</h1>

               {
                    users.map(user => <div key={user.id} className="card flex  bg-gray-400 shadow-xl">
                    <div className="card-body">
                         <h2 className="card-title">{user.name}</h2>
                         <p>User Name: {user.username}</p>
                         <p>Email :{user.email}</p>
                         <p>Street :{user.address.street}</p>
                         <p>Suite :{user.address.suite}</p>
                         <p>City :{user.address.city}</p>
                         <p>Zipcode: {user.address.zipcode}</p>
                         {/* <div className="card-actions justify-end">
                              <Link href={`/posts/${post.id}`}>
                                   <button className="btn btn-primary">See More</button>
                              </Link>
                         </div> */}
                    </div>
               </div>)
               }
          </div>
     );
};

export default Userss;