"use client"
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
          </div>
     );
};

export default Userss;